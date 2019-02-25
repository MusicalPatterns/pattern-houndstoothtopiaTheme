import { Scale } from '@musical-patterns/compiler'
import { buildHarmonicSeriesScale } from '@musical-patterns/pattern'
import { apply, from, negative, Scalar, SQUARE_ROOT_OF_TWO, to } from '@musical-patterns/utilities'

const buildRootOfTwoScalars: () => Scalar[] =
    (): Scalar[] => {
        const harmonicSeriesScale: Scale = buildHarmonicSeriesScale()
        const harmonicSeriesScalars: Scalar[] = harmonicSeriesScale.scalars || []

        return harmonicSeriesScalars.map(
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
    }

export {
    buildRootOfTwoScalars,
}
