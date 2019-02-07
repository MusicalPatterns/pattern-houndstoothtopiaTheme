import {
    apply,
    Block,
    Coordinate2d,
    distanceBetween,
    from,
    Length,
    Ordinal, SQUARE_ROOT_OF_TWO,
    to,
    wrapWithin,
} from '@musical-patterns/utilities'
import { buildHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme } from '../coordinates'

const buildPerimeterRhythm: () => Block =
    (): Block => {
        const houndstoothCoordinates: Coordinate2d[] =
            buildHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme()
        const houndstoothPerimeterSegmentLengths: Length[] =
            houndstoothCoordinates.map((coordinate: Coordinate2d, index: number): Length => {
                const nextIndex: Ordinal =
                    to.Ordinal(wrapWithin(apply.Translation(index, to.Translation(1)), houndstoothCoordinates.length))
                const nextCoordinate: Coordinate2d = apply.Ordinal(houndstoothCoordinates, nextIndex)

                return distanceBetween(to.Coordinate(coordinate), to.Coordinate(nextCoordinate))
            })

        return to.Block(houndstoothPerimeterSegmentLengths.map((length: Length): number =>
            from.Length(apply.Base(length, to.Base(SQUARE_ROOT_OF_TWO))),
        ))
    }

export {
    buildPerimeterRhythm,
}
