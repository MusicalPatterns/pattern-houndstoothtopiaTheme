import { Scale } from '@musical-patterns/material'
import { StandardSpec, StandardSpecs } from '@musical-patterns/spec'
import { Hz, Meters, Ms, to } from '@musical-patterns/utilities'
import { materializeScales } from '../../../src/indexForTest'

describe('scales', () => {
    it('the fourth, fifth, and sixth scales are for the x, y, and z positions, respectively', () => {
        const specs: StandardSpecs = {
            [ StandardSpec.BASE_DURATION ]: to.Scalar<Ms>(1),
            [ StandardSpec.BASE_FREQUENCY ]: to.Scalar<Hz>(1),
            basePosition: [ 3, 4, 5 ].map((position: number) => to.Translation<Meters>(position)),
            basePositionScalar: to.Scalar<Meters>(7),
        }
        const scales: Scale[] = materializeScales(specs)

        expect(scales[ 3 ])
            .toEqual({
                scalar: to.Scalar(7),
                scalars: undefined,
                translation: to.Translation(3),
            })
        expect(scales[ 4 ])
            .toEqual({
                scalar: to.Scalar(7),
                scalars: undefined,
                translation: to.Translation(4),
            })
        expect(scales[ 5 ])
            .toEqual({
                scalar: to.Scalar(7),
                scalars: undefined,
                translation: to.Translation(5),
            })
    })
})
