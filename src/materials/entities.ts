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
            partSpec: supertileRhythmLowerPitchPart,
            timbreName: TimbreName.SQUARE,
        }
        const supertileRhythmHigherPitchEntity: Entity = {
            partSpec: supertileRhythmHigherPitchPart,
            timbreName: TimbreName.SINE,
        }
        const perimeterRhythmTopRightGrainEntity: Entity = {
            partSpec: perimeterRhythmTopRightGrainPart,
            timbreName: TimbreName.TRIANGLE,
        }
        const perimeterRhythmTopGrainEntity: Entity = {
            partSpec: perimeterRhythmTopGrainPart,
            timbreName: TimbreName.TRIANGLE,
        }
        const perimeterRhythmTopLeftGrainEntity: Entity = {
            partSpec: perimeterRhythmTopLeftGrainPart,
            timbreName: TimbreName.TRIANGLE,
        }
        const perimeterRhythmLeftGrainEntity: Entity = {
            partSpec: perimeterRhythmLeftGrainPart,
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
