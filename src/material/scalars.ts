import { computeHarmonicSeriesScale, Scale } from '@musical-patterns/material'
import { as, DECREMENT, Scalar, SQUARE_ROOT_OF_TWO, use, Value } from '@musical-patterns/utilities'

const computeRootOfTwoScalars: () => Array<Scalar<Value>> =
    (): Array<Scalar<Value>> => {
        const harmonicSeriesScale: Scale = computeHarmonicSeriesScale()
        const harmonicSeriesScalars: Scalar[] = harmonicSeriesScale.scalars || []

        return harmonicSeriesScalars.map(
            (harmonicSeriesScalar: Scalar) => {
                const negativeHarmonicSeriesValue: number = as.number(use.Cardinal(harmonicSeriesScalar, DECREMENT))

                return as.Scalar<Value>(use.Power(
                    SQUARE_ROOT_OF_TWO,
                    as.Power(negativeHarmonicSeriesValue),
                ))
            },
        )
    }

export {
    computeRootOfTwoScalars,
}
