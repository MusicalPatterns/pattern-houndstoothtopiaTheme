import { BuildScalesFunction, buildStandardScales, Scale, scaleFromScalarsAndScalar } from '../../../../src'
import { PatternSpec } from '../../../types'
import { buildScalars } from './scalars'

const buildScales: BuildScalesFunction =
    (patternSpec: PatternSpec): Scale[] => {
        const { flatDurationsScale } = buildStandardScales()
        const {
            rootOfThreeScalars,
            rootOfTwoScalars,
        } = buildScalars()

        const gainScale: Scale = flatDurationsScale
        const durationsScale: Scale = scaleFromScalarsAndScalar(
            rootOfTwoScalars,
            patternSpec.patternDurationScalar,
        )
        const pitchesScale: Scale = scaleFromScalarsAndScalar(
            rootOfThreeScalars,
            patternSpec.patternPitchScalar,
        )

        return [
            gainScale,
            durationsScale,
            pitchesScale,
        ]
    }

export {
    buildScales,
}
