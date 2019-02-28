import { PitchDurationXYZ } from '@musical-patterns/pattern'
import {
    apply,
    ContourPiece,
    ContourWhole,
    Cycle,
    from,
    negative,
    Ordinal,
    sequence,
    to,
} from '@musical-patterns/utilities'
import { Grain, GrainCycleSequence, to as houndstoothtopiaTo } from '../nominal'
import {
    LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY,
    TOP_GRAIN_SEQUENCE_INDEX_TO_VARY,
    TOP_LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY,
    TOP_RIGHT_GRAIN_SEQUENCE_INDEX_TO_VARY,
} from './constants'
import { buildContourPieces } from './pieces'
import { HoundstoothtopiaThemeContourPieces, HoundstoothtopiaThemeContourWholes } from './types'

const buildContourWholes: () => HoundstoothtopiaThemeContourWholes =
    (): HoundstoothtopiaThemeContourWholes => {
        const contourPieces: HoundstoothtopiaThemeContourPieces = buildContourPieces()

        const basicGrainCycle: Cycle<Grain> = to.Cycle([ 0, 0, 1, 1 ].map(houndstoothtopiaTo.Grain))
        const variedGrainCycle: Cycle<Grain> = apply.Translation(basicGrainCycle, to.Translation(negative(1)))

        const buildGrainCycleSequence: (indexToVary: Ordinal) => GrainCycleSequence =
            (indexToVary: Ordinal): GrainCycleSequence => {
                const grainCycleSet: Array<Cycle<Grain>> =
                    [ basicGrainCycle, basicGrainCycle, basicGrainCycle, basicGrainCycle ]

                grainCycleSet[ from.Ordinal(indexToVary) ] = variedGrainCycle

                return houndstoothtopiaTo.GrainCycleSequence(sequence(grainCycleSet))
            }

        const grainCycleSequenceToContourWhole: (
            grainCycleSequence: GrainCycleSequence,
            contourPiece: ContourPiece<PitchDurationXYZ>,
        ) => ContourWhole<PitchDurationXYZ> =
            (
                grainCycleSequence: GrainCycleSequence,
                contourPiece: ContourPiece<PitchDurationXYZ>,
            ): ContourWhole<PitchDurationXYZ> =>
                to.ContourWhole<PitchDurationXYZ>(
                    sequence(grainCycleSequence.map((grain: number): ContourPiece<PitchDurationXYZ> =>
                        grain ? contourPiece : contourPieces.perimeterRest)))

        const perimeterTopRightGrain: ContourWhole<PitchDurationXYZ> =
            grainCycleSequenceToContourWhole(
                buildGrainCycleSequence(TOP_RIGHT_GRAIN_SEQUENCE_INDEX_TO_VARY),
                contourPieces.perimeterTopRightGrain,
            )
        const perimeterTopGrain: ContourWhole<PitchDurationXYZ> =
            grainCycleSequenceToContourWhole(
                buildGrainCycleSequence(TOP_GRAIN_SEQUENCE_INDEX_TO_VARY),
                contourPieces.perimeterTopGrain,
            )
        const perimeterTopLeftGrain: ContourWhole<PitchDurationXYZ> =
            grainCycleSequenceToContourWhole(
                buildGrainCycleSequence(TOP_LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY),
                contourPieces.perimeterTopLeftGrain,
            )
        const perimeterLeftGrain: ContourWhole<PitchDurationXYZ> =
            grainCycleSequenceToContourWhole(
                buildGrainCycleSequence(LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY),
                contourPieces.perimeterLeftGrain,
            )

        return {
            perimeterLeftGrain,
            perimeterTopGrain,
            perimeterTopLeftGrain,
            perimeterTopRightGrain,
            supertileHigherPitch: to.ContourWhole<PitchDurationXYZ>(sequence([
                contourPieces.supertileHigherPitch,
            ])),
            supertileLowerPitch: to.ContourWhole<PitchDurationXYZ>(sequence([
                contourPieces.supertileLowerPitch,
            ])),
        }
    }

export {
    buildContourWholes,
}
