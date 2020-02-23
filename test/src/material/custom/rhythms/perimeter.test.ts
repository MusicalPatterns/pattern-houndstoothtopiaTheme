import { as, Block } from '@musical-patterns/utilities'
import { thunkPerimeterRhythm } from '../../../../../src/indexForTest'

describe('perimeter rhythm', (): void => {
    it('corresponds to the ranking of the lengths of sides of a houndstooth as you travel around its perimeter', (): void => {
        const perimeterRhythm: Block = thunkPerimeterRhythm()

        expect(perimeterRhythm)
            .toEqual(as.Block([ 0, 1, 0, 0, 1, 0, 3, 0, 1, 0, 0, 1, 0, 3 ]))
    })
})
