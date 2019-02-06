import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import { buildStandardScales, StandardSpec, StandardSpecProperties } from '@musical-patterns/pattern'
import { apply, from, Ordinal, to, X_AXIS, Y_AXIS, Z_AXIS } from '@musical-patterns/utilities'
import { buildScalars } from './scalars'

const buildScaleForDimension: (spec: StandardSpec, nonScale: Scale, index: Ordinal) => Scale =
    (spec: StandardSpec, nonScale: Scale, index: Ordinal): Scale => ({
        scalar: spec.basePositionScalar,
        scalars: nonScale.scalars,
        translation: apply.Ordinal(
            spec[ StandardSpecProperties.BASE_POSITION ] || [ 0, 0, 0 ].map(to.Translation),
            index,
        ),
    })

const buildScales: BuildScalesFunction =
    (spec: StandardSpec): Scale[] => {
        const { nonScale } = buildStandardScales()
        const {
            rootOfTwoScalars,
        } = buildScalars()

        const gainScale: Scale = nonScale
        const durationsScale: Scale = {
            scalar: to.Scalar(from.Milliseconds(spec[ StandardSpecProperties.BASE_DURATION ] || to.Milliseconds(1))),
            scalars: rootOfTwoScalars,
            translation: spec[ StandardSpecProperties.DURATION_TRANSLATION ],
        }
        const pitchesScale: Scale = {
            scalar: to.Scalar(from.Frequency(spec[ StandardSpecProperties.BASE_FREQUENCY ] || to.Frequency(1))),
            scalars: nonScale.scalars,
            translation: spec[ StandardSpecProperties.FREQUENCY_TRANSLATION ],
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
