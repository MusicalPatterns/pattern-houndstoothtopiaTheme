import { AbstractName, Scales } from '@musical-patterns/material'
import { StandardSpec, StandardSpecs } from '@musical-patterns/spec'
import { as, Location, musicalAs } from '@musical-patterns/utilities'
import { materializeScales } from '../../../src/indexForTest'

describe('scales', () => {
    it('the position scales are for the x, y, and z positions, respectively', () => {
        const specs: StandardSpecs = {
            [ StandardSpec.MS_PHYSICALIZATION ]: musicalAs.Duration(1),
            [ StandardSpec.HZ_PHYSICALIZATION ]: musicalAs.Tone(1),
            [ StandardSpec.METERS_PHYSICALIZATION ]: musicalAs.Location(7),
        }
        // tslint:disable-next-line no-any
        const scales: Scales = materializeScales(specs)

        expect(scales[ AbstractName.POSITION ]![ 0 ])
            .toEqual({
                basis: musicalAs.Location(7),
                translation: as.Translation<Location>(0),
            })
        expect(scales[ AbstractName.POSITION ]![ 1 ])
            .toEqual({
                basis: musicalAs.Location(7),
                translation: as.Translation<Location>(0),
            })
        expect(scales[ AbstractName.POSITION ]![ 2 ])
            .toEqual({
                basis: musicalAs.Location(7),
                translation: as.Translation<Location>(0),
            })
    })
})
