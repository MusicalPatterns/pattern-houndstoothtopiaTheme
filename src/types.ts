import { RangedSpecPropertyAttributes, Spec, SpecAttributes } from '@musical-patterns/pattern'
import { Offset, Scalar } from '@musical-patterns/utilities'

interface HoundstoothtopiaThemeSpec extends Spec {
    basePosition: Offset[],
    basePositionScalar: Scalar,
}

interface HoundstoothtopiaThemeSpecAttributes extends SpecAttributes {
    basePosition: RangedSpecPropertyAttributes,
    basePositionScalar: RangedSpecPropertyAttributes,
}

export {
    HoundstoothtopiaThemeSpec,
    HoundstoothtopiaThemeSpecAttributes,
}
