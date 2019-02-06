// tslint:disable no-magic-numbers

import { Radians, to, Translation } from '@musical-patterns/utilities'

const NO_TURN_COUNTERCLOCKWISE: Radians = to.Radians(Math.PI * 0)
const EIGHTH_TURN_COUNTERCLOCKWISE: Radians = to.Radians(Math.PI * -1 / 4)
const QUARTER_TURN_COUNTERCLOCKWISE: Radians = to.Radians(Math.PI * -1 / 2)
const THREE_EIGHTHS_TURN_COUNTERCLOCKWISE: Radians = to.Radians(Math.PI * -3 / 4)

const PERIMETER_PITCH_TRANSLATION: Translation = to.Translation(3)

export {
    NO_TURN_COUNTERCLOCKWISE,
    EIGHTH_TURN_COUNTERCLOCKWISE,
    QUARTER_TURN_COUNTERCLOCKWISE,
    THREE_EIGHTHS_TURN_COUNTERCLOCKWISE,
    PERIMETER_PITCH_TRANSLATION,
}
