import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import { buildStandardScales, StandardSpecProperties } from '@musical-patterns/pattern'
import { apply, X_AXIS, Y_AXIS, Z_AXIS } from '@musical-patterns/utilities'
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
            offset: spec[ StandardSpecProperties.PATTERN_DURATION_OFFSET ],
            scalar: spec[ StandardSpecProperties.PATTERN_DURATION_SCALAR ],
            scalars: rootOfTwoScalars,
        }
        const pitchesScale: Scale = {
            offset: spec[ StandardSpecProperties.PATTERN_PITCH_OFFSET ],
            scalar: spec[ StandardSpecProperties.PATTERN_PITCH_SCALAR ],
            scalars: nonScale.scalars,
        }
        const xPositionsScale: Scale = {
            offset: apply.Index(spec.patternPositionOffset, X_AXIS),
            scalar: spec.patternPositionScalar,
            scalars: nonScale.scalars,
        }
        const yPositionsScale: Scale = {
            offset: apply.Index(spec.patternPositionOffset, Y_AXIS),
            scalar: spec.patternPositionScalar,
            scalars: nonScale.scalars,
        }
        const zPositionsScale: Scale = {
            offset: apply.Index(spec.patternPositionOffset, Z_AXIS),
            scalar: spec.patternPositionScalar,
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
