import { calculatePartSpecTotalCompiledDuration } from '@musical-patterns/compiler'
import { from, Scale, testIsCloseTo, Time } from '@musical-patterns/utilities'
import { buildContourPieces, buildScales, buildSupertileNoteSpec, patternSpec } from '../../../src/indexForTest'

describe('houndstoothtopia contour pieces', () => {
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

                const onePartsDuration: Time = calculatePartSpecTotalCompiledDuration(perimeterRhythmTopRightGrainContourPiece.map(buildSupertileNoteSpec), scales)

                expect(calculatePartSpecTotalCompiledDuration(perimeterRhythmLeftGrainContourPiece.map(buildSupertileNoteSpec), scales))
                    .toBe(onePartsDuration)
                expect(calculatePartSpecTotalCompiledDuration(perimeterRhythmTopGrainContourPiece.map(buildSupertileNoteSpec), scales))
                    .toBe(onePartsDuration)
                expect(calculatePartSpecTotalCompiledDuration(perimeterRhythmTopLeftGrainContourPiece.map(buildSupertileNoteSpec), scales))
                    .toBe(onePartsDuration)
                expect(calculatePartSpecTotalCompiledDuration(perimeterRestContourPiece.map(buildSupertileNoteSpec), scales))
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

                const onePartsDuration: Time = calculatePartSpecTotalCompiledDuration(supertileRhythmLowerPitchContourPiece.map(buildSupertileNoteSpec), scales)

                expect(calculatePartSpecTotalCompiledDuration(supertileRhythmHigherPitchContourPiece.map(buildSupertileNoteSpec), scales))
                    .toBe(onePartsDuration)
                expect(calculatePartSpecTotalCompiledDuration(supertileRestContourPiece.map(buildSupertileNoteSpec), scales))
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

                const supertileDuration: Time = calculatePartSpecTotalCompiledDuration(supertileRhythmLowerPitchContourPiece.map(buildSupertileNoteSpec), scales)
                const perimeterDuration: Time = calculatePartSpecTotalCompiledDuration(perimeterRhythmLeftGrainContourPiece.map(buildSupertileNoteSpec), scales)

                const ratioBetweenSupertileAndPerimeterParts: number = from.Time(supertileDuration) / from.Time(perimeterDuration)
                expect(testIsCloseTo(ratioBetweenSupertileAndPerimeterParts, 3 / 4))
                    .toBeTruthy()
            })
        })
    })
})
