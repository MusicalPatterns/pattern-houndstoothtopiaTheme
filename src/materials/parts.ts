import { DictionaryOf, Part } from '../../../../src'
import { buildNoteSpec } from './notes'
import { buildContourWholes } from './wholes'

const buildParts: () => DictionaryOf<Part> =
    (): DictionaryOf<Part> => {
        const {
            supertileRhythmLowerPitchContourWhole,
            supertileRhythmHigherPitchContourWhole,
            perimeterRhythmTopRightGrainContourWhole,
            perimeterRhythmTopGrainContourWhole,
            perimeterRhythmTopLeftGrainContourWhole,
            perimeterRhythmLeftGrainContourWhole,
        } = buildContourWholes()

        const supertileRhythmLowerPitchPart: Part = supertileRhythmLowerPitchContourWhole.map(buildNoteSpec)
        const supertileRhythmHigherPitchPart: Part = supertileRhythmHigherPitchContourWhole.map(buildNoteSpec)
        const perimeterRhythmTopRightGrainPart: Part = perimeterRhythmTopRightGrainContourWhole.map(buildNoteSpec)
        const perimeterRhythmTopGrainPart: Part = perimeterRhythmTopGrainContourWhole.map(buildNoteSpec)
        const perimeterRhythmTopLeftGrainPart: Part = perimeterRhythmTopLeftGrainContourWhole.map(buildNoteSpec)
        const perimeterRhythmLeftGrainPart: Part = perimeterRhythmLeftGrainContourWhole.map(buildNoteSpec)

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
