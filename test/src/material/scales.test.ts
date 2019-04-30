import { Scale } from '@musical-patterns/material'
import { StandardSpec, StandardSpecs } from '@musical-patterns/spec'
import { as, musicalAs, Position } from '@musical-patterns/utilities'
import { materializeScales } from '../../../src/indexForTest'

describe('scales', () => {
    it('the fourth, fifth, and sixth scales are for the x, y, and z positions, respectively', () => {
        const specs: StandardSpecs = {
            [ StandardSpec.BASIS_DURATION ]: musicalAs.Duration(1),
            [ StandardSpec.BASIS_FREQUENCY ]: musicalAs.Pitch(1),
            [ StandardSpec.BASIS_POSITION ]: musicalAs.Position(7),
        }
        // tslint:disable-next-line no-any
        const scales: Array<Scale<any>> = materializeScales(specs)

        expect(scales[ 3 ])
            .toEqual({
                basis: 7,
                translation: as.Translation<Position>(0),
            })
        expect(scales[ 4 ])
            .toEqual({
                basis: 7,
                translation: as.Translation<Position>(0),
            })
        expect(scales[ 5 ])
            .toEqual({
                basis: 7,
                translation: as.Translation<Position>(0),
            })
    })
})
