// tslint:disable no-magic-numbers

import { as, Cycle, negative, Translation } from '@musical-patterns/utilities'
import { PlanarCoordinate } from '../types'

const TRANSLATION_TO_SPECIALIZE_COORDINATES_FOR_THEME: Translation<Cycle<PlanarCoordinate>> =
    as.Translation<Cycle<PlanarCoordinate>>(negative(1))

export {
    TRANSLATION_TO_SPECIALIZE_COORDINATES_FOR_THEME,
}
