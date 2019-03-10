import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import { buildNonScale, buildStandardScales, StandardProperty, StandardSpec } from '@musical-patterns/pattern'
import { apply, from, Ordinal, Scalar, to, Translation, X_AXIS, Y_AXIS, Z_AXIS } from '@musical-patterns/utilities'
import { buildRootOfTwoScalars } from './scalars'

const buildScaleForDimension: (spec: StandardSpec, nonScale: Scale, index: Ordinal) => Scale =
    (spec: StandardSpec, nonScale: Scale, index: Ordinal): Scale => {
        const scalar: Scalar = from.Meters(spec.basePositionScalar || to.Scalar(to.Meters(1)))
        const translation: Translation = from.Meters(apply.Ordinal(
            spec[ StandardProperty.BASE_POSITION ] || [ 0, 0, 0 ].map(to.Translation)
                .map(to.Meters),
            index,
        ))

        return { scalar, scalars: nonScale.scalars, translation }
    }

const buildScales: BuildScalesFunction =
    (spec: StandardSpec): Scale[] => {
        const standardScales: Scale[] = buildStandardScales(spec, { durationScalars: buildRootOfTwoScalars() })

        const nonScale: Scale = buildNonScale()
        const xPositionsScale: Scale = buildScaleForDimension(spec, nonScale, X_AXIS)
        const yPositionsScale: Scale = buildScaleForDimension(spec, nonScale, Y_AXIS)
        const zPositionsScale: Scale = buildScaleForDimension(spec, nonScale, Z_AXIS)

        return standardScales.concat([
            xPositionsScale,
            yPositionsScale,
            zPositionsScale,
        ])
    }

export {
    buildScales,
}
