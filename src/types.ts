import {
    RangedPatternSpecPropertyAttributes,
    StandardPatternSpec,
    StandardPatternSpecAttributes,
} from '@musical-patterns/pattern'
import { Offset, Scalar } from '@musical-patterns/utilities'

interface HoundstoothtopiaThemePatternSpec extends StandardPatternSpec {
    patternPositionOffset: Offset[],
    patternPositionScalar: Scalar,
}

interface HoundstoothtopiaThemePatternSpecAttributes extends StandardPatternSpecAttributes {
    patternPositionOffset: RangedPatternSpecPropertyAttributes,
    patternPositionScalar: RangedPatternSpecPropertyAttributes,
}

export {
    HoundstoothtopiaThemePatternSpec,
    HoundstoothtopiaThemePatternSpecAttributes,
}
