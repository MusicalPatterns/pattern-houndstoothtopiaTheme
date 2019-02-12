import {
    apply,
    Block,
    Coordinate,
    Cycle,
    distanceBetween, from,
    map,
    NEXT,
    Ordinal,
    Space,
    SQUARE_ROOT_OF_TWO,
    to,
    TwoDimensional,
} from '@musical-patterns/utilities'
import { buildHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme } from '../coordinates'

const buildPerimeterRhythm: () => Block =
    (): Block => {
        const houndstoothCoordinateCycle: Cycle<Coordinate<Space, TwoDimensional>> = to.Cycle(
            buildHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme(),
        )
        const houndstoothPerimeterSegmentLengths: Space[] =
            map(houndstoothCoordinateCycle, (coordinate: Coordinate<Space, TwoDimensional>, index: Ordinal): Space => {
                const nextIndex: Ordinal = apply.Translation(index, NEXT)
                const nextCoordinate: Coordinate<Space, TwoDimensional> =
                    apply.Ordinal(houndstoothCoordinateCycle, nextIndex)

                return distanceBetween(coordinate, nextCoordinate)
            })

        return to.Block(houndstoothPerimeterSegmentLengths.map((length: Space): number =>
            from.Space(apply.Base(length, to.Base(SQUARE_ROOT_OF_TWO))),
        ))
    }

export {
    buildPerimeterRhythm,
}
