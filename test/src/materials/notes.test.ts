import { NotePropertySpec, NoteSpec, to } from '../../../../../src/indexForTest'
import { buildNoteSpec, ContourElement } from '../../../src/indexForTest'

describe('houndstoothtopia notes', () => {
    let noteSpec: NoteSpec
    beforeEach(() => {
        const testContour: ContourElement = [ to.Index(3), to.Index(7) ]
        noteSpec = buildNoteSpec(testContour)
    })

    describe('duration', () => {
        let durationSpec: NotePropertySpec
        beforeEach(() => {
            durationSpec = noteSpec.durationSpec || {}
        })

        it('sets the index to the first element', () => {
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

        it('sets the index to the second element', () => {
            expect(pitchSpec.index)
                .toBe(to.Index(7))
        })

        it('sets the scale index to the default for pitch', () => {
            expect(pitchSpec.scaleIndex)
                .toBe(to.Index(2))
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
