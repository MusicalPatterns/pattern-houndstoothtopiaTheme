import { BuildEntitiesFunction, Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { buildParts } from './parts'
import { HoundstoothtopiaThemeParts } from './types'

const buildEntities: BuildEntitiesFunction =
    (): Entity[] => {
        const parts: HoundstoothtopiaThemeParts = buildParts()

        const supertileLowerPitch: Entity = {
            noteSpecs: parts.supertileLowerPitch,
            timbreName: TimbreNameEnum.BASS,
        }
        const supertileHigherPitch: Entity = {
            noteSpecs: parts.supertileHigherPitch,
            timbreName: TimbreNameEnum.DYNA_EP_BRIGHT,
        }
        const perimeterTopRightGrain: Entity = {
            noteSpecs: parts.perimeterTopRightGrain,
            timbreName: TimbreNameEnum.WARM_TRIANGLE,
        }
        const perimeterTopGrain: Entity = {
            noteSpecs: parts.perimeterTopGrain,
            timbreName: TimbreNameEnum.BRASS,
        }
        const perimeterTopLeftGrain: Entity = {
            noteSpecs: parts.perimeterTopLeftGrain,
            timbreName: TimbreNameEnum.PHONEME_OOH,
        }
        const perimeterLeftGrain: Entity = {
            noteSpecs: parts.perimeterLeftGrain,
            timbreName: TimbreNameEnum.TWELVE_OP_TINES,
        }

        return [
            supertileLowerPitch,
            supertileHigherPitch,
            perimeterTopRightGrain,
            perimeterTopGrain,
            perimeterTopLeftGrain,
            perimeterLeftGrain,
        ]
    }

export {
    buildEntities,
}
