// tslint:disable:no-magic-numbers

import { Coordinate, to } from '../../../../src'

const buildHoundstoothCoordinatesWholeNumbersSolidCenterOriginClockwiseStartingOnConidBeforeCusps: () => Coordinate[] =
    (): Coordinate[] =>
        [
            [ -1, -1 ],
            [ 0, -1 ],
            [ 1, -2 ],
            [ 1, -1 ],
            [ 2, -1 ],
            [ 1, 0 ],
            [ 1, 1 ],
            [ -1, 3 ],
            [ -1, 2 ],
            [ 0, 1 ],
            [ -1, 1 ],
            [ -1, 0 ],
            [ -2, 1 ],
            [ -3, 1 ],
        ].map(to.Coordinate)

const buildHoundstoothSolidCenterOriginCoordinate: () => Coordinate =
    (): Coordinate =>
        to.Coordinate([ 0, 0 ])

export {
    buildHoundstoothCoordinatesWholeNumbersSolidCenterOriginClockwiseStartingOnConidBeforeCusps,
    buildHoundstoothSolidCenterOriginCoordinate,
}
