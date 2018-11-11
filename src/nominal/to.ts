// tslint:disable:variable-name no-any

import { Coordinate, CoordinateElement, GrainSet, GrainSetSequence, Length, Radian } from './types'

const Coordinate: (coordinate: Array<number | CoordinateElement>) => Coordinate =
    (coordinate: Array<number | CoordinateElement>): Coordinate =>
        coordinate.map((coordinateElement: number | CoordinateElement): CoordinateElement =>
            coordinateElement as any) as any

const Length: (length: number) => Length =
    (length: number): Length => length as any

const Radian: (radian: number) => Radian =
    (radian: number): Radian => radian as any

const CoordinateElement: (coordinateElement: number) => CoordinateElement =
    (coordinateElement: number): CoordinateElement => coordinateElement as any

const GrainSet: (grainSet: number[]) => GrainSet =
    (grainSet: number[]): GrainSet =>
        grainSet.map((grainSetElement: number): GrainSet => grainSetElement as any) as any

const GrainSetSequence: (grainSetSequence: number[]) => GrainSetSequence =
    (grainSetSequence: number[]): GrainSetSequence =>
        grainSetSequence.map(
            (grainSetSequenceElement: number): GrainSetSequence => grainSetSequenceElement as any) as any

export {
    Coordinate,
    Length,
    Radian,
    CoordinateElement,
    GrainSet,
    GrainSetSequence,
}
