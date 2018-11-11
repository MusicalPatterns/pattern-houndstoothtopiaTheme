import { ContourPiece, DictionaryOf, Index, to } from '../../../../src'
import { PITCH_INDEX_INDICATING_REST } from '../constants'
import { ContourElement } from '../nominal'
import { buildBlocks } from './blocks'
import { HIGHER_PITCH, LOWER_PITCH } from './constants'

const buildContourPieces: () => DictionaryOf<ContourPiece> =
    (): DictionaryOf<ContourPiece> => {
        const {
            perimeterRhythm,
            supertileRhythm,
            perimeterRhythmLeftGrainPitches,
            perimeterRhythmTopGrainPitches,
            perimeterRhythmTopLeftGrainPitches,
            perimeterRhythmTopRightGrainPitches,
        } = buildBlocks()

        const perimeterRhythmLeftGrainContourPiece: ContourPiece = to.ContourPiece(perimeterRhythm.map(
            (duration: Index, index: number): ContourElement =>
                [ perimeterRhythmLeftGrainPitches[ index ], duration ],
        ))
        const perimeterRhythmTopGrainContourPiece: ContourPiece = to.ContourPiece(perimeterRhythm.map(
            (duration: Index, index: number): ContourElement =>
                [ perimeterRhythmTopGrainPitches[ index ], duration ],
        ))
        const perimeterRhythmTopLeftGrainContourPiece: ContourPiece = to.ContourPiece(perimeterRhythm.map(
            (duration: Index, index: number): ContourElement =>
                [ perimeterRhythmTopLeftGrainPitches[ index ], duration ],
        ))
        const perimeterRhythmTopRightGrainContourPiece: ContourPiece = to.ContourPiece(perimeterRhythm.map(
            (duration: Index, index: number): ContourElement =>
                [ perimeterRhythmTopRightGrainPitches[ index ], duration ],
        ))
        const supertileRhythmHigherPitchContourPiece: ContourPiece = to.ContourPiece(supertileRhythm.map(
            (duration: Index): ContourElement =>
                [ HIGHER_PITCH, duration ],
        ))
        const supertileRhythmLowerPitchContourPiece: ContourPiece = to.ContourPiece(supertileRhythm.map(
            (duration: Index): ContourElement =>
                [ LOWER_PITCH, duration ],
        ))

        const perimeterRestContourPiece: ContourPiece = to.ContourPiece(perimeterRhythm.map(
            (duration: Index): ContourElement =>
                [ PITCH_INDEX_INDICATING_REST, duration ],
        ))
        const supertileRestContourPiece: ContourPiece = to.ContourPiece(supertileRhythm.map(
            (duration: Index): ContourElement =>
                [ PITCH_INDEX_INDICATING_REST, duration ],
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
