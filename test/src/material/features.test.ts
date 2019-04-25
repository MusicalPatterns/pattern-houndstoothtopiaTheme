import { Note, NoteFeature, PitchDurationXYZ, PositionFeature, Scale } from '@musical-patterns/material'
import {
    as,
    ContourElement,
    Duration,
    Gain,
    isUndefined,
    Pitch,
    Position,
    Scalar,
    SQUARE_ROOT_OF_TWO,
} from '@musical-patterns/utilities'
import { computeSupertileNote } from '../../../src/indexForTest'

const isArrayedPositionSpecs: (position: PositionFeature) => position is Array<NoteFeature<Position>> =
    (position: PositionFeature): position is Array<NoteFeature<Position>> =>
        position instanceof Array

describe('features', () => {
    let note: Note
    describe('non-rest note', () => {
        beforeEach(() => {
            const testContour: ContourElement<PitchDurationXYZ> = as.ContourElement<PitchDurationXYZ>([ 2.12, 3, 3, 5, 8 ])
            note = computeSupertileNote(testContour)
        })

        describe('duration', () => {
            let duration: NoteFeature<Duration>
            beforeEach(() => {
                duration = note.duration || {}
            })

            it('sets the index to the second element', () => {
                expect(duration.index)
                    .toBe(as.Ordinal<Array<Scalar<Duration>>>(3))
            })

            it('sets the scale index to the default for duration', () => {
                expect(duration.scaleIndex)
                    .toBe(as.Ordinal<Array<Scale<Duration>>>(1))
            })
        })

        describe('pitch', () => {
            let pitch: NoteFeature<Pitch>
            beforeEach(() => {
                pitch = note.pitch || {}
            })

            it('sets the index to the first element', () => {
                expect(pitch.scalar)
                    .toBe(as.Scalar<Pitch>(2.12))
            })

            it('sets the scale index to the default for pitch', () => {
                expect(pitch.scaleIndex)
                    .toBe(as.Ordinal<Array<Scale<Pitch>>>(2))
            })
        })

        describe('gain', () => {
            let gain: NoteFeature<Gain>
            beforeEach(() => {
                gain = note.gain || {}
            })

            it('sets gain to half', () => {
                expect(gain.scalar)
                    .toBe(as.Scalar<Gain>(0.5))
            })
        })

        describe('sustain', () => {
            let sustain: NoteFeature<Duration>
            beforeEach(() => {
                sustain = note.sustain || {}
            })

            it('sets the scalar to something quite staccato but still related to the irrational theme', () => {
                expect(sustain.scalar)
                    .toBe(as.Scalar<Duration>(SQUARE_ROOT_OF_TWO - 1))
            })

            it('sets the scale index to the default for durations', () => {
                expect(sustain.scaleIndex)
                    .toBe(as.Ordinal<Array<Scale<Duration>>>(1))
            })

            it('leaves the index undefined so that it will default to zero', () => {
                expect(sustain.index)
                    .toBe(undefined)
            })
        })

        describe('position', () => {
            let position: Array<NoteFeature<Position>>
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
                    .toBe(as.Ordinal<Array<Scale<Position>>>(3))
                expect(position[ 1 ].scaleIndex)
                    .toBe(as.Ordinal<Array<Scale<Position>>>(4))
                expect(position[ 2 ].scaleIndex)
                    .toBe(as.Ordinal<Array<Scale<Position>>>(5))
            })
        })
    })

    describe('rest note', () => {
        beforeEach(() => {
            const testContour: ContourElement<PitchDurationXYZ> = as.ContourElement<PitchDurationXYZ>([ -1, 3, 0, 0, 0 ])
            note = computeSupertileNote(testContour)
        })

        describe('gain', () => {
            let gain: NoteFeature<Gain>
            beforeEach(() => {
                gain = note.gain || {}
            })

            it('sets gain to zero', () => {
                expect(gain.scalar)
                    .toBe(as.Scalar<Gain>(0))
            })
        })
    })
})
