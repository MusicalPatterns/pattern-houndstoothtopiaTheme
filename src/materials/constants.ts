// tslint:disable:no-magic-numbers

import { Index, Scalar, to } from '../../../../src'

const HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR: Scalar = to.Scalar(Math.sqrt(2) - 1)

const HIGHER_SUPERTILE_PITCH: Scalar = to.Scalar(Math.sqrt(2) * 5 / 2)
const LOWER_SUPERTILE_PITCH: Scalar = to.Scalar(1)

const TOP_RIGHT_GRAIN_SEQUENCE_INDEX_TO_VARY: Index = to.Index(0)
const TOP_GRAIN_SEQUENCE_INDEX_TO_VARY: Index = to.Index(1)
const TOP_LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY: Index = to.Index(2)
const LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY: Index = to.Index(3)

export {
    HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR,
    HIGHER_SUPERTILE_PITCH,
    LOWER_SUPERTILE_PITCH,
    TOP_RIGHT_GRAIN_SEQUENCE_INDEX_TO_VARY,
    TOP_GRAIN_SEQUENCE_INDEX_TO_VARY,
    TOP_LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY,
    LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY,
}
