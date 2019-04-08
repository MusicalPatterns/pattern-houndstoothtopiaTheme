import { Scale } from '@musical-patterns/material'
import { computeHarmonicSeriesScale } from '@musical-patterns/pattern'
import { apply, from, negative, Scalar, SQUARE_ROOT_OF_TWO, to } from '@musical-patterns/utilities'

const computeRootOfTwoScalars: () => Scalar[] =
    (): Scalar[] => {
        const harmonicSeriesScale: Scale = computeHarmonicSeriesScale()
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
    computeRootOfTwoScalars,
}
