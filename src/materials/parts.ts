import { DictionaryOf, PartSpec } from '../../../../src'
import { buildNoteSpec } from './notes'
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

        const supertileRhythmLowerPitchPart: PartSpec = supertileRhythmLowerPitchContourWhole.map(buildNoteSpec)
        const supertileRhythmHigherPitchPart: PartSpec = supertileRhythmHigherPitchContourWhole.map(buildNoteSpec)
        const perimeterRhythmTopRightGrainPart: PartSpec = perimeterRhythmTopRightGrainContourWhole.map(buildNoteSpec)
        const perimeterRhythmTopGrainPart: PartSpec = perimeterRhythmTopGrainContourWhole.map(buildNoteSpec)
        const perimeterRhythmTopLeftGrainPart: PartSpec = perimeterRhythmTopLeftGrainContourWhole.map(buildNoteSpec)
        const perimeterRhythmLeftGrainPart: PartSpec = perimeterRhythmLeftGrainContourWhole.map(buildNoteSpec)

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
