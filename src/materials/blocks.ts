// tslint:disable:no-magic-numbers

import { Block, DictionaryOf } from '../../../../src'
import { buildPerimeterPitches, buildPerimeterRhythm, buildSupertileRhythm } from '../custom'

const buildBlocks: () => DictionaryOf<Block> =
    (): DictionaryOf<Block> => {
        const perimeterRhythm: Block = buildPerimeterRhythm()
        const supertileRhythm: Block = buildSupertileRhythm()

        const {
            perimeterRhythmLeftGrainPitches,
            perimeterRhythmTopGrainPitches,
            perimeterRhythmTopLeftGrainPitches,
            perimeterRhythmTopRightGrainPitches,
        } = buildPerimeterPitches()

        return {
            perimeterRhythm,
            perimeterRhythmLeftGrainPitches,
            perimeterRhythmTopGrainPitches,
            perimeterRhythmTopLeftGrainPitches,
            perimeterRhythmTopRightGrainPitches,
            supertileRhythm,
        }
    }

export {
    buildBlocks,
}
