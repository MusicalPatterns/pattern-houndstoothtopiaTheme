import { to } from '@musical-patterns/utilities'
import { distanceBetween, to as houndstoothtopiaTo } from '../../../src/indexForTest'

describe('distance between', () => {
    it('works for one-dimensional distances', () => {
        expect(distanceBetween(to.Coordinate([ 0 ]), to.Coordinate([ 3 ])))
            .toBe(houndstoothtopiaTo.Length(3))
    })

    it('works for two-dimensional distances', () => {
        expect(distanceBetween(to.Coordinate([ 0, 0 ]), to.Coordinate([ 3, 4 ])))
            .toBe(houndstoothtopiaTo.Length(5))
    })

    it('works for three-dimensional distances', () => {
        expect(distanceBetween(to.Coordinate([ 0, 0, 0 ]), to.Coordinate([ 3, 4, 12 ])))
            .toBe(houndstoothtopiaTo.Length(13))
    })
})
