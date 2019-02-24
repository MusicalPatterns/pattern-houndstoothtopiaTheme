import { PitchDurationXYZ, STANDARD_PITCH_INDEX_INDICATING_REST } from '@musical-patterns/pattern'
import {
    apply,
    Block,
    ContourElement,
    ContourPiece,
    Coordinate,
    DictionaryOf,
    from,
    map,
    Ordinal,
    Scalar,
    Space,
    ThreeDimensional,
    to,
} from '@musical-patterns/utilities'
import { HIGHER_SUPERTILE_PITCH, LOWER_SUPERTILE_PITCH } from './constants'
import { buildPerimeterPitches, buildPerimeterRhythm, buildSupertileRhythm } from './custom'

const buildContourPieces: () => DictionaryOf<ContourPiece<PitchDurationXYZ>> =
    (): DictionaryOf<ContourPiece<PitchDurationXYZ>> => {
        const perimeterRhythm: Block = buildPerimeterRhythm()
        const supertileRhythm: Block = buildSupertileRhythm()
        const {
            perimeterRhythmLeftGrainPitches,
            perimeterRhythmTopGrainPitches,
            perimeterRhythmTopLeftGrainPitches,
            perimeterRhythmTopRightGrainPitches,
        } = buildPerimeterPitches()

        const perimeterPiece:
            (pitches: Scalar[], position: Coordinate<Space, ThreeDimensional>) => ContourPiece<PitchDurationXYZ> =
            (pitches: Scalar[], position: Coordinate<Space, ThreeDimensional>): ContourPiece<PitchDurationXYZ> =>
                to.ContourPiece<PitchDurationXYZ>(map(
                    perimeterRhythm,
                    (duration: number, index: Ordinal): ContourElement<PitchDurationXYZ> =>
                        to.ContourElement<PitchDurationXYZ>([
                            from.Scalar(apply.Ordinal(pitches, index)),
                            duration,
                            ...position.map(from.Space),
                        ]),
                ))

        const perimeterRhythmLeftGrainContourPiece: ContourPiece<PitchDurationXYZ> =
            perimeterPiece(perimeterRhythmLeftGrainPitches, [ to.Space(0), to.Space(1), to.Space(0) ])
        const perimeterRhythmTopGrainContourPiece: ContourPiece<PitchDurationXYZ> =
            perimeterPiece(perimeterRhythmTopGrainPitches, [ to.Space(0), to.Space(-1), to.Space(0) ])
        const perimeterRhythmTopLeftGrainContourPiece: ContourPiece<PitchDurationXYZ> =
            perimeterPiece(perimeterRhythmTopLeftGrainPitches, [ to.Space(0), to.Space(0), to.Space(1) ])
        const perimeterRhythmTopRightGrainContourPiece: ContourPiece<PitchDurationXYZ> =
            perimeterPiece(perimeterRhythmTopRightGrainPitches, [ to.Space(0), to.Space(0), to.Space(-1) ])

        const supertileRhythmHigherPitchContourPiece: ContourPiece<PitchDurationXYZ> =
            to.ContourPiece<PitchDurationXYZ>(
                supertileRhythm.map((duration: number): ContourElement<PitchDurationXYZ> =>
                    to.ContourElement<PitchDurationXYZ>([ from.Scalar(HIGHER_SUPERTILE_PITCH), duration, 1, 0, 0 ]),
                ))
        const supertileRhythmLowerPitchContourPiece: ContourPiece<PitchDurationXYZ> =
            to.ContourPiece<PitchDurationXYZ>(
                supertileRhythm.map((duration: number): ContourElement<PitchDurationXYZ> =>
                    to.ContourElement<PitchDurationXYZ>([ from.Scalar(LOWER_SUPERTILE_PITCH), duration, -1, 0, 0 ]),
                ))

        const perimeterRestContourPiece: ContourPiece<PitchDurationXYZ> =
            to.ContourPiece<PitchDurationXYZ>(
                perimeterRhythm.map((duration: number): ContourElement<PitchDurationXYZ> =>
                    to.ContourElement<PitchDurationXYZ>([ STANDARD_PITCH_INDEX_INDICATING_REST, duration, 0, 0, 0 ]),
                ))
        const supertileRestContourPiece: ContourPiece<PitchDurationXYZ> =
            to.ContourPiece<PitchDurationXYZ>(
                supertileRhythm.map((duration: number): ContourElement<PitchDurationXYZ> =>
                    to.ContourElement<PitchDurationXYZ>([ STANDARD_PITCH_INDEX_INDICATING_REST, duration, 0, 0, 0 ]),
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
