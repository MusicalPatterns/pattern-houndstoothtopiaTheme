import { NoteSpec } from '@musical-patterns/compiler'
import { PitchDurationXYZ } from '@musical-patterns/pattern'
import { ContourPiece, ContourWhole, KeyMap } from '@musical-patterns/utilities'

interface HoundstoothtopiaThemeMaterialSkeleton {
    perimeterLeftGrain: never,
    perimeterTopGrain: never,
    perimeterTopLeftGrain: never,
    perimeterTopRightGrain: never,
    supertileHigherPitch: never,
    supertileLowerPitch: never,
}

type HoundstoothtopiaThemeParts = KeyMap<HoundstoothtopiaThemeMaterialSkeleton, NoteSpec[]>

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
    HoundstoothtopiaThemeParts,
}
