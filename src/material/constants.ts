// tslint:disable no-magic-numbers

import { Scale } from '@musical-patterns/material'
import {
    as,
    Cycle, Duration,
    FIVE_HALVES,
    Frequency, Meters,
    negative,
    Ordinal, Point,
    Scalar,
    SQUARE_ROOT_OF_TWO,
    use,
} from '@musical-patterns/utilities'
import { Grain } from '../nominals'

const HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR: Scalar<Duration> = as.Scalar<Duration>(use.Cardinal(
    SQUARE_ROOT_OF_TWO,
    as.Cardinal(negative(1)),
))

const HIGHER_SUPERTILE_PITCH: Scalar<Frequency> = as.Scalar<Frequency>(use.Scalar(SQUARE_ROOT_OF_TWO, FIVE_HALVES))
const LOWER_SUPERTILE_PITCH: Scalar<Frequency> = as.Scalar<Frequency>(1)

const TOP_RIGHT_GRAIN_SEQUENCE_INDEX_TO_VARY: Ordinal<Array<Cycle<Grain>>> = as.Ordinal<Array<Cycle<Grain>>>(0)
const TOP_GRAIN_SEQUENCE_INDEX_TO_VARY: Ordinal<Array<Cycle<Grain>>> = as.Ordinal<Array<Cycle<Grain>>>(1)
const TOP_LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY: Ordinal<Array<Cycle<Grain>>> = as.Ordinal<Array<Cycle<Grain>>>(2)
const LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY: Ordinal<Array<Cycle<Grain>>> = as.Ordinal<Array<Cycle<Grain>>>(3)

const HOUNDSTOOTHTOPIA_THEME_X_POSITION_SCALE_INDEX: Ordinal<Array<Scale<Point<Meters>>>> =
    as.Ordinal<Array<Scale<Point<Meters>>>>(3)

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
