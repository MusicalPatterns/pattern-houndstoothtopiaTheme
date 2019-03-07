import { apply, Coordinate, Cycle, ORIGIN, Space, to, TwoDimensional } from '@musical-patterns/utilities'
import { TRANSLATION_TO_SPECIALIZE_COORDINATES_FOR_THEME } from './constants'
import houndstoothOutline from './houndstoothOutline'

const buildHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme: () => Cycle<Coordinate<Space, TwoDimensional>> =
    (): Cycle<Coordinate<Space, TwoDimensional>> =>
        apply.Translation(
            to.Cycle(
                houndstoothOutline.map(
                    ([ x, y ]: [ number, number ]): Coordinate<Space, TwoDimensional> => [ to.Space(x), to.Space(y) ],
                ),
            ),
            TRANSLATION_TO_SPECIALIZE_COORDINATES_FOR_THEME,
        )

const buildHoundstoothSolidCenterOriginCoordinate: () => Coordinate<Space, TwoDimensional> =
    (): Coordinate<Space, TwoDimensional> =>
        [ ORIGIN, ORIGIN ]

export {
    buildHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme,
    buildHoundstoothSolidCenterOriginCoordinate,
}
