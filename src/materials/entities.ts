import { OscillatorName, SpatializationType, TimeType, VoiceType } from '@musical-patterns/performer'
import { Entity } from '../../../../src'
import { BuildEntitiesFunction } from '../../../types'
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
            voiceSpec: {
                spatialization: SpatializationType.IMMERSIVE,
                timbre: OscillatorName.SQUARE,
                voiceType: VoiceType.OSCILLATOR,
            },
        }
        const supertileRhythmHigherPitchEntity: Entity = {
            part: supertileRhythmHigherPitchPart,
            timeType: TimeType.RAW,
            voiceSpec: {
                spatialization: SpatializationType.IMMERSIVE,
                timbre: OscillatorName.SINE,
                voiceType: VoiceType.OSCILLATOR,
            },
        }
        const perimeterRhythmTopRightGrainEntity: Entity = {
            part: perimeterRhythmTopRightGrainPart,
            timeType: TimeType.RAW,
            voiceSpec: {
                spatialization: SpatializationType.IMMERSIVE,
                timbre: OscillatorName.TRIANGLE,
                voiceType: VoiceType.OSCILLATOR,
            },
        }
        const perimeterRhythmTopGrainEntity: Entity = {
            part: perimeterRhythmTopGrainPart,
            timeType: TimeType.RAW,
            voiceSpec: {
                spatialization: SpatializationType.IMMERSIVE,
                timbre: OscillatorName.TRIANGLE,
                voiceType: VoiceType.OSCILLATOR,
            },
        }
        const perimeterRhythmTopLeftGrainEntity: Entity = {
            part: perimeterRhythmTopLeftGrainPart,
            timeType: TimeType.RAW,
            voiceSpec: {
                spatialization: SpatializationType.IMMERSIVE,
                timbre: OscillatorName.TRIANGLE,
                voiceType: VoiceType.OSCILLATOR,
            },
        }
        const perimeterRhythmLeftGrainEntity: Entity = {
            part: perimeterRhythmLeftGrainPart,
            timeType: TimeType.RAW,
            voiceSpec: {
                spatialization: SpatializationType.IMMERSIVE,
                timbre: OscillatorName.TRIANGLE,
                voiceType: VoiceType.OSCILLATOR,
            },
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
