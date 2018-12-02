import { buildScales } from '../../../src/indexForTest'
import { HoundstoothtopiaThemePatternSpec } from '../../../src/materials/types'
import { to } from '@musical-patterns/utilities'
import { Scale } from '@musical-patterns/compiler'

describe('houndstoothtopia theme scales', () => {
    it('the fourth, fifth, and sixth scales are for the x, y, and z positions, respectively', () => {
        const spec: HoundstoothtopiaThemePatternSpec = {
            patternDurationScalar: to.Scalar(1),
            patternPitchScalar: to.Scalar(1),
            patternPositionScalar: to.Scalar(7),
            patternPositionOffset: [ 3, 4, 5 ].map(to.Offset),
        }
        const scales: Scale[] = buildScales(spec)

        expect(scales[ 3 ])
            .toEqual({
                scalars: [ 1 ].map(to.Scalar),
                offset: to.Offset(3),
                scalar: to.Scalar(7),
            })
        expect(scales[ 4 ])
            .toEqual({
                scalars: [ 1 ].map(to.Scalar),
                offset: to.Offset(4),
                scalar: to.Scalar(7),
            })
        expect(scales[ 5 ])
            .toEqual({
                scalars: [ 1 ].map(to.Scalar),
                offset: to.Offset(5),
                scalar: to.Scalar(7),
            })
    })
})
