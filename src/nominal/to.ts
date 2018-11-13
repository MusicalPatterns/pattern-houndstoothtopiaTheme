// tslint:disable:variable-name no-any

import {
    GrainSet,
    GrainSetSequence,
    HoundstoothtopiaContourElement,
    HoundstoothtopiaContourPiece,
    HoundstoothtopiaContourWhole,
    Length,
    Radian,
} from './types'

const Length: (length: number) => Length =
    (length: number): Length => length as any

const Radian: (radian: number) => Radian =
    (radian: number): Radian => radian as any

const GrainSet: (grainSet: number[]) => GrainSet =
    (grainSet: number[]): GrainSet =>
        grainSet.map((grainSetElement: number): GrainSet => grainSetElement as any) as any

const GrainSetSequence: (grainSetSequence: number[]) => GrainSetSequence =
    (grainSetSequence: number[]): GrainSetSequence =>
        grainSetSequence.map(
            (grainSetSequenceElement: number): GrainSetSequence => grainSetSequenceElement as any) as any

const HoundstoothtopiaContourPiece:
    (contourPiece: Array<number[] | HoundstoothtopiaContourElement>) => HoundstoothtopiaContourPiece =
    (contourPiece: Array<number[] | HoundstoothtopiaContourElement>): HoundstoothtopiaContourPiece =>
        contourPiece.map(
            (contourElement: number[] | HoundstoothtopiaContourElement): HoundstoothtopiaContourElement =>
                contourElement as any,
        ) as any

const HoundstoothtopiaContourWhole:
    (contourWhole: Array<number[] | HoundstoothtopiaContourElement>) => HoundstoothtopiaContourWhole =
    (contourWhole: Array<number[] | HoundstoothtopiaContourElement>): HoundstoothtopiaContourWhole =>
        contourWhole.map(
            (contourElement: number[] | HoundstoothtopiaContourElement): HoundstoothtopiaContourElement =>
                contourElement as any,
        ) as any

export {
    Length,
    Radian,
    GrainSet,
    GrainSetSequence,
    HoundstoothtopiaContourPiece,
    HoundstoothtopiaContourWhole,
}
