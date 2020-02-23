import { as, Scalar, SQUARE_ROOT_OF_TWO, Value } from '@musical-patterns/utilities'
import { thunkRootOfTwoScalars } from '../../../src/indexForTest'

describe('scalars', (): void => {
    it('root of two scalars start at 1 and increase by the square root of 2', (): void => {
        const rootOfTwoScalars: Array<Scalar<Value>> = thunkRootOfTwoScalars()
        const expectedScalars: Array<Scalar<Value>> = [
            1,
            SQUARE_ROOT_OF_TWO,
            2,
            SQUARE_ROOT_OF_TWO * 2,
            4,
            SQUARE_ROOT_OF_TWO * 4,
            8,
            SQUARE_ROOT_OF_TWO * 8,
        ].map((expected: number): Scalar<Value> => as.Scalar<Value>(expected))

        expect(rootOfTwoScalars)
            .toBeCloseSoFar(expectedScalars)
    })
})
