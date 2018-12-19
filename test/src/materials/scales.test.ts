import { Scale } from '@musical-patterns/compiler'
import { to } from '@musical-patterns/utilities'
import { buildScales, HoundstoothtopiaThemePatternSpec } from '../../../src/indexForTest'

describe('scales', () => {
    it('the fourth, fifth, and sixth scales are for the x, y, and z positions, respectively', () => {
        const spec: HoundstoothtopiaThemePatternSpec = {
            patternDurationScalar: to.Scalar(1),
            patternPitchScalar: to.Scalar(1),
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
