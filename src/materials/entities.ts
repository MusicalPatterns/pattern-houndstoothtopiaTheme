import { OscillatorName, SpatializationType, VoiceType } from '@musical-patterns/performer'
import { Entity } from '../../../../compile'
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
            partSpec: supertileRhythmLowerPitchPart,
            voiceSpec: {
                spatialization: SpatializationType.IMMERSIVE,
                timbre: OscillatorName.SQUARE,
                voiceType: VoiceType.OSCILLATOR,
            },
        }
        const supertileRhythmHigherPitchEntity: Entity = {
            partSpec: supertileRhythmHigherPitchPart,
            voiceSpec: {
                spatialization: SpatializationType.IMMERSIVE,
                timbre: OscillatorName.SINE,
                voiceType: VoiceType.OSCILLATOR,
            },
        }
        const perimeterRhythmTopRightGrainEntity: Entity = {
            partSpec: perimeterRhythmTopRightGrainPart,
            voiceSpec: {
                spatialization: SpatializationType.IMMERSIVE,
                timbre: OscillatorName.TRIANGLE,
                voiceType: VoiceType.OSCILLATOR,
            },
        }
        const perimeterRhythmTopGrainEntity: Entity = {
            partSpec: perimeterRhythmTopGrainPart,
            voiceSpec: {
                spatialization: SpatializationType.IMMERSIVE,
                timbre: OscillatorName.TRIANGLE,
                voiceType: VoiceType.OSCILLATOR,
            },
        }
        const perimeterRhythmTopLeftGrainEntity: Entity = {
            partSpec: perimeterRhythmTopLeftGrainPart,
            voiceSpec: {
                spatialization: SpatializationType.IMMERSIVE,
                timbre: OscillatorName.TRIANGLE,
                voiceType: VoiceType.OSCILLATOR,
            },
        }
        const perimeterRhythmLeftGrainEntity: Entity = {
            partSpec: perimeterRhythmLeftGrainPart,
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
