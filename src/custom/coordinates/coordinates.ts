// tslint:disable:no-magic-numbers

import { Coordinate2d, cycle, to } from '@musical-patterns/utilities'
import houndstoothOutline from './houndstoothOutline'

const buildHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme: () => Coordinate2d[] =
    (): Coordinate2d[] =>
        cycle(houndstoothOutline, to.Offset(1)) as Coordinate2d[]

const buildHoundstoothSolidCenterOriginCoordinate: () => Coordinate2d =
    (): Coordinate2d =>
        [ 0, 0 ]

export {
    buildHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme,
    buildHoundstoothSolidCenterOriginCoordinate,
}
