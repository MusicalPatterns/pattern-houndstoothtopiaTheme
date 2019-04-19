import { Ms, Scalar, SQUARE_ROOT_OF_TWO, to } from '@musical-patterns/utilities'
import { computeRootOfTwoScalars } from '../../../src/indexForTest'

describe('scalars', () => {
    it('root of two scalars start at 1 and increase by the square root of 2', () => {
        const rootOfTwoScalars: Array<Scalar<Ms>> = computeRootOfTwoScalars()
        const expectedScalars: Array<Scalar<Ms>> = [
            1,
            SQUARE_ROOT_OF_TWO,
            2,
            SQUARE_ROOT_OF_TWO * 2,
            4,
            SQUARE_ROOT_OF_TWO * 4,
            8,
            SQUARE_ROOT_OF_TWO * 8,
        ].map((expected: number) => to.Scalar<Ms>(expected))

        expect(rootOfTwoScalars)
            .toBeCloseSoFar(expectedScalars)
    })
})
