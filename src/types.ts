import {
    RangedSpecPropertyAttributes,
    StandardSpec,
    StandardSpecAttributes,
} from '@musical-patterns/pattern'
import { Offset, Scalar } from '@musical-patterns/utilities'

interface HoundstoothtopiaThemeSpec extends StandardSpec {
    patternPositionOffset: Offset[],
    patternPositionScalar: Scalar,
}

interface HoundstoothtopiaThemeSpecAttributes extends StandardSpecAttributes {
    patternPositionOffset: RangedSpecPropertyAttributes,
    patternPositionScalar: RangedSpecPropertyAttributes,
}

export {
    HoundstoothtopiaThemeSpec,
    HoundstoothtopiaThemeSpecAttributes,
}
