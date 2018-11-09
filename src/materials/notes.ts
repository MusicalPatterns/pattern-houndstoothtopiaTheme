import { DEFAULT_DURATIONS_SCALE_INDEX, DEFAULT_PITCH_SCALE_INDEX, NoteSpec } from '../../../../src'
import { ContourElement } from '../nominal'
import { HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR } from './constants'

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
                scalar: HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR,
                scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
            },
        })

export {
    buildNoteSpec,
}
