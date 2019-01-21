// tslint:disable:no-magic-numbers

import { Base, Frequency, Millisecond, Offset, Scalar, to } from '@musical-patterns/utilities'

const HOUNDSTOOTHTOPIA_THEME_BASE_FREQUENCY: Frequency = to.Frequency(141.42)
const HOUNDSTOOTHTOPIA_THEME_BASE_DURATION: Millisecond = to.Millisecond(471.4)
const HOUNDSTOOTHTOPIA_THEME_POSITION_OFFSET: Offset[] = [ 0, 0, 0 ].map(to.Offset)
const HOUNDSTOOTHTOPIA_THEME_POSITION_SCALAR: Scalar = to.Scalar(4)

const SQRT_TWO_AS_BASE: Base = to.Base(Math.sqrt(2))

const PITCH_SCALAR_INDICATING_REST: Scalar = to.Scalar(-1)

export {
    HOUNDSTOOTHTOPIA_THEME_BASE_DURATION,
    HOUNDSTOOTHTOPIA_THEME_BASE_FREQUENCY,
    SQRT_TWO_AS_BASE,
    PITCH_SCALAR_INDICATING_REST,
    HOUNDSTOOTHTOPIA_THEME_POSITION_OFFSET,
    HOUNDSTOOTHTOPIA_THEME_POSITION_SCALAR,
}
