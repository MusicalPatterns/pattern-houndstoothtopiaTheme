import { Feature, Note, PitchValueXYZ, PositionFeature, Scale } from '@musical-patterns/material'
import {
    as,
    ContourElement,
    Intensity,
    isUndefined,
    Pitch,
    Position,
    Scalar,
    SQUARE_ROOT_OF_TWO,
    Value,
} from '@musical-patterns/utilities'
import { computeSupertileNote } from '../../../src/indexForTest'

const isArrayedPositionSpecs: (position: PositionFeature) => position is Array<Feature<Position>> =
    (position: PositionFeature): position is Array<Feature<Position>> =>
        position instanceof Array

describe('features', () => {
    let note: Note
    describe('non-rest note', () => {
        beforeEach(() => {
            const testContour: ContourElement<PitchValueXYZ> = as.ContourElement<PitchValueXYZ>([ 2.12, 3, 3, 5, 8 ])
            note = computeSupertileNote(testContour)
        })

        describe('value', () => {
            let value: Feature<Value>
            beforeEach(() => {
                value = note.value || {}
            })

            it('sets the index to the second element', () => {
                expect(value.index)
                    .toBe(as.Ordinal<Array<Scalar<Value>>>(3))
            })
        })

        describe('pitch', () => {
            let pitch: Feature<Pitch>
            beforeEach(() => {
                pitch = note.pitch || {}
            })

            it('sets the index to the first element', () => {
                expect(pitch.scalar)
                    .toBe(as.Scalar<Pitch>(2.12))
            })
        })

        describe('intensity', () => {
            let intensity: Feature<Intensity>
            beforeEach(() => {
                intensity = note.intensity || {}
            })

            it('sets intensity to half', () => {
                expect(intensity.scalar)
                    .toBe(as.Scalar<Intensity>(0.5))
            })
        })

        describe('envelope', () => {
            let envelope: Feature<Value>
            beforeEach(() => {
                envelope = note.envelope || {}
            })

            it('sets the scalar to something quite staccato but still related to the irrational theme', () => {
                expect(envelope.scalar)
                    .toBe(as.Scalar<Value>(SQUARE_ROOT_OF_TWO - 1))
            })

            it('leaves the index undefined so that it will default to zero', () => {
                expect(envelope.index)
                    .toBe(undefined)
            })
        })

        describe('position', () => {
            let position: Array<Feature<Position>>
            beforeEach(() => {
                if (!isUndefined(note.position) && isArrayedPositionSpecs(note.position)) {
                    position = note.position
                }
            })

            it('sets the scalar from the contour', () => {
                expect(position[ 0 ].scalar)
                    .toBe(as.Scalar<Position>(3))
                expect(position[ 1 ].scalar)
                    .toBe(as.Scalar<Position>(5))
                expect(position[ 2 ].scalar)
                    .toBe(as.Scalar<Position>(8))
            })

            it('sets the scale index to the scales for position dimensions x, y, and z', () => {
                expect(position[ 0 ].scaleIndex)
                    .toBe(as.Ordinal<Array<Scale<Position>>>(0))
                expect(position[ 1 ].scaleIndex)
                    .toBe(as.Ordinal<Array<Scale<Position>>>(1))
                expect(position[ 2 ].scaleIndex)
                    .toBe(as.Ordinal<Array<Scale<Position>>>(2))
            })
        })
    })

    describe('rest note', () => {
        beforeEach(() => {
            const testContour: ContourElement<PitchValueXYZ> = as.ContourElement<PitchValueXYZ>([ -1, 3, 0, 0, 0 ])
            note = computeSupertileNote(testContour)
        })

        describe('intensity', () => {
            let intensity: Feature<Intensity>
            beforeEach(() => {
                intensity = note.intensity || {}
            })

            it('sets intensity to zero', () => {
                expect(intensity.scalar)
                    .toBe(as.Scalar<Intensity>(0))
            })
        })
    })
})
