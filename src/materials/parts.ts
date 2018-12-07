import { NoteSpec } from '@musical-patterns/compiler'
import { DictionaryOf } from '@musical-patterns/utilities'
import { buildPerimeterNoteSpec, buildSupertileNoteSpec } from './notes'
import { buildContourWholes } from './wholes'

const buildParts: () => DictionaryOf<NoteSpec[]> =
    (): DictionaryOf<NoteSpec[]> => {
        const {
            supertileRhythmLowerPitchContourWhole,
            supertileRhythmHigherPitchContourWhole,
            perimeterRhythmTopRightGrainContourWhole,
            perimeterRhythmTopGrainContourWhole,
            perimeterRhythmTopLeftGrainContourWhole,
            perimeterRhythmLeftGrainContourWhole,
        } = buildContourWholes()

        const supertileRhythmLowerPitchPart: NoteSpec[] =
            supertileRhythmLowerPitchContourWhole.map(buildSupertileNoteSpec)
        const supertileRhythmHigherPitchPart: NoteSpec[] =
            supertileRhythmHigherPitchContourWhole.map(buildSupertileNoteSpec)
        const perimeterRhythmTopRightGrainPart: NoteSpec[] =
            perimeterRhythmTopRightGrainContourWhole.map(buildPerimeterNoteSpec)
        const perimeterRhythmTopGrainPart: NoteSpec[] =
            perimeterRhythmTopGrainContourWhole.map(buildPerimeterNoteSpec)
        const perimeterRhythmTopLeftGrainPart: NoteSpec[] =
            perimeterRhythmTopLeftGrainContourWhole.map(buildPerimeterNoteSpec)
        const perimeterRhythmLeftGrainPart: NoteSpec[] =
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
