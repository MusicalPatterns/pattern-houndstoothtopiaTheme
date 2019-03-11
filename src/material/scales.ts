import { MaterializeScales, Scale } from '@musical-patterns/compiler'
import { computeNonScale, materializeStandardScales, StandardProperty, StandardSpec } from '@musical-patterns/pattern'
import { apply, from, Ordinal, Scalar, to, Translation, X_AXIS, Y_AXIS, Z_AXIS } from '@musical-patterns/utilities'
import { computeRootOfTwoScalars } from './scalars'

const computeScaleForDimension: (spec: StandardSpec, nonScale: Scale, index: Ordinal) => Scale =
    (spec: StandardSpec, nonScale: Scale, index: Ordinal): Scale => {
        const scalar: Scalar = from.Meters(spec.basePositionScalar || to.Scalar(to.Meters(1)))
        const translation: Translation = from.Meters(apply.Ordinal(
            spec[ StandardProperty.BASE_POSITION ] || [ 0, 0, 0 ].map(to.Translation)
                .map(to.Meters),
            index,
        ))

        return { scalar, scalars: nonScale.scalars, translation }
    }

const materializeScales: MaterializeScales =
    (spec: StandardSpec): Scale[] => {
        const standardScales: Scale[] = materializeStandardScales(spec, { durationScalars: computeRootOfTwoScalars() })

        const nonScale: Scale = computeNonScale()
        const xPositionsScale: Scale = computeScaleForDimension(spec, nonScale, X_AXIS)
        const yPositionsScale: Scale = computeScaleForDimension(spec, nonScale, Y_AXIS)
        const zPositionsScale: Scale = computeScaleForDimension(spec, nonScale, Z_AXIS)

        return standardScales.concat([
            xPositionsScale,
            yPositionsScale,
            zPositionsScale,
        ])
    }

export {
    materializeScales,
}
