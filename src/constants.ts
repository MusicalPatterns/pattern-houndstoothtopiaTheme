// tslint:disable no-magic-numbers

import { Frequency, Milliseconds, negative, Scalar, to } from '@musical-patterns/utilities'

const HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_FREQUENCY: Frequency = to.Frequency(141.42)
const HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_DURATION: Milliseconds = to.Milliseconds(471.4)
const HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_POSITION_SCALAR: Scalar = to.Scalar(4)

const PITCH_INDICATING_REST: number = negative(1)

export {
    HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_DURATION,
    HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_FREQUENCY,
    PITCH_INDICATING_REST,
    HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_POSITION_SCALAR,
}
