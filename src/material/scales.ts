import { MaterializeScales, Scale } from '@musical-patterns/compiler'
import { computeNonScale, materializeStandardScales, StandardSpec, StandardSpecs } from '@musical-patterns/pattern'
import { apply, from, Ordinal, Scalar, to, Translation, X_AXIS, Y_AXIS, Z_AXIS } from '@musical-patterns/utilities'
import { computeRootOfTwoScalars } from './scalars'

const computeScaleForDimension: (specs: StandardSpecs, nonScale: Scale, index: Ordinal) => Scale =
    (specs: StandardSpecs, nonScale: Scale, index: Ordinal): Scale => {
        const scalar: Scalar = from.Meters(specs.basePositionScalar || to.Scalar(to.Meters(1)))
        const translation: Translation = from.Meters(apply.Ordinal(
            specs[ StandardSpec.BASE_POSITION ] || [ 0, 0, 0 ].map(to.Translation)
                .map(to.Meters),
            index,
        ))

        return { scalar, scalars: nonScale.scalars, translation }
    }

const materializeScales: MaterializeScales =
    (specs: StandardSpecs): Scale[] => {
        const standardScales: Scale[] = materializeStandardScales(specs, { durationScalars: computeRootOfTwoScalars() })

        const nonScale: Scale = computeNonScale()
        const xPositionsScale: Scale = computeScaleForDimension(specs, nonScale, X_AXIS)
        const yPositionsScale: Scale = computeScaleForDimension(specs, nonScale, Y_AXIS)
        const zPositionsScale: Scale = computeScaleForDimension(specs, nonScale, Z_AXIS)

        return standardScales.concat([
            xPositionsScale,
            yPositionsScale,
            zPositionsScale,
        ])
    }

export {
    materializeScales,
}
