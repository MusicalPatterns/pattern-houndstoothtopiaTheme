type GrainSet = number[] & {_GrainSetBrand: void}
type GrainSetSequence = number[] & {_GrainSetSequenceBrand: void}

type HoundstoothtopiaContourElement = [ number, number, [ number, number, number ] ]
type HoundstoothtopiaContourPiece = HoundstoothtopiaContourElement[] & {_HoundstoothtopiaContourPieceBrand: void}
type HoundstoothtopiaContourWhole = HoundstoothtopiaContourElement[] & {_HoundstoothtopiaContourWholeBrand: void}

export {
    GrainSet,
    GrainSetSequence,
    HoundstoothtopiaContourPiece,
    HoundstoothtopiaContourWhole,
    HoundstoothtopiaContourElement,
}
