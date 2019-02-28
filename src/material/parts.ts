import { NoteSpec } from '@musical-patterns/compiler'
import { buildPerimeterNoteSpec, buildSupertileNoteSpec } from './notes'
import { HoundstoothtopiaThemeContourWholes, HoundstoothtopiaThemeParts } from './types'
import { buildContourWholes } from './wholes'

const buildParts: () => HoundstoothtopiaThemeParts =
    (): HoundstoothtopiaThemeParts => {
        const contourWholes: HoundstoothtopiaThemeContourWholes = buildContourWholes()

        const supertileLowerPitch: NoteSpec[] =
            contourWholes.supertileLowerPitch.map(buildSupertileNoteSpec)
        const supertileHigherPitch: NoteSpec[] =
            contourWholes.supertileHigherPitch.map(buildSupertileNoteSpec)
        const perimeterTopRightGrain: NoteSpec[] =
            contourWholes.perimeterTopRightGrain.map(buildPerimeterNoteSpec)
        const perimeterTopGrain: NoteSpec[] =
            contourWholes.perimeterTopGrain.map(buildPerimeterNoteSpec)
        const perimeterTopLeftGrain: NoteSpec[] =
            contourWholes.perimeterTopLeftGrain.map(buildPerimeterNoteSpec)
        const perimeterLeftGrain: NoteSpec[] =
            contourWholes.perimeterLeftGrain.map(buildPerimeterNoteSpec)

        return {
            perimeterLeftGrain,
            perimeterTopGrain,
            perimeterTopLeftGrain,
            perimeterTopRightGrain,
            supertileHigherPitch,
            supertileLowerPitch,
        }
    }

export {
    buildParts,
}
