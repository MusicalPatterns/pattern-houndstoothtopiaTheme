import { NoteSpec } from '@musical-patterns/compiler'
import { STANDARD_DURATIONS_SCALE_INDEX, STANDARD_PITCH_SCALE_INDEX } from '@musical-patterns/pattern'
import {
    apply,
    CoordinateElement,
    from,
    map,
    ONE_HALF,
    Ordinal,
    SQUARE_ROOT_OF_TWO,
    to,
} from '@musical-patterns/utilities'
import { PITCH_SCALAR_INDICATING_REST } from '../constants'
import { HoundstoothtopiaContourElement } from '../nominal'
import { HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR, HOUNDSTOOTHTOPIA_THEME_X_POSITION_SCALE_INDEX } from './constants'
import { UnpackedHoundstoothtopiaContourElement } from './types'

const unpackHoundstoothtopiaContourElement:
    (contourElement: HoundstoothtopiaContourElement) => UnpackedHoundstoothtopiaContourElement =
    (contourElement: HoundstoothtopiaContourElement): UnpackedHoundstoothtopiaContourElement => ({
        duration: to.Ordinal(contourElement[ 1 ]),
        pitch: to.Scalar(contourElement[ 0 ]),
        // tslint:disable-next-line no-magic-numbers
        position: to.Coordinate(contourElement[ 2 ]),
    })

const buildHoundstoothtopiaNoteSpec: (contourElement: HoundstoothtopiaContourElement) => NoteSpec =
    (contourElement: HoundstoothtopiaContourElement): NoteSpec => {
        const { pitch, duration, position } = unpackHoundstoothtopiaContourElement(contourElement)

        return {
            durationSpec: {
                index: duration,
                scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
            },
            gainSpec: {
                scalar: pitch === PITCH_SCALAR_INDICATING_REST ? to.Scalar(0) : undefined,
            },
            pitchSpec: {
                scalar: pitch,
                scaleIndex: STANDARD_PITCH_SCALE_INDEX,
            },
            positionSpec: map(position, (positionElement: CoordinateElement, index: Ordinal) => ({
                scalar: to.Scalar(from.CoordinateElement(positionElement)),
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

const buildSupertileNoteSpec: (contourElement: HoundstoothtopiaContourElement) => NoteSpec =
    (contourElement: HoundstoothtopiaContourElement): NoteSpec => {
        const { pitch } = unpackHoundstoothtopiaContourElement(contourElement)

        return {
            ...buildHoundstoothtopiaNoteSpec(contourElement),
            gainSpec: {
                scalar: pitch === PITCH_SCALAR_INDICATING_REST ? to.Scalar(0) : ONE_HALF,
            },
        }
    }

const buildPerimeterNoteSpec: (contourElement: HoundstoothtopiaContourElement) => NoteSpec =
    (contourElement: HoundstoothtopiaContourElement): NoteSpec => ({
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
