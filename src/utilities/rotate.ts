import { applyScale, Scalar, to } from '../../../../src'
import { Coordinate, from, to as houndstoothtopiaTo } from '../nominal'
import { RotateParameters } from './types'

const rotate: (rotateParameters: RotateParameters) => Coordinate =
    ({ fixedCoordinate, coordinate, rotation }: RotateParameters): Coordinate => {
        const sin: Scalar = to.Scalar(Math.sin(from.Radian(rotation)))
        const cos: Scalar = to.Scalar(Math.cos(from.Radian(rotation)))

        const rawCoordinateX: number = from.CoordinateElement(fixedCoordinate[ 0 ])
        const rawCoordinateY: number = from.CoordinateElement(fixedCoordinate[ 1 ])

        const relativeX: number = from.CoordinateElement(coordinate[ 0 ]) - rawCoordinateX
        const relativeY: number = from.CoordinateElement(coordinate[ 1 ]) - rawCoordinateY

        return houndstoothtopiaTo.Coordinate([
            applyScale(rawCoordinateX + relativeX, cos) - applyScale(relativeY, sin),
            applyScale(rawCoordinateY + relativeX, sin) + applyScale(relativeY, cos),
        ])
    }

export {
    rotate,
}
