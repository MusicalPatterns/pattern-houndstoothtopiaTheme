import { ContourElement } from '../../../../src'

type Contour = ContourElement[]

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
    Contour,
    ContourElement,
    Coordinate,
    CoordinateElement,
    Length,
    Radian,
}
