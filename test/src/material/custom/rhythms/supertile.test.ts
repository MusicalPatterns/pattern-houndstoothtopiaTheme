import { Block, to } from '@musical-patterns/utilities'
import { computeSupertileRhythm } from '../../../../../src/indexForTest'

describe('supertile rhythm', () => {
    it('evokes the four different tiles of houndstooth: black/black, black/white, white/white, white/black, alternating short and long durations, where short is 1 and long is square root of 2, and black is 2 count and white is 1 count', () => {
        const supertileRhythm: Block = computeSupertileRhythm()

        expect(supertileRhythm)
            .toEqual(to.Block([
                0, 1,
                0, 0, 1,
                0, 0, 1, 1,
                0, 1, 1,
            ]))
    })
})
