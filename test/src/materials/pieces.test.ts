import { calculateNoteSpecsTotalCompiledDuration, Scale } from '@musical-patterns/compiler'
import { from, testIsCloseTo, Time } from '@musical-patterns/utilities'
import { buildContourPieces, buildScales, buildSupertileNoteSpec, spec } from '../../../src/indexForTest'

describe('contour pieces', () => {
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
                const scales: Scale[] = buildScales(spec)

                const onePartsDuration: Time = calculateNoteSpecsTotalCompiledDuration(perimeterRhythmTopRightGrainContourPiece.map(buildSupertileNoteSpec), scales)

                expect(calculateNoteSpecsTotalCompiledDuration(perimeterRhythmLeftGrainContourPiece.map(buildSupertileNoteSpec), scales))
                    .toBe(onePartsDuration)
                expect(calculateNoteSpecsTotalCompiledDuration(perimeterRhythmTopGrainContourPiece.map(buildSupertileNoteSpec), scales))
                    .toBe(onePartsDuration)
                expect(calculateNoteSpecsTotalCompiledDuration(perimeterRhythmTopLeftGrainContourPiece.map(buildSupertileNoteSpec), scales))
                    .toBe(onePartsDuration)
                expect(calculateNoteSpecsTotalCompiledDuration(perimeterRestContourPiece.map(buildSupertileNoteSpec), scales))
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
                const scales: Scale[] = buildScales(spec)

                const onePartsDuration: Time = calculateNoteSpecsTotalCompiledDuration(supertileRhythmLowerPitchContourPiece.map(buildSupertileNoteSpec), scales)

                expect(calculateNoteSpecsTotalCompiledDuration(supertileRhythmHigherPitchContourPiece.map(buildSupertileNoteSpec), scales))
                    .toBe(onePartsDuration)
                expect(calculateNoteSpecsTotalCompiledDuration(supertileRestContourPiece.map(buildSupertileNoteSpec), scales))
                    .toBe(onePartsDuration)
            })
        })

        describe('perimeter pieces vs supertile pieces', () => {
            it('supertile pieces are three-quarters as long as the perimeter pieces, so they loop in a simple 3:4 polymeter', () => {
                const {
                    perimeterRhythmLeftGrainContourPiece,
                    supertileRhythmLowerPitchContourPiece,
                } = buildContourPieces()
                const scales: Scale[] = buildScales(spec)

                const supertileDuration: Time = calculateNoteSpecsTotalCompiledDuration(supertileRhythmLowerPitchContourPiece.map(buildSupertileNoteSpec), scales)
                const perimeterDuration: Time = calculateNoteSpecsTotalCompiledDuration(perimeterRhythmLeftGrainContourPiece.map(buildSupertileNoteSpec), scales)

                const ratioBetweenSupertileAndPerimeterParts: number = from.Time(supertileDuration) / from.Time(perimeterDuration)
                expect(testIsCloseTo(ratioBetweenSupertileAndPerimeterParts, 3 / 4))
                    .toBeTruthy()
            })
        })
    })
})
