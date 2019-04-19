import {
    Note,
    PitchDurationXYZ,
    Scale,
    SILENT,
    STANDARD_DURATIONS_SCALE_INDEX,
    STANDARD_PITCH_INDEX_INDICATING_REST,
    STANDARD_PITCH_SCALE_INDEX,
} from '@musical-patterns/material'
import {
    apply,
    ContourElement,
    from,
    insteadOf,
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
        const sustainScalar: Scalar<Scalar> = HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR

        const silentScalar: Scalar<Scalar> = insteadOf<Scalar, Scalar>(SILENT)

        return {
            duration: {
                index: to.Ordinal<Scalar>(duration),
                scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
            },
            gain: {
                scalar: pitch === from.Ordinal<Scalar>(STANDARD_PITCH_INDEX_INDICATING_REST) ? silentScalar : undefined,
            },
            pitch: {
                scalar: to.Scalar<Scalar>(pitch),
                scaleIndex: STANDARD_PITCH_SCALE_INDEX,
            },
            position: map(position.map(to.Meters), (positionElement: Meters, index: Ordinal<Meters>) => ({
                scalar: to.Scalar<Scalar>(from.Meters(positionElement)),
                scaleIndex: apply.Translation(
                    HOUNDSTOOTHTOPIA_THEME_X_POSITION_SCALE_INDEX,
                    to.Translation<Ordinal<Scale>>(from.Ordinal<Meters>(index)),
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

        const silentScalar: Scalar<Scalar> = insteadOf<Scalar, Scalar>(SILENT)

        return {
            ...computeNote(contourElement),
            gain: {
                scalar: pitch === from.Ordinal<Scalar>(STANDARD_PITCH_INDEX_INDICATING_REST) ? silentScalar : ONE_HALF,
            },
        }
    }

const computePerimeterNote: (contourElement: ContourElement<PitchDurationXYZ>) => Note =
    (contourElement: ContourElement<PitchDurationXYZ>): Note => {
        const sustainScalar: Scalar<Scalar> = apply.Scalar(
            HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR,
            to.Scalar<Scalar<Scalar>>(SQUARE_ROOT_OF_TWO),
        )

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
