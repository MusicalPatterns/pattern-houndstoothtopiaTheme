import {
    DEFAULT_DURATIONS_SCALE_INDEX,
    DEFAULT_PITCH_SCALE_INDEX,
    from,
    NoteSpec,
    to,
    unpackContourElement,
} from '../../../../src'
import { PITCH_SCALAR_INDICATING_REST } from '../constants'
import { ContourElement } from '../nominal'
import { HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR } from './constants'

const buildNoteSpec: (contourElement: ContourElement) => NoteSpec =
    (contourElement: ContourElement): NoteSpec => {
        const { pitch, duration } = unpackContourElement(contourElement)

        return {
            durationSpec: {
                index: to.Index(duration),
                scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
            },
            gainSpec: {
                scalar: pitch === from.Scalar(PITCH_SCALAR_INDICATING_REST) ? to.Scalar(0) : undefined,
            },
            pitchSpec: {
                scalar: to.Scalar(pitch),
                scaleIndex: DEFAULT_PITCH_SCALE_INDEX,
            },
            sustainSpec: {
                scalar: HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR,
                scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
            },
        }
    }

export {
    buildNoteSpec,
}
