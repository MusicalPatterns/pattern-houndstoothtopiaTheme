import { PitchDurationXYZ, STANDARD_PITCH_INDEX_INDICATING_REST } from '@musical-patterns/material'
import {
    as,
    Block,
    ContourElement,
    ContourPiece,
    Coordinate,
    Frequency,
    insteadOf,
    map,
    notAs,
    Ordinal,
    Scalar,
    Space,
    ThreeDimensional,
    use,
} from '@musical-patterns/utilities'
import { HIGHER_SUPERTILE_PITCH, LOWER_SUPERTILE_PITCH } from './constants'
import { computePerimeterPitches, computePerimeterRhythm, computeSupertileRhythm, PerimeterPitches } from './custom'
import { HoundstoothtopiaThemeContourPieces } from './types'

const computeContourPieces: () => HoundstoothtopiaThemeContourPieces =
    (): HoundstoothtopiaThemeContourPieces => {
        const perimeterRhythm: Block = computePerimeterRhythm()
        const supertileRhythm: Block = computeSupertileRhythm()
        const perimeterPitches: PerimeterPitches = computePerimeterPitches()

        const perimeterPiece: (
            pitches: Array<Scalar<Frequency>>,
            position: Coordinate<Space, ThreeDimensional>,
        ) => ContourPiece<PitchDurationXYZ> =
            (
                pitches: Array<Scalar<Frequency>>,
                position: Coordinate<Space, ThreeDimensional>,
            ): ContourPiece<PitchDurationXYZ> =>
                as.ContourPiece<PitchDurationXYZ>(map(
                    perimeterRhythm,
                    (duration: number, index: Ordinal): ContourElement<PitchDurationXYZ> =>
                        as.ContourElement<PitchDurationXYZ>([
                            notAs.Scalar<Frequency>(use.Ordinal(
                                pitches,
                                insteadOf<Ordinal, Scalar<Frequency>>(index),
                            )),
                            duration,
                            ...position.map(notAs.Space),
                        ]),
                ))

        const perimeterLeftGrain: ContourPiece<PitchDurationXYZ> =
            perimeterPiece(perimeterPitches.leftGrain, [ as.Space(0), as.Space(1), as.Space(0) ])
        const perimeterTopGrain: ContourPiece<PitchDurationXYZ> =
            perimeterPiece(perimeterPitches.topGrain, [ as.Space(0), as.Space(-1), as.Space(0) ])
        const perimeterTopLeftGrain: ContourPiece<PitchDurationXYZ> =
            perimeterPiece(perimeterPitches.topLeftGrain, [ as.Space(0), as.Space(0), as.Space(1) ])
        const perimeterTopRightGrain: ContourPiece<PitchDurationXYZ> =
            perimeterPiece(perimeterPitches.topRightGrain, [ as.Space(0), as.Space(0), as.Space(-1) ])

        const supertileHigherPitch: ContourPiece<PitchDurationXYZ> =
            as.ContourPiece<PitchDurationXYZ>(
                supertileRhythm.map((duration: number): ContourElement<PitchDurationXYZ> =>
                    as.ContourElement<PitchDurationXYZ>([
                        notAs.Scalar<Frequency>(HIGHER_SUPERTILE_PITCH), duration, 1, 0, 0,
                    ]),
                ))
        const supertileLowerPitch: ContourPiece<PitchDurationXYZ> =
            as.ContourPiece<PitchDurationXYZ>(
                supertileRhythm.map((duration: number): ContourElement<PitchDurationXYZ> =>
                    as.ContourElement<PitchDurationXYZ>([
                        notAs.Scalar<Frequency>(LOWER_SUPERTILE_PITCH), duration, -1, 0, 0,
                    ]),
                ))

        const rawStandardPitchIndexIndicatingRest: number = notAs.Ordinal<Scalar>(STANDARD_PITCH_INDEX_INDICATING_REST)
        const perimeterRest: ContourPiece<PitchDurationXYZ> =
            as.ContourPiece<PitchDurationXYZ>(
                perimeterRhythm.map((duration: number): ContourElement<PitchDurationXYZ> =>
                    as.ContourElement<PitchDurationXYZ>([ rawStandardPitchIndexIndicatingRest, duration, 0, 0, 0 ]),
                ))
        const supertileRest: ContourPiece<PitchDurationXYZ> =
            as.ContourPiece<PitchDurationXYZ>(
                supertileRhythm.map((duration: number): ContourElement<PitchDurationXYZ> =>
                    as.ContourElement<PitchDurationXYZ>([ rawStandardPitchIndexIndicatingRest, duration, 0, 0, 0 ]),
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
    computeContourPieces,
}
