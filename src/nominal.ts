// tslint:disable ban-types no-type-definitions-outside-types-modules no-any

import { buildNominalInterface, DUMMY_VALUE_FOR_BUILDING_NOMINAL_INTERFACE } from '@musical-patterns/utilities'

type Grain = Number & { _GrainBrand: void }
type GrainCycleSequence = number[] & { _GrainCycleSequenceBrand: void }

const { to, from } = buildNominalInterface({
    number: {
        Grain: DUMMY_VALUE_FOR_BUILDING_NOMINAL_INTERFACE as any as Grain,
    },
    numericArray: {
        GrainCycleSequence: DUMMY_VALUE_FOR_BUILDING_NOMINAL_INTERFACE as any as GrainCycleSequence,
    },
})

export {
    to,
    from,
    GrainCycleSequence,
    Grain,
}
