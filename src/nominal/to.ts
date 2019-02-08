// tslint:disable variable-name no-any

import {
    Grain,
    GrainCycleSequence,
} from './types'

const Grain: (grain: number) => Grain =
    (grain: number): Grain =>
        grain as any

const GrainCycleSequence: (grainCycleSequence: Array<number | Grain>) => GrainCycleSequence =
    (grainCycleSequence: Array<number | Grain>): GrainCycleSequence =>
        grainCycleSequence.map(
            (grain: number | Grain): Grain => grain as any,
        ) as any

export {
    Grain,
    GrainCycleSequence,
}
