import { buildContours, to } from '../../../src/indexForTest'

describe('build houndstoothtopia examples', () => {
    it('does the left grain contour of the perimeter rhythm', () => {
        const { perimeterRhythmLeftGrainContour } = buildContours()
        expect(perimeterRhythmLeftGrainContour)
            .toEqual(to.Contour([
                [ 0, 4 ], [ 1, 3 ],
                [ 0, 3 ], [ 0, 2 ], [ 1, 1 ],
                [ 0, 1 ], [ 3, 0 ],
                [ 0, 0 ], [ 1, 1 ],
                [ 0, 1 ], [ 0, 2 ], [ 1, 3 ],
                [ 0, 3 ], [ 3, 4 ],
            ]))
    })

    it('does the top grain contour of the perimeter rhythm', () => {
        const { perimeterRhythmTopGrainContour } = buildContours()
        expect(perimeterRhythmTopGrainContour)
            .toEqual(to.Contour([
                [ 0, 0 ], [ 1, 1 ],
                [ 0, 3 ], [ 0, 2 ], [ 1, 3 ],
                [ 0, 1 ], [ 3, 0 ],
                [ 0, 4 ], [ 1, 5 ],
                [ 0, 7 ], [ 0, 6 ], [ 1, 7 ],
                [ 0, 5 ], [ 3, 4 ],
            ]))
    })

    it('does the top left grain contour of the perimeter rhythm', () => {
        const { perimeterRhythmTopLeftGrainContour } = buildContours()
        expect(perimeterRhythmTopLeftGrainContour)
            .toEqual(to.Contour([
                [ 0, 2 ], [ 1, 2 ],
                [ 0, 3 ], [ 0, 2 ], [ 1, 2 ],
                [ 0, 1 ], [ 3, 0 ],
                [ 0, 2 ], [ 1, 3 ],
                [ 0, 4 ], [ 0, 4 ], [ 1, 5 ],
                [ 0, 4 ], [ 3, 4 ],
            ]))
    })

    it('does the perimeterRhythmTopRightGrainContour of the perimeter rhythm', () => {
        const { perimeterRhythmTopRightGrainContour } = buildContours()
        expect(perimeterRhythmTopRightGrainContour)
            .toEqual(to.Contour([
                [ 0, 0 ], [ 1, 1 ],
                [ 0, 2 ], [ 0, 2 ], [ 1, 3 ],
                [ 0, 2 ], [ 3, 2 ],
                [ 0, 4 ], [ 1, 4 ],
                [ 0, 5 ], [ 0, 4 ], [ 1, 4 ],
                [ 0, 3 ], [ 3, 2 ],
            ]))
    })

    it('does the higher pitch contour of the supertile rhythm', () => {
        const { supertileRhythmHigherPitchContour } = buildContours()
        expect(supertileRhythmHigherPitchContour)
            .toEqual(to.Contour([
                [ 0, 1 ], [ 1, 1 ],
                [ 0, 1 ], [ 0, 1 ], [ 1, 1 ],
                [ 0, 1 ], [ 0, 1 ],
                [ 1, 1 ], [ 1, 1 ],
                [ 0, 1 ], [ 1, 1 ], [ 1, 1 ],
            ]))
    })

    it('does the lower pitch contour of the supertile rhythm', () => {
        const { supertileRhythmLowerPitchContour } = buildContours()
        expect(supertileRhythmLowerPitchContour)
            .toEqual(to.Contour([
                [ 0, 0 ], [ 1, 0 ],
                [ 0, 0 ], [ 0, 0 ], [ 1, 0 ],
                [ 0, 0 ], [ 0, 0 ], [ 1, 0 ], [ 1, 0 ],
                [ 0, 0 ], [ 1, 0 ], [ 1, 0 ],
            ]))
    })
})
