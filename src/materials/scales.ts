import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import { buildStandardScales, PatternSpec, scaleFromScalarsAndScalar } from '@musical-patterns/pattern'
import { buildScalars } from './scalars'

const buildScales: BuildScalesFunction =
    (patternSpec: PatternSpec): Scale[] => {
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

        return [
            gainScale,
            durationsScale,
            pitchesScale,
        ]
    }

export {
    buildScales,
}
