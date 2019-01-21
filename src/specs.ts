import {
    SpecDataFor,
    SpecPropertyType,
    standardInitialSpec,
    standardSpecAttributes,
    StandardSpecProperties,
} from '@musical-patterns/pattern'
import {
    HOUNDSTOOTHTOPIA_THEME_BASE_DURATION,
    HOUNDSTOOTHTOPIA_THEME_BASE_FREQUENCY,
    HOUNDSTOOTHTOPIA_THEME_POSITION_OFFSET,
    HOUNDSTOOTHTOPIA_THEME_POSITION_SCALAR,
} from './constants'
import { HoundstoothtopiaThemeSpec, HoundstoothtopiaThemeSpecAttributes } from './types'

const initial: HoundstoothtopiaThemeSpec = {
    ...standardInitialSpec,
    [ StandardSpecProperties.BASE_DURATION ]: HOUNDSTOOTHTOPIA_THEME_BASE_DURATION,
    [ StandardSpecProperties.BASE_FREQUENCY ]: HOUNDSTOOTHTOPIA_THEME_BASE_FREQUENCY,
    patternPositionOffset: HOUNDSTOOTHTOPIA_THEME_POSITION_OFFSET,
    patternPositionScalar: HOUNDSTOOTHTOPIA_THEME_POSITION_SCALAR,
}

const attributes: HoundstoothtopiaThemeSpecAttributes = {
    ...standardSpecAttributes,
    patternPositionOffset: {
        specPropertyType: SpecPropertyType.RANGED,
    },
    patternPositionScalar: {
        specPropertyType: SpecPropertyType.RANGED,
    },
}

const specData: SpecDataFor<HoundstoothtopiaThemeSpec> = {
    attributes,
    initial,
}

export {
    specData,
}
