import { Block, to } from '@musical-patterns/pattern'
import { buildPerimeterRhythm } from '../../../../src/indexForTest'

describe('perimeter rhythm', () => {
    it('corresponds to the ranking of the lengths of sides of a houndstooth as you travel around its perimeter', () => {
        const perimeterRhythm: Block = buildPerimeterRhythm()

        expect(perimeterRhythm)
            .toEqual(to.Block([ 0, 1, 0, 0, 1, 0, 3, 0, 1, 0, 0, 1, 0, 3 ]))
    })
})
