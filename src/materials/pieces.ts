import { Block, DictionaryOf, from } from '@musical-patterns/utilities'
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
                (duration: number, index: number): HoundstoothtopiaContourElement =>
                    [
                        from.Scalar(perimeterRhythmLeftGrainPitches[ index ]),
                        duration,
                        [ 0, 1, 0 ],
                    ],
            ))
        const perimeterRhythmTopGrainContourPiece: HoundstoothtopiaContourPiece =
            houndstoothtopiaTo.HoundstoothtopiaContourPiece(perimeterRhythm.map(
                (duration: number, index: number): HoundstoothtopiaContourElement =>
                    [
                        from.Scalar(perimeterRhythmTopGrainPitches[ index ]),
                        duration,
                        [ 0, -1, 0 ],
                    ],
            ))
        const perimeterRhythmTopLeftGrainContourPiece: HoundstoothtopiaContourPiece =
            houndstoothtopiaTo.HoundstoothtopiaContourPiece(perimeterRhythm.map(
                (duration: number, index: number): HoundstoothtopiaContourElement =>
                    [
                        from.Scalar(perimeterRhythmTopLeftGrainPitches[ index ]),
                        duration,
                        [ 0, 0, 1 ],
                    ],
            ))
        const perimeterRhythmTopRightGrainContourPiece: HoundstoothtopiaContourPiece =
            houndstoothtopiaTo.HoundstoothtopiaContourPiece(perimeterRhythm.map(
                (duration: number, index: number): HoundstoothtopiaContourElement =>
                    [
                        from.Scalar(perimeterRhythmTopRightGrainPitches[ index ]),
                        duration,
                        [ 0, 0, -1 ],
                    ],
            ))

        const supertileRhythmHigherPitchContourPiece: HoundstoothtopiaContourPiece =
            houndstoothtopiaTo.HoundstoothtopiaContourPiece(supertileRhythm.map(
                (duration: number): HoundstoothtopiaContourElement =>
                    [ from.Scalar(HIGHER_SUPERTILE_PITCH), duration, [ 1, 0, 0 ] ],
            ))
        const supertileRhythmLowerPitchContourPiece: HoundstoothtopiaContourPiece =
            houndstoothtopiaTo.HoundstoothtopiaContourPiece(supertileRhythm.map(
                (duration: number): HoundstoothtopiaContourElement =>
                    [ from.Scalar(LOWER_SUPERTILE_PITCH), duration, [ -1, 0, 0 ] ],
            ))

        const perimeterRestContourPiece: HoundstoothtopiaContourPiece =
            houndstoothtopiaTo.HoundstoothtopiaContourPiece(perimeterRhythm.map(
                (duration: number): HoundstoothtopiaContourElement =>
                    [ from.Scalar(PITCH_SCALAR_INDICATING_REST), duration, [ 0, 0, 0 ] ],
            ))
        const supertileRestContourPiece: HoundstoothtopiaContourPiece =
            houndstoothtopiaTo.HoundstoothtopiaContourPiece(supertileRhythm.map(
                (duration: number): HoundstoothtopiaContourElement =>
                    [ from.Scalar(PITCH_SCALAR_INDICATING_REST), duration, [ 0, 0, 0 ] ],
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
