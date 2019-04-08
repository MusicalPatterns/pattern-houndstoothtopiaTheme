import { Note } from '@musical-patterns/material'
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

const computeNote: (contourElement: ContourElement<PitchDurationXYZ>) => Note =
    ([ pitch, duration, ...position ]: ContourElement<PitchDurationXYZ>): Note => {
        const sustainScalar: Scalar = from.Time(HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR)

        const silentScalar: Scalar = from.Amplitude(SILENT)

        return {
            duration: {
                index: to.Ordinal(duration),
                scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
            },
            gain: {
                scalar: pitch === STANDARD_PITCH_INDEX_INDICATING_REST ? silentScalar : undefined,
            },
            pitch: {
                scalar: to.Scalar(pitch),
                scaleIndex: STANDARD_PITCH_SCALE_INDEX,
            },
            position: map(position.map(to.Meters), (positionElement: Meters, index: Ordinal) => ({
                scalar: to.Scalar(from.Meters(positionElement)),
                scaleIndex: apply.Translation(
                    HOUNDSTOOTHTOPIA_THEME_X_POSITION_SCALE_INDEX,
                    to.Translation(from.Ordinal(index)),
                ),
            })),
            sustain: {
                scalar: sustainScalar,
                scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
            },
        }
    }

const computeSupertileNote: (contourElement: ContourElement<PitchDurationXYZ>) => Note =
    (contourElement: ContourElement<PitchDurationXYZ>): Note => {
        const [ pitch ] = contourElement

        const silentScalar: Scalar = from.Amplitude(SILENT)

        return {
            ...computeNote(contourElement),
            gain: {
                scalar: pitch === STANDARD_PITCH_INDEX_INDICATING_REST ? silentScalar : ONE_HALF,
            },
        }
    }

const computePerimeterNote: (contourElement: ContourElement<PitchDurationXYZ>) => Note =
    (contourElement: ContourElement<PitchDurationXYZ>): Note => {
        const sustainScalar: Scalar = from.Time(apply.Scalar(
            HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR,
            to.Scalar(SQUARE_ROOT_OF_TWO),
        ))

        return {
            ...computeNote(contourElement),
            sustain: {
                scalar: sustainScalar,
                scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
            },
        }
    }

export {
    computeSupertileNote,
    computePerimeterNote,
}
