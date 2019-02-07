import { apply, Cycle, DictionaryOf, from, Ordinal, sequence, to } from '@musical-patterns/utilities'
import {
    Grain,
    GrainCycleSequence,
    HoundstoothtopiaContourPiece,
    HoundstoothtopiaContourWhole,
    to as houndstoothtopiaTo,
} from '../nominal'
import {
    LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY,
    TOP_GRAIN_SEQUENCE_INDEX_TO_VARY,
    TOP_LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY,
    TOP_RIGHT_GRAIN_SEQUENCE_INDEX_TO_VARY,
} from './constants'
import { buildContourPieces } from './pieces'

const buildContourWholes: () => DictionaryOf<HoundstoothtopiaContourWhole> =
    (): DictionaryOf<HoundstoothtopiaContourWhole> => {
        const {
            perimeterRhythmLeftGrainContourPiece,
            perimeterRhythmTopGrainContourPiece,
            perimeterRhythmTopLeftGrainContourPiece,
            perimeterRhythmTopRightGrainContourPiece,
            supertileRhythmHigherPitchContourPiece,
            supertileRhythmLowerPitchContourPiece,
            perimeterRestContourPiece,
        } = buildContourPieces()

        const basicGrainCycle: Cycle<Grain> = to.Cycle([ 0, 0, 1, 1 ].map(houndstoothtopiaTo.Grain))
        const variedGrainCycle: Cycle<Grain> = apply.Translation(basicGrainCycle, to.Translation(1))

        const buildGrainCycleSequence: (indexToVary: Ordinal) => GrainCycleSequence =
            (indexToVary: Ordinal): GrainCycleSequence => {
                const grainCycleSet: Array<Cycle<Grain>> =
                    [ basicGrainCycle, basicGrainCycle, basicGrainCycle, basicGrainCycle ]

                grainCycleSet[ from.Ordinal(indexToVary) ] = variedGrainCycle

                return houndstoothtopiaTo.GrainCycleSequence(sequence(grainCycleSet))
            }

        const grainCycleSequenceToContourWhole: (
            grainCycleSequence: GrainCycleSequence,
            contourPiece: HoundstoothtopiaContourPiece,
        ) => HoundstoothtopiaContourWhole =
            (
                grainCycleSequence: GrainCycleSequence,
                contourPiece: HoundstoothtopiaContourPiece,
            ): HoundstoothtopiaContourWhole =>
                houndstoothtopiaTo.HoundstoothtopiaContourWhole(
                    sequence(grainCycleSequence.map((grain: number): HoundstoothtopiaContourPiece =>
                        grain ? contourPiece : perimeterRestContourPiece)))

        const perimeterRhythmTopRightGrainContourWhole: HoundstoothtopiaContourWhole = grainCycleSequenceToContourWhole(
            buildGrainCycleSequence(TOP_RIGHT_GRAIN_SEQUENCE_INDEX_TO_VARY),
            perimeterRhythmTopRightGrainContourPiece,
        )
        const perimeterRhythmTopGrainContourWhole: HoundstoothtopiaContourWhole = grainCycleSequenceToContourWhole(
            buildGrainCycleSequence(TOP_GRAIN_SEQUENCE_INDEX_TO_VARY),
            perimeterRhythmTopGrainContourPiece,
        )
        const perimeterRhythmTopLeftGrainContourWhole: HoundstoothtopiaContourWhole = grainCycleSequenceToContourWhole(
            buildGrainCycleSequence(TOP_LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY),
            perimeterRhythmTopLeftGrainContourPiece,
        )
        const perimeterRhythmLeftGrainContourWhole: HoundstoothtopiaContourWhole = grainCycleSequenceToContourWhole(
            buildGrainCycleSequence(LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY),
            perimeterRhythmLeftGrainContourPiece,
        )

        return {
            perimeterRhythmLeftGrainContourWhole,
            perimeterRhythmTopGrainContourWhole,
            perimeterRhythmTopLeftGrainContourWhole,
            perimeterRhythmTopRightGrainContourWhole,
            supertileRhythmHigherPitchContourWhole: houndstoothtopiaTo.HoundstoothtopiaContourWhole(sequence([
                supertileRhythmHigherPitchContourPiece,
            ])),
            supertileRhythmLowerPitchContourWhole: houndstoothtopiaTo.HoundstoothtopiaContourWhole(sequence([
                supertileRhythmLowerPitchContourPiece,
            ])),
        }
    }

export {
    buildContourWholes,
}
