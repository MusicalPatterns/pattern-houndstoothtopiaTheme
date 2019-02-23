// tslint:disable no-any

import {
    apply,
    Coordinate,
    Cycle,
    DictionaryOf,
    from,
    rotate,
    Scalar,
    Space,
    to,
    TwoDimensional,
} from '@musical-patterns/utilities'
import {
    EIGHTH_TURN_COUNTERCLOCKWISE,
    NO_TURN_COUNTERCLOCKWISE,
    PERIMETER_PITCH_TRANSLATION,
    QUARTER_TURN_COUNTERCLOCKWISE,
    THREE_EIGHTHS_TURN_COUNTERCLOCKWISE,
} from '../constants'
import {
    buildHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme,
    buildHoundstoothSolidCenterOriginCoordinate,
} from '../coordinates'
import { TRANSLATION_TO_START_ON_ROOT_TIP_BEFORE_ROOT_BASE } from './constants'

const extractHeight: (coordinates: Array<Coordinate<Space, TwoDimensional>>) => Scalar[] =
    (coordinates: Array<Coordinate<Space, TwoDimensional>>): Scalar[] =>
        coordinates.map((coordinate: Coordinate<Space, TwoDimensional>): Scalar => {
            const height: Space = coordinate[ 1 ]

            return to.Scalar(from.Space(apply.Translation(height, PERIMETER_PITCH_TRANSLATION)))
        })

const buildPerimeterPitches: () => DictionaryOf<Scalar[]> =
    (): DictionaryOf<Scalar[]> => {
        const houndstoothCoordinates: Cycle<Coordinate<Space, TwoDimensional>> =
            buildHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme()
        const cycledHoundstoothCoordinates: Cycle<Coordinate<Space, TwoDimensional>> = apply.Translation(
            houndstoothCoordinates,
            TRANSLATION_TO_START_ON_ROOT_TIP_BEFORE_ROOT_BASE,
        )

        const houndstoothCenterCoordinate: Coordinate<Space, TwoDimensional> =
            buildHoundstoothSolidCenterOriginCoordinate()
        const houndstoothTopRightGrainCoordinates: Array<Coordinate<Space, TwoDimensional>> =
            cycledHoundstoothCoordinates.map((coordinate: Coordinate<Space, TwoDimensional>) =>
                rotate({
                    coordinate,
                    fixedCoordinate: houndstoothCenterCoordinate,
                    rotation: NO_TURN_COUNTERCLOCKWISE,
                })) as any
        const houndstoothTopGrainCoordinates: Array<Coordinate<Space, TwoDimensional>> =
            cycledHoundstoothCoordinates.map((coordinate: Coordinate<Space, TwoDimensional>) =>
                rotate({
                    coordinate,
                    fixedCoordinate: houndstoothCenterCoordinate,
                    rotation: EIGHTH_TURN_COUNTERCLOCKWISE,
                })) as any
        const houndstoothTopLeftGrainCoordinates: Array<Coordinate<Space, TwoDimensional>> =
            cycledHoundstoothCoordinates.map((coordinate: Coordinate<Space, TwoDimensional>) =>
                rotate({
                    coordinate,
                    fixedCoordinate: houndstoothCenterCoordinate,
                    rotation: QUARTER_TURN_COUNTERCLOCKWISE,
                })) as any
        const houndstoothLeftGrainCoordinates: Array<Coordinate<Space, TwoDimensional>> =
            cycledHoundstoothCoordinates.map((coordinate: Coordinate<Space, TwoDimensional>) =>
                rotate({
                    coordinate,
                    fixedCoordinate: houndstoothCenterCoordinate,
                    rotation: THREE_EIGHTHS_TURN_COUNTERCLOCKWISE,
                })) as any

        const perimeterRhythmLeftGrainPitches: Scalar[] = extractHeight(houndstoothLeftGrainCoordinates)
        const perimeterRhythmTopGrainPitches: Scalar[] = extractHeight(houndstoothTopGrainCoordinates)
        const perimeterRhythmTopLeftGrainPitches: Scalar[] = extractHeight(houndstoothTopLeftGrainCoordinates)
        const perimeterRhythmTopRightGrainPitches: Scalar[] = extractHeight(houndstoothTopRightGrainCoordinates)

        return {
            perimeterRhythmLeftGrainPitches,
            perimeterRhythmTopGrainPitches,
            perimeterRhythmTopLeftGrainPitches,
            perimeterRhythmTopRightGrainPitches,
        }
    }

export {
    buildPerimeterPitches,
}
