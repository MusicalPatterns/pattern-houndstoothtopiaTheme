// tslint:disable no-magic-numbers

import { as, Cardinal, Cycle, negative } from '@musical-patterns/utilities'
import { PlanarCoordinate } from '../types'

const TRANSLATION_TO_START_ON_ROOT_TIP_BEFORE_ROOT_BASE: Cardinal<Cycle<PlanarCoordinate>> =
    as.Cardinal<Cycle<PlanarCoordinate>>(negative(7))

export {
    TRANSLATION_TO_START_ON_ROOT_TIP_BEFORE_ROOT_BASE,
}
