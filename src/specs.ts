import {
    PatternSpecDataFor,
    PatternSpecPropertyType,
    standardInitialPatternSpec,
    standardPatternSpecAttributes,
    StandardPatternSpecProperties,
} from '@musical-patterns/pattern'
import {
    HOUNDSTOOTHTOPIA_THEME_DURATION_SCALAR,
    HOUNDSTOOTHTOPIA_THEME_PITCH_SCALAR,
    HOUNDSTOOTHTOPIA_THEME_POSITION_OFFSET,
    HOUNDSTOOTHTOPIA_THEME_POSITION_SCALAR,
} from './constants'
import { HoundstoothtopiaThemePatternSpec, HoundstoothtopiaThemePatternSpecAttributes } from './types'

const initial: HoundstoothtopiaThemePatternSpec = {
    ...standardInitialPatternSpec,
    [ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ]: HOUNDSTOOTHTOPIA_THEME_DURATION_SCALAR,
    [ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ]: HOUNDSTOOTHTOPIA_THEME_PITCH_SCALAR,
    patternPositionOffset: HOUNDSTOOTHTOPIA_THEME_POSITION_OFFSET,
    patternPositionScalar: HOUNDSTOOTHTOPIA_THEME_POSITION_SCALAR,
}

const attributes: HoundstoothtopiaThemePatternSpecAttributes = {
    ...standardPatternSpecAttributes,
    patternPositionOffset: {
        patternSpecPropertyType: PatternSpecPropertyType.RANGED,
    },
    patternPositionScalar: {
        patternSpecPropertyType: PatternSpecPropertyType.RANGED,
    },
}

const specData: PatternSpecDataFor<HoundstoothtopiaThemePatternSpec> = {
    attributes,
    initial,
}

export {
    specData,
}
