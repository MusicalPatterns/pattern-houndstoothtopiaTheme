import { Scalar, to } from '@musical-patterns/utilities'
import { buildScalars } from '../../../src/indexForTest'
import { testArraysAreClose } from '../../support/testArraysAreClose'

describe('houndstoothtopia scalars', () => {
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

        testArraysAreClose(rootOfTwoScalars, expectedScalars)
    })
})
