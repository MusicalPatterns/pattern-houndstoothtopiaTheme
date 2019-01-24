import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import { buildStandardScales, StandardSpecProperties } from '@musical-patterns/pattern'
import { apply, from, to, X_AXIS, Y_AXIS, Z_AXIS } from '@musical-patterns/utilities'
import { HoundstoothtopiaThemeSpec } from '../types'
import { buildScalars } from './scalars'

const buildScales: BuildScalesFunction =
    (spec: HoundstoothtopiaThemeSpec): Scale[] => {
        const { nonScale } = buildStandardScales()
        const {
            rootOfTwoScalars,
        } = buildScalars()

        const gainScale: Scale = nonScale
        const durationsScale: Scale = {
            offset: spec[ StandardSpecProperties.DURATION_OFFSET ],
            scalar: to.Scalar(from.Millisecond(spec[ StandardSpecProperties.BASE_DURATION ] || to.Millisecond(1))),
            scalars: rootOfTwoScalars,
        }
        const pitchesScale: Scale = {
            offset: spec[ StandardSpecProperties.FREQUENCY_OFFSET ],
            scalar: to.Scalar(from.Frequency(spec[ StandardSpecProperties.BASE_FREQUENCY ] || to.Frequency(1))),
            scalars: nonScale.scalars,
        }
        const xPositionsScale: Scale = {
            offset: apply.Index(spec.basePosition, X_AXIS),
            scalar: spec.basePositionScalar,
            scalars: nonScale.scalars,
        }
        const yPositionsScale: Scale = {
            offset: apply.Index(spec.basePosition, Y_AXIS),
            scalar: spec.basePositionScalar,
            scalars: nonScale.scalars,
        }
        const zPositionsScale: Scale = {
            offset: apply.Index(spec.basePosition, Z_AXIS),
            scalar: spec.basePositionScalar,
            scalars: nonScale.scalars,
        }

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
