import { DictionaryOf, PartSpec } from '@musical-patterns/utilities'
import { buildPerimeterNoteSpec, buildSupertileNoteSpec } from './notes'
import { buildContourWholes } from './wholes'

const buildParts: () => DictionaryOf<PartSpec> =
    (): DictionaryOf<PartSpec> => {
        const {
            supertileRhythmLowerPitchContourWhole,
            supertileRhythmHigherPitchContourWhole,
            perimeterRhythmTopRightGrainContourWhole,
            perimeterRhythmTopGrainContourWhole,
            perimeterRhythmTopLeftGrainContourWhole,
            perimeterRhythmLeftGrainContourWhole,
        } = buildContourWholes()

        const supertileRhythmLowerPitchPart: PartSpec =
            supertileRhythmLowerPitchContourWhole.map(buildSupertileNoteSpec)
        const supertileRhythmHigherPitchPart: PartSpec =
            supertileRhythmHigherPitchContourWhole.map(buildSupertileNoteSpec)
        const perimeterRhythmTopRightGrainPart: PartSpec =
            perimeterRhythmTopRightGrainContourWhole.map(buildPerimeterNoteSpec)
        const perimeterRhythmTopGrainPart: PartSpec =
            perimeterRhythmTopGrainContourWhole.map(buildPerimeterNoteSpec)
        const perimeterRhythmTopLeftGrainPart: PartSpec =
            perimeterRhythmTopLeftGrainContourWhole.map(buildPerimeterNoteSpec)
        const perimeterRhythmLeftGrainPart: PartSpec =
            perimeterRhythmLeftGrainContourWhole.map(buildPerimeterNoteSpec)

        return {
            perimeterRhythmLeftGrainPart,
            perimeterRhythmTopGrainPart,
            perimeterRhythmTopLeftGrainPart,
            perimeterRhythmTopRightGrainPart,
            supertileRhythmHigherPitchPart,
            supertileRhythmLowerPitchPart,
        }
    }

export {
    buildParts,
}
