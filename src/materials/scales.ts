import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import { buildStandardScales, StandardPatternSpecProperties } from '@musical-patterns/pattern'
import { apply, X_AXIS, Y_AXIS, Z_AXIS } from '@musical-patterns/utilities'
import { HoundstoothtopiaThemePatternSpec } from '../types'
import { buildScalars } from './scalars'

const buildScales: BuildScalesFunction =
    (patternSpec: HoundstoothtopiaThemePatternSpec): Scale[] => {
        const { nonScale } = buildStandardScales()
        const {
            rootOfTwoScalars,
        } = buildScalars()

        const gainScale: Scale = nonScale
        const durationsScale: Scale = {
            offset: patternSpec[ StandardPatternSpecProperties.PATTERN_DURATION_OFFSET ],
            scalar: patternSpec[ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ],
            scalars: rootOfTwoScalars,
        }
        const pitchesScale: Scale = {
            offset: patternSpec[ StandardPatternSpecProperties.PATTERN_PITCH_OFFSET ],
            scalar: patternSpec[ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ],
            scalars: nonScale.scalars,
        }
        const xPositionsScale: Scale = {
            offset: apply.Index(patternSpec.patternPositionOffset, X_AXIS),
            scalar: patternSpec.patternPositionScalar,
            scalars: nonScale.scalars,
        }
        const yPositionsScale: Scale = {
            offset: apply.Index(patternSpec.patternPositionOffset, Y_AXIS),
            scalar: patternSpec.patternPositionScalar,
            scalars: nonScale.scalars,
        }
        const zPositionsScale: Scale = {
            offset: apply.Index(patternSpec.patternPositionOffset, Z_AXIS),
            scalar: patternSpec.patternPositionScalar,
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
