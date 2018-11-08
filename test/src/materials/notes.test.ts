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
    })

    describe('sustain', () => {
        let sustainSpec: NotePropertySpec
        beforeEach(() => {
            sustainSpec = noteSpec.sustainSpec || {}
        })

        it('sets the index to the first element', () => {
            expect(sustainSpec.index)
                .toBe(to.Index(3))
        })
    })
})
