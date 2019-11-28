import { MaterializeScales, materializeStandardScales, Scales } from '@musical-patterns/material'
import { Specs } from '@musical-patterns/spec'
import { computeRootOfTwoScalars } from './scalars'

const materializeScales: MaterializeScales =
    (specs: Specs): Scales =>
        materializeStandardScales(specs, { valueScalars: computeRootOfTwoScalars() })

export {
    materializeScales,
}
