import { applyCycle, Block, DictionaryOf } from '../../../../../src'
import { Coordinate } from '../../nominal'
import { rankByHeight, rotate } from '../../utilities'
import {
    EIGHTH_TURN_COUNTERCLOCKWISE,
    NO_TURN_COUNTERCLOCKWISE,
    QUARTER_TURN_COUNTERCLOCKWISE,
    THREE_EIGHTHS_TURN_COUNTERCLOCKWISE,
} from '../constants'
import {
    buildHoundstoothCoordinatesWholeNumbersSolidCenterOriginClockwiseStartingOnConidBeforeCusps,
    buildHoundstoothSolidCenterOriginCoordinate,
} from '../coordinates'
import { CYCLE_TO_START_ON_ROOT_TIP_BEFORE_ROOT_BASE } from './constants'

const buildPerimeterPitches: () => DictionaryOf<Block> =
    (): DictionaryOf<Block> => {
        const houndstoothCoordinates: Coordinate[] =
            buildHoundstoothCoordinatesWholeNumbersSolidCenterOriginClockwiseStartingOnConidBeforeCusps()
        const cycledHoundstoothCoordinates: Coordinate[] = applyCycle(
            houndstoothCoordinates,
            CYCLE_TO_START_ON_ROOT_TIP_BEFORE_ROOT_BASE,
        )

        const houndstoothCenterCoordinate: Coordinate = buildHoundstoothSolidCenterOriginCoordinate()
        const houndstoothTopRightGrainCoordinates: Coordinate[] =
            cycledHoundstoothCoordinates.map((coordinate: Coordinate) =>
                rotate({
                    coordinate,
                    fixedCoordinate: houndstoothCenterCoordinate,
                    rotation: NO_TURN_COUNTERCLOCKWISE,
                }))
        const houndstoothTopGrainCoordinates: Coordinate[] =
            cycledHoundstoothCoordinates.map((coordinate: Coordinate) =>
                rotate({
                    coordinate,
                    fixedCoordinate: houndstoothCenterCoordinate,
                    rotation: EIGHTH_TURN_COUNTERCLOCKWISE,
                }))
        const houndstoothTopLeftGrainCoordinates: Coordinate[] =
            cycledHoundstoothCoordinates.map((coordinate: Coordinate) =>
                rotate({
                    coordinate,
                    fixedCoordinate: houndstoothCenterCoordinate,
                    rotation: QUARTER_TURN_COUNTERCLOCKWISE,
                }))
        const houndstoothLeftGrainCoordinates: Coordinate[] =
            cycledHoundstoothCoordinates.map((coordinate: Coordinate) =>
                rotate({
                    coordinate,
                    fixedCoordinate: houndstoothCenterCoordinate,
                    rotation: THREE_EIGHTHS_TURN_COUNTERCLOCKWISE,
                }))

        return {
            perimeterRhythmLeftGrainPitches: rankByHeight(houndstoothLeftGrainCoordinates),
            perimeterRhythmTopGrainPitches: rankByHeight(houndstoothTopGrainCoordinates),
            perimeterRhythmTopLeftGrainPitches: rankByHeight(houndstoothTopLeftGrainCoordinates),
            perimeterRhythmTopRightGrainPitches: rankByHeight(houndstoothTopRightGrainCoordinates),
        }
    }

export {
    buildPerimeterPitches,
}
