import { PitchValueXYZ, STANDARD_PITCH_INDEX_INDICATING_REST } from '@musical-patterns/material'
import {
    as,
    Block,
    ContourElement,
    ContourPiece,
    Coordinate,
    Frequency,
    insteadOf,
    map,
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
        ) => ContourPiece<PitchValueXYZ> =
            (
                pitches: Array<Scalar<Frequency>>,
                position: Coordinate<Space, ThreeDimensional>,
            ): ContourPiece<PitchValueXYZ> =>
                as.ContourPiece<PitchValueXYZ>(map(
                    perimeterRhythm,
                    (value: number, index: Ordinal): ContourElement<PitchValueXYZ> =>
                        as.ContourElement<PitchValueXYZ>([
                            as.number(use.Ordinal(
                                pitches,
                                insteadOf<Ordinal, Array<Scalar<Frequency>>>(index),
                            )),
                            value,
                            ...position.map(as.number),
                        ]),
                ))

        const perimeterLeftGrain: ContourPiece<PitchValueXYZ> =
            perimeterPiece(perimeterPitches.leftGrain, [ as.Space(0), as.Space(1), as.Space(0) ])
        const perimeterTopGrain: ContourPiece<PitchValueXYZ> =
            perimeterPiece(perimeterPitches.topGrain, [ as.Space(0), as.Space(-1), as.Space(0) ])
        const perimeterTopLeftGrain: ContourPiece<PitchValueXYZ> =
            perimeterPiece(perimeterPitches.topLeftGrain, [ as.Space(0), as.Space(0), as.Space(1) ])
        const perimeterTopRightGrain: ContourPiece<PitchValueXYZ> =
            perimeterPiece(perimeterPitches.topRightGrain, [ as.Space(0), as.Space(0), as.Space(-1) ])
        const perimeterRightGrain: ContourPiece<PitchValueXYZ> =
            perimeterPiece(perimeterPitches.rightGrain, [ as.Space(0), as.Space(1), as.Space(-1) ])
        const perimeterBottomRightGrain: ContourPiece<PitchValueXYZ> =
            perimeterPiece(perimeterPitches.bottomRightGrain, [ as.Space(0), as.Space(-1), as.Space(1) ])
        const perimeterBottomGrain: ContourPiece<PitchValueXYZ> =
            perimeterPiece(perimeterPitches.bottomGrain, [ as.Space(0), as.Space(-1), as.Space(-1) ])
        const perimeterBottomLeftGrain: ContourPiece<PitchValueXYZ> =
            perimeterPiece(perimeterPitches.bottomLeftGrain, [ as.Space(0), as.Space(1), as.Space(1) ])

        const supertileHigherPitch: ContourPiece<PitchValueXYZ> = as.ContourPiece<PitchValueXYZ>(
            supertileRhythm.map((value: number): ContourElement<PitchValueXYZ> =>
                as.ContourElement<PitchValueXYZ>([
                    as.number(HIGHER_SUPERTILE_PITCH), value, 1, 0, 0,
                ]),
            ))
        const supertileLowerPitch: ContourPiece<PitchValueXYZ> = as.ContourPiece<PitchValueXYZ>(
            supertileRhythm.map((value: number): ContourElement<PitchValueXYZ> =>
                as.ContourElement<PitchValueXYZ>([
                    as.number(LOWER_SUPERTILE_PITCH), value, -1, 0, 0,
                ]),
            ))

        const rawStandardPitchIndexIndicatingRest: number =
            as.number(STANDARD_PITCH_INDEX_INDICATING_REST)
        const perimeterRest: ContourPiece<PitchValueXYZ> =
            as.ContourPiece<PitchValueXYZ>(
                perimeterRhythm.map((value: number): ContourElement<PitchValueXYZ> =>
                    as.ContourElement<PitchValueXYZ>([ rawStandardPitchIndexIndicatingRest, value, 0, 0, 0 ]),
                ))
        const supertileRest: ContourPiece<PitchValueXYZ> =
            as.ContourPiece<PitchValueXYZ>(
                supertileRhythm.map((value: number): ContourElement<PitchValueXYZ> =>
                    as.ContourElement<PitchValueXYZ>([ rawStandardPitchIndexIndicatingRest, value, 0, 0, 0 ]),
                ))

        return {
            perimeterLeftGrain,
            perimeterRest,
            perimeterTopGrain,
            perimeterTopLeftGrain,
            perimeterTopRightGrain,
            perimeterRightGrain,
            perimeterBottomRightGrain,
            perimeterBottomGrain,
            perimeterBottomLeftGrain,
            supertileHigherPitch,
            supertileLowerPitch,
            supertileRest,
        }
    }

export {
    computeContourPieces,
}
