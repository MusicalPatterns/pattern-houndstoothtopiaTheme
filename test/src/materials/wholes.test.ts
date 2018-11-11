import { from, Scale, sequence, Time, to } from '../../../../../src/indexForTest'
import { calculatePartCompiledDuration, testIsCloseTo } from '../../../../../test/support'
import {
    buildContourPieces,
    buildContourWholes,
    buildNoteSpec,
    buildScales,
    patternSpec,
} from '../../../src/indexForTest'

describe('contour wholes', () => {
    describe('perimeter wholes generally follow this pattern: 4 sets of 4, where in each set, the first 2 are rests and the second 2 soundings, except that each of the 4 grains has one set which varies from this, and which of the 4 sets is different for each grain, and it rotates around the sets corresponding to the rotation of the grain, and that variation is always to instead sound the 2nd and 3rd and rest on the 1st and 4th within the set, so that when they all sound together, the effect is something like a supertile, in that first its none of them, then one of them, then all of them, then the other three of them', () => {
        it('does top right grain correctly', () => {
            const {
                perimeterRhythmTopRightGrainContourPiece,
                perimeterRestContourPiece,
            } = buildContourPieces()

            const { perimeterRhythmTopRightGrainContourWhole } = buildContourWholes()

            expect(perimeterRhythmTopRightGrainContourWhole)
                .toEqual(to.ContourWhole(sequence([
                    perimeterRestContourPiece,
                    perimeterRhythmTopRightGrainContourPiece,
                    perimeterRhythmTopRightGrainContourPiece,
                    perimeterRestContourPiece,

                    perimeterRestContourPiece,
                    perimeterRestContourPiece,
                    perimeterRhythmTopRightGrainContourPiece,
                    perimeterRhythmTopRightGrainContourPiece,

                    perimeterRestContourPiece,
                    perimeterRestContourPiece,
                    perimeterRhythmTopRightGrainContourPiece,
                    perimeterRhythmTopRightGrainContourPiece,

                    perimeterRestContourPiece,
                    perimeterRestContourPiece,
                    perimeterRhythmTopRightGrainContourPiece,
                    perimeterRhythmTopRightGrainContourPiece,
                ])))
        })

        it('does top grain correctly', () => {
            const {
                perimeterRhythmTopGrainContourPiece,
                perimeterRestContourPiece,
            } = buildContourPieces()

            const { perimeterRhythmTopGrainContourWhole } = buildContourWholes()

            expect(perimeterRhythmTopGrainContourWhole)
                .toEqual(to.ContourWhole(sequence([
                    perimeterRestContourPiece,
                    perimeterRestContourPiece,
                    perimeterRhythmTopGrainContourPiece,
                    perimeterRhythmTopGrainContourPiece,

                    perimeterRestContourPiece,
                    perimeterRhythmTopGrainContourPiece,
                    perimeterRhythmTopGrainContourPiece,
                    perimeterRestContourPiece,

                    perimeterRestContourPiece,
                    perimeterRestContourPiece,
                    perimeterRhythmTopGrainContourPiece,
                    perimeterRhythmTopGrainContourPiece,

                    perimeterRestContourPiece,
                    perimeterRestContourPiece,
                    perimeterRhythmTopGrainContourPiece,
                    perimeterRhythmTopGrainContourPiece,
                ])))
        })

        it('does top left grain correctly', () => {
            const {
                perimeterRhythmTopLeftGrainContourPiece,
                perimeterRestContourPiece,
            } = buildContourPieces()

            const { perimeterRhythmTopLeftGrainContourWhole } = buildContourWholes()

            expect(perimeterRhythmTopLeftGrainContourWhole)
                .toEqual(to.ContourWhole(sequence([
                    perimeterRestContourPiece,
                    perimeterRestContourPiece,
                    perimeterRhythmTopLeftGrainContourPiece,
                    perimeterRhythmTopLeftGrainContourPiece,

                    perimeterRestContourPiece,
                    perimeterRestContourPiece,
                    perimeterRhythmTopLeftGrainContourPiece,
                    perimeterRhythmTopLeftGrainContourPiece,

                    perimeterRestContourPiece,
                    perimeterRhythmTopLeftGrainContourPiece,
                    perimeterRhythmTopLeftGrainContourPiece,
                    perimeterRestContourPiece,

                    perimeterRestContourPiece,
                    perimeterRestContourPiece,
                    perimeterRhythmTopLeftGrainContourPiece,
                    perimeterRhythmTopLeftGrainContourPiece,
                ])))
        })

        it('does left grain correctly', () => {
            const {
                perimeterRhythmLeftGrainContourPiece,
                perimeterRestContourPiece,
            } = buildContourPieces()

            const { perimeterRhythmLeftGrainContourWhole } = buildContourWholes()

            expect(perimeterRhythmLeftGrainContourWhole)
                .toEqual(to.ContourWhole(sequence([
                    perimeterRestContourPiece,
                    perimeterRestContourPiece,
                    perimeterRhythmLeftGrainContourPiece,
                    perimeterRhythmLeftGrainContourPiece,

                    perimeterRestContourPiece,
                    perimeterRestContourPiece,
                    perimeterRhythmLeftGrainContourPiece,
                    perimeterRhythmLeftGrainContourPiece,

                    perimeterRestContourPiece,
                    perimeterRestContourPiece,
                    perimeterRhythmLeftGrainContourPiece,
                    perimeterRhythmLeftGrainContourPiece,

                    perimeterRestContourPiece,
                    perimeterRhythmLeftGrainContourPiece,
                    perimeterRhythmLeftGrainContourPiece,
                    perimeterRestContourPiece,
                ])))
        })
    })

    describe('durations', () => {
        describe('perimeter wholes', () => {
            it('are all the same duration', () => {
                const {
                    perimeterRhythmLeftGrainContourWhole,
                    perimeterRhythmTopGrainContourWhole,
                    perimeterRhythmTopLeftGrainContourWhole,
                    perimeterRhythmTopRightGrainContourWhole,
                } = buildContourWholes()
                const scales: Scale[] = buildScales(patternSpec)

                const onePartsDuration: Time = calculatePartCompiledDuration(perimeterRhythmTopRightGrainContourWhole.map(buildNoteSpec), scales)

                expect(calculatePartCompiledDuration(perimeterRhythmLeftGrainContourWhole.map(buildNoteSpec), scales))
                    .toBe(onePartsDuration)
                expect(calculatePartCompiledDuration(perimeterRhythmTopGrainContourWhole.map(buildNoteSpec), scales))
                    .toBe(onePartsDuration)
                expect(calculatePartCompiledDuration(perimeterRhythmTopLeftGrainContourWhole.map(buildNoteSpec), scales))
                    .toBe(onePartsDuration)
            })
        })

        describe('supertile wholes', () => {
            it('are all the same duration', () => {
                const {
                    supertileRhythmLowerPitchContourWhole,
                    supertileRhythmHigherPitchContourWhole,
                } = buildContourWholes()
                const scales: Scale[] = buildScales(patternSpec)

                const onePartsDuration: Time = calculatePartCompiledDuration(supertileRhythmLowerPitchContourWhole.map(buildNoteSpec), scales)

                expect(calculatePartCompiledDuration(supertileRhythmHigherPitchContourWhole.map(buildNoteSpec), scales))
                    .toBe(onePartsDuration)
            })
        })

        describe('perimeter wholes vs supertile wholes', () => {
            it('perimeter pieces are 4/3rds as long as supertile pieces, and when combined into wholes repeat in multiples of multiples of 4, NOT 3, so that all hypermetrical interactions with the supertile pieces are not negated', () => {
                const {
                    perimeterRhythmLeftGrainContourWhole,
                    supertileRhythmLowerPitchContourWhole,
                } = buildContourWholes()
                const scales: Scale[] = buildScales(patternSpec)

                const supertileDuration: Time = calculatePartCompiledDuration(supertileRhythmLowerPitchContourWhole.map(buildNoteSpec), scales)
                const perimeterDuration: Time = calculatePartCompiledDuration(perimeterRhythmLeftGrainContourWhole.map(buildNoteSpec), scales)

                const ratioBetweenSupertileAndPerimeterParts: number = from.Time(supertileDuration) / from.Time(perimeterDuration)
                expect(testIsCloseTo(ratioBetweenSupertileAndPerimeterParts, 3 / (4 * 4 * 4)))
                    .toBeTruthy()
            })
        })
    })
})
