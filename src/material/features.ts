import {
    Note,
    PitchDurationXYZ,
    Scale,
    SILENT,
    STANDARD_DURATION_SCALE_INDEX,
    STANDARD_PITCH_INDEX_INDICATING_REST,
    STANDARD_PITCH_SCALE_INDEX,
} from '@musical-patterns/material'
import {
    as,
    ContourElement,
    Duration,
    insteadOf,
    map,

    ONE_HALF,
    Ordinal,
    Pitch,
    Position,
    Scalar,
    SQUARE_ROOT_OF_TWO,
    use,
} from '@musical-patterns/utilities'
import { HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR, HOUNDSTOOTHTOPIA_THEME_X_POSITION_SCALE_INDEX } from './constants'

const computeNote: (contourElement: ContourElement<PitchDurationXYZ>) => Note =
    ([ pitch, duration, ...position ]: ContourElement<PitchDurationXYZ>): Note => ({
        duration: {
            index: as.Ordinal<Array<Scalar<Duration>>>(duration),
            scaleIndex: STANDARD_DURATION_SCALE_INDEX,
        },
        gain: {
            scalar: pitch === as.number(STANDARD_PITCH_INDEX_INDICATING_REST) ?
                SILENT :
                undefined,
        },
        pitch: {
            scalar: as.Scalar<Pitch>(pitch),
            scaleIndex: STANDARD_PITCH_SCALE_INDEX,
        },
        position: map(position, (positionElement: number, index: Ordinal) => ({
            scalar: as.Scalar<Position>(positionElement),
            scaleIndex: use.Transition(
                HOUNDSTOOTHTOPIA_THEME_X_POSITION_SCALE_INDEX,
                as.Transition<Array<Scale<Position>>>(as.number(index)),
            ),
        })),
        sustain: {
            scalar: HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR,
            scaleIndex: STANDARD_DURATION_SCALE_INDEX,
        },
    })

const computeSupertileNote: (contourElement: ContourElement<PitchDurationXYZ>) => Note =
    (contourElement: ContourElement<PitchDurationXYZ>): Note => {
        const [ pitch ] = contourElement

        const silentScalar: Scalar<Scalar> = insteadOf<Scalar, Scalar>(SILENT)

        return {
            ...computeNote(contourElement),
            gain: {
                scalar: pitch === as.number(STANDARD_PITCH_INDEX_INDICATING_REST) ?
                    silentScalar :
                    ONE_HALF,
            },
        }
    }

const computePerimeterNote: (contourElement: ContourElement<PitchDurationXYZ>) => Note =
    (contourElement: ContourElement<PitchDurationXYZ>): Note => ({
        ...computeNote(contourElement),
        sustain: {
            scalar: use.Scalar(
                HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR,
                as.Scalar<Scalar<Duration>>(SQUARE_ROOT_OF_TWO),
            ),
            scaleIndex: STANDARD_DURATION_SCALE_INDEX,
        },
    })

export {
    computeSupertileNote,
    computePerimeterNote,
}
