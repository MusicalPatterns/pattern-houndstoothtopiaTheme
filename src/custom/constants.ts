// tslint:disable:no-magic-numbers

import { Index, to } from '../../../../src'
import { Radian, to as houndstoothtopiaTo } from '../nominal'

const HIGHER_PITCH: Index = to.Index(1)
const LOWER_PITCH: Index = to.Index(0)

const NO_TURN_COUNTERCLOCKWISE: Radian = houndstoothtopiaTo.Radian(Math.PI * 0)
const EIGHTH_TURN_COUNTERCLOCKWISE: Radian = houndstoothtopiaTo.Radian(Math.PI * -1 / 4)
const QUARTER_TURN_COUNTERCLOCKWISE: Radian = houndstoothtopiaTo.Radian(Math.PI * -1 / 2)
const THREE_EIGHTHS_TURN_COUNTERCLOCKWISE: Radian = houndstoothtopiaTo.Radian(Math.PI * -3 / 4)

export {
    HIGHER_PITCH,
    LOWER_PITCH,
    NO_TURN_COUNTERCLOCKWISE,
    EIGHTH_TURN_COUNTERCLOCKWISE,
    QUARTER_TURN_COUNTERCLOCKWISE,
    THREE_EIGHTHS_TURN_COUNTERCLOCKWISE,
}
