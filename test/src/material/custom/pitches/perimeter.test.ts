// tslint:disable binary-expression-operand-order
import { as, SQUARE_ROOT_OF_TWO } from '@musical-patterns/utilities'
import { computePerimeterPitches } from '../../../../../src/indexForTest'

describe('perimeter pitches', () => {
    describe('maps each coordinate along its perimeter, going clockwise, to its vertical position', () => {
        it('when rotated such that the grain points to the top right, 1 at the top', () => {
            const { topRightGrain } = computePerimeterPitches()

            expect(topRightGrain)
                .toBeCloseToArray([
                    6, // Root outer tip
                    5, // Root inner tip
                    4, // Root base
                    4, // Mid-root peak
                    3, // Root base
                    4, // Root inner tip
                    4, // Root outer tip
                    2, // Conid
                    2, // Cusp base
                    1, // Cusp tip
                    2, // Mid-cusp trough
                    2, // Cusp tip
                    3, // Cusp base
                    4, // Conid
                ].map(as.Scalar)
                    .map(as.Frequency))
        })

        it('when rotated such that the grain points to the top, 3 across the diagonal of the main square', () => {
            const { topGrain } = computePerimeterPitches()

            expect(topGrain)
                .toBeCloseToArray([
                    5.82842712474619,   // Root outer tip
                    5.121320343559643,  // Root inner tip
                    3.7071067811865475, // Root base
                    4.414213562373095,  // Mid-root peak
                    3.7071067811865475, // Root base
                    5.121320343559642,  // Root inner tip
                    5.82842712474619,   // Root outer tip
                    3,                  // Conid
                    2.2928932188134525, // Cusp base
                    0.8786796564403572, // Cusp tip
                    1.585786437626905,  // Mid-cusp trough
                    0.8786796564403576, // Cusp tip
                    2.2928932188134525, // Cusp base
                    3,                  // Conid
                ].map(as.Scalar)
                    .map(as.Frequency))

            // In terms of the square root of 2
            expect(topGrain)
                .toBeCloseToArray([
                    3 + 4 * (SQUARE_ROOT_OF_TWO / 2),   // Root outer tip
                    3 + 3 * (SQUARE_ROOT_OF_TWO / 2),   // Root inner tip
                    3 + 1 * (SQUARE_ROOT_OF_TWO / 2),   // Root base
                    3 + 2 * (SQUARE_ROOT_OF_TWO / 2),   // Mid-root peak
                    3 + 1 * (SQUARE_ROOT_OF_TWO / 2),   // Root base
                    3 + 3 * (SQUARE_ROOT_OF_TWO / 2),   // Root inner tip
                    3 + 4 * (SQUARE_ROOT_OF_TWO / 2),   // Root outer tip
                    3,                                  // Conid
                    3 - 1 * (SQUARE_ROOT_OF_TWO / 2),   // Cusp base
                    3 - 3 * (SQUARE_ROOT_OF_TWO / 2),   // Cusp tip
                    3 - 2 * (SQUARE_ROOT_OF_TWO / 2),   // Mid-cusp trough
                    3 - 3 * (SQUARE_ROOT_OF_TWO / 2),   // Cusp tip
                    3 - 1 * (SQUARE_ROOT_OF_TWO / 2),   // Cusp base
                    3,                                  // Conid
                ].map(as.Scalar)
                    .map(as.Frequency))
        })

        it('when rotated such that the grain points to the top left, 1 at the top', () => {
            const { topLeftGrain } = computePerimeterPitches()

            expect(topLeftGrain)
                .toBeCloseToArray([
                    4, // Root outer tip
                    4, // Root inner tip
                    3, // Root base
                    4, // Mid-root peak
                    4, // Root base
                    5, // Root inner tip
                    6, // Root outer tip
                    4, // Conid
                    3, // Cusp base
                    2, // Cusp tip
                    2, // Mid-cusp trough
                    1, // Cusp tip
                    2, // Cusp base
                    2, // Conid
                ].map(as.Scalar)
                    .map(as.Frequency))
        })

        it('when rotated such that the grain points to the left, 3 across the diagonal of the main square', () => {
            const { leftGrain } = computePerimeterPitches()

            expect(leftGrain)
                .toBeCloseToArray([
                    1.585786437626905,  // Root outer tip
                    2.2928932188134525, // Root inner tip
                    2.2928932188134525, // Root base
                    3,                  // Mid-root peak
                    3.7071067811865475, // Root base
                    3.707106781186548,  // Root inner tip
                    4.414213562373096,  // Root outer tip
                    4.414213562373095,  // Conid
                    3.7071067811865475, // Cusp base
                    3.7071067811865475, // Cusp tip
                    3,                  // Mid-cusp trough
                    2.292893218813452,  // Cusp tip
                    2.2928932188134525, // Cusp base
                    1.585786437626905,  // Conid
                ].map(as.Scalar)
                    .map(as.Frequency))

            // In terms of the square root of 2
            expect(leftGrain)
                .toBeCloseToArray([
                    3 - 2 * (SQUARE_ROOT_OF_TWO / 2),   // Root outer tip
                    3 - 1 * (SQUARE_ROOT_OF_TWO / 2),   // Root inner tip
                    3 - 1 * (SQUARE_ROOT_OF_TWO / 2),   // Root base
                    3,                                  // Mid-root peak
                    3 + 1 * (SQUARE_ROOT_OF_TWO / 2),   // Root base
                    3 + 1 * (SQUARE_ROOT_OF_TWO / 2),   // Root inner tip
                    3 + 2 * (SQUARE_ROOT_OF_TWO / 2),   // Root outer tip
                    3 + 2 * (SQUARE_ROOT_OF_TWO / 2),   // Conid
                    3 + 1 * (SQUARE_ROOT_OF_TWO / 2),   // Cusp base
                    3 + 1 * (SQUARE_ROOT_OF_TWO / 2),   // Cusp tip
                    3,                                  // Mid-cusp trough
                    3 - 1 * (SQUARE_ROOT_OF_TWO / 2),   // Cusp tip
                    3 - 1 * (SQUARE_ROOT_OF_TWO / 2),   // Cusp base
                    3 - 2 * (SQUARE_ROOT_OF_TWO / 2),   // Conid
                ].map(as.Scalar)
                    .map(as.Frequency))
        })
    })
})
