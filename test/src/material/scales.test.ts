import { Scale } from '@musical-patterns/material'
import { StandardSpec, StandardSpecs } from '@musical-patterns/spec'
import { as, Hz, Meters, Ms, Point } from '@musical-patterns/utilities'
import { materializeScales } from '../../../src/indexForTest'

describe('scales', () => {
    it('the fourth, fifth, and sixth scales are for the x, y, and z positions, respectively', () => {
        const specs: StandardSpecs = {
            [ StandardSpec.BASIS_DURATION ]: as.Translation<Point<Ms>>(1),
            [ StandardSpec.BASIS_FREQUENCY ]: as.Point<Hz>(1),
            basePosition: [ 3, 4, 5 ].map((position: number) => as.Point<Meters>(position)),
            basePositionScalar: as.Scalar<Point<Meters>>(7),
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
