// tslint:disable no-magic-numbers

import { as, Cycle, negative, Translation } from '@musical-patterns/utilities'
import { PlanarCoordinate } from '../types'

const TRANSLATION_TO_START_ON_ROOT_TIP_BEFORE_ROOT_BASE: Translation<Cycle<PlanarCoordinate>> =
    as.Translation<Cycle<PlanarCoordinate>>(negative(7))

export {
    TRANSLATION_TO_START_ON_ROOT_TIP_BEFORE_ROOT_BASE,
}
