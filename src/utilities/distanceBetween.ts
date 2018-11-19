import { Coordinate, CoordinateElement, from } from '@musical-patterns/utilities'
import { applyPower, SQUARE_ROOT, SQUARED } from '../../../../src'
import { from as houndstoothtopiaFrom, Length, to as houndstoothtopiaTo } from '../nominal'

const distanceBetween: (pointA: Coordinate, pointB: Coordinate) => Length =
    (pointA: Coordinate, pointB: Coordinate): Length => {
        const sumOfSquaresOfDimensionalDistances: number = pointA.reduce(
            (sum: number, pointAElement: CoordinateElement, index: number): number => {
                const pointBElement: CoordinateElement = pointB[ index ]
                const dimensionalDistance: Length = houndstoothtopiaTo.Length(Math.abs(
                    from.CoordinateElement(pointAElement) - from.CoordinateElement(pointBElement),
                ))
                const squareOfDimensionalDistance: number = applyPower(
                    houndstoothtopiaFrom.Length(dimensionalDistance),
                    SQUARED,
                )

                return sum + squareOfDimensionalDistance
            },
            0,
        )

        return houndstoothtopiaTo.Length(applyPower(sumOfSquaresOfDimensionalDistances, SQUARE_ROOT))
    }

export {
    distanceBetween,
}
