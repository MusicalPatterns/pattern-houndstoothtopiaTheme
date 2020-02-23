import { as, Cycle, ORIGIN, Thunk, use } from '@musical-patterns/utilities'
import { PlanarCoordinate } from '../types'
import { TRANSLATION_TO_SPECIALIZE_COORDINATES_FOR_THEME } from './constants'
import houndstoothOutline from './houndstoothOutline'

const thunkHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme: Thunk<Cycle<PlanarCoordinate>> =
    (): Cycle<PlanarCoordinate> =>
        use.Cardinal(
            as.Cycle<PlanarCoordinate>(
                houndstoothOutline.map(
                    ([ x, y ]: [ number, number ]): PlanarCoordinate => [ as.Space(x), as.Space(y) ],
                ),
            ),
            TRANSLATION_TO_SPECIALIZE_COORDINATES_FOR_THEME,
        )

const thunkHoundstoothSolidCenterOriginCoordinate: Thunk<PlanarCoordinate> =
    (): PlanarCoordinate =>
        [ ORIGIN, ORIGIN ]

export {
    thunkHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme,
    thunkHoundstoothSolidCenterOriginCoordinate,
}
