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
    Thunk,
    use,
} from '@musical-patterns/utilities'
import { thunkHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme } from '../coordinates'
import { PlanarCoordinate } from '../types'

const thunkPerimeterRhythm: Thunk<Block> =
    (): Block => {
        const houndstoothCoordinateCycle: Cycle<PlanarCoordinate> = as.Cycle(
            thunkHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme(),
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
    thunkPerimeterRhythm,
}
