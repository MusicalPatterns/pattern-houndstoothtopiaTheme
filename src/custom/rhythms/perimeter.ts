import { Block, to as patternTo } from '@musical-patterns/pattern'
import { apply, Coordinate, distanceBetween, from, Index, Length, to, wrapWithin } from '@musical-patterns/utilities'
import { SQRT_TWO_AS_BASE } from '../../constants'
import { buildHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme } from '../coordinates'

const buildPerimeterRhythm: () => Block =
    (): Block => {
        const houndstoothCoordinates: Coordinate[] =
            buildHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme()
        const houndstoothPerimeterSegmentLengths: Length[] =
            houndstoothCoordinates.map((coordinate: Coordinate, index: number): Length => {
                const nextIndex: number = wrapWithin(apply.Offset(index, to.Offset(1)), houndstoothCoordinates.length)
                const nextCoordinate: Coordinate = houndstoothCoordinates[ nextIndex ]

                return distanceBetween(coordinate, nextCoordinate)
            })

        return patternTo.Block(houndstoothPerimeterSegmentLengths.map((length: Length): Index =>
            to.Index(apply.Base(from.Length(length), SQRT_TWO_AS_BASE)),
        ))
    }

export {
    buildPerimeterRhythm,
}
