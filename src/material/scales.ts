import { MaterializeScales, materializeStandardScales, Scale } from '@musical-patterns/material'
import { StandardSpecs } from '@musical-patterns/spec'
import { computeRootOfTwoScalars } from './scalars'

const materializeScales: MaterializeScales =
    (specs: StandardSpecs): Scale[] =>
        materializeStandardScales(specs, { valueScalars: computeRootOfTwoScalars() })

export {
    materializeScales,
}
