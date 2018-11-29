// tslint:disable:no-magic-numbers

import { Base, Scalar, to } from '@musical-patterns/utilities'

const HOUNDSTOOTHTOPIA_THEME_PITCH_SCALAR: Scalar = to.Scalar(141.42)
const HOUNDSTOOTHTOPIA_THEME_DURATION_SCALAR: Scalar = to.Scalar(471.4)

const SQRT_TWO_AS_BASE: Base = to.Base(Math.sqrt(2))

const PITCH_SCALAR_INDICATING_REST: Scalar = to.Scalar(-1)

export {
    HOUNDSTOOTHTOPIA_THEME_DURATION_SCALAR,
    HOUNDSTOOTHTOPIA_THEME_PITCH_SCALAR,
    SQRT_TWO_AS_BASE,
    PITCH_SCALAR_INDICATING_REST,
}
