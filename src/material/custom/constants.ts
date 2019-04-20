// tslint:disable no-magic-numbers

import {
    as,
    negative,
    ONE_FOURTH,
    ONE_HALF,
    PI,
    Radians,
    Space,
    THREE_FOURTHS,
    Translation,
    use,
} from '@musical-patterns/utilities'

const NO_TURN_COUNTERCLOCKWISE: Radians = use.Scalar(PI, as.Scalar<Radians>(0))
const EIGHTH_TURN_COUNTERCLOCKWISE: Radians = use.Scalar(PI, negative(ONE_FOURTH))
const QUARTER_TURN_COUNTERCLOCKWISE: Radians = use.Scalar(PI, negative(ONE_HALF))
const THREE_EIGHTHS_TURN_COUNTERCLOCKWISE: Radians = use.Scalar(PI, negative(THREE_FOURTHS))

const PERIMETER_PITCH_TRANSLATION: Translation<Space> = as.Translation<Space>(3)

export {
    NO_TURN_COUNTERCLOCKWISE,
    EIGHTH_TURN_COUNTERCLOCKWISE,
    QUARTER_TURN_COUNTERCLOCKWISE,
    THREE_EIGHTHS_TURN_COUNTERCLOCKWISE,
    PERIMETER_PITCH_TRANSLATION,
}
