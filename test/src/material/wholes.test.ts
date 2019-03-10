import { calculateNotesTotalCompiledDuration, Scale } from '@musical-patterns/compiler'
import { PitchDurationXYZ, StandardSpec } from '@musical-patterns/pattern'
import { from, Ms, product, quotient, sequence, testIsCloseTo, to } from '@musical-patterns/utilities'
import {
    buildContourPieces,
    buildContourWholes,
    buildSupertileNote,
    data,
    HoundstoothtopiaThemeContourWholes,
    materializeScales,
} from '../../../src/indexForTest'

describe('contour wholes', () => {
    let contourWholes: HoundstoothtopiaThemeContourWholes
    beforeEach(() => {
        contourWholes = buildContourWholes()
    })

    describe('perimeter wholes generally follow this pattern: 4 sets of 4, where in each set, the first 2 are rests and the second 2 soundings, except that each of the 4 grains has one set which varies from this, and which of the 4 sets is different for each grain, and it rotates around the sets corresponding to the rotation of the grain, and that variation is always to instead sound the 2nd and 3rd and rest on the 1st and 4th within the set, so that when they all sound together, the effect is something like a supertile, in that first its none of them, then one of them, then all of them, then the other three of them', () => {
        it('does top right grain correctly', () => {
            const {
                perimeterTopRightGrain,
                perimeterRest,
            } = buildContourPieces()

            expect(contourWholes.perimeterTopRightGrain)
                .toEqual(to.ContourWhole<PitchDurationXYZ>(sequence([
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
                ])))
        })

        it('does top grain correctly', () => {
            const {
                perimeterTopGrain,
                perimeterRest,
            } = buildContourPieces()

            expect(contourWholes.perimeterTopGrain)
                .toEqual(to.ContourWhole<PitchDurationXYZ>(sequence([
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
                ])))
        })

        it('does top left grain correctly', () => {
            const {
                perimeterTopLeftGrain,
                perimeterRest,
            } = buildContourPieces()

            expect(contourWholes.perimeterTopLeftGrain)
                .toEqual(to.ContourWhole<PitchDurationXYZ>(sequence([
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
                ])))
        })

        it('does left grain correctly', () => {
            const {
                perimeterLeftGrain,
                perimeterRest,
            } = buildContourPieces()

            expect(contourWholes.perimeterLeftGrain)
                .toEqual(to.ContourWhole<PitchDurationXYZ>(sequence([
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
                ])))
        })
    })

    describe('durations', () => {
        let initialSpec: StandardSpec
        beforeEach(() => {
            initialSpec = data.initial
        })

        describe('perimeter wholes', () => {
            it('are all the same duration', () => {
                const {
                    perimeterLeftGrain,
                    perimeterTopGrain,
                    perimeterTopLeftGrain,
                    perimeterTopRightGrain,
                } = buildContourWholes()
                const scales: Scale[] = materializeScales(initialSpec)

                const durationOfOneExampleWhole: Ms = calculateNotesTotalCompiledDuration(perimeterTopRightGrain.map(buildSupertileNote), scales)

                expect(calculateNotesTotalCompiledDuration(perimeterLeftGrain.map(buildSupertileNote), scales))
                    .toBe(durationOfOneExampleWhole)
                expect(calculateNotesTotalCompiledDuration(perimeterTopGrain.map(buildSupertileNote), scales))
                    .toBe(durationOfOneExampleWhole)
                expect(calculateNotesTotalCompiledDuration(perimeterTopLeftGrain.map(buildSupertileNote), scales))
                    .toBe(durationOfOneExampleWhole)
            })
        })

        describe('supertile wholes', () => {
            it('are all the same duration', () => {
                const {
                    supertileLowerPitch,
                    supertileHigherPitch,
                } = buildContourWholes()
                const scales: Scale[] = materializeScales(initialSpec)

                const durationOfOneExampleWhole: Ms = calculateNotesTotalCompiledDuration(supertileLowerPitch.map(buildSupertileNote), scales)

                expect(calculateNotesTotalCompiledDuration(supertileHigherPitch.map(buildSupertileNote), scales))
                    .toBe(durationOfOneExampleWhole)
            })
        })

        describe('perimeter wholes vs supertile wholes', () => {
            it('perimeter pieces are 4/3rds as long as supertile pieces, and when combined into wholes repeat in multiples of multiples of 4, NOT 3, so that all hypermetrical interactions with the supertile pieces are not negated', () => {
                const {
                    perimeterLeftGrain,
                    supertileLowerPitch,
                } = buildContourWholes()
                const scales: Scale[] = materializeScales(initialSpec)

                const supertileDuration: Ms = calculateNotesTotalCompiledDuration(supertileLowerPitch.map(buildSupertileNote), scales)
                const perimeterDuration: Ms = calculateNotesTotalCompiledDuration(perimeterLeftGrain.map(buildSupertileNote), scales)

                const ratioBetweenSupertileAndPerimeterWholes: number = from.Ms(quotient(supertileDuration, perimeterDuration))
                expect(testIsCloseTo(ratioBetweenSupertileAndPerimeterWholes, quotient(3, product(4, 4, 4))))
                    .toBeTruthy()
            })
        })
    })
})
