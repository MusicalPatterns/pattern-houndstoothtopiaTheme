import { Scale } from '@musical-patterns/material'
import { StandardSpec, StandardSpecs } from '@musical-patterns/spec'
import { as, Location, musicalAs } from '@musical-patterns/utilities'
import { materializeScales } from '../../../src/indexForTest'

describe('scales', () => {
    it('the fourth, fifth, and sixth scales are for the x, y, and z positions, respectively', () => {
        const specs: StandardSpecs = {
            [ StandardSpec.MS_PHYSICALIZATION ]: musicalAs.Duration(1),
            [ StandardSpec.HZ_PHYSICALIZATION ]: musicalAs.Tone(1),
            [ StandardSpec.METERS_PHYSICALIZATION ]: musicalAs.Location(7),
        }
        // tslint:disable-next-line no-any
        const scales: Array<Scale<any>> = materializeScales(specs)

        expect(scales[ 3 ])
            .toEqual({
                basis: 7,
                translation: as.Translation<Location>(0),
            })
        expect(scales[ 4 ])
            .toEqual({
                basis: 7,
                translation: as.Translation<Location>(0),
            })
        expect(scales[ 5 ])
            .toEqual({
                basis: 7,
                translation: as.Translation<Location>(0),
            })
    })
})
