import { from, Scale, Time } from '../../../../../src/indexForTest'
import { calculatePartCompiledDuration, testIsCloseTo } from '../../../../../test/support'
import { buildParts, buildScales, patternSpec } from '../../../src/indexForTest'

describe('houndstoothtopia parts', () => {
    describe('perimeter parts', () => {
        it('are all the same duration', () => {
            const {
                perimeterRhythmLeftGrainPart,
                perimeterRhythmTopGrainPart,
                perimeterRhythmTopLeftGrainPart,
                perimeterRhythmTopRightGrainPart,
            } = buildParts()
            const scales: Scale[] = buildScales(patternSpec)

            const onePartsDuration: Time = calculatePartCompiledDuration(perimeterRhythmTopRightGrainPart, scales)

            expect(calculatePartCompiledDuration(perimeterRhythmLeftGrainPart, scales))
                .toBe(onePartsDuration)
            expect(calculatePartCompiledDuration(perimeterRhythmTopGrainPart, scales))
                .toBe(onePartsDuration)
            expect(calculatePartCompiledDuration(perimeterRhythmTopLeftGrainPart, scales))
                .toBe(onePartsDuration)
        })
    })

    describe('supertile parts', () => {
        it('are all the same duration', () => {
            const {
                supertileRhythmLowerPitchPart,
                supertileRhythmHigherPitchPart,
            } = buildParts()
            const scales: Scale[] = buildScales(patternSpec)

            const onePartsDuration: Time = calculatePartCompiledDuration(supertileRhythmLowerPitchPart, scales)

            expect(calculatePartCompiledDuration(supertileRhythmHigherPitchPart, scales))
                .toBe(onePartsDuration)
        })
    })

    describe('perimeter parts vs supertile parts', () => {
        it('supertile parts are three-quarters as long as the perimeter parts, so they loop in a simple 3:4 polymeter', () => {
            const {
                perimeterRhythmLeftGrainPart,
                supertileRhythmLowerPitchPart,
            } = buildParts()
            const scales: Scale[] = buildScales(patternSpec)

            const supertileDuration: Time = calculatePartCompiledDuration(supertileRhythmLowerPitchPart, scales)
            const perimeterDuration: Time = calculatePartCompiledDuration(perimeterRhythmLeftGrainPart, scales)

            const ratioBetweenSupertileAndPerimeterParts: number = from.Time(supertileDuration) / from.Time(perimeterDuration)
            expect(testIsCloseTo(ratioBetweenSupertileAndPerimeterParts, 3 / 4))
                .toBeTruthy()
        })
    })
})
