import { NoteSpec } from '@musical-patterns/compiler'
import {
    PitchDurationXYZ,
    SILENT,
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
    Scalar,
    SQUARE_ROOT_OF_TWO,
    to,
} from '@musical-patterns/utilities'
import { HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR, HOUNDSTOOTHTOPIA_THEME_X_POSITION_SCALE_INDEX } from './constants'

const buildNoteSpec: (contourElement: ContourElement<PitchDurationXYZ>) => NoteSpec =
    ([ pitch, duration, ...position ]: ContourElement<PitchDurationXYZ>): NoteSpec => {
        const sustainScalar: Scalar = from.Time(HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR)

        const silentScalar: Scalar = from.Amplitude(SILENT)

        return {
            durationSpec: {
                index: to.Ordinal(duration),
                scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
            },
            gainSpec: {
                scalar: pitch === STANDARD_PITCH_INDEX_INDICATING_REST ? silentScalar : undefined,
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
                scalar: sustainScalar,
                scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
            },
        }
    }

const buildSupertileNoteSpec: (contourElement: ContourElement<PitchDurationXYZ>) => NoteSpec =
    (contourElement: ContourElement<PitchDurationXYZ>): NoteSpec => {
        const [ pitch ] = contourElement

        const silentScalar: Scalar = from.Amplitude(SILENT)

        return {
            ...buildNoteSpec(contourElement),
            gainSpec: {
                scalar: pitch === STANDARD_PITCH_INDEX_INDICATING_REST ? silentScalar : ONE_HALF,
            },
        }
    }

const buildPerimeterNoteSpec: (contourElement: ContourElement<PitchDurationXYZ>) => NoteSpec =
    (contourElement: ContourElement<PitchDurationXYZ>): NoteSpec => {
        const sustainScalar: Scalar = from.Time(apply.Scalar(
            HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR,
            to.Scalar(SQUARE_ROOT_OF_TWO),
        ))

        return {
            ...buildNoteSpec(contourElement),
            sustainSpec: {
                scalar: sustainScalar,
                scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
            },
        }
    }

export {
    buildSupertileNoteSpec,
    buildPerimeterNoteSpec,
}
