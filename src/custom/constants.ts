// tslint:disable:no-magic-numbers

import { Offset, to } from '../../../../src'
import { Radian, to as houndstoothtopiaTo } from '../nominal'

const NO_TURN_COUNTERCLOCKWISE: Radian = houndstoothtopiaTo.Radian(Math.PI * 0)
const EIGHTH_TURN_COUNTERCLOCKWISE: Radian = houndstoothtopiaTo.Radian(Math.PI * -1 / 4)
const QUARTER_TURN_COUNTERCLOCKWISE: Radian = houndstoothtopiaTo.Radian(Math.PI * -1 / 2)
const THREE_EIGHTHS_TURN_COUNTERCLOCKWISE: Radian = houndstoothtopiaTo.Radian(Math.PI * -3 / 4)

const PERIMETER_PITCH_OFFSET: Offset = to.Offset(3)

export {
    NO_TURN_COUNTERCLOCKWISE,
    EIGHTH_TURN_COUNTERCLOCKWISE,
    QUARTER_TURN_COUNTERCLOCKWISE,
    THREE_EIGHTHS_TURN_COUNTERCLOCKWISE,
    PERIMETER_PITCH_OFFSET,
}
