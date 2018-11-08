import { DictionaryOf, Part } from '../../../../src'
import { buildContours } from '../custom'
import { buildNoteSpec } from './notes'

const buildParts: () => DictionaryOf<Part> =
    (): DictionaryOf<Part> => {
        const {
            supertileRhythmLowerPitchContour,
            supertileRhythmHigherPitchContour,
            perimeterRhythmTopRightGrainContour,
            perimeterRhythmTopGrainContour,
            perimeterRhythmTopLeftGrainContour,
            perimeterRhythmLeftGrainContour,
        } = buildContours()

        const supertileRhythmLowerPitchPart: Part = supertileRhythmLowerPitchContour.map(buildNoteSpec)
        const supertileRhythmHigherPitchPart: Part = supertileRhythmHigherPitchContour.map(buildNoteSpec)
        const perimeterRhythmTopRightGrainPart: Part = perimeterRhythmTopRightGrainContour.map(buildNoteSpec)
        const perimeterRhythmTopGrainPart: Part = perimeterRhythmTopGrainContour.map(buildNoteSpec)
        const perimeterRhythmTopLeftGrainPart: Part = perimeterRhythmTopLeftGrainContour.map(buildNoteSpec)
        const perimeterRhythmLeftGrainPart: Part = perimeterRhythmLeftGrainContour.map(buildNoteSpec)

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
