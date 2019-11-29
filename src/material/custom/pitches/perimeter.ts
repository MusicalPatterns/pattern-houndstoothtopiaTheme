import { as, Cycle, Frequency, rotate, Scalar, Space, TwoDimensional, use } from '@musical-patterns/utilities'
import {
    EIGHTH_TURN_CLOCKWISE,
    EIGHTH_TURN_COUNTERCLOCKWISE, HALF_TURN_CLOCKWISE,
    NO_TURN_COUNTERCLOCKWISE,
    PERIMETER_PITCH_SPATIAL_SHIFT, QUARTER_TURN_CLOCKWISE,
    QUARTER_TURN_COUNTERCLOCKWISE, THREE_EIGHTHS_TURN_CLOCKWISE,
    THREE_EIGHTHS_TURN_COUNTERCLOCKWISE,
} from '../constants'
import {
    computeHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme,
    computeHoundstoothSolidCenterOriginCoordinate,
} from '../coordinates'
import { PlanarCoordinate } from '../types'
import { TRANSLATION_TO_START_ON_ROOT_TIP_BEFORE_ROOT_BASE } from './constants'
import { PerimeterPitches } from './types'

const pitchesFromHeights: (coordinates: PlanarCoordinate[]) => Array<Scalar<Frequency>> =
    (coordinates: PlanarCoordinate[]): Array<Scalar<Frequency>> =>
        coordinates.map((coordinate: PlanarCoordinate): Scalar<Frequency> => {
            const height: Space = coordinate[ 1 ]

            return as.Scalar<Frequency>(as.number(use.Cardinal(height, PERIMETER_PITCH_SPATIAL_SHIFT)))
        })

const computePerimeterPitches: () => PerimeterPitches =
    (): PerimeterPitches => {
        const houndstoothCoordinates: Cycle<PlanarCoordinate> =
            computeHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme()
        const cycledHoundstoothCoordinates: Cycle<PlanarCoordinate> = use.Cardinal(
            houndstoothCoordinates,
            TRANSLATION_TO_START_ON_ROOT_TIP_BEFORE_ROOT_BASE,
        )

        const houndstoothCenterCoordinate: PlanarCoordinate =
            computeHoundstoothSolidCenterOriginCoordinate()
        const houndstoothTopRightGrainCoordinates: PlanarCoordinate[] =
            cycledHoundstoothCoordinates.map((coordinate: PlanarCoordinate) =>
                rotate<Space, TwoDimensional>({
                    coordinate,
                    fixedCoordinate: houndstoothCenterCoordinate,
                    rotation: NO_TURN_COUNTERCLOCKWISE,
                }))
        const houndstoothTopGrainCoordinates: PlanarCoordinate[] =
            cycledHoundstoothCoordinates.map((coordinate: PlanarCoordinate) =>
                rotate<Space, TwoDimensional>({
                    coordinate,
                    fixedCoordinate: houndstoothCenterCoordinate,
                    rotation: EIGHTH_TURN_COUNTERCLOCKWISE,
                }))
        const houndstoothTopLeftGrainCoordinates: PlanarCoordinate[] =
            cycledHoundstoothCoordinates.map((coordinate: PlanarCoordinate) =>
                rotate<Space, TwoDimensional>({
                    coordinate,
                    fixedCoordinate: houndstoothCenterCoordinate,
                    rotation: QUARTER_TURN_COUNTERCLOCKWISE,
                }))
        const houndstoothLeftGrainCoordinates: PlanarCoordinate[] =
            cycledHoundstoothCoordinates.map((coordinate: PlanarCoordinate) =>
                rotate<Space, TwoDimensional>({
                    coordinate,
                    fixedCoordinate: houndstoothCenterCoordinate,
                    rotation: THREE_EIGHTHS_TURN_COUNTERCLOCKWISE,
                }))
        const houndstoothRightGrainCoordinates: PlanarCoordinate[] =
            cycledHoundstoothCoordinates.map((coordinate: PlanarCoordinate) =>
                rotate<Space, TwoDimensional>({
                    coordinate,
                    fixedCoordinate: houndstoothCenterCoordinate,
                    rotation: EIGHTH_TURN_CLOCKWISE,
                }))
        const houndstoothBottomRightGrainCoordinates: PlanarCoordinate[] =
            cycledHoundstoothCoordinates.map((coordinate: PlanarCoordinate) =>
                rotate<Space, TwoDimensional>({
                    coordinate,
                    fixedCoordinate: houndstoothCenterCoordinate,
                    rotation: QUARTER_TURN_CLOCKWISE,
                }))
        const houndstoothBottomGrainCoordinates: PlanarCoordinate[] =
            cycledHoundstoothCoordinates.map((coordinate: PlanarCoordinate) =>
                rotate<Space, TwoDimensional>({
                    coordinate,
                    fixedCoordinate: houndstoothCenterCoordinate,
                    rotation: THREE_EIGHTHS_TURN_CLOCKWISE,
                }))
        const houndstoothBottomLeftGrainCoordinates: PlanarCoordinate[] =
            cycledHoundstoothCoordinates.map((coordinate: PlanarCoordinate) =>
                rotate<Space, TwoDimensional>({
                    coordinate,
                    fixedCoordinate: houndstoothCenterCoordinate,
                    rotation: HALF_TURN_CLOCKWISE,
                }))

        const topRightGrain: Array<Scalar<Frequency>> =
            pitchesFromHeights(houndstoothTopRightGrainCoordinates)
        const topGrain: Array<Scalar<Frequency>> =
            pitchesFromHeights(houndstoothTopGrainCoordinates)
        const topLeftGrain: Array<Scalar<Frequency>> =
            pitchesFromHeights(houndstoothTopLeftGrainCoordinates)
        const leftGrain: Array<Scalar<Frequency>> =
            pitchesFromHeights(houndstoothLeftGrainCoordinates)
        const rightGrain: Array<Scalar<Frequency>> =
            pitchesFromHeights(houndstoothRightGrainCoordinates)
        const bottomRightGrain: Array<Scalar<Frequency>> =
            pitchesFromHeights(houndstoothBottomRightGrainCoordinates)
        const bottomGrain: Array<Scalar<Frequency>> =
            pitchesFromHeights(houndstoothBottomGrainCoordinates)
        const bottomLeftGrain: Array<Scalar<Frequency>> =
            pitchesFromHeights(houndstoothBottomLeftGrainCoordinates)

        return {
            leftGrain,
            topGrain,
            topLeftGrain,
            topRightGrain,
            rightGrain,
            bottomRightGrain,
            bottomGrain,
            bottomLeftGrain,
        }
    }

export {
    computePerimeterPitches,
}
