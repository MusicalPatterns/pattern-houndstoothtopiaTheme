// tslint:disable no-magic-numbers

import { apply, Coordinate2d, Cycle, to } from '@musical-patterns/utilities'
import houndstoothOutline from './houndstoothOutline'

const buildHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme: () => Cycle<Coordinate2d> =
    (): Cycle<Coordinate2d> =>
        apply.Translation(to.Cycle(houndstoothOutline as Coordinate2d[]), to.Translation(1))

const buildHoundstoothSolidCenterOriginCoordinate: () => Coordinate2d =
    (): Coordinate2d =>
        [ 0, 0 ]

export {
    buildHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme,
    buildHoundstoothSolidCenterOriginCoordinate,
}
