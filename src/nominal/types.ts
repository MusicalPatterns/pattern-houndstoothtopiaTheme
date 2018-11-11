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

export {
    ContourElement,
    Coordinate,
    CoordinateElement,
    Length,
    Radian,
}
