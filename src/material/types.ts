import { Note, PitchDurationXYZ } from '@musical-patterns/material'
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
    KeyMap<HoundstoothtopiaThemeMaterialSkeleton, ContourWhole<PitchDurationXYZ>>

type HoundstoothtopiaThemeContourPieces =
    KeyMap<HoundstoothtopiaThemeMaterialSkeleton, ContourPiece<PitchDurationXYZ>> & {
    perimeterRest: ContourPiece<PitchDurationXYZ>,
    supertileRest: ContourPiece<PitchDurationXYZ>,
}

export {
    HoundstoothtopiaThemeContourPieces,
    HoundstoothtopiaThemeContourWholes,
    HoundstoothtopiaThemeNotes,
}
