// tslint:disable:variable-name no-any

import { CoordinateElement, Length, Radian } from './types'

const CoordinateElement: (coordinateElement: CoordinateElement) => number =
    (coordinateElement: CoordinateElement): number => coordinateElement as any

const Length: (length: Length) => number =
    (length: Length): number => length as any

const Radian: (radian: Radian) => number =
    (radian: Radian): number => radian as any

export {
    CoordinateElement,
    Length,
    Radian,
}
