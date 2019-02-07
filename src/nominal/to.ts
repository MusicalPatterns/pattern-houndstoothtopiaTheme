// tslint:disable variable-name no-any

import {
    Grain,
    GrainCycleSequence,
    HoundstoothtopiaContourElement,
    HoundstoothtopiaContourPiece,
    HoundstoothtopiaContourWhole,
} from './types'

const Grain: (grain: number) => Grain =
    (grain: number): Grain =>
        grain as any

const GrainCycleSequence: (grainCycleSequence: Array<number | Grain>) => GrainCycleSequence =
    (grainCycleSequence: Array<number | Grain>): GrainCycleSequence =>
        grainCycleSequence.map(
            (grain: number | Grain): Grain => grain as any,
        ) as any

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
    Grain,
    GrainCycleSequence,
    HoundstoothtopiaContourPiece,
    HoundstoothtopiaContourWhole,
}
