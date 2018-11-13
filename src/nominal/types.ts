interface Length extends Number {
    _LengthBrand: string,
}

interface Radian extends Number {
    _RadianBrand: string,
}

enum _GrainSetBrand {}
type GrainSet = _GrainSetBrand & number[]

enum _GrainSetSequenceBrand {}
type GrainSetSequence = _GrainSetSequenceBrand & number[]

type HoundstoothtopiaContourElement = [ number, number, [number, number, number] ]

enum _HoundstoothtopiaContourPieceBrand {}
type HoundstoothtopiaContourPiece = _HoundstoothtopiaContourPieceBrand & HoundstoothtopiaContourElement[]

enum _HoundstoothtopiaContourWholeBrand {}
type HoundstoothtopiaContourWhole = _HoundstoothtopiaContourWholeBrand & HoundstoothtopiaContourElement[]

export {
    Length,
    Radian,
    GrainSet,
    GrainSetSequence,
    HoundstoothtopiaContourPiece,
    HoundstoothtopiaContourWhole,
    HoundstoothtopiaContourElement,
}
