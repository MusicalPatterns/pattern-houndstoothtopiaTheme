import {
    apply,
    Coordinate,
    Cycle,
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
    computeHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme,
    computeHoundstoothSolidCenterOriginCoordinate,
} from '../coordinates'
import { TRANSLATION_TO_START_ON_ROOT_TIP_BEFORE_ROOT_BASE } from './constants'
import { PerimeterPitches } from './types'

const pitchesFromHeights: (coordinates: Array<Coordinate<Space, TwoDimensional>>) => Array<Scalar<Frequency>> =
    (coordinates: Array<Coordinate<Space, TwoDimensional>>): Array<Scalar<Frequency>> =>
        coordinates.map((coordinate: Coordinate<Space, TwoDimensional>): Scalar<Frequency> => {
            const height: Space = coordinate[ 1 ]

            return to.Scalar(to.Frequency(from.Space(apply.Translation(height, PERIMETER_PITCH_TRANSLATION))))
        })

const computePerimeterPitches: () => PerimeterPitches =
    (): PerimeterPitches => {
        const houndstoothCoordinates: Cycle<Coordinate<Space, TwoDimensional>> =
            computeHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme()
        const cycledHoundstoothCoordinates: Cycle<Coordinate<Space, TwoDimensional>> = apply.Translation(
            houndstoothCoordinates,
            TRANSLATION_TO_START_ON_ROOT_TIP_BEFORE_ROOT_BASE,
        )

        const houndstoothCenterCoordinate: Coordinate<Space, TwoDimensional> =
            computeHoundstoothSolidCenterOriginCoordinate()
        const houndstoothTopRightGrainCoordinates: Array<Coordinate<Space, TwoDimensional>> =
            cycledHoundstoothCoordinates.map((coordinate: Coordinate<Space, TwoDimensional>) =>
                rotate<Space, TwoDimensional>({
                    coordinate,
                    fixedCoordinate: houndstoothCenterCoordinate,
                    rotation: NO_TURN_COUNTERCLOCKWISE,
                }))
        const houndstoothTopGrainCoordinates: Array<Coordinate<Space, TwoDimensional>> =
            cycledHoundstoothCoordinates.map((coordinate: Coordinate<Space, TwoDimensional>) =>
                rotate<Space, TwoDimensional>({
                    coordinate,
                    fixedCoordinate: houndstoothCenterCoordinate,
                    rotation: EIGHTH_TURN_COUNTERCLOCKWISE,
                }))
        const houndstoothTopLeftGrainCoordinates: Array<Coordinate<Space, TwoDimensional>> =
            cycledHoundstoothCoordinates.map((coordinate: Coordinate<Space, TwoDimensional>) =>
                rotate<Space, TwoDimensional>({
                    coordinate,
                    fixedCoordinate: houndstoothCenterCoordinate,
                    rotation: QUARTER_TURN_COUNTERCLOCKWISE,
                }))
        const houndstoothLeftGrainCoordinates: Array<Coordinate<Space, TwoDimensional>> =
            cycledHoundstoothCoordinates.map((coordinate: Coordinate<Space, TwoDimensional>) =>
                rotate<Space, TwoDimensional>({
                    coordinate,
                    fixedCoordinate: houndstoothCenterCoordinate,
                    rotation: THREE_EIGHTHS_TURN_COUNTERCLOCKWISE,
                }))

        const leftGrain: Array<Scalar<Frequency>> =
            pitchesFromHeights(houndstoothLeftGrainCoordinates)
        const topGrain: Array<Scalar<Frequency>> =
            pitchesFromHeights(houndstoothTopGrainCoordinates)
        const topLeftGrain: Array<Scalar<Frequency>> =
            pitchesFromHeights(houndstoothTopLeftGrainCoordinates)
        const topRightGrain: Array<Scalar<Frequency>> =
            pitchesFromHeights(houndstoothTopRightGrainCoordinates)

        return {
            leftGrain,
            topGrain,
            topLeftGrain,
            topRightGrain,
        }
    }

export {
    computePerimeterPitches,
}
