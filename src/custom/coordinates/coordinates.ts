// tslint:disable:no-magic-numbers

import { Coordinate, cycle, to } from '@musical-patterns/utilities'
import houndstoothOutline from './houndstoothOutline'

const buildHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme: () => Coordinate[] =
    (): Coordinate[] =>
        cycle(houndstoothOutline, to.Offset(1))
            .map(to.Coordinate)

const buildHoundstoothSolidCenterOriginCoordinate: () => Coordinate =
    (): Coordinate =>
        to.Coordinate([ 0, 0 ])

export {
    buildHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme,
    buildHoundstoothSolidCenterOriginCoordinate,
}
