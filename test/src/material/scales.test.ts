import { Scale } from '@musical-patterns/material'
import { StandardSpec, StandardSpecs } from '@musical-patterns/spec'
import { as, Hz, Meters, Ms } from '@musical-patterns/utilities'
import { materializeScales } from '../../../src/indexForTest'

describe('scales', () => {
    it('the fourth, fifth, and sixth scales are for the x, y, and z positions, respectively', () => {
        const specs: StandardSpecs = {
            [ StandardSpec.BASE_DURATION ]: as.Scalar<Ms>(1),
            [ StandardSpec.BASE_FREQUENCY ]: as.Scalar<Hz>(1),
            basePosition: [ 3, 4, 5 ].map((position: number) => as.Translation<Meters>(position)),
            basePositionScalar: as.Scalar<Meters>(7),
        }
        const scales: Scale[] = materializeScales(specs)

        expect(scales[ 3 ])
            .toEqual({
                scalar: as.Scalar(7),
                scalars: undefined,
                translation: as.Translation(3),
            })
        expect(scales[ 4 ])
            .toEqual({
                scalar: as.Scalar(7),
                scalars: undefined,
                translation: as.Translation(4),
            })
        expect(scales[ 5 ])
            .toEqual({
                scalar: as.Scalar(7),
                scalars: undefined,
                translation: as.Translation(5),
            })
    })
})
