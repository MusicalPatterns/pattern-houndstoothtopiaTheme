import { apply, Cycle, ORIGIN, to } from '@musical-patterns/utilities'
import { PlanarCoordinate } from '../types'
import { TRANSLATION_TO_SPECIALIZE_COORDINATES_FOR_THEME } from './constants'
import houndstoothOutline from './houndstoothOutline'

const computeHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme: () => Cycle<PlanarCoordinate> =
    (): Cycle<PlanarCoordinate> =>
        apply.Translation(
            to.Cycle(
                houndstoothOutline.map(
                    ([ x, y ]: [ number, number ]): PlanarCoordinate => [ to.Space(x), to.Space(y) ],
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
