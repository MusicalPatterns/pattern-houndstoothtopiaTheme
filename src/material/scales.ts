import { computeNonScale, MaterializeScales, materializeStandardScales, Scale } from '@musical-patterns/material'
import { STANDARD_BASE_POSITION, StandardSpec, StandardSpecs } from '@musical-patterns/spec'
import { as, Meters, Ordinal, Scalar, Translation, use, X_AXIS, Y_AXIS, Z_AXIS } from '@musical-patterns/utilities'
import { computeRootOfTwoScalars } from './scalars'

const computeScaleForDimension: (specs: StandardSpecs, index: Ordinal<Translation<Meters>>) => Scale<Meters> =
    (specs: StandardSpecs, index: Ordinal<Translation<Meters>>): Scale<Meters> => {
        const nonScale: Scale<Meters> = computeNonScale()
        const scalar: Scalar<Meters> = specs.basePositionScalar || as.Scalar<Meters>(1)
        const translation: Translation<Meters> = use.Ordinal(
            specs[ StandardSpec.BASE_POSITION ] || STANDARD_BASE_POSITION,
            index,
        )

        return { scalar, scalars: nonScale.scalars, translation }
    }

const materializeScales: MaterializeScales =
    // tslint:disable-next-line no-any
    (specs: StandardSpecs): Array<Scale<any>> => {
        // tslint:disable-next-line no-any
        const standardScales: Array<Scale<any>> =
            materializeStandardScales(specs, { durationScalars: computeRootOfTwoScalars() })

        const xPositionsScale: Scale<Meters> = computeScaleForDimension(specs, X_AXIS)
        const yPositionsScale: Scale<Meters> = computeScaleForDimension(specs, Y_AXIS)
        const zPositionsScale: Scale<Meters> = computeScaleForDimension(specs, Z_AXIS)

        return standardScales.concat([
            xPositionsScale,
            yPositionsScale,
            zPositionsScale,
        ])
    }

export {
    materializeScales,
}
