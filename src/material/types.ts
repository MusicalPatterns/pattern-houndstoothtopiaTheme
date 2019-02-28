import { NoteSpec } from '@musical-patterns/compiler'
import { PitchDurationXYZ } from '@musical-patterns/pattern'
import { ContourPiece, ContourWhole, PropertyMap } from '@musical-patterns/utilities'

interface HoundstoothtopiaThemeMaterialSkeleton {
    perimeterLeftGrain: never,
    perimeterTopGrain: never,
    perimeterTopLeftGrain: never,
    perimeterTopRightGrain: never,
    supertileHigherPitch: never,
    supertileLowerPitch: never,
}

type HoundstoothtopiaThemeParts = PropertyMap<HoundstoothtopiaThemeMaterialSkeleton, NoteSpec[]>

type HoundstoothtopiaThemeContourWholes =
    PropertyMap<HoundstoothtopiaThemeMaterialSkeleton, ContourWhole<PitchDurationXYZ>>

type HoundstoothtopiaThemeContourPieces =
    PropertyMap<HoundstoothtopiaThemeMaterialSkeleton, ContourPiece<PitchDurationXYZ>> & {
    perimeterRest: ContourPiece<PitchDurationXYZ>,
    supertileRest: ContourPiece<PitchDurationXYZ>,
}

export {
    HoundstoothtopiaThemeContourPieces,
    HoundstoothtopiaThemeContourWholes,
    HoundstoothtopiaThemeParts,
}
