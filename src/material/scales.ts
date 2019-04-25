import { computeNonScale, MaterializeScales, materializeStandardScales, Scale } from '@musical-patterns/material'
import { StandardSpecs } from '@musical-patterns/spec'
import { as, Meters, Ordinal, Position, Scalar, use, X_AXIS, Y_AXIS, Z_AXIS } from '@musical-patterns/utilities'
import { computeRootOfTwoScalars } from './scalars'

const computeScaleForDimension: (specs: StandardSpecs, index: Ordinal<Position[]>) => Scale<Position> =
    (specs: StandardSpecs, index: Ordinal<Position[]>): Scale<Position> => {
        const nonScale: Scale<Position> = computeNonScale()
        const scalar: Scalar<Position> = specs.basePositionScalar || as.Scalar<Position>(1)

        const basis: Position = use.Scalar(
            use.Ordinal(
                [ 1, 1, 1 ].map((dimension: number) => as.Point<Meters>(dimension)),
                index,
            ),
            scalar,
        )

        return { scalars: nonScale.scalars, basis }
    }

const materializeScales: MaterializeScales =
    // tslint:disable-next-line no-any
    (specs: StandardSpecs): Array<Scale<any>> => {
        // tslint:disable-next-line no-any
        const standardScales: Array<Scale<any>> =
            materializeStandardScales(specs, { durationScalars: computeRootOfTwoScalars() })

        const xPositionsScale: Scale<Position> = computeScaleForDimension(specs, X_AXIS)
        const yPositionsScale: Scale<Position> = computeScaleForDimension(specs, Y_AXIS)
        const zPositionsScale: Scale<Position> = computeScaleForDimension(specs, Z_AXIS)

        return standardScales.concat([
            xPositionsScale,
            yPositionsScale,
            zPositionsScale,
        ])
    }

export {
    materializeScales,
}
