import {
    apply,
    Block,
    Cycle,
    distanceBetween,
    from,
    INCREMENT,
    map,
    Ordinal,
    Space,
    SQUARE_ROOT_OF_TWO,
    to,
} from '@musical-patterns/utilities'
import { computeHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme } from '../coordinates'
import { PlanarCoordinate } from '../types'

const computePerimeterRhythm: () => Block =
    (): Block => {
        const houndstoothCoordinateCycle: Cycle<PlanarCoordinate> = to.Cycle(
            computeHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme(),
        )
        const houndstoothPerimeterSegmentLengths: Space[] =
            map(
                houndstoothCoordinateCycle,
                (coordinate: PlanarCoordinate, index: Ordinal<PlanarCoordinate>): Space => {
                    const nextIndex: Ordinal<PlanarCoordinate> = apply.Translation(index, INCREMENT)
                    const nextCoordinate: PlanarCoordinate =
                        apply.Ordinal(houndstoothCoordinateCycle, nextIndex)

                    return distanceBetween(coordinate, nextCoordinate)
                },
            )

        return to.Block(houndstoothPerimeterSegmentLengths.map((length: Space): number =>
            from.Space(apply.Logarithm(length, to.Logarithm<Space>(SQUARE_ROOT_OF_TWO))),
        ))
    }

export {
    computePerimeterRhythm,
}
