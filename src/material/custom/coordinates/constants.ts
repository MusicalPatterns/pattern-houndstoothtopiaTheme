// tslint:disable no-magic-numbers

import { Cycle, negative, to, Translation } from '@musical-patterns/utilities'
import { PlanarCoordinate } from '../types'

const TRANSLATION_TO_SPECIALIZE_COORDINATES_FOR_THEME: Translation<Cycle<PlanarCoordinate>> =
    to.Translation<Cycle<PlanarCoordinate>>(negative(1))

export {
    TRANSLATION_TO_SPECIALIZE_COORDINATES_FOR_THEME,
}
