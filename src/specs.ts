import {
    RangedInputType,
    SpecDataFor,
    SpecPropertyType,
    standardInitialSpec,
    standardSpecAttributes,
    StandardSpecProperties,
} from '@musical-patterns/pattern'
import { Units } from '@musical-patterns/utilities'
import {
    HOUNDSTOOTHTOPIA_THEME_BASE_DURATION,
    HOUNDSTOOTHTOPIA_THEME_BASE_FREQUENCY,
    HOUNDSTOOTHTOPIA_THEME_BASE_POSITION,
    HOUNDSTOOTHTOPIA_THEME_BASE_POSITION_SCALAR,
} from './constants'
import { HoundstoothtopiaThemeSpec, HoundstoothtopiaThemeSpecAttributes } from './types'

const initial: HoundstoothtopiaThemeSpec = {
    ...standardInitialSpec,
    [ StandardSpecProperties.BASE_DURATION ]: HOUNDSTOOTHTOPIA_THEME_BASE_DURATION,
    [ StandardSpecProperties.BASE_FREQUENCY ]: HOUNDSTOOTHTOPIA_THEME_BASE_FREQUENCY,
    basePosition: HOUNDSTOOTHTOPIA_THEME_BASE_POSITION,
    basePositionScalar: HOUNDSTOOTHTOPIA_THEME_BASE_POSITION_SCALAR,
}

const attributes: HoundstoothtopiaThemeSpecAttributes = {
    ...standardSpecAttributes,
    basePosition: {
        description: 'where in your virtual space the pattern will be centered',
        hideInput: RangedInputType.RANGE,
        isArray: true,
        order: 1,
        specPropertyType: SpecPropertyType.RANGED,
        units: Units.METERS,
    },
    basePositionScalar: {
        description: 'how far apart the voices will be placed',
        order: 2,
        specPropertyType: SpecPropertyType.RANGED,
        units: Units.METERS,
    },
}

const specData: SpecDataFor<HoundstoothtopiaThemeSpec> = {
    attributes,
    initial,
}

export {
    specData,
}
