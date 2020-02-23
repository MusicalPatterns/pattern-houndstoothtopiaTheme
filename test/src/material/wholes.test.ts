import { computeNotesDuration, PitchValueXYZ, Scales } from '@musical-patterns/material'
import { Specs } from '@musical-patterns/spec'
import { as, Duration, product, quotient, sequence } from '@musical-patterns/utilities'
import {
    computeSupertileNote,
    HoundstoothtopiaThemeContourWholes,
    materializeScales,
    spec,
    thunkContourPieces,
    thunkContourWholes,
} from '../../../src/indexForTest'

describe('contour wholes', (): void => {
    let contourWholes: HoundstoothtopiaThemeContourWholes
    beforeEach((): void => {
        contourWholes = thunkContourWholes()
    })

    describe(
        `perimeter wholes generally follow this pattern: 4 sets of 4, where in each set, \
the first 2 are rests and the second 2 soundings, \
except that each of the 4 grains has one set which varies from this, \
and which of the 4 sets is different for each grain, \
and it rotates around the sets corresponding to the rotation of the grain, \
and that variation is always to instead sound the 2nd and 3rd and rest on the 1st and 4th within the set, \
so that when they all sound together, the effect is something like a supertile, \
in that first its none of them, then one of them, then all of them, then the other three of them`,
        (): void => {
            it('does top right grain correctly', (): void => {
                const {
                    perimeterTopRightGrain,
                    perimeterRest,
                } = thunkContourPieces()

                expect(contourWholes.perimeterTopRightGrain)
                    .toEqual(as.ContourWhole<PitchValueXYZ>(sequence(
                        perimeterRest,
                        perimeterTopRightGrain,
                        perimeterTopRightGrain,
                        perimeterRest,

                        perimeterRest,
                        perimeterRest,
                        perimeterTopRightGrain,
                        perimeterTopRightGrain,

                        perimeterRest,
                        perimeterRest,
                        perimeterTopRightGrain,
                        perimeterTopRightGrain,

                        perimeterRest,
                        perimeterRest,
                        perimeterTopRightGrain,
                        perimeterTopRightGrain,
                    )))
            })

            it('does top grain correctly', (): void => {
                const {
                    perimeterTopGrain,
                    perimeterRest,
                } = thunkContourPieces()

                expect(contourWholes.perimeterTopGrain)
                    .toEqual(as.ContourWhole<PitchValueXYZ>(sequence(
                        perimeterRest,
                        perimeterRest,
                        perimeterTopGrain,
                        perimeterTopGrain,

                        perimeterRest,
                        perimeterTopGrain,
                        perimeterTopGrain,
                        perimeterRest,

                        perimeterRest,
                        perimeterRest,
                        perimeterTopGrain,
                        perimeterTopGrain,

                        perimeterRest,
                        perimeterRest,
                        perimeterTopGrain,
                        perimeterTopGrain,
                    )))
            })

            it('does top left grain correctly', (): void => {
                const {
                    perimeterTopLeftGrain,
                    perimeterRest,
                } = thunkContourPieces()

                expect(contourWholes.perimeterTopLeftGrain)
                    .toEqual(as.ContourWhole<PitchValueXYZ>(sequence(
                        perimeterRest,
                        perimeterRest,
                        perimeterTopLeftGrain,
                        perimeterTopLeftGrain,

                        perimeterRest,
                        perimeterRest,
                        perimeterTopLeftGrain,
                        perimeterTopLeftGrain,

                        perimeterRest,
                        perimeterTopLeftGrain,
                        perimeterTopLeftGrain,
                        perimeterRest,

                        perimeterRest,
                        perimeterRest,
                        perimeterTopLeftGrain,
                        perimeterTopLeftGrain,
                    )))
            })

            it('does left grain correctly', (): void => {
                const {
                    perimeterLeftGrain,
                    perimeterRest,
                } = thunkContourPieces()

                expect(contourWholes.perimeterLeftGrain)
                    .toEqual(as.ContourWhole<PitchValueXYZ>(sequence(
                        perimeterRest,
                        perimeterRest,
                        perimeterLeftGrain,
                        perimeterLeftGrain,

                        perimeterRest,
                        perimeterRest,
                        perimeterLeftGrain,
                        perimeterLeftGrain,

                        perimeterRest,
                        perimeterRest,
                        perimeterLeftGrain,
                        perimeterLeftGrain,

                        perimeterRest,
                        perimeterLeftGrain,
                        perimeterLeftGrain,
                        perimeterRest,
                    )))
            })
        },
    )

    describe('values', (): void => {
        let initialSpecs: Specs
        beforeEach((): void => {
            initialSpecs = spec.initialSpecs
        })

        describe('perimeter wholes', (): void => {
            it('are all the same value', (): void => {
                const {
                    perimeterLeftGrain,
                    perimeterTopGrain,
                    perimeterTopLeftGrain,
                    perimeterTopRightGrain,
                } = thunkContourWholes()
                const scales: Scales = materializeScales(initialSpecs)

                const durationOfOneExampleWhole: Duration = computeNotesDuration(perimeterTopRightGrain.map(computeSupertileNote), scales)

                expect(computeNotesDuration(perimeterLeftGrain.map(computeSupertileNote), scales))
                    .toBe(durationOfOneExampleWhole)
                expect(computeNotesDuration(perimeterTopGrain.map(computeSupertileNote), scales))
                    .toBe(durationOfOneExampleWhole)
                expect(computeNotesDuration(perimeterTopLeftGrain.map(computeSupertileNote), scales))
                    .toBe(durationOfOneExampleWhole)
            })
        })

        describe('supertile wholes', (): void => {
            it('are all the same value', (): void => {
                const {
                    supertileLowerPitch,
                    supertileHigherPitch,
                } = thunkContourWholes()
                const scales: Scales = materializeScales(initialSpecs)

                const durationOfOneExampleWhole: Duration = computeNotesDuration(supertileLowerPitch.map(computeSupertileNote), scales)

                expect(computeNotesDuration(supertileHigherPitch.map(computeSupertileNote), scales))
                    .toBe(durationOfOneExampleWhole)
            })
        })

        describe('perimeter wholes vs supertile wholes', (): void => {
            it(
                `perimeter pieces are 4/3rds as long as supertile pieces, \
and when combined into wholes repeat in multiples of multiples of 4, NOT 3, \
so that all hypermetrical interactions with the supertile pieces are not negated`,
                (): void => {
                    const {
                        perimeterLeftGrain,
                        supertileLowerPitch,
                    } = thunkContourWholes()
                    const scales: Scales = materializeScales(initialSpecs)

                    const supertileDuration: Duration = computeNotesDuration(supertileLowerPitch.map(computeSupertileNote), scales)
                    const perimeterDuration: Duration = computeNotesDuration(perimeterLeftGrain.map(computeSupertileNote), scales)

                    const ratioBetweenSupertileAndPerimeterWholes: number = as.number(supertileDuration) / as.number(perimeterDuration)
                    expect(ratioBetweenSupertileAndPerimeterWholes)
                        .toBeCloseToTyped(quotient(3, product(4, 4, 4)))
                },
            )
        })
    })
})
