import { Coordinate, to } from '@musical-patterns/utilities'
import { X_AXIS, Y_AXIS } from '../../../../../src/indexForTest'
import { QUARTER_TURN_COUNTERCLOCKWISE, rotate } from '../../../src/indexForTest'
import { testArraysAreClose } from '../../support/testArraysAreClose'

describe('rotate', () => {
    describe('in two dimensions', () => {
        it('works', () => {
            const actualCoordinate: Coordinate = rotate({
                coordinate: to.Coordinate([ 3, 0 ]),
                rotation: QUARTER_TURN_COUNTERCLOCKWISE,
            })
            const expectedCoordinate: Coordinate = to.Coordinate([ 0, -3 ])

            testArraysAreClose(actualCoordinate, expectedCoordinate)
        })
    })

    describe('in three dimensions', () => {
        it('works for rotating around the z-axis (the default axis)', () => {
            const actualCoordinate: Coordinate = rotate({
                coordinate: to.Coordinate([ 3, 0, 0 ]),
                rotation: QUARTER_TURN_COUNTERCLOCKWISE,
            })
            const expectedCoordinate: Coordinate = to.Coordinate([ 0, -3, 0 ])

            testArraysAreClose(actualCoordinate, expectedCoordinate)
        })

        it('works for rotating around the y-axis', () => {
            const actualCoordinate: Coordinate = rotate({
                axis: Y_AXIS,
                coordinate: to.Coordinate([ 3, 0, 0 ]),
                rotation: QUARTER_TURN_COUNTERCLOCKWISE,
            })
            const expectedCoordinate: Coordinate = to.Coordinate([ 0, 0, 3 ])

            testArraysAreClose(actualCoordinate, expectedCoordinate)
        })

        it('works for rotating around the x-axis', () => {
            const actualCoordinate: Coordinate = rotate({
                axis: X_AXIS,
                coordinate: to.Coordinate([ 0, 3, 0 ]),
                rotation: QUARTER_TURN_COUNTERCLOCKWISE,
            })
            const expectedCoordinate: Coordinate = to.Coordinate([ 0, 0, -3 ])

            testArraysAreClose(actualCoordinate, expectedCoordinate)
        })
    })
})
