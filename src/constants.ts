// tslint:disable:no-magic-numbers

import { Base, Index, Scalar, to } from '../../../src'

const HOUNDSTOOTHTOPIA_THEME_PITCH_SCALAR: Scalar = to.Scalar(141)
const HOUNDSTOOTHTOPIA_THEME_DURATION_SCALAR: Scalar = to.Scalar(75)

const SQRT_THREE_AS_BASE: Base = to.Base(Math.sqrt(3))
const SQRT_TWO_AS_BASE: Base = to.Base(Math.sqrt(2))

const X_AXIS: Index = to.Index(0)
const Y_AXIS: Index = to.Index(1)
const Z_AXIS: Index = to.Index(2)

const PITCH_INDEX_INDICATING_REST: Index = to.Index(-1)

export {
    HOUNDSTOOTHTOPIA_THEME_DURATION_SCALAR,
    HOUNDSTOOTHTOPIA_THEME_PITCH_SCALAR,
    SQRT_TWO_AS_BASE,
    SQRT_THREE_AS_BASE,
    X_AXIS,
    Y_AXIS,
    Z_AXIS,
    PITCH_INDEX_INDICATING_REST,
}
