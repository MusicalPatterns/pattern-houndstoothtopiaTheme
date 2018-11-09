// tslint:disable:no-magic-numbers

import { Base, Scalar, to } from '../../../../src'

const SQRT_THREE_AS_BASE: Base = to.Base(Math.sqrt(3))
const SQRT_TWO_AS_BASE: Base = to.Base(Math.sqrt(2))

const HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR: Scalar = to.Scalar(Math.sqrt(2) - 1)

export {
    SQRT_THREE_AS_BASE,
    SQRT_TWO_AS_BASE,
    HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR,
}
