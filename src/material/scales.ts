import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import { buildStandardScales, StandardSpec, StandardSpecProperties } from '@musical-patterns/pattern'
import {
    apply,
    from,
    NO_TRANSLATION,
    Ordinal,
    Scalar,
    to,
    Translation,
    X_AXIS,
    Y_AXIS,
    Z_AXIS,
} from '@musical-patterns/utilities'
import { buildScalars } from './scalars'

const buildScaleForDimension: (spec: StandardSpec, nonScale: Scale, index: Ordinal) => Scale =
    (spec: StandardSpec, nonScale: Scale, index: Ordinal): Scale => {
        const scalar: Scalar = from.Meters(spec.basePositionScalar || to.Scalar(to.Meters(1)))
        const translation: Translation = from.Meters(apply.Ordinal(
            spec[ StandardSpecProperties.BASE_POSITION ] || [ 0, 0, 0 ].map(to.Translation)
                .map(to.Meters),
            index,
        ))

        return { scalar, scalars: nonScale.scalars, translation }
    }

const buildScales: BuildScalesFunction =
    (spec: StandardSpec): Scale[] => {
        const { nonScale } = buildStandardScales()
        const {
            rootOfTwoScalars,
        } = buildScalars()

        const gainScale: Scale = nonScale
        const durationScalar: Scalar =
            from.Ms(spec[ StandardSpecProperties.BASE_DURATION ] || to.Scalar(to.Ms(1)))
        const durationTranslation: Translation =
            from.Ms(spec[ StandardSpecProperties.DURATION_TRANSLATION ] || to.Ms(NO_TRANSLATION))
        const durationsScale: Scale = {
            scalar: durationScalar,
            scalars: rootOfTwoScalars,
            translation: durationTranslation,
        }
        const pitchesScalar: Scalar =
            from.Hz(spec[ StandardSpecProperties.BASE_FREQUENCY ] || to.Scalar(to.Hz(1)))
        const pitchesTranslation: Translation =
            from.Hz(spec[ StandardSpecProperties.FREQUENCY_TRANSLATION ] || to.Hz(NO_TRANSLATION))
        const pitchesScale: Scale = {
            scalar: pitchesScalar,
            scalars: nonScale.scalars,
            translation: pitchesTranslation,
        }
        const xPositionsScale: Scale = buildScaleForDimension(spec, nonScale, X_AXIS)
        const yPositionsScale: Scale = buildScaleForDimension(spec, nonScale, Y_AXIS)
        const zPositionsScale: Scale = buildScaleForDimension(spec, nonScale, Z_AXIS)

        return [
            gainScale,
            durationsScale,
            pitchesScale,
            xPositionsScale,
            yPositionsScale,
            zPositionsScale,
        ]
    }

export {
    buildScales,
}
