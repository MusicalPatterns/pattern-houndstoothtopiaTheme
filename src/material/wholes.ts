import { PitchDurationXYZ } from '@musical-patterns/pattern'
import {
    apply,
    ContourPiece,
    ContourWhole,
    Cycle,
    DictionaryOf,
    from, negative,
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

const buildContourWholes: () => DictionaryOf<ContourWhole<PitchDurationXYZ>> =
    (): DictionaryOf<ContourWhole<PitchDurationXYZ>> => {
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
                        grain ? contourPiece : perimeterRestContourPiece)))

        const perimeterRhythmTopRightGrainContourWhole: ContourWhole<PitchDurationXYZ> =
            grainCycleSequenceToContourWhole(
                buildGrainCycleSequence(TOP_RIGHT_GRAIN_SEQUENCE_INDEX_TO_VARY),
                perimeterRhythmTopRightGrainContourPiece,
            )
        const perimeterRhythmTopGrainContourWhole: ContourWhole<PitchDurationXYZ> =
            grainCycleSequenceToContourWhole(
                buildGrainCycleSequence(TOP_GRAIN_SEQUENCE_INDEX_TO_VARY),
                perimeterRhythmTopGrainContourPiece,
            )
        const perimeterRhythmTopLeftGrainContourWhole: ContourWhole<PitchDurationXYZ> =
            grainCycleSequenceToContourWhole(
                buildGrainCycleSequence(TOP_LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY),
                perimeterRhythmTopLeftGrainContourPiece,
            )
        const perimeterRhythmLeftGrainContourWhole: ContourWhole<PitchDurationXYZ> =
            grainCycleSequenceToContourWhole(
                buildGrainCycleSequence(LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY),
                perimeterRhythmLeftGrainContourPiece,
            )

        return {
            perimeterRhythmLeftGrainContourWhole,
            perimeterRhythmTopGrainContourWhole,
            perimeterRhythmTopLeftGrainContourWhole,
            perimeterRhythmTopRightGrainContourWhole,
            supertileRhythmHigherPitchContourWhole: to.ContourWhole<PitchDurationXYZ>(sequence([
                supertileRhythmHigherPitchContourPiece,
            ])),
            supertileRhythmLowerPitchContourWhole: to.ContourWhole<PitchDurationXYZ>(sequence([
                supertileRhythmLowerPitchContourPiece,
            ])),
        }
    }

export {
    buildContourWholes,
}
