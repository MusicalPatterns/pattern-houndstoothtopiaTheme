import { Scale } from '@musical-patterns/compiler'
import { StandardSpec, StandardSpecProperties } from '@musical-patterns/pattern'
import { to } from '@musical-patterns/utilities'
import { buildScales } from '../../../src/indexForTest'

describe('scales', () => {
    it('the fourth, fifth, and sixth scales are for the x, y, and z positions, respectively', () => {
        const spec: StandardSpec = {
            [ StandardSpecProperties.BASE_DURATION ]: to.Ms(1),
            [ StandardSpecProperties.BASE_FREQUENCY ]: to.Hz(1),
            basePosition: [ 3, 4, 5 ].map(to.Translation),
            basePositionScalar: to.Scalar(7),
        }
        const scales: Scale[] = buildScales(spec)

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
