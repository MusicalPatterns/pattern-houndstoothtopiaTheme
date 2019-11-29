import { Note } from '@musical-patterns/material'
import { computePerimeterNote, computeSupertileNote } from './features'
import { HoundstoothtopiaThemeContourWholes, HoundstoothtopiaThemeNotes } from './types'
import { computeContourWholes } from './wholes'

const computeNotes: () => HoundstoothtopiaThemeNotes =
    (): HoundstoothtopiaThemeNotes => {
        const contourWholes: HoundstoothtopiaThemeContourWholes = computeContourWholes()

        const supertileLowerPitch: Note[] =
            contourWholes.supertileLowerPitch.map(computeSupertileNote)
        const supertileHigherPitch: Note[] =
            contourWholes.supertileHigherPitch.map(computeSupertileNote)
        const perimeterTopRightGrain: Note[] =
            contourWholes.perimeterTopRightGrain.map(computePerimeterNote)
        const perimeterTopGrain: Note[] =
            contourWholes.perimeterTopGrain.map(computePerimeterNote)
        const perimeterTopLeftGrain: Note[] =
            contourWholes.perimeterTopLeftGrain.map(computePerimeterNote)
        const perimeterLeftGrain: Note[] =
            contourWholes.perimeterLeftGrain.map(computePerimeterNote)
        const perimeterRightGrain: Note[] =
            contourWholes.perimeterRightGrain.map(computePerimeterNote)
        const perimeterBottomRightGrain: Note[] =
            contourWholes.perimeterBottomRightGrain.map(computePerimeterNote)
        const perimeterBottomGrain: Note[] =
            contourWholes.perimeterBottomGrain.map(computePerimeterNote)
        const perimeterBottomLeftGrain: Note[] =
            contourWholes.perimeterBottomLeftGrain.map(computePerimeterNote)

        return {
            perimeterLeftGrain,
            perimeterTopGrain,
            perimeterTopLeftGrain,
            perimeterTopRightGrain,
            perimeterRightGrain,
            perimeterBottomRightGrain,
            perimeterBottomGrain,
            perimeterBottomLeftGrain,
            supertileHigherPitch,
            supertileLowerPitch,
        }
    }

export {
    computeNotes,
}
