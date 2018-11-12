import { Block, ContourPiece, DictionaryOf, from, Index, to } from '../../../../src'
import { PITCH_SCALAR_INDICATING_REST } from '../constants'
import { buildPerimeterPitches, buildPerimeterRhythm, buildSupertileRhythm } from '../custom'
import { ContourElement } from '../nominal'
import { HIGHER_SUPERTILE_PITCH, LOWER_SUPERTILE_PITCH } from './constants'

const buildContourPieces: () => DictionaryOf<ContourPiece> =
    (): DictionaryOf<ContourPiece> => {
        const perimeterRhythm: Block = buildPerimeterRhythm()
        const supertileRhythm: Block = buildSupertileRhythm()
        const {
            perimeterRhythmLeftGrainPitches,
            perimeterRhythmTopGrainPitches,
            perimeterRhythmTopLeftGrainPitches,
            perimeterRhythmTopRightGrainPitches,
        } = buildPerimeterPitches()

        const perimeterRhythmLeftGrainContourPiece: ContourPiece = to.ContourPiece(perimeterRhythm.map(
            (duration: Index, index: number): ContourElement =>
                [ from.Scalar(perimeterRhythmLeftGrainPitches[ index ]), from.Index(duration) ],
        ))
        const perimeterRhythmTopGrainContourPiece: ContourPiece = to.ContourPiece(perimeterRhythm.map(
            (duration: Index, index: number): ContourElement =>
                [ from.Scalar(perimeterRhythmTopGrainPitches[ index ]), from.Index(duration) ],
        ))
        const perimeterRhythmTopLeftGrainContourPiece: ContourPiece = to.ContourPiece(perimeterRhythm.map(
            (duration: Index, index: number): ContourElement =>
                [ from.Scalar(perimeterRhythmTopLeftGrainPitches[ index ]), from.Index(duration) ],
        ))
        const perimeterRhythmTopRightGrainContourPiece: ContourPiece = to.ContourPiece(perimeterRhythm.map(
            (duration: Index, index: number): ContourElement =>
                [ from.Scalar(perimeterRhythmTopRightGrainPitches[ index ]), from.Index(duration) ],
        ))
        const supertileRhythmHigherPitchContourPiece: ContourPiece = to.ContourPiece(supertileRhythm.map(
            (duration: Index): ContourElement =>
                [ from.Scalar(HIGHER_SUPERTILE_PITCH), from.Index(duration) ],
        ))
        const supertileRhythmLowerPitchContourPiece: ContourPiece = to.ContourPiece(supertileRhythm.map(
            (duration: Index): ContourElement =>
                [ from.Scalar(LOWER_SUPERTILE_PITCH), from.Index(duration) ],
        ))

        const perimeterRestContourPiece: ContourPiece = to.ContourPiece(perimeterRhythm.map(
            (duration: Index): ContourElement =>
                [ from.Scalar(PITCH_SCALAR_INDICATING_REST), from.Index(duration) ],
        ))
        const supertileRestContourPiece: ContourPiece = to.ContourPiece(supertileRhythm.map(
            (duration: Index): ContourElement =>
                [ from.Scalar(PITCH_SCALAR_INDICATING_REST), from.Index(duration) ],
        ))

        return {
            perimeterRestContourPiece,
            perimeterRhythmLeftGrainContourPiece,
            perimeterRhythmTopGrainContourPiece,
            perimeterRhythmTopLeftGrainContourPiece,
            perimeterRhythmTopRightGrainContourPiece,
            supertileRestContourPiece,
            supertileRhythmHigherPitchContourPiece,
            supertileRhythmLowerPitchContourPiece,
        }
    }

export {
    buildContourPieces,
}
