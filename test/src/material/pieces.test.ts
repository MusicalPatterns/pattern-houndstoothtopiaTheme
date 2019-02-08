import { calculateNoteSpecsTotalCompiledDuration, Scale } from '@musical-patterns/compiler'
import { StandardSpec } from '@musical-patterns/pattern'
import { from, Ms, quotient, testIsCloseTo, THREE_FOURTHS } from '@musical-patterns/utilities'
import { buildContourPieces, buildScales, buildSupertileNoteSpec, specData } from '../../../src/indexForTest'

describe('contour pieces', () => {
    describe('durations', () => {
        let initialSpec: StandardSpec
        beforeEach(() => {
            initialSpec = specData.initial
        })

        describe('perimeter pieces', () => {
            it('are all the same duration', () => {
                const {
                    perimeterRhythmLeftGrainContourPiece,
                    perimeterRhythmTopGrainContourPiece,
                    perimeterRhythmTopLeftGrainContourPiece,
                    perimeterRhythmTopRightGrainContourPiece,
                    perimeterRestContourPiece,
                } = buildContourPieces()
                const scales: Scale[] = buildScales(initialSpec)

                const onePartsDuration: Ms = calculateNoteSpecsTotalCompiledDuration(perimeterRhythmTopRightGrainContourPiece.map(buildSupertileNoteSpec), scales)

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
                const scales: Scale[] = buildScales(initialSpec)

                const onePartsDuration: Ms = calculateNoteSpecsTotalCompiledDuration(supertileRhythmLowerPitchContourPiece.map(buildSupertileNoteSpec), scales)

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
                const scales: Scale[] = buildScales(initialSpec)

                const supertileDuration: Ms = calculateNoteSpecsTotalCompiledDuration(supertileRhythmLowerPitchContourPiece.map(buildSupertileNoteSpec), scales)
                const perimeterDuration: Ms = calculateNoteSpecsTotalCompiledDuration(perimeterRhythmLeftGrainContourPiece.map(buildSupertileNoteSpec), scales)

                const ratioBetweenSupertileAndPerimeterParts: number = from.Ms(quotient(supertileDuration, perimeterDuration))
                expect(testIsCloseTo(ratioBetweenSupertileAndPerimeterParts, from.Scalar(THREE_FOURTHS)))
                    .toBeTruthy()
            })
        })
    })
})
