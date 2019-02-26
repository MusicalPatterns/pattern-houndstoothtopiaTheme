// tslint:disable no-magic-numbers

import {
    apply,
    FIVE_HALVES,
    Frequency,
    negative,
    Ordinal,
    Scalar,
    SQUARE_ROOT_OF_TWO,
    Time,
    to,
} from '@musical-patterns/utilities'

const HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR: Scalar<Time> = to.Scalar(to.Time(apply.Translation(
    SQUARE_ROOT_OF_TWO,
    to.Translation(negative(1)),
)))

const HIGHER_SUPERTILE_PITCH: Scalar<Frequency> = to.Scalar(to.Frequency(apply.Scalar(SQUARE_ROOT_OF_TWO, FIVE_HALVES)))
const LOWER_SUPERTILE_PITCH: Scalar<Frequency> = to.Scalar(to.Frequency(1))

const TOP_RIGHT_GRAIN_SEQUENCE_INDEX_TO_VARY: Ordinal = to.Ordinal(0)
const TOP_GRAIN_SEQUENCE_INDEX_TO_VARY: Ordinal = to.Ordinal(1)
const TOP_LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY: Ordinal = to.Ordinal(2)
const LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY: Ordinal = to.Ordinal(3)

const HOUNDSTOOTHTOPIA_THEME_X_POSITION_SCALE_INDEX: Ordinal = to.Ordinal(3)

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
