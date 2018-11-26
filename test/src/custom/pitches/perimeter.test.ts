import { testArraysAreClose, to } from '@musical-patterns/shared'
import { buildPerimeterPitches } from '../../../../src/indexForTest'

describe('perimeter pitches', () => {
    describe('maps each coordinate along its perimeter to its vertical position', () => {
        it('when rotated such that the grain points to the top right', () => {
            const { perimeterRhythmTopRightGrainPitches } = buildPerimeterPitches()

            testArraysAreClose(perimeterRhythmTopRightGrainPitches, [
                6,
                5,
                4,
                4,
                3,
                4,
                4,
                2,
                2,
                1,
                2,
                2,
                3,
                4,
            ].map(to.Scalar))
        })

        it('when rotated such that the grain points to the top', () => {
            const { perimeterRhythmTopGrainPitches } = buildPerimeterPitches()

            testArraysAreClose(perimeterRhythmTopGrainPitches, [
                5.82842712474619,
                5.121320343559643,
                3.7071067811865475,
                4.414213562373095,
                3.7071067811865475,
                5.121320343559642,
                5.82842712474619,
                3,
                2.2928932188134525,
                0.8786796564403572,
                1.585786437626905,
                0.8786796564403576,
                2.2928932188134525,
                3,
            ].map(to.Scalar))
        })

        it('when rotated such that the grain points to the top left', () => {
            const { perimeterRhythmTopLeftGrainPitches } = buildPerimeterPitches()

            testArraysAreClose(perimeterRhythmTopLeftGrainPitches, [
                4,
                4,
                3,
                4,
                4,
                5,
                6,
                4,
                3,
                2,
                2,
                1,
                2,
                2,
            ].map(to.Scalar))
        })

        it('when rotated such that the grain points to the left', () => {
            const { perimeterRhythmLeftGrainPitches } = buildPerimeterPitches()

            testArraysAreClose(perimeterRhythmLeftGrainPitches, [
                1.585786437626905,
                2.2928932188134525,
                2.2928932188134525,
                3,
                3.7071067811865475,
                3.707106781186548,
                4.414213562373096,
                4.414213562373095,
                3.7071067811865475,
                3.7071067811865475,
                3,
                2.292893218813452,
                2.2928932188134525,
                1.585786437626905,
            ].map(to.Scalar))
        })
    })
})
