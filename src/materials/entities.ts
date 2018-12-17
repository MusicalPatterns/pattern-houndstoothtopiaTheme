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
            timbreName: TimbreNameEnum.SQUARE,
        }
        const supertileRhythmHigherPitchEntity: Entity = {
            noteSpecs: supertileRhythmHigherPitchPart,
            timbreName: TimbreNameEnum.SINE,
        }
        const perimeterRhythmTopRightGrainEntity: Entity = {
            noteSpecs: perimeterRhythmTopRightGrainPart,
            timbreName: TimbreNameEnum.TRIANGLE,
        }
        const perimeterRhythmTopGrainEntity: Entity = {
            noteSpecs: perimeterRhythmTopGrainPart,
            timbreName: TimbreNameEnum.TRIANGLE,
        }
        const perimeterRhythmTopLeftGrainEntity: Entity = {
            noteSpecs: perimeterRhythmTopLeftGrainPart,
            timbreName: TimbreNameEnum.TRIANGLE,
        }
        const perimeterRhythmLeftGrainEntity: Entity = {
            noteSpecs: perimeterRhythmLeftGrainPart,
            timbreName: TimbreNameEnum.TRIANGLE,
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
