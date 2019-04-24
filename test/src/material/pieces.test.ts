import { computeNotesTotalCompiledDuration, Scale } from '@musical-patterns/material'
import { StandardSpecs } from '@musical-patterns/spec'
import { as, Ms, notAs, quotient, THREE_FOURTHS, Translation } from '@musical-patterns/utilities'
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

                const durationOfOneExamplePiece: Translation<Ms> = computeNotesTotalCompiledDuration(perimeterTopRightGrain.map(computeSupertileNote), scales)

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

                const durationOfOneExamplePiece: Translation<Ms> = computeNotesTotalCompiledDuration(supertileLowerPitch.map(computeSupertileNote), scales)

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

                const supertileDuration: Translation<Ms> = computeNotesTotalCompiledDuration(supertileLowerPitch.map(computeSupertileNote), scales)
                const perimeterDuration: Translation<Ms> = computeNotesTotalCompiledDuration(perimeterLeftGrain.map(computeSupertileNote), scales)

                const ratioBetweenSupertileAndPerimeterPieces: Translation<Ms> = as.Translation<Ms>(notAs.Translation(supertileDuration) / notAs.Translation(perimeterDuration))
                expect(ratioBetweenSupertileAndPerimeterPieces)
                    .toBeCloseToTyped(as.Translation<Ms>(notAs.Scalar(THREE_FOURTHS)))
            })
        })
    })
})
