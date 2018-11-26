import { from, testIsCloseTo, Time } from '@musical-patterns/utilities'
import { Scale } from '../../../../../src/indexForTest'
import { calculatePartCompiledDuration } from '../../../../../test/support'
import { buildContourPieces, buildNoteSpec, buildScales, patternSpec } from '../../../src/indexForTest'

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
