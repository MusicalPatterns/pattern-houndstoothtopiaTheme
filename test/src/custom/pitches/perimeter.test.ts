import { to } from '../../../../../../src/indexForTest'
import { buildPerimeterPitches } from '../../../../src/indexForTest'

describe('perimeter pitches', () => {
    describe('maps each coordinate along its perimeter to its rank in vertical position', () => {
        it('when rotated such that the grain points to the top right', () => {
            const { perimeterRhythmTopRightGrainPitches } = buildPerimeterPitches()

            expect(perimeterRhythmTopRightGrainPitches)
                .toEqual(to.Block([ 0, 1, 2, 2, 3, 2, 2, 4, 4, 5, 4, 4, 3, 2 ]))
        })

        it('when rotated such that the grain points to the top', () => {
            const { perimeterRhythmTopGrainPitches } = buildPerimeterPitches()

            expect(perimeterRhythmTopGrainPitches)
                .toEqual(to.Block([ 0, 1, 3, 2, 3, 1, 0, 4, 5, 7, 6, 7, 5, 4 ]))
        })

        it('when rotated such that the grain points to the top left', () => {
            const { perimeterRhythmTopLeftGrainPitches } = buildPerimeterPitches()

            expect(perimeterRhythmTopLeftGrainPitches)
                .toEqual(to.Block([ 2, 2, 3, 2, 2, 1, 0, 2, 3, 4, 4, 5, 4, 4 ]))
        })

        it('when rotated such that the grain points to the left', () => {
            const { perimeterRhythmLeftGrainPitches } = buildPerimeterPitches()

            expect(perimeterRhythmLeftGrainPitches)
                .toEqual(to.Block([ 4, 3, 3, 2, 1, 1, 0, 0, 1, 1, 2, 3, 3, 4 ]))
        })
    })
})
