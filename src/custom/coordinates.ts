// tslint:disable:no-magic-numbers

import { Coordinate, cycle, to } from '@musical-patterns/utilities'
// tslint:disable-next-line:no-reaching-imports
import houndstoothOutline from '../../standalone-houndstooth-outline/houndstoothOutline'

const buildHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme: () => Coordinate[] =
    (): Coordinate[] =>
        // tslint:disable-next-line:no-unsafe-any
        cycle(houndstoothOutline, to.Offset(1))
            .map(to.Coordinate)

const buildHoundstoothSolidCenterOriginCoordinate: () => Coordinate =
    (): Coordinate =>
        to.Coordinate([ 0, 0 ])

export {
    buildHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme,
    buildHoundstoothSolidCenterOriginCoordinate,
}
