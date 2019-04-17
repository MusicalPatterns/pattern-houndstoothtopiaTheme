// tslint:disable no-magic-numbers

import {
    apply,
    negative,
    ONE_FOURTH,
    ONE_HALF,
    PI,
    Radians,
    Space,
    THREE_FOURTHS,
    to,
    Translation,
} from '@musical-patterns/utilities'

const NO_TURN_COUNTERCLOCKWISE: Radians = apply.Scalar(PI, to.Scalar<Radians>(0))
const EIGHTH_TURN_COUNTERCLOCKWISE: Radians = apply.Scalar(PI, negative(ONE_FOURTH))
const QUARTER_TURN_COUNTERCLOCKWISE: Radians = apply.Scalar(PI, negative(ONE_HALF))
const THREE_EIGHTHS_TURN_COUNTERCLOCKWISE: Radians = apply.Scalar(PI, negative(THREE_FOURTHS))

const PERIMETER_PITCH_TRANSLATION: Translation<Space> = to.Translation<Space>(3)

export {
    NO_TURN_COUNTERCLOCKWISE,
    EIGHTH_TURN_COUNTERCLOCKWISE,
    QUARTER_TURN_COUNTERCLOCKWISE,
    THREE_EIGHTHS_TURN_COUNTERCLOCKWISE,
    PERIMETER_PITCH_TRANSLATION,
}
