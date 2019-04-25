import { computeNotesTotalCompiledDuration, Scale } from '@musical-patterns/material'
import { StandardSpecs } from '@musical-patterns/spec'
import { Duration, notAs } from '@musical-patterns/utilities'
import { computeContourPieces, computeSupertileNote, materializeScales, spec } from '../../../src/indexForTest'

describe('contour pieces', () => {
    describe('durations', () => {
        let initialSpecs: StandardSpecs
        beforeEach(() => {
            initialSpecs = spec.initialSpecs
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
                const scales: Scale[] = materializeScales(initialSpecs)

                const durationOfOneExamplePiece: Duration = computeNotesTotalCompiledDuration(perimeterTopRightGrain.map(computeSupertileNote), scales)

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
                const scales: Scale[] = materializeScales(initialSpecs)

                const durationOfOneExamplePiece: Duration = computeNotesTotalCompiledDuration(supertileLowerPitch.map(computeSupertileNote), scales)

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
                const scales: Scale[] = materializeScales(initialSpecs)

                const supertileDuration: Duration = computeNotesTotalCompiledDuration(supertileLowerPitch.map(computeSupertileNote), scales)
                const perimeterDuration: Duration = computeNotesTotalCompiledDuration(perimeterLeftGrain.map(computeSupertileNote), scales)

                const ratioBetweenSupertileAndPerimeterPieces: number = notAs.Translation(supertileDuration) / notAs.Translation(perimeterDuration)
                expect(ratioBetweenSupertileAndPerimeterPieces)
                    .toBeCloseToTyped(3 / 4)
            })
        })
    })
})
