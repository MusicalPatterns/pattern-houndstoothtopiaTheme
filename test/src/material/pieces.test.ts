import { computeNotesDuration, Scales } from '@musical-patterns/material'
import { Specs } from '@musical-patterns/spec'
import { as, Duration } from '@musical-patterns/utilities'
import { computeSupertileNote, materializeScales, spec, thunkContourPieces } from '../../../src/indexForTest'

describe('contour pieces', (): void => {
    describe('values', (): void => {
        let initialSpecs: Specs
        beforeEach((): void => {
            initialSpecs = spec.initialSpecs
        })

        describe('perimeter pieces', (): void => {
            it('are all the same value', (): void => {
                const {
                    perimeterLeftGrain,
                    perimeterTopGrain,
                    perimeterTopLeftGrain,
                    perimeterTopRightGrain,
                    perimeterRest,
                } = thunkContourPieces()
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

        describe('supertile pieces', (): void => {
            it('are all the same value', (): void => {
                const {
                    supertileLowerPitch,
                    supertileHigherPitch,
                    supertileRest,
                } = thunkContourPieces()
                const scales: Scales = materializeScales(initialSpecs)

                const durationOfOneExamplePiece: Duration = computeNotesDuration(supertileLowerPitch.map(computeSupertileNote), scales)

                expect(computeNotesDuration(supertileHigherPitch.map(computeSupertileNote), scales))
                    .toBe(durationOfOneExamplePiece)
                expect(computeNotesDuration(supertileRest.map(computeSupertileNote), scales))
                    .toBe(durationOfOneExamplePiece)
            })
        })

        describe('perimeter pieces vs supertile pieces', (): void => {
            it('supertile pieces are three-quarters as long as the perimeter pieces, so they loop in a simple 3:4 polymeter', (): void => {
                const {
                    perimeterLeftGrain,
                    supertileLowerPitch,
                } = thunkContourPieces()
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
