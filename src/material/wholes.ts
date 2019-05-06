import { PitchValueXYZ } from '@musical-patterns/material'
import {
    arraySet,
    as,
    ContourPiece,
    ContourWhole,
    Cycle,
    DECREMENT,
    flatten,
    Ordinal,
    sequence,
    use,
} from '@musical-patterns/utilities'
import { Grain, GrainCycleSequence, houndstoothtopiaThemeAs } from '../nominals'
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

        const basicGrainCycle: Cycle<Grain> = as.Cycle([ 0, 0, 1, 1 ].map(houndstoothtopiaThemeAs.Grain))
        const variedGrainCycle: Cycle<Grain> = use.Cardinal(basicGrainCycle, DECREMENT)

        const computeGrainCycleSequence: (indexToVary: Ordinal<Array<Cycle<Grain>>>) => GrainCycleSequence =
            (indexToVary: Ordinal<Array<Cycle<Grain>>>): GrainCycleSequence => {
                const grainCycleSet: Array<Cycle<Grain>> =
                    [ basicGrainCycle, basicGrainCycle, basicGrainCycle, basicGrainCycle ]

                arraySet(grainCycleSet, indexToVary, variedGrainCycle)

                return houndstoothtopiaThemeAs.GrainCycleSequence(flatten(grainCycleSet))
            }

        const grainCycleSequenceToContourWhole: (
            grainCycleSequence: GrainCycleSequence,
            contourPiece: ContourPiece<PitchValueXYZ>,
        ) => ContourWhole<PitchValueXYZ> =
            (
                grainCycleSequence: GrainCycleSequence,
                contourPiece: ContourPiece<PitchValueXYZ>,
            ): ContourWhole<PitchValueXYZ> =>
                as.ContourWhole<PitchValueXYZ>(
                    sequence(
                        ...grainCycleSequence.map((grain: number): ContourPiece<PitchValueXYZ> =>
                            grain ? contourPiece : contourPieces.perimeterRest),
                    ),
                )

        const perimeterTopRightGrain: ContourWhole<PitchValueXYZ> =
            grainCycleSequenceToContourWhole(
                computeGrainCycleSequence(TOP_RIGHT_GRAIN_SEQUENCE_INDEX_TO_VARY),
                contourPieces.perimeterTopRightGrain,
            )
        const perimeterTopGrain: ContourWhole<PitchValueXYZ> =
            grainCycleSequenceToContourWhole(
                computeGrainCycleSequence(TOP_GRAIN_SEQUENCE_INDEX_TO_VARY),
                contourPieces.perimeterTopGrain,
            )
        const perimeterTopLeftGrain: ContourWhole<PitchValueXYZ> =
            grainCycleSequenceToContourWhole(
                computeGrainCycleSequence(TOP_LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY),
                contourPieces.perimeterTopLeftGrain,
            )
        const perimeterLeftGrain: ContourWhole<PitchValueXYZ> =
            grainCycleSequenceToContourWhole(
                computeGrainCycleSequence(LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY),
                contourPieces.perimeterLeftGrain,
            )

        return {
            perimeterLeftGrain,
            perimeterTopGrain,
            perimeterTopLeftGrain,
            perimeterTopRightGrain,
            supertileHigherPitch: as.ContourWhole<PitchValueXYZ>(contourPieces.supertileHigherPitch),
            supertileLowerPitch: as.ContourWhole<PitchValueXYZ>(contourPieces.supertileLowerPitch),
        }
    }

export {
    computeContourWholes,
}
