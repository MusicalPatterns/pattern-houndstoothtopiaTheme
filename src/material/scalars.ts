import { buildStandardScales } from '@musical-patterns/pattern'
import { apply, DictionaryOf, from, negative, Scalar, SQUARE_ROOT_OF_TWO, to } from '@musical-patterns/utilities'

const buildScalars: () => DictionaryOf<Scalar[]> =
    (): DictionaryOf<Scalar[]> => {
        const { harmonicSeriesScale } = buildStandardScales()

        const harmonicSeriesScalars: Scalar[] = harmonicSeriesScale.scalars || []
        const rootOfTwoScalars: Scalar[] = harmonicSeriesScalars.map(
            (harmonicSeriesScalar: Scalar): Scalar => {
                const negativeHarmonicSeriesValue: number = from.Scalar(apply.Translation(
                    harmonicSeriesScalar,
                    to.Translation(negative(1)),
                ))

                return to.Scalar(apply.Power(
                    SQUARE_ROOT_OF_TWO,
                    to.Power(negativeHarmonicSeriesValue),
                ))
            },
        )

        return {
            rootOfTwoScalars,
        }
    }

export {
    buildScalars,
}
