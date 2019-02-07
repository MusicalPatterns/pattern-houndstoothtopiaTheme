import {
    apply,
    Block,
    Coordinate2d,
    Cycle,
    distanceBetween,
    from,
    Length,
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
        const houndstoothPerimeterSegmentLengths: Length[] =
            houndstoothCoordinateCycle.map((coordinate: Coordinate2d, index: number): Length => {
                const nextIndex: Ordinal = apply.Translation(to.Ordinal(index), NEXT)
                const nextCoordinate: Coordinate2d = apply.Ordinal(houndstoothCoordinateCycle, nextIndex)

                return distanceBetween(to.Coordinate(coordinate), to.Coordinate(nextCoordinate))
            })

        return to.Block(houndstoothPerimeterSegmentLengths.map((length: Length): number =>
            from.Length(apply.Base(length, to.Base(SQUARE_ROOT_OF_TWO))),
        ))
    }

export {
    buildPerimeterRhythm,
}
