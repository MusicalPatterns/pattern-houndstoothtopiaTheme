import { PitchDurationXYZ, STANDARD_PITCH_INDEX_INDICATING_REST } from '@musical-patterns/pattern'
import {
    apply,
    Block,
    ContourElement,
    ContourPiece,
    Coordinate,
    Frequency,
    from,
    map,
    Ordinal,
    Scalar,
    Space,
    ThreeDimensional,
    to,
} from '@musical-patterns/utilities'
import { HIGHER_SUPERTILE_PITCH, LOWER_SUPERTILE_PITCH } from './constants'
import { buildPerimeterPitches, buildPerimeterRhythm, buildSupertileRhythm, PerimeterPitches } from './custom'
import { HoundstoothtopiaThemeContourPieces } from './types'

const buildContourPieces: () => HoundstoothtopiaThemeContourPieces =
    (): HoundstoothtopiaThemeContourPieces => {
        const perimeterRhythm: Block = buildPerimeterRhythm()
        const supertileRhythm: Block = buildSupertileRhythm()
        const perimeterPitches: PerimeterPitches = buildPerimeterPitches()

        const perimeterPiece: (
            pitches: Array<Scalar<Frequency>>,
            position: Coordinate<Space, ThreeDimensional>,
        ) => ContourPiece<PitchDurationXYZ> =
            (
                pitches: Array<Scalar<Frequency>>,
                position: Coordinate<Space, ThreeDimensional>,
            ): ContourPiece<PitchDurationXYZ> =>
                to.ContourPiece<PitchDurationXYZ>(map(
                    perimeterRhythm,
                    (duration: number, index: Ordinal): ContourElement<PitchDurationXYZ> =>
                        to.ContourElement<PitchDurationXYZ>([
                            from.Scalar<number, Scalar>(from.Frequency(apply.Ordinal(pitches, index))),
                            duration,
                            ...position.map(from.Space),
                        ]),
                ))

        const perimeterLeftGrain: ContourPiece<PitchDurationXYZ> =
            perimeterPiece(perimeterPitches.leftGrain, [ to.Space(0), to.Space(1), to.Space(0) ])
        const perimeterTopGrain: ContourPiece<PitchDurationXYZ> =
            perimeterPiece(perimeterPitches.topGrain, [ to.Space(0), to.Space(-1), to.Space(0) ])
        const perimeterTopLeftGrain: ContourPiece<PitchDurationXYZ> =
            perimeterPiece(perimeterPitches.topLeftGrain, [ to.Space(0), to.Space(0), to.Space(1) ])
        const perimeterTopRightGrain: ContourPiece<PitchDurationXYZ> =
            perimeterPiece(perimeterPitches.topRightGrain, [ to.Space(0), to.Space(0), to.Space(-1) ])

        const supertileHigherPitch: ContourPiece<PitchDurationXYZ> =
            to.ContourPiece<PitchDurationXYZ>(
                supertileRhythm.map((duration: number): ContourElement<PitchDurationXYZ> =>
                    to.ContourElement<PitchDurationXYZ>([
                        from.Scalar<number, Scalar>(from.Frequency(HIGHER_SUPERTILE_PITCH)), duration, 1, 0, 0,
                    ]),
                ))
        const supertileLowerPitch: ContourPiece<PitchDurationXYZ> =
            to.ContourPiece<PitchDurationXYZ>(
                supertileRhythm.map((duration: number): ContourElement<PitchDurationXYZ> =>
                    to.ContourElement<PitchDurationXYZ>([
                        from.Scalar<number, Scalar>(from.Frequency(LOWER_SUPERTILE_PITCH)), duration, -1, 0, 0,
                    ]),
                ))

        const perimeterRest: ContourPiece<PitchDurationXYZ> =
            to.ContourPiece<PitchDurationXYZ>(
                perimeterRhythm.map((duration: number): ContourElement<PitchDurationXYZ> =>
                    to.ContourElement<PitchDurationXYZ>([ STANDARD_PITCH_INDEX_INDICATING_REST, duration, 0, 0, 0 ]),
                ))
        const supertileRest: ContourPiece<PitchDurationXYZ> =
            to.ContourPiece<PitchDurationXYZ>(
                supertileRhythm.map((duration: number): ContourElement<PitchDurationXYZ> =>
                    to.ContourElement<PitchDurationXYZ>([ STANDARD_PITCH_INDEX_INDICATING_REST, duration, 0, 0, 0 ]),
                ))

        return {
            perimeterLeftGrain,
            perimeterRest,
            perimeterTopGrain,
            perimeterTopLeftGrain,
            perimeterTopRightGrain,
            supertileHigherPitch,
            supertileLowerPitch,
            supertileRest,
        }
    }

export {
    buildContourPieces,
}
