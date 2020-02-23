import { Note } from '@musical-patterns/material'
import { Thunk } from '@musical-patterns/utilities'
import { computePerimeterNote, computeSupertileNote } from './features'
import { HoundstoothtopiaThemeContourWholes, HoundstoothtopiaThemeNotes } from './types'
import { thunkContourWholes } from './wholes'

const thunkNotes: Thunk<HoundstoothtopiaThemeNotes> =
    (): HoundstoothtopiaThemeNotes => {
        const contourWholes: HoundstoothtopiaThemeContourWholes = thunkContourWholes()

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
    thunkNotes,
}
