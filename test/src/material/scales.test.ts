import { Scale } from '@musical-patterns/material'
import { StandardSpec, StandardSpecs } from '@musical-patterns/spec'
import { as, musicalAs, Position } from '@musical-patterns/utilities'
import { materializeScales } from '../../../src/indexForTest'

describe('scales', () => {
    it('the fourth, fifth, and sixth scales are for the x, y, and z positions, respectively', () => {
        const specs: StandardSpecs = {
            [ StandardSpec.BASIS_DURATION ]: musicalAs.Duration(1),
            [ StandardSpec.BASIS_FREQUENCY ]: musicalAs.Pitch(1),
            basePosition: [ 3, 4, 5 ].map((position: number) => musicalAs.Position(position)),
            basePositionScalar: as.Scalar<Position>(7),
        }
        const scales: Scale[] = materializeScales(specs)

        expect(scales[ 3 ])
            .toEqual({
                basis: 7,
                scalars: undefined,
            })
        expect(scales[ 4 ])
            .toEqual({
                basis: 7,
                scalars: undefined,
            })
        expect(scales[ 5 ])
            .toEqual({
                basis: 7,
                scalars: undefined,
            })
    })
})
