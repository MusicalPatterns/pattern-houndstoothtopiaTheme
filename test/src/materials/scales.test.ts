import { Scale } from '@musical-patterns/compiler'
import { StandardSpecProperties } from '@musical-patterns/pattern'
import { to } from '@musical-patterns/utilities'
import { buildScales, HoundstoothtopiaThemeSpec } from '../../../src/indexForTest'

describe('scales', () => {
    it('the fourth, fifth, and sixth scales are for the x, y, and z positions, respectively', () => {
        const spec: HoundstoothtopiaThemeSpec = {
            [ StandardSpecProperties.BASE_DURATION ]: to.Millisecond(1),
            [ StandardSpecProperties.BASE_FREQUENCY ]: to.Frequency(1),
            patternPositionOffset: [ 3, 4, 5 ].map(to.Offset),
            patternPositionScalar: to.Scalar(7),
        }
        const scales: Scale[] = buildScales(spec)

        expect(scales[ 3 ])
            .toEqual({
                offset: to.Offset(3),
                scalar: to.Scalar(7),
                scalars: undefined,
            })
        expect(scales[ 4 ])
            .toEqual({
                offset: to.Offset(4),
                scalar: to.Scalar(7),
                scalars: undefined,
            })
        expect(scales[ 5 ])
            .toEqual({
                offset: to.Offset(5),
                scalar: to.Scalar(7),
                scalars: undefined,
            })
    })
})
