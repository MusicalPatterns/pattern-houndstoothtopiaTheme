import { computeNotesDuration, Scales } from '@musical-patterns/material'
import { StandardSpecs } from '@musical-patterns/spec'
import { as, Duration } from '@musical-patterns/utilities'
import { computeContourPieces, computeSupertileNote, materializeScales, spec } from '../../../src/indexForTest'

describe('contour pieces', () => {
    describe('values', () => {
        let initialSpecs: StandardSpecs
        beforeEach(() => {
            initialSpecs = spec.initialSpecs
        })

        describe('perimeter pieces', () => {
            it('are all the same value', () => {
                const {
                    perimeterLeftGrain,
                    perimeterTopGrain,
                    perimeterTopLeftGrain,
                    perimeterTopRightGrain,
                    perimeterRest,
                } = computeContourPieces()
                const scales: Scales = materializeScales(initialSpecs)

                const durationOfOneExamplePiece: Duration = computeNotesDuration(perimeterTopRightGrain.map(computeSupertileNote), scales)

                expect(computeNotesDuration(perimeterLeftGrain.map(computeSupertileNote), scales))
                    .toBe(durationOfOneExamplePiece)
                expect(computeNotesDuration(perimeterTopGrain.map(computeSupertileNote), scales))
                    .toBe(durationOfOneExamplePiece)
                expect(computeNotesDuration(perimeterTopLeftGrain.map(computeSupertileNote), scales))
                    .toBe(durationOfOneExamplePiece)
                expect(computeNotesDuration(perimeterRest.map(computeSupertileNote), scales))
                    .toBe(durationOfOneExamplePiece)
            })
        })

        describe('supertile pieces', () => {
            it('are all the same value', () => {
                const {
                    supertileLowerPitch,
                    supertileHigherPitch,
                    supertileRest,
                } = computeContourPieces()
                const scales: Scales = materializeScales(initialSpecs)

                const durationOfOneExamplePiece: Duration = computeNotesDuration(supertileLowerPitch.map(computeSupertileNote), scales)

                expect(computeNotesDuration(supertileHigherPitch.map(computeSupertileNote), scales))
                    .toBe(durationOfOneExamplePiece)
                expect(computeNotesDuration(supertileRest.map(computeSupertileNote), scales))
                    .toBe(durationOfOneExamplePiece)
            })
        })

        describe('perimeter pieces vs supertile pieces', () => {
            it('supertile pieces are three-quarters as long as the perimeter pieces, so they loop in a simple 3:4 polymeter', () => {
                const {
                    perimeterLeftGrain,
                    supertileLowerPitch,
                } = computeContourPieces()
                const scales: Scales = materializeScales(initialSpecs)

                const supertileDuration: Duration = computeNotesDuration(supertileLowerPitch.map(computeSupertileNote), scales)
                const perimeterDuration: Duration = computeNotesDuration(perimeterLeftGrain.map(computeSupertileNote), scales)

                const ratioBetweenSupertileAndPerimeterPieces: number = as.number(supertileDuration) / as.number(perimeterDuration)
                expect(ratioBetweenSupertileAndPerimeterPieces)
                    .toBeCloseToTyped(3 / 4)
            })
        })
    })
})
