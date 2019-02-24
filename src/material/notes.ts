import { NoteSpec } from '@musical-patterns/compiler'
import {
    PitchDurationXYZ,
    STANDARD_DURATIONS_SCALE_INDEX,
    STANDARD_PITCH_INDEX_INDICATING_REST,
    STANDARD_PITCH_SCALE_INDEX,
} from '@musical-patterns/pattern'
import {
    apply,
    ContourElement,
    from,
    map,
    Meters,
    ONE_HALF,
    Ordinal,
    SQUARE_ROOT_OF_TWO,
    to,
} from '@musical-patterns/utilities'
import { HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR, HOUNDSTOOTHTOPIA_THEME_X_POSITION_SCALE_INDEX } from './constants'

const buildHoundstoothtopiaNoteSpec: (contourElement: ContourElement<PitchDurationXYZ>) => NoteSpec =
    (contourElement: ContourElement<PitchDurationXYZ>): NoteSpec => {
        const [ pitch, duration, ...position ] = contourElement as number[]

        return {
            durationSpec: {
                index: to.Ordinal(duration),
                scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
            },
            gainSpec: {
                scalar: pitch === STANDARD_PITCH_INDEX_INDICATING_REST ? to.Scalar(0) : undefined,
            },
            pitchSpec: {
                scalar: to.Scalar(pitch),
                scaleIndex: STANDARD_PITCH_SCALE_INDEX,
            },
            positionSpec: map(position.map(to.Meters), (positionElement: Meters, index: Ordinal) => ({
                scalar: to.Scalar(from.Meters(positionElement)),
                scaleIndex: apply.Translation(
                    HOUNDSTOOTHTOPIA_THEME_X_POSITION_SCALE_INDEX,
                    to.Translation(from.Ordinal(index)),
                ),
            })),
            sustainSpec: {
                scalar: HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR,
                scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
            },
        }
    }

const buildSupertileNoteSpec: (contourElement: ContourElement<PitchDurationXYZ>) => NoteSpec =
    (contourElement: ContourElement<PitchDurationXYZ>): NoteSpec => {
        const [ pitch ] = contourElement as number[]

        return {
            ...buildHoundstoothtopiaNoteSpec(contourElement),
            gainSpec: {
                scalar: pitch === STANDARD_PITCH_INDEX_INDICATING_REST ? to.Scalar(0) : ONE_HALF,
            },
        }
    }

const buildPerimeterNoteSpec: (contourElement: ContourElement<PitchDurationXYZ>) => NoteSpec =
    (contourElement: ContourElement<PitchDurationXYZ>): NoteSpec => ({
        ...buildHoundstoothtopiaNoteSpec(contourElement),
        sustainSpec: {
            scalar: apply.Scalar(HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR, to.Scalar(SQUARE_ROOT_OF_TWO)),
            scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
        },
    })

export {
    buildSupertileNoteSpec,
    buildPerimeterNoteSpec,
}
