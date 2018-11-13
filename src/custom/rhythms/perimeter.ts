import { applyLogarithm, applyOffset, Block, Coordinate, Index, to, wrapWithin } from '../../../../../src'
import { SQRT_TWO_AS_BASE } from '../../constants'
import { from as houndstoothtopiaFrom, Length } from '../../nominal'
import { distanceBetween } from '../../utilities'
import {
    buildHoundstoothCoordinatesWholeNumbersSolidCenterOriginClockwiseStartingOnConidBeforeCusps,
} from '../coordinates'

const buildPerimeterRhythm: () => Block =
    (): Block => {
        const houndstoothCoordinates: Coordinate[] =
            buildHoundstoothCoordinatesWholeNumbersSolidCenterOriginClockwiseStartingOnConidBeforeCusps()
        const houndstoothPerimeterSegmentLengths: Length[] =
            houndstoothCoordinates.map((coordinate: Coordinate, index: number): Length => {
                const nextIndex: number = wrapWithin(applyOffset(index, to.Offset(1)), houndstoothCoordinates.length)
                const nextCoordinate: Coordinate = houndstoothCoordinates[ nextIndex ]

                return distanceBetween(coordinate, nextCoordinate)
            })

        return to.Block(houndstoothPerimeterSegmentLengths.map((length: Length): Index =>
            to.Index(applyLogarithm(houndstoothtopiaFrom.Length(length), SQRT_TWO_AS_BASE)),
        ))
    }

export {
    buildPerimeterRhythm,
}
