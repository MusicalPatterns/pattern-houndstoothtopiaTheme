import {
    apply,
    Block,
    Cardinal,
    Coordinate2d,
    Cycle,
    distanceBetween,
    from,
    map,
    NEXT,
    Ordinal,
    SQUARE_ROOT_OF_TWO,
    to,
} from '@musical-patterns/utilities'
import { buildHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme } from '../coordinates'

const buildPerimeterRhythm: () => Block =
    (): Block => {
        const houndstoothCoordinateCycle: Cycle<Coordinate2d> = to.Cycle(
            buildHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme(),
        )
        const houndstoothPerimeterSegmentLengths: number[] =
            map(houndstoothCoordinateCycle, (coordinate: Coordinate2d, index: Ordinal): number => {
                const nextIndex: Ordinal = apply.Translation(index, NEXT)
                const nextCoordinate: Coordinate2d = apply.Ordinal(houndstoothCoordinateCycle, nextIndex)

                return distanceBetween(to.Coordinate(coordinate), to.Coordinate(nextCoordinate))
            })

        return to.Block(houndstoothPerimeterSegmentLengths.map((length: number): number =>
            apply.Base(length, to.Base(SQUARE_ROOT_OF_TWO)),
        ))
    }

export {
    buildPerimeterRhythm,
}
