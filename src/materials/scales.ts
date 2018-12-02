import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import { buildStandardScales, scaleFromScalarsAndScalar } from '@musical-patterns/pattern'
import { apply, X_AXIS, Y_AXIS, Z_AXIS } from '@musical-patterns/utilities'
import { buildScalars } from './scalars'
import { HoundstoothtopiaThemePatternSpec } from './types'

const buildScales: BuildScalesFunction =
    (patternSpec: HoundstoothtopiaThemePatternSpec): Scale[] => {
        const { nonScale } = buildStandardScales()
        const {
            rootOfTwoScalars,
        } = buildScalars()

        const gainScale: Scale = nonScale
        const durationsScale: Scale = scaleFromScalarsAndScalar(
            rootOfTwoScalars,
            patternSpec.patternDurationScalar,
        )
        const pitchesScale: Scale = scaleFromScalarsAndScalar(
            nonScale.scalars,
            patternSpec.patternPitchScalar,
        )
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
