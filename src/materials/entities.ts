import { OscillatorName, SpatializationType, VoiceType } from '@musical-patterns/performer'
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
            voiceSpec: {
                spatialization: SpatializationType.IMMERSIVE,
                timbre: OscillatorName.SQUARE,
                voiceType: VoiceType.OSCILLATOR,
            },
        }
        const supertileRhythmHigherPitchEntity: Entity = {
            part: supertileRhythmHigherPitchPart,
            voiceSpec: {
                spatialization: SpatializationType.IMMERSIVE,
                timbre: OscillatorName.SINE,
                voiceType: VoiceType.OSCILLATOR,
            },
        }
        const perimeterRhythmTopRightGrainEntity: Entity = {
            part: perimeterRhythmTopRightGrainPart,
            voiceSpec: {
                spatialization: SpatializationType.IMMERSIVE,
                timbre: OscillatorName.TRIANGLE,
                voiceType: VoiceType.OSCILLATOR,
            },
        }
        const perimeterRhythmTopGrainEntity: Entity = {
            part: perimeterRhythmTopGrainPart,
            voiceSpec: {
                spatialization: SpatializationType.IMMERSIVE,
                timbre: OscillatorName.TRIANGLE,
                voiceType: VoiceType.OSCILLATOR,
            },
        }
        const perimeterRhythmTopLeftGrainEntity: Entity = {
            part: perimeterRhythmTopLeftGrainPart,
            voiceSpec: {
                spatialization: SpatializationType.IMMERSIVE,
                timbre: OscillatorName.TRIANGLE,
                voiceType: VoiceType.OSCILLATOR,
            },
        }
        const perimeterRhythmLeftGrainEntity: Entity = {
            part: perimeterRhythmLeftGrainPart,
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
