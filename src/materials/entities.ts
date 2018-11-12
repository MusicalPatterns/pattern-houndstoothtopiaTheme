import { BuildEntitiesFunction, Entity, OscillatorName, TimeType, VoiceType } from '../../../../src'
import { buildParts } from './parts'

const buildEntities: BuildEntitiesFunction =
    (): Entity[] => {
        const {
            supertileRhythmLowerPitchPart,
            supertileRhythmHigherPitchPart,
            perimeterRhythmTopRightGrainPart,
            perimeterRhythmTopGrainPart,
            perimeterRhythmTopLeftGrainPart,
            perimeterRhythmLeftGrainPart,
        } = buildParts()

        const supertileRhythmLowerPitchEntity: Entity = {
            part: supertileRhythmLowerPitchPart,
            timeType: TimeType.RAW,
            voiceSpec: { voiceType: VoiceType.OSCILLATOR, timbre: OscillatorName.SQUARE },
        }
        const supertileRhythmHigherPitchEntity: Entity = {
            part: supertileRhythmHigherPitchPart,
            timeType: TimeType.RAW,
            voiceSpec: { voiceType: VoiceType.OSCILLATOR, timbre: OscillatorName.SINE },
        }
        const perimeterRhythmTopRightGrainEntity: Entity = {
            part: perimeterRhythmTopRightGrainPart,
            timeType: TimeType.RAW,
            voiceSpec: { voiceType: VoiceType.OSCILLATOR, timbre: OscillatorName.TRIANGLE },
        }
        const perimeterRhythmTopGrainEntity: Entity = {
            part: perimeterRhythmTopGrainPart,
            timeType: TimeType.RAW,
            voiceSpec: { voiceType: VoiceType.OSCILLATOR, timbre: OscillatorName.TRIANGLE },
        }
        const perimeterRhythmTopLeftGrainEntity: Entity = {
            part: perimeterRhythmTopLeftGrainPart,
            timeType: TimeType.RAW,
            voiceSpec: { voiceType: VoiceType.OSCILLATOR, timbre: OscillatorName.TRIANGLE },
        }
        const perimeterRhythmLeftGrainEntity: Entity = {
            part: perimeterRhythmLeftGrainPart,
            timeType: TimeType.RAW,
            voiceSpec: { voiceType: VoiceType.OSCILLATOR, timbre: OscillatorName.TRIANGLE },
        }

        return [
            supertileRhythmLowerPitchEntity,
            supertileRhythmHigherPitchEntity,
            perimeterRhythmTopRightGrainEntity,
            perimeterRhythmTopGrainEntity,
            perimeterRhythmTopLeftGrainEntity,
            perimeterRhythmLeftGrainEntity,
        ]
    }

export {
    buildEntities,
}
