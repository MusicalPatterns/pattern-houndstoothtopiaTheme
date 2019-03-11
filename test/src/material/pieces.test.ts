import { computeNotesTotalCompiledDuration, Scale } from '@musical-patterns/compiler'
import { StandardSpec } from '@musical-patterns/pattern'
import { from, Ms, quotient, testIsCloseTo, THREE_FOURTHS } from '@musical-patterns/utilities'
import { computeContourPieces, computeSupertileNote, data, materializeScales } from '../../../src/indexForTest'

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
                } = computeContourPieces()
                const scales: Scale[] = materializeScales(initialSpec)

                const durationOfOneExamplePiece: Ms = computeNotesTotalCompiledDuration(perimeterTopRightGrain.map(computeSupertileNote), scales)

                expect(computeNotesTotalCompiledDuration(perimeterLeftGrain.map(computeSupertileNote), scales))
                    .toBe(durationOfOneExamplePiece)
                expect(computeNotesTotalCompiledDuration(perimeterTopGrain.map(computeSupertileNote), scales))
                    .toBe(durationOfOneExamplePiece)
                expect(computeNotesTotalCompiledDuration(perimeterTopLeftGrain.map(computeSupertileNote), scales))
                    .toBe(durationOfOneExamplePiece)
                expect(computeNotesTotalCompiledDuration(perimeterRest.map(computeSupertileNote), scales))
                    .toBe(durationOfOneExamplePiece)
            })
        })

        describe('supertile pieces', () => {
            it('are all the same duration', () => {
                const {
                    supertileLowerPitch,
                    supertileHigherPitch,
                    supertileRest,
                } = computeContourPieces()
                const scales: Scale[] = materializeScales(initialSpec)

                const durationOfOneExamplePiece: Ms = computeNotesTotalCompiledDuration(supertileLowerPitch.map(computeSupertileNote), scales)

                expect(computeNotesTotalCompiledDuration(supertileHigherPitch.map(computeSupertileNote), scales))
                    .toBe(durationOfOneExamplePiece)
                expect(computeNotesTotalCompiledDuration(supertileRest.map(computeSupertileNote), scales))
                    .toBe(durationOfOneExamplePiece)
            })
        })

        describe('perimeter pieces vs supertile pieces', () => {
            it('supertile pieces are three-quarters as long as the perimeter pieces, so they loop in a simple 3:4 polymeter', () => {
                const {
                    perimeterLeftGrain,
                    supertileLowerPitch,
                } = computeContourPieces()
                const scales: Scale[] = materializeScales(initialSpec)

                const supertileDuration: Ms = computeNotesTotalCompiledDuration(supertileLowerPitch.map(computeSupertileNote), scales)
                const perimeterDuration: Ms = computeNotesTotalCompiledDuration(perimeterLeftGrain.map(computeSupertileNote), scales)

                const ratioBetweenSupertileAndPerimeterPieces: number = from.Ms(quotient(supertileDuration, perimeterDuration))
                expect(testIsCloseTo(ratioBetweenSupertileAndPerimeterPieces, from.Scalar(THREE_FOURTHS)))
                    .toBeTruthy()
            })
        })
    })
})
