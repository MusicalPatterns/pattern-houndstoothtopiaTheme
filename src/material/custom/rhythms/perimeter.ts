import {
    as,
    Block,
    Cycle,
    distanceBetween,
    INCREMENT,
    map,
    Ordinal,
    Space,
    SQUARE_ROOT_OF_TWO,
    use,
} from '@musical-patterns/utilities'
import { computeHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme } from '../coordinates'
import { PlanarCoordinate } from '../types'

const computePerimeterRhythm: () => Block =
    (): Block => {
        const houndstoothCoordinateCycle: Cycle<PlanarCoordinate> = as.Cycle(
            computeHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme(),
        )
        const houndstoothPerimeterSegmentLengths: Space[] =
            map(
                houndstoothCoordinateCycle,
                (coordinate: PlanarCoordinate, index: Ordinal<PlanarCoordinate[]>): Space => {
                    const nextIndex: Ordinal<PlanarCoordinate[]> = use.Cardinal(index, INCREMENT)
                    const nextCoordinate: PlanarCoordinate =
                        use.Ordinal(houndstoothCoordinateCycle, nextIndex)

                    return distanceBetween(coordinate, nextCoordinate)
                },
            )

        return as.Block(houndstoothPerimeterSegmentLengths.map((computeLength: Space): number =>
            as.number(use.Logarithm(computeLength, as.Logarithm<Space>(SQUARE_ROOT_OF_TWO))),
        ))
    }

export {
    computePerimeterRhythm,
}
