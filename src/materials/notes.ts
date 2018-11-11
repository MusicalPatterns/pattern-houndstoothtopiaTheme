import {
    DEFAULT_DURATIONS_SCALE_INDEX,
    DEFAULT_PITCH_SCALE_INDEX,
    NoteSpec,
    unpackContourElement,
} from '../../../../src'
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
