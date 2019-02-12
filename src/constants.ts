// tslint:disable no-magic-numbers

import { Hz, Meters, Ms, negative, Scalar, to } from '@musical-patterns/utilities'

const HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_FREQUENCY: Scalar<Hz> = to.Scalar(to.Hz(141.42))
const HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_DURATION: Scalar<Ms> = to.Scalar(to.Ms(471.4))
const HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_POSITION_SCALAR: Scalar<Meters> = to.Scalar(to.Meters(4))

const PITCH_INDICATING_REST: number = negative(1)

export {
    HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_DURATION,
    HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_FREQUENCY,
    PITCH_INDICATING_REST,
    HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_POSITION_SCALAR,
}
