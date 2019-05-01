import { Note, PitchValueXYZ } from '@musical-patterns/material'
import { ContourPiece, ContourWhole, KeyMap } from '@musical-patterns/utilities'

interface HoundstoothtopiaThemeMaterialSkeleton {
    perimeterLeftGrain: never,
    perimeterTopGrain: never,
    perimeterTopLeftGrain: never,
    perimeterTopRightGrain: never,
    supertileHigherPitch: never,
    supertileLowerPitch: never,
}

type HoundstoothtopiaThemeNotes = KeyMap<HoundstoothtopiaThemeMaterialSkeleton, Note[]>

type HoundstoothtopiaThemeContourWholes =
    KeyMap<HoundstoothtopiaThemeMaterialSkeleton, ContourWhole<PitchValueXYZ>>

type HoundstoothtopiaThemeContourPieces =
    KeyMap<HoundstoothtopiaThemeMaterialSkeleton, ContourPiece<PitchValueXYZ>> & {
    perimeterRest: ContourPiece<PitchValueXYZ>,
    supertileRest: ContourPiece<PitchValueXYZ>,
}

export {
    HoundstoothtopiaThemeContourPieces,
    HoundstoothtopiaThemeContourWholes,
    HoundstoothtopiaThemeNotes,
}
