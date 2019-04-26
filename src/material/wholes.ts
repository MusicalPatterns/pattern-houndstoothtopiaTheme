import { PitchDurationXYZ } from '@musical-patterns/material'
import {
    arraySet,
    as,
    ContourPiece,
    ContourWhole,
    Cycle,
    DECREMENT,
    Ordinal,
    sequence,
    use,
} from '@musical-patterns/utilities'
import { as as houndstoothtopiaAs, Grain, GrainCycleSequence } from '../nominals'
import {
    LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY,
    TOP_GRAIN_SEQUENCE_INDEX_TO_VARY,
    TOP_LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY,
    TOP_RIGHT_GRAIN_SEQUENCE_INDEX_TO_VARY,
} from './constants'
import { computeContourPieces } from './pieces'
import { HoundstoothtopiaThemeContourPieces, HoundstoothtopiaThemeContourWholes } from './types'

const computeContourWholes: () => HoundstoothtopiaThemeContourWholes =
    (): HoundstoothtopiaThemeContourWholes => {
        const contourPieces: HoundstoothtopiaThemeContourPieces = computeContourPieces()

        const basicGrainCycle: Cycle<Grain> = as.Cycle([ 0, 0, 1, 1 ].map(houndstoothtopiaAs.Grain))
        const variedGrainCycle: Cycle<Grain> = use.Cardinal(basicGrainCycle, DECREMENT)

        const computeGrainCycleSequence: (indexToVary: Ordinal<Array<Cycle<Grain>>>) => GrainCycleSequence =
            (indexToVary: Ordinal<Array<Cycle<Grain>>>): GrainCycleSequence => {
                const grainCycleSet: Array<Cycle<Grain>> =
                    [ basicGrainCycle, basicGrainCycle, basicGrainCycle, basicGrainCycle ]

                arraySet(grainCycleSet, indexToVary, variedGrainCycle)

                return houndstoothtopiaAs.GrainCycleSequence(sequence(...grainCycleSet))
            }

        const grainCycleSequenceToContourWhole: (
            grainCycleSequence: GrainCycleSequence,
            contourPiece: ContourPiece<PitchDurationXYZ>,
        ) => ContourWhole<PitchDurationXYZ> =
            (
                grainCycleSequence: GrainCycleSequence,
                contourPiece: ContourPiece<PitchDurationXYZ>,
            ): ContourWhole<PitchDurationXYZ> =>
                as.ContourWhole<PitchDurationXYZ>(
                    sequence(
                        ...grainCycleSequence.map((grain: number): ContourPiece<PitchDurationXYZ> =>
                            grain ? contourPiece : contourPieces.perimeterRest),
                    ),
                )

        const perimeterTopRightGrain: ContourWhole<PitchDurationXYZ> =
            grainCycleSequenceToContourWhole(
                computeGrainCycleSequence(TOP_RIGHT_GRAIN_SEQUENCE_INDEX_TO_VARY),
                contourPieces.perimeterTopRightGrain,
            )
        const perimeterTopGrain: ContourWhole<PitchDurationXYZ> =
            grainCycleSequenceToContourWhole(
                computeGrainCycleSequence(TOP_GRAIN_SEQUENCE_INDEX_TO_VARY),
                contourPieces.perimeterTopGrain,
            )
        const perimeterTopLeftGrain: ContourWhole<PitchDurationXYZ> =
            grainCycleSequenceToContourWhole(
                computeGrainCycleSequence(TOP_LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY),
                contourPieces.perimeterTopLeftGrain,
            )
        const perimeterLeftGrain: ContourWhole<PitchDurationXYZ> =
            grainCycleSequenceToContourWhole(
                computeGrainCycleSequence(LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY),
                contourPieces.perimeterLeftGrain,
            )

        return {
            perimeterLeftGrain,
            perimeterTopGrain,
            perimeterTopLeftGrain,
            perimeterTopRightGrain,
            supertileHigherPitch: as.ContourWhole<PitchDurationXYZ>(contourPieces.supertileHigherPitch),
            supertileLowerPitch: as.ContourWhole<PitchDurationXYZ>(contourPieces.supertileLowerPitch),
        }
    }

export {
    computeContourWholes,
}
