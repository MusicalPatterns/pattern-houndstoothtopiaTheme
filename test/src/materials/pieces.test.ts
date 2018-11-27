import { from, testIsCloseTo, Time } from '@musical-patterns/shared'
import { calculatePartCompiledDuration } from '../../../../../../test/support'
import { Scale } from '../../../../../indexForTest'
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

                const onePartsDuration: Time = calculatePartCompiledDuration(perimeterRhythmTopRightGrainContourPiece.map(buildSupertileNoteSpec), scales)

                expect(calculatePartCompiledDuration(perimeterRhythmLeftGrainContourPiece.map(buildSupertileNoteSpec), scales))
                    .toBe(onePartsDuration)
                expect(calculatePartCompiledDuration(perimeterRhythmTopGrainContourPiece.map(buildSupertileNoteSpec), scales))
                    .toBe(onePartsDuration)
                expect(calculatePartCompiledDuration(perimeterRhythmTopLeftGrainContourPiece.map(buildSupertileNoteSpec), scales))
                    .toBe(onePartsDuration)
                expect(calculatePartCompiledDuration(perimeterRestContourPiece.map(buildSupertileNoteSpec), scales))
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

                const onePartsDuration: Time = calculatePartCompiledDuration(supertileRhythmLowerPitchContourPiece.map(buildSupertileNoteSpec), scales)

                expect(calculatePartCompiledDuration(supertileRhythmHigherPitchContourPiece.map(buildSupertileNoteSpec), scales))
                    .toBe(onePartsDuration)
                expect(calculatePartCompiledDuration(supertileRestContourPiece.map(buildSupertileNoteSpec), scales))
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

                const supertileDuration: Time = calculatePartCompiledDuration(supertileRhythmLowerPitchContourPiece.map(buildSupertileNoteSpec), scales)
                const perimeterDuration: Time = calculatePartCompiledDuration(perimeterRhythmLeftGrainContourPiece.map(buildSupertileNoteSpec), scales)

                const ratioBetweenSupertileAndPerimeterParts: number = from.Time(supertileDuration) / from.Time(perimeterDuration)
                expect(testIsCloseTo(ratioBetweenSupertileAndPerimeterParts, 3 / 4))
                    .toBeTruthy()
            })
        })
    })
})
