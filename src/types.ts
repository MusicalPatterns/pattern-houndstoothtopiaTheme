import {
    RangedSpecPropertyAttributes,
    StandardSpec,
    StandardSpecAttributes,
} from '@musical-patterns/pattern'
import { Offset, Scalar } from '@musical-patterns/utilities'

interface HoundstoothtopiaThemeSpec extends StandardSpec {
    basePosition: Offset[],
    basePositionScalar: Scalar,
}

interface HoundstoothtopiaThemeSpecAttributes extends StandardSpecAttributes {
    basePosition: RangedSpecPropertyAttributes,
    basePositionScalar: RangedSpecPropertyAttributes,
}

export {
    HoundstoothtopiaThemeSpec,
    HoundstoothtopiaThemeSpecAttributes,
}
