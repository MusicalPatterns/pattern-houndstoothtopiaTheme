import { Coordinate, Index, Scalar } from '@musical-patterns/utilities'
import { Radian } from '../nominal'

interface RotateParameters {
    axis?: Index,
    coordinate: Coordinate,
    fixedCoordinate?: Coordinate,
    rotation: Radian,
}

type ArrayMap = <T>(rotationVectorOrMatrix: T[]) => T[]

type RotationMatrix = Scalar[][]

export {
    ArrayMap,
    RotateParameters,
    RotationMatrix,
}
