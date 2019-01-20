import {
    SpecDataFor,
    SpecPropertyType,
    standardInitialSpec,
    standardSpecAttributes,
    StandardSpecProperties,
} from '@musical-patterns/pattern'
import {
    HOUNDSTOOTHTOPIA_THEME_DURATION_SCALAR,
    HOUNDSTOOTHTOPIA_THEME_PITCH_SCALAR,
    HOUNDSTOOTHTOPIA_THEME_POSITION_OFFSET,
    HOUNDSTOOTHTOPIA_THEME_POSITION_SCALAR,
} from './constants'
import { HoundstoothtopiaThemeSpec, HoundstoothtopiaThemeSpecAttributes } from './types'

const initial: HoundstoothtopiaThemeSpec = {
    ...standardInitialSpec,
    [ StandardSpecProperties.PATTERN_DURATION_SCALAR ]: HOUNDSTOOTHTOPIA_THEME_DURATION_SCALAR,
    [ StandardSpecProperties.PATTERN_PITCH_SCALAR ]: HOUNDSTOOTHTOPIA_THEME_PITCH_SCALAR,
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
