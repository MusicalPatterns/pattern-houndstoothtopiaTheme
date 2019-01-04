import { PatternSpec } from '@musical-patterns/pattern';
import { Coordinate, Index, Offset, Scalar } from '@musical-patterns/utilities';
interface UnpackedHoundstoothtopiaContourElement {
    duration: Index;
    pitch: Scalar;
    position: Coordinate;
}
interface HoundstoothtopiaThemePatternSpec extends PatternSpec {
    patternPositionOffset: Offset[];
    patternPositionScalar: Scalar;
}
export { UnpackedHoundstoothtopiaContourElement, HoundstoothtopiaThemePatternSpec, };
