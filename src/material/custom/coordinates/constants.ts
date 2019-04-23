// tslint:disable no-magic-numbers

import { Cardinal, Cycle, DECREMENT } from '@musical-patterns/utilities'
import { PlanarCoordinate } from '../types'

const TRANSLATION_TO_SPECIALIZE_COORDINATES_FOR_THEME: Cardinal<Cycle<PlanarCoordinate>> = DECREMENT

export {
    TRANSLATION_TO_SPECIALIZE_COORDINATES_FOR_THEME,
}
