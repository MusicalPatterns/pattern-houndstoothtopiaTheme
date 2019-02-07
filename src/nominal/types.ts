// tslint:disable ban-types

type Grain = Number & {_GrainBrand: void}
type GrainCycleSequence = number[] & {_GrainSetSequenceBrand: void}

type HoundstoothtopiaContourElement = [ number, number, [ number, number, number ] ]
type HoundstoothtopiaContourPiece = HoundstoothtopiaContourElement[] & {_HoundstoothtopiaContourPieceBrand: void}
type HoundstoothtopiaContourWhole = HoundstoothtopiaContourElement[] & {_HoundstoothtopiaContourWholeBrand: void}

export {
    Grain,
    GrainCycleSequence,
    HoundstoothtopiaContourPiece,
    HoundstoothtopiaContourWhole,
    HoundstoothtopiaContourElement,
}
