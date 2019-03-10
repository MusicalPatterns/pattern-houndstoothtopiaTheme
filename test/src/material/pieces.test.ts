import { calculateNotesTotalCompiledDuration, Scale } from '@musical-patterns/compiler'
import { StandardSpec } from '@musical-patterns/pattern'
import { from, Ms, quotient, testIsCloseTo, THREE_FOURTHS } from '@musical-patterns/utilities'
import { buildContourPieces, buildSupertileNote, data, materializeScales } from '../../../src/indexForTest'

describe('contour pieces', () => {
    describe('durations', () => {
        let initialSpec: StandardSpec
        beforeEach(() => {
            initialSpec = data.initial
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
                const scales: Scale[] = materializeScales(initialSpec)

                const durationOfOneExamplePiece: Ms = calculateNotesTotalCompiledDuration(perimeterTopRightGrain.map(buildSupertileNote), scales)

                expect(calculateNotesTotalCompiledDuration(perimeterLeftGrain.map(buildSupertileNote), scales))
                    .toBe(durationOfOneExamplePiece)
                expect(calculateNotesTotalCompiledDuration(perimeterTopGrain.map(buildSupertileNote), scales))
                    .toBe(durationOfOneExamplePiece)
                expect(calculateNotesTotalCompiledDuration(perimeterTopLeftGrain.map(buildSupertileNote), scales))
                    .toBe(durationOfOneExamplePiece)
                expect(calculateNotesTotalCompiledDuration(perimeterRest.map(buildSupertileNote), scales))
                    .toBe(durationOfOneExamplePiece)
            })
        })

        describe('supertile pieces', () => {
            it('are all the same duration', () => {
                const {
                    supertileLowerPitch,
                    supertileHigherPitch,
                    supertileRest,
                } = buildContourPieces()
                const scales: Scale[] = materializeScales(initialSpec)

                const durationOfOneExamplePiece: Ms = calculateNotesTotalCompiledDuration(supertileLowerPitch.map(buildSupertileNote), scales)

                expect(calculateNotesTotalCompiledDuration(supertileHigherPitch.map(buildSupertileNote), scales))
                    .toBe(durationOfOneExamplePiece)
                expect(calculateNotesTotalCompiledDuration(supertileRest.map(buildSupertileNote), scales))
                    .toBe(durationOfOneExamplePiece)
            })
        })

        describe('perimeter pieces vs supertile pieces', () => {
            it('supertile pieces are three-quarters as long as the perimeter pieces, so they loop in a simple 3:4 polymeter', () => {
                const {
                    perimeterLeftGrain,
                    supertileLowerPitch,
                } = buildContourPieces()
                const scales: Scale[] = materializeScales(initialSpec)

                const supertileDuration: Ms = calculateNotesTotalCompiledDuration(supertileLowerPitch.map(buildSupertileNote), scales)
                const perimeterDuration: Ms = calculateNotesTotalCompiledDuration(perimeterLeftGrain.map(buildSupertileNote), scales)

                const ratioBetweenSupertileAndPerimeterPieces: number = from.Ms(quotient(supertileDuration, perimeterDuration))
                expect(testIsCloseTo(ratioBetweenSupertileAndPerimeterPieces, from.Scalar(THREE_FOURTHS)))
                    .toBeTruthy()
            })
        })
    })
})
