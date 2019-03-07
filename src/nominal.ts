// tslint:disable ban-types

import { buildNominalInterface, DUMMY_VALUE_FOR_BUILDING_NOMINAL_INTERFACE } from '@musical-patterns/utilities'

type Grain = Number & { _NominalBrand: 'Grain' }
type GrainCycleSequence = number[] & { _NominalBrand: 'GrainCycleSequence' }

const { to, from } = buildNominalInterface({
    number: {
        Grain: DUMMY_VALUE_FOR_BUILDING_NOMINAL_INTERFACE as Grain,
    },
    numericArray: {
        GrainCycleSequence: DUMMY_VALUE_FOR_BUILDING_NOMINAL_INTERFACE as GrainCycleSequence,
    },
})

export {
    to,
    from,
    GrainCycleSequence,
    Grain,
}
