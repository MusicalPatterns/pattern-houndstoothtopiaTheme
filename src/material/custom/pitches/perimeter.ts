// tslint:disable no-any

import {
    apply,
    Coordinate,
    Cycle,
    DictionaryOf,
    Frequency,
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

const pitchesFromHeights: (coordinates: Array<Coordinate<Space, TwoDimensional>>) => Array<Scalar<Frequency>> =
    (coordinates: Array<Coordinate<Space, TwoDimensional>>): Array<Scalar<Frequency>> =>
        coordinates.map((coordinate: Coordinate<Space, TwoDimensional>): Scalar<Frequency> => {
            const height: Space = coordinate[ 1 ]

            return to.Scalar(to.Frequency(from.Space(apply.Translation(height, PERIMETER_PITCH_TRANSLATION))))
        })

const buildPerimeterPitches: () => DictionaryOf<Array<Scalar<Frequency>>> =
    (): DictionaryOf<Array<Scalar<Frequency>>> => {
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

        const perimeterRhythmLeftGrainPitches: Array<Scalar<Frequency>> =
            pitchesFromHeights(houndstoothLeftGrainCoordinates)
        const perimeterRhythmTopGrainPitches: Array<Scalar<Frequency>> =
            pitchesFromHeights(houndstoothTopGrainCoordinates)
        const perimeterRhythmTopLeftGrainPitches: Array<Scalar<Frequency>> =
            pitchesFromHeights(houndstoothTopLeftGrainCoordinates)
        const perimeterRhythmTopRightGrainPitches: Array<Scalar<Frequency>> =
            pitchesFromHeights(houndstoothTopRightGrainCoordinates)

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
