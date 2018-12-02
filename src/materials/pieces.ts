import { Block } from '@musical-patterns/pattern'
import { DictionaryOf, from, Index } from '@musical-patterns/utilities'
import { PITCH_SCALAR_INDICATING_REST } from '../constants'
import { buildPerimeterPitches, buildPerimeterRhythm, buildSupertileRhythm } from '../custom'
import { HoundstoothtopiaContourElement, HoundstoothtopiaContourPiece, to as houndstoothtopiaTo } from '../nominal'
import { HIGHER_SUPERTILE_PITCH, LOWER_SUPERTILE_PITCH } from './constants'

const buildContourPieces: () => DictionaryOf<HoundstoothtopiaContourPiece> =
    (): DictionaryOf<HoundstoothtopiaContourPiece> => {
        const perimeterRhythm: Block = buildPerimeterRhythm()
        const supertileRhythm: Block = buildSupertileRhythm()
        const {
            perimeterRhythmLeftGrainPitches,
            perimeterRhythmTopGrainPitches,
            perimeterRhythmTopLeftGrainPitches,
            perimeterRhythmTopRightGrainPitches,
        } = buildPerimeterPitches()

        const perimeterRhythmLeftGrainContourPiece: HoundstoothtopiaContourPiece =
            houndstoothtopiaTo.HoundstoothtopiaContourPiece(perimeterRhythm.map(
                (duration: Index, index: number): HoundstoothtopiaContourElement =>
                    [
                        from.Scalar(perimeterRhythmLeftGrainPitches[ index ]),
                        from.Index(duration),
                        [ 0, 1, 0 ],
                    ],
            ))
        const perimeterRhythmTopGrainContourPiece: HoundstoothtopiaContourPiece =
            houndstoothtopiaTo.HoundstoothtopiaContourPiece(perimeterRhythm.map(
                (duration: Index, index: number): HoundstoothtopiaContourElement =>
                    [
                        from.Scalar(perimeterRhythmTopGrainPitches[ index ]),
                        from.Index(duration),
                        [ 0, -1, 0 ],
                    ],
            ))
        const perimeterRhythmTopLeftGrainContourPiece: HoundstoothtopiaContourPiece =
            houndstoothtopiaTo.HoundstoothtopiaContourPiece(perimeterRhythm.map(
                (duration: Index, index: number): HoundstoothtopiaContourElement =>
                    [
                        from.Scalar(perimeterRhythmTopLeftGrainPitches[ index ]),
                        from.Index(duration),
                        [ 0, 0, 1 ],
                    ],
            ))
        const perimeterRhythmTopRightGrainContourPiece: HoundstoothtopiaContourPiece =
            houndstoothtopiaTo.HoundstoothtopiaContourPiece(perimeterRhythm.map(
                (duration: Index, index: number): HoundstoothtopiaContourElement =>
                    [
                        from.Scalar(perimeterRhythmTopRightGrainPitches[ index ]),
                        from.Index(duration),
                        [ 0, 0, -1 ],
                    ],
            ))

        const supertileRhythmHigherPitchContourPiece: HoundstoothtopiaContourPiece =
            houndstoothtopiaTo.HoundstoothtopiaContourPiece(supertileRhythm.map(
                (duration: Index): HoundstoothtopiaContourElement =>
                    [ from.Scalar(HIGHER_SUPERTILE_PITCH), from.Index(duration), [ 1, 0, 0 ] ],
            ))
        const supertileRhythmLowerPitchContourPiece: HoundstoothtopiaContourPiece =
            houndstoothtopiaTo.HoundstoothtopiaContourPiece(supertileRhythm.map(
                (duration: Index): HoundstoothtopiaContourElement =>
                    [ from.Scalar(LOWER_SUPERTILE_PITCH), from.Index(duration), [ -1, 0, 0 ] ],
            ))

        const perimeterRestContourPiece: HoundstoothtopiaContourPiece =
            houndstoothtopiaTo.HoundstoothtopiaContourPiece(perimeterRhythm.map(
                (duration: Index): HoundstoothtopiaContourElement =>
                    [ from.Scalar(PITCH_SCALAR_INDICATING_REST), from.Index(duration), [ 0, 0, 0 ] ],
            ))
        const supertileRestContourPiece: HoundstoothtopiaContourPiece =
            houndstoothtopiaTo.HoundstoothtopiaContourPiece(supertileRhythm.map(
                (duration: Index): HoundstoothtopiaContourElement =>
                    [ from.Scalar(PITCH_SCALAR_INDICATING_REST), from.Index(duration), [ 0, 0, 0 ] ],
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
