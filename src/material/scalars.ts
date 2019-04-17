import { computeHarmonicSeriesScale, Scale } from '@musical-patterns/material'
import { apply, from, Ms, negative, Scalar, SQUARE_ROOT_OF_TWO, to } from '@musical-patterns/utilities'

const computeRootOfTwoScalars: () => Array<Scalar<Ms>> =
    (): Array<Scalar<Ms>> => {
        const harmonicSeriesScale: Scale = computeHarmonicSeriesScale()
        const harmonicSeriesScalars: Scalar[] = harmonicSeriesScale.scalars || []

        return harmonicSeriesScalars.map(
            (harmonicSeriesScalar: Scalar) => {
                const negativeHarmonicSeriesValue: number = from.Scalar(apply.Translation(
                    harmonicSeriesScalar,
                    to.Translation<Scalar>(negative(1)),
                ))

                return to.Scalar<Ms>(apply.Power(
                    SQUARE_ROOT_OF_TWO,
                    to.Power(negativeHarmonicSeriesValue),
                ))
            },
        )
    }

export {
    computeRootOfTwoScalars,
}
