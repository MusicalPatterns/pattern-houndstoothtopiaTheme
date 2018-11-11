import { ContourWhole, DictionaryOf, sequence, to } from '../../../../src'
import { buildContourPieces } from './pieces'

const buildContourWholes: () => DictionaryOf<ContourWhole> =
    (): DictionaryOf<ContourWhole> => {
        const {
            perimeterRhythmLeftGrainContourPiece,
            perimeterRhythmTopGrainContourPiece,
            perimeterRhythmTopLeftGrainContourPiece,
            perimeterRhythmTopRightGrainContourPiece,
            supertileRhythmHigherPitchContourPiece,
            supertileRhythmLowerPitchContourPiece,
            perimeterRestContourPiece,
        } = buildContourPieces()

        return {
            perimeterRhythmLeftGrainContourWhole: to.ContourWhole(sequence([
                perimeterRestContourPiece,
                perimeterRhythmLeftGrainContourPiece,
                perimeterRestContourPiece,
                perimeterRestContourPiece,
                perimeterRestContourPiece,
                perimeterRhythmLeftGrainContourPiece,
                perimeterRestContourPiece,
                perimeterRestContourPiece,
                perimeterRhythmLeftGrainContourPiece,
                perimeterRestContourPiece,
                perimeterRestContourPiece,
                perimeterRhythmLeftGrainContourPiece,
            ])),
            perimeterRhythmTopGrainContourWhole: to.ContourWhole(sequence([
                perimeterRestContourPiece,
                perimeterRestContourPiece,
                perimeterRhythmTopGrainContourPiece,
                perimeterRestContourPiece,
                perimeterRhythmTopGrainContourPiece,
                perimeterRestContourPiece,
                perimeterRestContourPiece,
                perimeterRestContourPiece,
                perimeterRhythmTopGrainContourPiece,
                perimeterRestContourPiece,
                perimeterRestContourPiece,
                perimeterRhythmTopGrainContourPiece,
            ])),
            perimeterRhythmTopLeftGrainContourWhole: to.ContourWhole(sequence([
                perimeterRestContourPiece,
                perimeterRestContourPiece,
                perimeterRhythmTopLeftGrainContourPiece,
                perimeterRestContourPiece,
                perimeterRestContourPiece,
                perimeterRhythmTopLeftGrainContourPiece,
                perimeterRestContourPiece,
                perimeterRhythmTopLeftGrainContourPiece,
                perimeterRestContourPiece,
                perimeterRestContourPiece,
                perimeterRestContourPiece,
                perimeterRhythmTopLeftGrainContourPiece,
            ])),
            perimeterRhythmTopRightGrainContourWhole: to.ContourWhole(sequence([
                perimeterRestContourPiece,
                perimeterRestContourPiece,
                perimeterRhythmTopRightGrainContourPiece,
                perimeterRestContourPiece,
                perimeterRestContourPiece,
                perimeterRhythmTopRightGrainContourPiece,
                perimeterRestContourPiece,
                perimeterRestContourPiece,
                perimeterRhythmTopRightGrainContourPiece,
                perimeterRestContourPiece,
                perimeterRhythmTopRightGrainContourPiece,
                perimeterRestContourPiece,
            ])),
            supertileRhythmHigherPitchContourWhole: to.ContourWhole(sequence([
                supertileRhythmHigherPitchContourPiece,
            ])),
            supertileRhythmLowerPitchContourWhole: to.ContourWhole(sequence([
                supertileRhythmLowerPitchContourPiece,
            ])),
        }
    }

export {
    buildContourWholes,
}
