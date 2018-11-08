import {
    DEFAULT_DURATIONS_SCALE_INDEX,
    DEFAULT_PITCH_SCALE_INDEX,
    NoteSpec,
    to,
} from '../../../../src'
import { ContourElement } from '../nominal'

const buildNoteSpec: (contour: ContourElement) => NoteSpec =
    ([ duration, pitch ]: ContourElement): NoteSpec =>
        ({
            durationSpec: {
                index: duration,
                scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
            },
            pitchSpec: {
                index: pitch,
                scaleIndex: DEFAULT_PITCH_SCALE_INDEX,
            },
            sustainSpec: {
                index: duration,
                scalar: to.Scalar(0.33),
                scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
            },
        })

export {
    buildNoteSpec,
}
