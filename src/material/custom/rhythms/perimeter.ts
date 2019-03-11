import {
    apply,
    Block,
    Coordinate,
    Cycle,
    distanceBetween,
    from,
    map,
    NEXT,
    Ordinal,
    Space,
    SQUARE_ROOT_OF_TWO,
    to,
    TwoDimensional,
} from '@musical-patterns/utilities'
import { computeHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme } from '../coordinates'

const computePerimeterRhythm: () => Block =
    (): Block => {
        const houndstoothCoordinateCycle: Cycle<Coordinate<Space, TwoDimensional>> = to.Cycle(
            computeHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme(),
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
    computePerimeterRhythm,
}
