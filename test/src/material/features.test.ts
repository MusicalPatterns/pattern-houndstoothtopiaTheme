import { Note, NoteFeature, PitchDurationXYZ, Scale } from '@musical-patterns/material'
import { as, ContourElement, isUndefined, Scalar, SQUARE_ROOT_OF_TWO } from '@musical-patterns/utilities'
import { computeSupertileNote } from '../../../src/indexForTest'

const isArrayedPositionSpecs: (position: NoteFeature | NoteFeature[]) => position is NoteFeature[] =
    (position: NoteFeature | NoteFeature[]): position is NoteFeature[] =>
        position instanceof Array

describe('features', () => {
    let note: Note
    describe('non-rest note', () => {
        beforeEach(() => {
            const testContour: ContourElement<PitchDurationXYZ> = as.ContourElement<PitchDurationXYZ>([ 2.12, 3, 3, 5, 8 ])
            note = computeSupertileNote(testContour)
        })

        describe('duration', () => {
            let duration: NoteFeature
            beforeEach(() => {
                duration = note.duration || {}
            })

            it('sets the index to the second element', () => {
                expect(duration.index)
                    .toBe(as.Ordinal<Scalar[]>(3))
            })

            it('sets the scale index to the default for duration', () => {
                expect(duration.scaleIndex)
                    .toBe(as.Ordinal<Scale[]>(1))
            })
        })

        describe('pitch', () => {
            let pitch: NoteFeature
            beforeEach(() => {
                pitch = note.pitch || {}
            })

            it('sets the index to the first element', () => {
                expect(pitch.scalar)
                    .toBe(as.Scalar<Scalar>(2.12))
            })

            it('sets the scale index to the default for pitch', () => {
                expect(pitch.scaleIndex)
                    .toBe(as.Ordinal<Scale[]>(2))
            })
        })

        describe('gain', () => {
            let gain: NoteFeature
            beforeEach(() => {
                gain = note.gain || {}
            })

            it('sets gain to half', () => {
                expect(gain.scalar)
                    .toBe(as.Scalar<Scalar>(0.5))
            })
        })

        describe('sustain', () => {
            let sustain: NoteFeature
            beforeEach(() => {
                sustain = note.sustain || {}
            })

            it('sets the scalar to something quite staccato but still related to the irrational theme', () => {
                expect(sustain.scalar)
                    .toBe(as.Scalar<Scalar>(SQUARE_ROOT_OF_TWO - 1))
            })

            it('sets the scale index to the default for durations', () => {
                expect(sustain.scaleIndex)
                    .toBe(as.Ordinal<Scale[]>(1))
            })

            it('leaves the index undefined so that it will default to zero', () => {
                expect(sustain.index)
                    .toBe(undefined)
            })
        })

        describe('position', () => {
            let position: NoteFeature[]
            beforeEach(() => {
                if (!isUndefined(note.position) && isArrayedPositionSpecs(note.position)) {
                    position = note.position
                }
            })

            it('sets the scalar from the contour', () => {
                expect(position[ 0 ].scalar)
                    .toBe(as.Scalar<Scalar>(3))
                expect(position[ 1 ].scalar)
                    .toBe(as.Scalar<Scalar>(5))
                expect(position[ 2 ].scalar)
                    .toBe(as.Scalar<Scalar>(8))
            })

            it('sets the scale index to the scales for position dimensions x, y, and z', () => {
                expect(position[ 0 ].scaleIndex)
                    .toBe(as.Ordinal<Scale[]>(3))
                expect(position[ 1 ].scaleIndex)
                    .toBe(as.Ordinal<Scale[]>(4))
                expect(position[ 2 ].scaleIndex)
                    .toBe(as.Ordinal<Scale[]>(5))
            })
        })
    })

    describe('rest note', () => {
        beforeEach(() => {
            const testContour: ContourElement<PitchDurationXYZ> = as.ContourElement<PitchDurationXYZ>([ -1, 3, 0, 0, 0 ])
            note = computeSupertileNote(testContour)
        })

        describe('gain', () => {
            let gain: NoteFeature
            beforeEach(() => {
                gain = note.gain || {}
            })

            it('sets gain to zero', () => {
                expect(gain.scalar)
                    .toBe(as.Scalar<Scalar>(0))
            })
        })
    })
})
