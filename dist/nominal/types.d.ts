declare enum _GrainSetBrand {
}
declare type GrainSet = _GrainSetBrand & number[];
declare enum _GrainSetSequenceBrand {
}
declare type GrainSetSequence = _GrainSetSequenceBrand & number[];
declare type HoundstoothtopiaContourElement = [number, number, [number, number, number]];
declare enum _HoundstoothtopiaContourPieceBrand {
}
declare type HoundstoothtopiaContourPiece = _HoundstoothtopiaContourPieceBrand & HoundstoothtopiaContourElement[];
declare enum _HoundstoothtopiaContourWholeBrand {
}
declare type HoundstoothtopiaContourWhole = _HoundstoothtopiaContourWholeBrand & HoundstoothtopiaContourElement[];
export { GrainSet, GrainSetSequence, HoundstoothtopiaContourPiece, HoundstoothtopiaContourWhole, HoundstoothtopiaContourElement, };
