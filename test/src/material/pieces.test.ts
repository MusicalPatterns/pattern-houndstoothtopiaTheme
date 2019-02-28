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
                    perimeterLeftGrain,
                    perimeterTopGrain,
                    perimeterTopLeftGrain,
                    perimeterTopRightGrain,
                    perimeterRest,
                } = buildContourPieces()
                const scales: Scale[] = buildScales(initialSpec)

                const onePartsDuration: Ms = calculateNoteSpecsTotalCompiledDuration(perimeterTopRightGrain.map(buildSupertileNoteSpec), scales)

                expect(calculateNoteSpecsTotalCompiledDuration(perimeterLeftGrain.map(buildSupertileNoteSpec), scales))
                    .toBe(onePartsDuration)
                expect(calculateNoteSpecsTotalCompiledDuration(perimeterTopGrain.map(buildSupertileNoteSpec), scales))
                    .toBe(onePartsDuration)
                expect(calculateNoteSpecsTotalCompiledDuration(perimeterTopLeftGrain.map(buildSupertileNoteSpec), scales))
                    .toBe(onePartsDuration)
                expect(calculateNoteSpecsTotalCompiledDuration(perimeterRest.map(buildSupertileNoteSpec), scales))
                    .toBe(onePartsDuration)
            })
        })

        describe('supertile pieces', () => {
            it('are all the same duration', () => {
                const {
                    supertileLowerPitch,
                    supertileHigherPitch,
                    supertileRest,
                } = buildContourPieces()
                const scales: Scale[] = buildScales(initialSpec)

                const onePartsDuration: Ms = calculateNoteSpecsTotalCompiledDuration(supertileLowerPitch.map(buildSupertileNoteSpec), scales)

                expect(calculateNoteSpecsTotalCompiledDuration(supertileHigherPitch.map(buildSupertileNoteSpec), scales))
                    .toBe(onePartsDuration)
                expect(calculateNoteSpecsTotalCompiledDuration(supertileRest.map(buildSupertileNoteSpec), scales))
                    .toBe(onePartsDuration)
            })
        })

        describe('perimeter pieces vs supertile pieces', () => {
            it('supertile pieces are three-quarters as long as the perimeter pieces, so they loop in a simple 3:4 polymeter', () => {
                const {
                    perimeterLeftGrain,
                    supertileLowerPitch,
                } = buildContourPieces()
                const scales: Scale[] = buildScales(initialSpec)

                const supertileDuration: Ms = calculateNoteSpecsTotalCompiledDuration(supertileLowerPitch.map(buildSupertileNoteSpec), scales)
                const perimeterDuration: Ms = calculateNoteSpecsTotalCompiledDuration(perimeterLeftGrain.map(buildSupertileNoteSpec), scales)

                const ratioBetweenSupertileAndPerimeterParts: number = from.Ms(quotient(supertileDuration, perimeterDuration))
                expect(testIsCloseTo(ratioBetweenSupertileAndPerimeterParts, from.Scalar(THREE_FOURTHS)))
                    .toBeTruthy()
            })
        })
    })
})
