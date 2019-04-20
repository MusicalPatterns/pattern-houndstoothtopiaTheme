// tslint:disable no-magic-numbers

import { Scale } from '@musical-patterns/material'
import {
    as,
    Cycle,
    FIVE_HALVES,
    Frequency,
    negative,
    Ordinal,
    Scalar,
    SQUARE_ROOT_OF_TWO,
    use,
} from '@musical-patterns/utilities'
import { Grain } from '../nominals'

const HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR: Scalar<Scalar> = as.Scalar<Scalar>(use.Translation(
    SQUARE_ROOT_OF_TWO,
    as.Translation(negative(1)),
))

const HIGHER_SUPERTILE_PITCH: Scalar<Frequency> = as.Scalar<Frequency>(use.Scalar(SQUARE_ROOT_OF_TWO, FIVE_HALVES))
const LOWER_SUPERTILE_PITCH: Scalar<Frequency> = as.Scalar<Frequency>(1)

const TOP_RIGHT_GRAIN_SEQUENCE_INDEX_TO_VARY: Ordinal<Cycle<Grain>> = as.Ordinal<Cycle<Grain>>(0)
const TOP_GRAIN_SEQUENCE_INDEX_TO_VARY: Ordinal<Cycle<Grain>> = as.Ordinal<Cycle<Grain>>(1)
const TOP_LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY: Ordinal<Cycle<Grain>> = as.Ordinal<Cycle<Grain>>(2)
const LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY: Ordinal<Cycle<Grain>> = as.Ordinal<Cycle<Grain>>(3)

const HOUNDSTOOTHTOPIA_THEME_X_POSITION_SCALE_INDEX: Ordinal<Scale> = as.Ordinal<Scale>(3)

export {
    HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR,
    HIGHER_SUPERTILE_PITCH,
    LOWER_SUPERTILE_PITCH,
    TOP_RIGHT_GRAIN_SEQUENCE_INDEX_TO_VARY,
    TOP_GRAIN_SEQUENCE_INDEX_TO_VARY,
    TOP_LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY,
    LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY,
    HOUNDSTOOTHTOPIA_THEME_X_POSITION_SCALE_INDEX,
}
