// tslint:disable:no-magic-numbers

import { Index, Scalar, to } from '../../../../src'

const HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR: Scalar = to.Scalar(Math.sqrt(2) - 1)

const HIGHER_PITCH: Index = to.Index(1)
const LOWER_PITCH: Index = to.Index(0)

export {
    HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR,
    HIGHER_PITCH,
    LOWER_PITCH,
}
