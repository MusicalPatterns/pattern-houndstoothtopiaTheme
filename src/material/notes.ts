import { Note } from '@musical-patterns/compiler'
import { buildPerimeterNote, buildSupertileNote } from './features'
import { HoundstoothtopiaThemeContourWholes, HoundstoothtopiaThemeNotes } from './types'
import { buildContourWholes } from './wholes'

const buildNotes: () => HoundstoothtopiaThemeNotes =
    (): HoundstoothtopiaThemeNotes => {
        const contourWholes: HoundstoothtopiaThemeContourWholes = buildContourWholes()

        const supertileLowerPitch: Note[] =
            contourWholes.supertileLowerPitch.map(buildSupertileNote)
        const supertileHigherPitch: Note[] =
            contourWholes.supertileHigherPitch.map(buildSupertileNote)
        const perimeterTopRightGrain: Note[] =
            contourWholes.perimeterTopRightGrain.map(buildPerimeterNote)
        const perimeterTopGrain: Note[] =
            contourWholes.perimeterTopGrain.map(buildPerimeterNote)
        const perimeterTopLeftGrain: Note[] =
            contourWholes.perimeterTopLeftGrain.map(buildPerimeterNote)
        const perimeterLeftGrain: Note[] =
            contourWholes.perimeterLeftGrain.map(buildPerimeterNote)

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
    buildNotes,
}
