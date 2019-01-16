import { PatternSpec, PatternSpecAttributes, RangedPatternSpecPropertyAttributes } from '@musical-patterns/pattern'
import { Offset, Scalar } from '@musical-patterns/utilities'

interface HoundstoothtopiaThemePatternSpec extends PatternSpec {
    patternPositionOffset: Offset[],
    patternPositionScalar: Scalar,
}

interface HoundstoothtopiaThemePatternSpecAttributes extends PatternSpecAttributes {
    patternPositionOffset: RangedPatternSpecPropertyAttributes,
    patternPositionScalar: RangedPatternSpecPropertyAttributes,
}

export {
    HoundstoothtopiaThemePatternSpec,
    HoundstoothtopiaThemePatternSpecAttributes,
}
