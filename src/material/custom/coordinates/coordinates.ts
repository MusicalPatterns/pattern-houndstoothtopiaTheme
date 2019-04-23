import { as, Cycle, ORIGIN, use } from '@musical-patterns/utilities'
import { PlanarCoordinate } from '../types'
import { TRANSLATION_TO_SPECIALIZE_COORDINATES_FOR_THEME } from './constants'
import houndstoothOutline from './houndstoothOutline'

const computeHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme: () => Cycle<PlanarCoordinate> =
    (): Cycle<PlanarCoordinate> =>
        use.Cardinal(
            as.Cycle(
                houndstoothOutline.map(
                    ([ x, y ]: [ number, number ]): PlanarCoordinate => [ as.Space(x), as.Space(y) ],
                ),
            ),
            TRANSLATION_TO_SPECIALIZE_COORDINATES_FOR_THEME,
        )

const computeHoundstoothSolidCenterOriginCoordinate: () => PlanarCoordinate =
    (): PlanarCoordinate =>
        [ ORIGIN, ORIGIN ]

export {
    computeHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme,
    computeHoundstoothSolidCenterOriginCoordinate,
}
