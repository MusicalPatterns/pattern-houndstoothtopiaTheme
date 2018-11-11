import { ContourElement } from '../../../../src'

interface CoordinateElement extends Number {
    _CoordinateElementBrand: string,
}

type Coordinate = CoordinateElement[]

interface Length extends Number {
    _LengthBrand: string,
}

interface Radian extends Number {
    _RadianBrand: string,
}

enum _GrainSetBrand {}
type GrainSet = _GrainSetBrand & number[]

enum _GrainSetSequenceBrand {}
type GrainSetSequence = _GrainSetSequenceBrand & number[]

export {
    ContourElement,
    Coordinate,
    CoordinateElement,
    Length,
    Radian,
    GrainSet,
    GrainSetSequence,
}
