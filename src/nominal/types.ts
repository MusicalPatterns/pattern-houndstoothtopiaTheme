// tslint:disable ban-types

type Grain = Number & {_GrainBrand: void}
type GrainCycleSequence = number[] & {_GrainSetSequenceBrand: void}

export {
    Grain,
    GrainCycleSequence,
}
