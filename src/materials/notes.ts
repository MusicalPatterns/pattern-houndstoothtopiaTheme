import {
    DEFAULT_DURATIONS_SCALE_INDEX,
    DEFAULT_PITCH_SCALE_INDEX,
    NoteSpec,
    to,
    unpackContourElement,
} from '../../../../src'
import { PITCH_INDEX_INDICATING_REST } from '../constants'
import { ContourElement } from '../nominal'
import { HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR } from './constants'

const buildNoteSpec: (contourElement: ContourElement) => NoteSpec =
    (contourElement: ContourElement): NoteSpec => {
        const { pitch, duration } = unpackContourElement(contourElement)

        return {
            durationSpec: {
                index: duration,
                scaleIndex:
                DEFAULT_DURATIONS_SCALE_INDEX,
            },
            gainSpec: {
                scalar: pitch === PITCH_INDEX_INDICATING_REST ? to.Scalar(0) : undefined,
            },
            pitchSpec: {
                index: pitch,
                scaleIndex:
                DEFAULT_PITCH_SCALE_INDEX,
            },
            sustainSpec: {
                scalar: HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR,
                scaleIndex:
                DEFAULT_DURATIONS_SCALE_INDEX,
            },
        }
    }

export {
    buildNoteSpec,
}
