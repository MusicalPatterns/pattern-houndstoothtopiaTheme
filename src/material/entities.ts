import { BuildEntitiesFunction, Entity, TimbreNameEnum } from '@musical-patterns/compiler'
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
            noteSpecs: supertileRhythmLowerPitchPart,
            timbreName: TimbreNameEnum.BASS,
        }
        const supertileRhythmHigherPitchEntity: Entity = {
            noteSpecs: supertileRhythmHigherPitchPart,
            timbreName: TimbreNameEnum.DYNA_EP_BRIGHT,
        }
        const perimeterRhythmTopRightGrainEntity: Entity = {
            noteSpecs: perimeterRhythmTopRightGrainPart,
            timbreName: TimbreNameEnum.WARM_TRIANGLE,
        }
        const perimeterRhythmTopGrainEntity: Entity = {
            noteSpecs: perimeterRhythmTopGrainPart,
            timbreName: TimbreNameEnum.BRASS,
        }
        const perimeterRhythmTopLeftGrainEntity: Entity = {
            noteSpecs: perimeterRhythmTopLeftGrainPart,
            timbreName: TimbreNameEnum.PHONEME_OOH,
        }
        const perimeterRhythmLeftGrainEntity: Entity = {
            noteSpecs: perimeterRhythmLeftGrainPart,
            timbreName: TimbreNameEnum.TWELVE_OP_TINES,
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
