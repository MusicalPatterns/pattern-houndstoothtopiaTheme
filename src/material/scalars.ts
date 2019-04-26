import { computeHarmonicSeriesScale, Scale } from '@musical-patterns/material'
import { as, DECREMENT, Duration,  Scalar, SQUARE_ROOT_OF_TWO, use } from '@musical-patterns/utilities'

const computeRootOfTwoScalars: () => Array<Scalar<Duration>> =
    (): Array<Scalar<Duration>> => {
        const harmonicSeriesScale: Scale = computeHarmonicSeriesScale()
        const harmonicSeriesScalars: Scalar[] = harmonicSeriesScale.scalars || []

        return harmonicSeriesScalars.map(
            (harmonicSeriesScalar: Scalar) => {
                const negativeHarmonicSeriesValue: number = as.number(use.Cardinal(harmonicSeriesScalar, DECREMENT))

                return as.Scalar<Duration>(use.Power(
                    SQUARE_ROOT_OF_TWO,
                    as.Power(negativeHarmonicSeriesValue),
                ))
            },
        )
    }

export {
    computeRootOfTwoScalars,
}
