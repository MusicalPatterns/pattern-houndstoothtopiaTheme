import {
    Feature,
    Note,
    PitchValueXYZ,
    Scale,
    SILENT,
    STANDARD_PITCH_INDEX_INDICATING_REST,
} from '@musical-patterns/material'
import {
    as,
    ContourElement,
    insteadOf,
    map,
    ONE_HALF,
    Ordinal,
    Pitch,
    Position,
    Scalar,
    SQUARE_ROOT_OF_TWO,
    use,
    Value,
} from '@musical-patterns/utilities'
import { HOUNDSTOOTHTOPIA_THEME_ENVELOPE_SCALAR, HOUNDSTOOTHTOPIA_THEME_X_POSITION_SCALE_INDEX } from './constants'

const computeNote: (contourElement: ContourElement<PitchValueXYZ>) => Note =
    ([ pitch, value, ...position ]: ContourElement<PitchValueXYZ>): Note => ({
        envelope: {
            scalar: HOUNDSTOOTHTOPIA_THEME_ENVELOPE_SCALAR,
        },
        intensity: {
            scalar: pitch === as.number(STANDARD_PITCH_INDEX_INDICATING_REST) ?
                SILENT :
                undefined,
        },
        pitch: {
            scalar: as.Scalar<Pitch>(pitch),
        },
        position: map(position, (positionElement: number, index: Ordinal): Feature<Position> => ({
            scalar: as.Scalar<Position>(positionElement),
            scaleIndex: use.Transition(
                HOUNDSTOOTHTOPIA_THEME_X_POSITION_SCALE_INDEX,
                as.Transition<Array<Scale<Position>>>(as.number(index)),
            ),
        })),
        value: {
            index: as.Ordinal<Array<Scalar<Value>>>(value),
        },
    })

const computeSupertileNote: (contourElement: ContourElement<PitchValueXYZ>) => Note =
    (contourElement: ContourElement<PitchValueXYZ>): Note => {
        const [ pitch ] = contourElement

        const silentScalar: Scalar<Scalar> = insteadOf<Scalar, Scalar>(SILENT)

        return {
            ...computeNote(contourElement),
            intensity: {
                scalar: pitch === as.number(STANDARD_PITCH_INDEX_INDICATING_REST) ?
                    silentScalar :
                    ONE_HALF,
            },
        }
    }

const computePerimeterNote: (contourElement: ContourElement<PitchValueXYZ>) => Note =
    (contourElement: ContourElement<PitchValueXYZ>): Note => ({
        ...computeNote(contourElement),
        envelope: {
            scalar: use.Scalar(
                HOUNDSTOOTHTOPIA_THEME_ENVELOPE_SCALAR,
                as.Scalar<Scalar<Value>>(SQUARE_ROOT_OF_TWO),
            ),
        },
    })

export {
    computeSupertileNote,
    computePerimeterNote,
}
