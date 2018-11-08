import { Scalar, to } from '../../../../../src/indexForTest'
import { testIsCloseTo } from '../../../../../test/support'
import { buildScalars } from '../../../src/indexForTest'

describe('houndstoothtopia scalars', () => {
    it('root of three scalars start at 1 and increase by the square root of 3', () => {
        const { rootOfThreeScalars } = buildScalars()
        const expectedScalars: Scalar[] = [
            1,
            Math.sqrt(3),
            3,
            Math.sqrt(3) * 3,
            9,
            Math.sqrt(3) * 9,
            27,
            Math.sqrt(3) * 27,
        ].map(to.Scalar)

        expectedScalars.forEach((expectedScalar: Scalar, index: number): void => {
            expect(testIsCloseTo(rootOfThreeScalars[ index ], expectedScalar))
                .toBeTruthy()
        })
    })

    it('root of two scalars start at 1 and increase by the square root of 2', () => {
        const { rootOfTwoScalars } = buildScalars()
        const expectedScalars: Scalar[] = [
            1,
            Math.sqrt(2),
            2,
            Math.sqrt(2) * 2,
            4,
            Math.sqrt(2) * 4,
            8,
            Math.sqrt(2) * 8,
        ].map(to.Scalar)

        expectedScalars.forEach((expectedScalar: Scalar, index: number): void => {
            expect(testIsCloseTo(rootOfTwoScalars[ index ], expectedScalar))
                .toBeTruthy()
        })
    })
})
