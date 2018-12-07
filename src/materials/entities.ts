import { BuildEntitiesFunction, Entity, TimbreName } from '@musical-patterns/compiler'
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
            timbreName: TimbreName.SQUARE,
        }
        const supertileRhythmHigherPitchEntity: Entity = {
            noteSpecs: supertileRhythmHigherPitchPart,
            timbreName: TimbreName.SINE,
        }
        const perimeterRhythmTopRightGrainEntity: Entity = {
            noteSpecs: perimeterRhythmTopRightGrainPart,
            timbreName: TimbreName.TRIANGLE,
        }
        const perimeterRhythmTopGrainEntity: Entity = {
            noteSpecs: perimeterRhythmTopGrainPart,
            timbreName: TimbreName.TRIANGLE,
        }
        const perimeterRhythmTopLeftGrainEntity: Entity = {
            noteSpecs: perimeterRhythmTopLeftGrainPart,
            timbreName: TimbreName.TRIANGLE,
        }
        const perimeterRhythmLeftGrainEntity: Entity = {
            noteSpecs: perimeterRhythmLeftGrainPart,
            timbreName: TimbreName.TRIANGLE,
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
