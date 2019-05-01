import { MaterializeScales, materializeStandardScales, Scales } from '@musical-patterns/material'
import { StandardSpecs } from '@musical-patterns/spec'
import { computeRootOfTwoScalars } from './scalars'

const materializeScales: MaterializeScales =
    (specs: StandardSpecs): Scales =>
        materializeStandardScales(specs, { valueScalars: computeRootOfTwoScalars() })

export {
    materializeScales,
}
