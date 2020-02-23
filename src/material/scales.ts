import { MaterializeScales, materializeStandardScales, Scales } from '@musical-patterns/material'
import { Specs } from '@musical-patterns/spec'
import { thunkRootOfTwoScalars } from './scalars'

const materializeScales: MaterializeScales =
    (specs: Specs): Scales =>
        materializeStandardScales(specs, { valueScalars: thunkRootOfTwoScalars() })

export {
    materializeScales,
}
