// tslint:disable:no-reaching-imports

export {
    buildSupertileRhythm,
    buildPerimeterRhythm,
    buildPerimeterPitches,
    QUARTER_TURN_COUNTERCLOCKWISE,
} from './custom/indexForTest'
export {
    HoundstoothtopiaContourElement,
    to,
} from './nominal/indexForTest'
export {
    buildSupertileNoteSpec,
    buildScalars,
    buildEntities,
    buildScales,
    buildParts,
    buildContourPieces,
    buildContourWholes,
} from './materials/indexForTest'
export { pattern } from './patterns'
export { initialSpec } from './specs'
export {
    HoundstoothtopiaThemePatternSpec,
} from './types'

// tslint:disable-next-line:no-default-import
import * as snapshot from './snapshot.json'

export { snapshot }
