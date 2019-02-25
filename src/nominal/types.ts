// tslint:disable ban-types

type Grain = Number & { _GrainBrand: void }
type GrainCycleSequence = number[] & { _GrainCycleSequenceBrand: void }

export {
    Grain,
    GrainCycleSequence,
}
