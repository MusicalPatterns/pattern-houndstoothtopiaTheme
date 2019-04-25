// tslint:disable no-magic-numbers

import { as, Duration, Hz, Ms, Pitch, Point, Position, Scalar } from '@musical-patterns/utilities'

const HOUNDSTOOTHTOPIA_THEME_INITIAL_BASIS_FREQUENCY: Pitch = as.Point<Hz>(141.42)
const HOUNDSTOOTHTOPIA_THEME_INITIAL_BASIS_DURATION: Duration = as.Translation<Point<Ms>>(471.4)
const HOUNDSTOOTHTOPIA_THEME_INITIAL_BASIS_POSITION_SCALAR: Scalar<Position> = as.Scalar<Position>(4)

export {
    HOUNDSTOOTHTOPIA_THEME_INITIAL_BASIS_DURATION,
    HOUNDSTOOTHTOPIA_THEME_INITIAL_BASIS_FREQUENCY,
    HOUNDSTOOTHTOPIA_THEME_INITIAL_BASIS_POSITION_SCALAR,
}
