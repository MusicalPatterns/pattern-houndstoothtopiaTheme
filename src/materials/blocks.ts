// tslint:disable:no-magic-numbers

import { Block, DictionaryOf, repeat, to } from '../../../../src'

const buildBlocks: () => DictionaryOf<Block> =
    (): DictionaryOf<Block> => {
        const perimeterRhythm: Block = to.Block(repeat([ 0, 1, 0, 0, 1, 0, 3 ], to.Count(2)))
        const supertileRhythm: Block = to.Block([
            0, 1,
            0, 0, 1,
            0, 0, 1, 1,
            0, 1, 1,
        ])

        const perimeterRhythmLeftGrainPitches: Block = to.Block([ 4, 3, 3, 2, 1, 1, 0, 0, 1, 1, 2, 3, 3, 4 ])
        const perimeterRhythmTopGrainPitches: Block = to.Block([ 0, 1, 3, 2, 3, 1, 0, 4, 5, 7, 6, 7, 5, 4 ])
        const perimeterRhythmTopLeftGrainPitches: Block = to.Block([ 2, 2, 3, 2, 2, 1, 0, 2, 3, 4, 4, 5, 4, 4 ])
        const perimeterRhythmTopRightGrainPitches: Block = to.Block([ 0, 1, 2, 2, 3, 2, 2, 4, 4, 5, 4, 4, 3, 2 ])

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
