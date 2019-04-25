import { computeNonScale, MaterializeScales, materializeStandardScales, Scale } from '@musical-patterns/material'
import { StandardSpecs } from '@musical-patterns/spec'
import { as, Meters, Ordinal, Point, Scalar, use, X_AXIS, Y_AXIS, Z_AXIS } from '@musical-patterns/utilities'
import { computeRootOfTwoScalars } from './scalars'

const computeScaleForDimension: (specs: StandardSpecs, index: Ordinal<Array<Point<Meters>>>) => Scale<Point<Meters>> =
    (specs: StandardSpecs, index: Ordinal<Array<Point<Meters>>>): Scale<Point<Meters>> => {
        const nonScale: Scale<Point<Meters>> = computeNonScale()
        const scalar: Scalar<Point<Meters>> = specs.basePositionScalar || as.Scalar<Point<Meters>>(1)

        const basis: Point<Meters> = use.Scalar(
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

        const xPositionsScale: Scale<Point<Meters>> = computeScaleForDimension(specs, X_AXIS)
        const yPositionsScale: Scale<Point<Meters>> = computeScaleForDimension(specs, Y_AXIS)
        const zPositionsScale: Scale<Point<Meters>> = computeScaleForDimension(specs, Z_AXIS)

        return standardScales.concat([
            xPositionsScale,
            yPositionsScale,
            zPositionsScale,
        ])
    }

export {
    materializeScales,
}
