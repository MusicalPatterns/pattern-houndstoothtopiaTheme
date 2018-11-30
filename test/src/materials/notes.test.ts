import { NotePropertySpec, NoteSpec } from '@musical-patterns/compiler'
import { to } from '@musical-patterns/utilities'
import { buildSupertileNoteSpec, HoundstoothtopiaContourElement } from '../../../src/indexForTest'

describe('houndstoothtopia notes', () => {
    let noteSpec: NoteSpec
    describe('non-rest note', () => {
        beforeEach(() => {
            const testContour: HoundstoothtopiaContourElement = [ 2.12, 3, [ 0, 0, 0 ] ]
            noteSpec = buildSupertileNoteSpec(testContour)
        })

        describe('duration', () => {
            let durationSpec: NotePropertySpec
            beforeEach(() => {
                durationSpec = noteSpec.durationSpec || {}
            })

            it('sets the index to the second element', () => {
                expect(durationSpec.index)
                    .toBe(to.Index(3))
            })

            it('sets the scale index to the default for duration', () => {
                expect(durationSpec.scaleIndex)
                    .toBe(to.Index(1))
            })
        })

        describe('pitch', () => {
            let pitchSpec: NotePropertySpec
            beforeEach(() => {
                pitchSpec = noteSpec.pitchSpec || {}
            })

            it('sets the index to the first element', () => {
                expect(pitchSpec.scalar)
                    .toBe(to.Scalar(2.12))
            })

            it('sets the scale index to the default for pitch', () => {
                expect(pitchSpec.scaleIndex)
                    .toBe(to.Index(2))
            })
        })

        describe('gain', () => {
            let gainSpec: NotePropertySpec
            beforeEach(() => {
                gainSpec = noteSpec.gainSpec || {}
            })

            it('sets gain to half', () => {
                expect(gainSpec.scalar)
                    .toBe(to.Scalar(0.5))
            })
        })

        describe('sustain', () => {
            let sustainSpec: NotePropertySpec
            beforeEach(() => {
                sustainSpec = noteSpec.sustainSpec || {}
            })

            it('sets the scalar to something quite staccato but still related to the irrational theme', () => {
                expect(sustainSpec.scalar)
                    .toBe(to.Scalar(Math.sqrt(2) - 1))
            })

            it('sets the scale index to the default for durations', () => {
                expect(sustainSpec.scaleIndex)
                    .toBe(to.Index(1))
            })

            it('leaves the index undefined so that it will default to zero', () => {
                expect(sustainSpec.index)
                    .toBe(undefined)
            })
        })
    })

    describe('rest note', () => {
        beforeEach(() => {
            const testContour: HoundstoothtopiaContourElement = [ -1, 3, [ 0, 0, 0 ] ]
            noteSpec = buildSupertileNoteSpec(testContour)
        })

        describe('gain', () => {
            let gainSpec: NotePropertySpec
            beforeEach(() => {
                gainSpec = noteSpec.gainSpec || {}
            })

            it('sets gain to zero', () => {
                expect(gainSpec.scalar)
                    .toBe(to.Scalar(0))
            })
        })
    })
})
