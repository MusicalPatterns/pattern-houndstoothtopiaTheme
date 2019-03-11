// tslint:disable ban-types

import { computeNominalInterface, DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE } from '@musical-patterns/utilities'

type Grain = Number & { _NominalBrand: 'Grain' }
type GrainCycleSequence = number[] & { _NominalBrand: 'GrainCycleSequence' }

const { to, from } = computeNominalInterface({
    number: {
        Grain: DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE as Grain,
    },
    numericArray: {
        GrainCycleSequence: DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE as GrainCycleSequence,
    },
})

export {
    to,
    from,
    GrainCycleSequence,
    Grain,
}
