import {
    applyCycle,
    ContourPiece,
    ContourWhole,
    DictionaryOf,
    from,
    Index,
    sequence,
    to,
} from '../../../../src'
import { GrainSet, GrainSetSequence, to as houndstoothtopiaTo } from '../nominal'
import {
    LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY,
    TOP_GRAIN_SEQUENCE_INDEX_TO_VARY,
    TOP_LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY,
    TOP_RIGHT_GRAIN_SEQUENCE_INDEX_TO_VARY,
} from './constants'
import { buildContourPieces } from './pieces'

const buildContourWholes: () => DictionaryOf<ContourWhole> =
    (): DictionaryOf<ContourWhole> => {
        const {
            perimeterRhythmLeftGrainContourPiece,
            perimeterRhythmTopGrainContourPiece,
            perimeterRhythmTopLeftGrainContourPiece,
            perimeterRhythmTopRightGrainContourPiece,
            supertileRhythmHigherPitchContourPiece,
            supertileRhythmLowerPitchContourPiece,
            perimeterRestContourPiece,
        } = buildContourPieces()

        const basicGrainSet: GrainSet = houndstoothtopiaTo.GrainSet([ 0, 0, 1, 1 ])
        const variedGrainSet: GrainSet = houndstoothtopiaTo.GrainSet(applyCycle(basicGrainSet, to.Offset(1)))

        const buildGrainSetSequence: (indexToVary: Index) => GrainSetSequence =
            (indexToVary: Index): GrainSetSequence => {
                const grainSets: GrainSet[] = [ basicGrainSet, basicGrainSet, basicGrainSet, basicGrainSet ]

                grainSets[ from.Index(indexToVary) ] = variedGrainSet

                return houndstoothtopiaTo.GrainSetSequence(sequence(grainSets))
            }

        const grainSetSequenceToContourWhole:
            (grainSetSequence: GrainSetSequence, contourPiece: ContourPiece) => ContourWhole =
            (grainSetSequence: GrainSetSequence, contourPiece: ContourPiece): ContourWhole =>
                to.ContourWhole(sequence(grainSetSequence.map((grainSetElement: number): ContourPiece =>
                    grainSetElement ? contourPiece : perimeterRestContourPiece)))

        const perimeterRhythmTopRightGrainContourWhole: ContourWhole = grainSetSequenceToContourWhole(
            buildGrainSetSequence(TOP_RIGHT_GRAIN_SEQUENCE_INDEX_TO_VARY),
            perimeterRhythmTopRightGrainContourPiece,
        )
        const perimeterRhythmTopGrainContourWhole: ContourWhole = grainSetSequenceToContourWhole(
            buildGrainSetSequence(TOP_GRAIN_SEQUENCE_INDEX_TO_VARY),
            perimeterRhythmTopGrainContourPiece,
        )
        const perimeterRhythmTopLeftGrainContourWhole: ContourWhole = grainSetSequenceToContourWhole(
            buildGrainSetSequence(TOP_LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY),
            perimeterRhythmTopLeftGrainContourPiece,
        )
        const perimeterRhythmLeftGrainContourWhole: ContourWhole = grainSetSequenceToContourWhole(
            buildGrainSetSequence(LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY),
            perimeterRhythmLeftGrainContourPiece,
        )

        return {
            perimeterRhythmLeftGrainContourWhole,
            perimeterRhythmTopGrainContourWhole,
            perimeterRhythmTopLeftGrainContourWhole,
            perimeterRhythmTopRightGrainContourWhole,
            supertileRhythmHigherPitchContourWhole: to.ContourWhole(sequence([
                supertileRhythmHigherPitchContourPiece,
            ])),
            supertileRhythmLowerPitchContourWhole: to.ContourWhole(sequence([
                supertileRhythmLowerPitchContourPiece,
            ])),
        }
    }

export {
    buildContourWholes,
}
