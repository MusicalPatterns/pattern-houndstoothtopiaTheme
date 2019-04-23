import { computeHarmonicSeriesScale, Scale } from '@musical-patterns/material'
import { as, DECREMENT, Ms, notAs, Scalar, SQUARE_ROOT_OF_TWO, use } from '@musical-patterns/utilities'

const computeRootOfTwoScalars: () => Array<Scalar<Ms>> =
    (): Array<Scalar<Ms>> => {
        const harmonicSeriesScale: Scale = computeHarmonicSeriesScale()
        const harmonicSeriesScalars: Scalar[] = harmonicSeriesScale.scalars || []

        return harmonicSeriesScalars.map(
            (harmonicSeriesScalar: Scalar) => {
                const negativeHarmonicSeriesValue: number = notAs.Scalar(use.Cardinal(harmonicSeriesScalar, DECREMENT))

                return as.Scalar<Ms>(use.Power(
                    SQUARE_ROOT_OF_TWO,
                    as.Power(negativeHarmonicSeriesValue),
                ))
            },
        )
    }

export {
    computeRootOfTwoScalars,
}
