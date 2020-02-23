import { Feature, Note, PitchValueXYZ, PositionFeature, Scale } from '@musical-patterns/material'
import {
    as,
    ContourElement,
    Intensity,
    isArray,
    isUndefined,
    Pitch,
    Position,
    Scalar,
    SQUARE_ROOT_OF_TWO,
    Value,
} from '@musical-patterns/utilities'
import { computeSupertileNote } from '../../../src/indexForTest'

const isArrayedPositionSpecs: (position: PositionFeature) => position is Array<Feature<Position>> =
    // tslint:disable-next-line no-unnecessary-callback-wrapper
    (position: PositionFeature): position is Array<Feature<Position>> =>
        isArray(position)

describe('features', (): void => {
    let note: Note
    describe('non-rest note', (): void => {
        beforeEach((): void => {
            const testContour: ContourElement<PitchValueXYZ> = as.ContourElement<PitchValueXYZ>([ 2.12, 3, 3, 5, 8 ])
            note = computeSupertileNote(testContour)
        })

        describe('value', (): void => {
            let value: Feature<Value>
            beforeEach((): void => {
                value = note.value || {}
            })

            it('sets the index to the second element', (): void => {
                expect(value.index)
                    .toBe(as.Ordinal<Array<Scalar<Value>>>(3))
            })
        })

        describe('pitch', (): void => {
            let pitch: Feature<Pitch>
            beforeEach((): void => {
                pitch = note.pitch || {}
            })

            it('sets the index to the first element', (): void => {
                expect(pitch.scalar)
                    .toBe(as.Scalar<Pitch>(2.12))
            })
        })

        describe('intensity', (): void => {
            let intensity: Feature<Intensity>
            beforeEach((): void => {
                intensity = note.intensity || {}
            })

            it('sets intensity to half', (): void => {
                expect(intensity.scalar)
                    .toBe(as.Scalar<Intensity>(0.5))
            })
        })

        describe('envelope', (): void => {
            let envelope: Feature<Value>
            beforeEach((): void => {
                envelope = note.envelope || {}
            })

            it('sets the scalar to something quite staccato but still related to the irrational theme', (): void => {
                expect(envelope.scalar)
                    .toBe(as.Scalar<Value>(SQUARE_ROOT_OF_TWO - 1))
            })

            it('leaves the index undefined so that it will default to zero', (): void => {
                expect(envelope.index)
                    .toBe(undefined)
            })
        })

        describe('position', (): void => {
            let position: Array<Feature<Position>>
            beforeEach((): void => {
                if (!isUndefined(note.position) && isArrayedPositionSpecs(note.position)) {
                    position = note.position
                }
            })

            it('sets the scalar from the contour', (): void => {
                expect(position[ 0 ].scalar)
                    .toBe(as.Scalar<Position>(3))
                expect(position[ 1 ].scalar)
                    .toBe(as.Scalar<Position>(5))
                expect(position[ 2 ].scalar)
                    .toBe(as.Scalar<Position>(8))
            })

            it('sets the scale index to the scales for position dimensions x, y, and z', (): void => {
                expect(position[ 0 ].scaleIndex)
                    .toBe(as.Ordinal<Array<Scale<Position>>>(0))
                expect(position[ 1 ].scaleIndex)
                    .toBe(as.Ordinal<Array<Scale<Position>>>(1))
                expect(position[ 2 ].scaleIndex)
                    .toBe(as.Ordinal<Array<Scale<Position>>>(2))
            })
        })
    })

    describe('rest note', (): void => {
        beforeEach((): void => {
            const testContour: ContourElement<PitchValueXYZ> = as.ContourElement<PitchValueXYZ>([ -1, 3, 0, 0, 0 ])
            note = computeSupertileNote(testContour)
        })

        describe('intensity', (): void => {
            let intensity: Feature<Intensity>
            beforeEach((): void => {
                intensity = note.intensity || {}
            })

            it('sets intensity to zero', (): void => {
                expect(intensity.scalar)
                    .toBe(as.Scalar<Intensity>(0))
            })
        })
    })
})
