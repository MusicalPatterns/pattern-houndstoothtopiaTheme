import { from, Scale, Time, to } from '../../../../../src/indexForTest'
import { calculatePartCompiledDuration, testIsCloseTo } from '../../../../../test/support'
import {
    buildContourPieces,
    buildNoteSpec,
    buildScales,
    patternSpec,
} from '../../../src/indexForTest'

describe('houndstoothtopia contour pieces', () => {
    it('does the left grain contour of the perimeter rhythm', () => {
        const { perimeterRhythmLeftGrainContourPiece } = buildContourPieces()
        expect(perimeterRhythmLeftGrainContourPiece)
            .toEqual(to.ContourPiece([
                [ 4, 0 ], [ 3, 1 ],
                [ 3, 0 ], [ 2, 0 ], [ 1, 1 ],
                [ 1, 0 ], [ 0, 3 ],
                [ 0, 0 ], [ 1, 1 ],
                [ 1, 0 ], [ 2, 0 ], [ 3, 1 ],
                [ 3, 0 ], [ 4, 3 ],
            ]))
    })

    it('does the top grain contour of the perimeter rhythm', () => {
        const { perimeterRhythmTopGrainContourPiece } = buildContourPieces()
        expect(perimeterRhythmTopGrainContourPiece)
            .toEqual(to.ContourPiece([
                [ 0, 0 ], [ 1, 1 ],
                [ 3, 0 ], [ 2, 0 ], [ 3, 1 ],
                [ 1, 0 ], [ 0, 3 ],
                [ 4, 0 ], [ 5, 1 ],
                [ 7, 0 ], [ 6, 0 ], [ 7, 1 ],
                [ 5, 0 ], [ 4, 3 ],
            ]))
    })

    it('does the top left grain contour of the perimeter rhythm', () => {
        const { perimeterRhythmTopLeftGrainContourPiece } = buildContourPieces()
        expect(perimeterRhythmTopLeftGrainContourPiece)
            .toEqual(to.ContourPiece([
                [ 2, 0 ], [ 2, 1 ],
                [ 3, 0 ], [ 2, 0 ], [ 2, 1 ],
                [ 1, 0 ], [ 0, 3 ],
                [ 2, 0 ], [ 3, 1 ],
                [ 4, 0 ], [ 4, 0 ], [ 5, 1 ],
                [ 4, 0 ], [ 4, 3 ],
            ]))
    })

    it('does the perimeterRhythmTopRightGrainContourPiece of the perimeter rhythm', () => {
        const { perimeterRhythmTopRightGrainContourPiece } = buildContourPieces()
        expect(perimeterRhythmTopRightGrainContourPiece)
            .toEqual(to.ContourPiece([
                [ 0, 0 ], [ 1, 1 ],
                [ 2, 0 ], [ 2, 0 ], [ 3, 1 ],
                [ 2, 0 ], [ 2, 3 ],
                [ 4, 0 ], [ 4, 1 ],
                [ 5, 0 ], [ 4, 0 ], [ 4, 1 ],
                [ 3, 0 ], [ 2, 3 ],
            ]))
    })

    it('does the higher pitch contour of the supertile rhythm', () => {
        const { supertileRhythmHigherPitchContourPiece } = buildContourPieces()
        expect(supertileRhythmHigherPitchContourPiece)
            .toEqual(to.ContourPiece([
                [ 1, 0 ], [ 1, 1 ],
                [ 1, 0 ], [ 1, 0 ], [ 1, 1 ],
                [ 1, 0 ], [ 1, 0 ],
                [ 1, 1 ], [ 1, 1 ],
                [ 1, 0 ], [ 1, 1 ], [ 1, 1 ],
            ]))
    })

    it('does the lower pitch contour of the supertile rhythm', () => {
        const { supertileRhythmLowerPitchContourPiece } = buildContourPieces()
        expect(supertileRhythmLowerPitchContourPiece)
            .toEqual(to.ContourPiece([
                [ 0, 0 ], [ 0, 1 ],
                [ 0, 0 ], [ 0, 0 ], [ 0, 1 ],
                [ 0, 0 ], [ 0, 0 ], [ 0, 1 ], [ 0, 1 ],
                [ 0, 0 ], [ 0, 1 ], [ 0, 1 ],
            ]))
    })

    describe('durations', () => {
        describe('perimeter pieces', () => {
            it('are all the same duration', () => {
                const {
                    perimeterRhythmLeftGrainContourPiece,
                    perimeterRhythmTopGrainContourPiece,
                    perimeterRhythmTopLeftGrainContourPiece,
                    perimeterRhythmTopRightGrainContourPiece,
                    perimeterRestContourPiece,
                } = buildContourPieces()
                const scales: Scale[] = buildScales(patternSpec)

                const onePartsDuration: Time = calculatePartCompiledDuration(perimeterRhythmTopRightGrainContourPiece.map(buildNoteSpec), scales)

                expect(calculatePartCompiledDuration(perimeterRhythmLeftGrainContourPiece.map(buildNoteSpec), scales))
                    .toBe(onePartsDuration)
                expect(calculatePartCompiledDuration(perimeterRhythmTopGrainContourPiece.map(buildNoteSpec), scales))
                    .toBe(onePartsDuration)
                expect(calculatePartCompiledDuration(perimeterRhythmTopLeftGrainContourPiece.map(buildNoteSpec), scales))
                    .toBe(onePartsDuration)
                expect(calculatePartCompiledDuration(perimeterRestContourPiece.map(buildNoteSpec), scales))
                    .toBe(onePartsDuration)
            })
        })

        describe('supertile pieces', () => {
            it('are all the same duration', () => {
                const {
                    supertileRhythmLowerPitchContourPiece,
                    supertileRhythmHigherPitchContourPiece,
                    supertileRestContourPiece,
                } = buildContourPieces()
                const scales: Scale[] = buildScales(patternSpec)

                const onePartsDuration: Time = calculatePartCompiledDuration(supertileRhythmLowerPitchContourPiece.map(buildNoteSpec), scales)

                expect(calculatePartCompiledDuration(supertileRhythmHigherPitchContourPiece.map(buildNoteSpec), scales))
                    .toBe(onePartsDuration)
                expect(calculatePartCompiledDuration(supertileRestContourPiece.map(buildNoteSpec), scales))
                    .toBe(onePartsDuration)
            })
        })

        describe('perimeter pieces vs supertile pieces', () => {
            it('supertile pieces are three-quarters as long as the perimeter pieces, so they loop in a simple 3:4 polymeter', () => {
                const {
                    perimeterRhythmLeftGrainContourPiece,
                    supertileRhythmLowerPitchContourPiece,
                } = buildContourPieces()
                const scales: Scale[] = buildScales(patternSpec)

                const supertileDuration: Time = calculatePartCompiledDuration(supertileRhythmLowerPitchContourPiece.map(buildNoteSpec), scales)
                const perimeterDuration: Time = calculatePartCompiledDuration(perimeterRhythmLeftGrainContourPiece.map(buildNoteSpec), scales)

                const ratioBetweenSupertileAndPerimeterParts: number = from.Time(supertileDuration) / from.Time(perimeterDuration)
                expect(testIsCloseTo(ratioBetweenSupertileAndPerimeterParts, 3 / 4))
                    .toBeTruthy()
            })
        })
    })
})
