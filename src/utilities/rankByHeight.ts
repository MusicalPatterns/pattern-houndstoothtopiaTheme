import { Block, Index, isCloseTo, to } from '../../../../src'
import { Coordinate, CoordinateElement, from, to as houndstoothtopiaTo } from '../nominal'

const reverseNumericalSortBecauseGraphicsYIsUpsideDown: (a: number, b: number) => number =
    (a: number, b: number): number =>
        b - a

const rankByHeight: (coordinates: Coordinate[]) => Block =
    (coordinates: Coordinate[]): Block => {
        const uniqueHeights: CoordinateElement[] = []
        coordinates.forEach((coordinate: Coordinate): void => {
            const height: CoordinateElement = coordinate[ 1 ]

            const uniqueHeightsDoesNotAlreadyIncludeHeight: boolean = uniqueHeights.every(
                (uniqueHeight: CoordinateElement): boolean =>
                    !isCloseTo(uniqueHeight, height),
            )
            if (uniqueHeightsDoesNotAlreadyIncludeHeight) {
                uniqueHeights.push(height)
            }
        })
        const sortedUniqueHeights: CoordinateElement[] = uniqueHeights
            .map(from.CoordinateElement)
            .sort(reverseNumericalSortBecauseGraphicsYIsUpsideDown)
            .map(houndstoothtopiaTo.CoordinateElement)

        const coordinateHeightRanks: Index[] =
            coordinates.map((coordinate: Coordinate): Index => {
                const height: CoordinateElement = coordinate[ 1 ]

                return to.Index(sortedUniqueHeights.findIndex(
                    (uniqueHeight: CoordinateElement): boolean =>
                        isCloseTo(uniqueHeight, height)),
                )
            })

        return to.Block(coordinateHeightRanks)
    }

export {
    rankByHeight,
}
