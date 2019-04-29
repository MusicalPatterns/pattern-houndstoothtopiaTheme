// tslint:disable no-magic-numbers

import { as, Duration, musicalAs, Pitch, Position, Scalar } from '@musical-patterns/utilities'

const HOUNDSTOOTHTOPIA_THEME_INITIAL_BASIS_FREQUENCY: Pitch = musicalAs.Pitch(141.42)
const HOUNDSTOOTHTOPIA_THEME_INITIAL_BASIS_DURATION: Duration = musicalAs.Duration(471.4)
const HOUNDSTOOTHTOPIA_THEME_INITIAL_BASIS_POSITION_SCALAR: Scalar<Position> = as.Scalar<Position>(4)

export {
    HOUNDSTOOTHTOPIA_THEME_INITIAL_BASIS_DURATION,
    HOUNDSTOOTHTOPIA_THEME_INITIAL_BASIS_FREQUENCY,
    HOUNDSTOOTHTOPIA_THEME_INITIAL_BASIS_POSITION_SCALAR,
}
