import { Entity, MaterializeEntities, TimbreNameEnum } from '@musical-patterns/compiler'
import { buildNotes } from './notes'
import { HoundstoothtopiaThemeNotes } from './types'

const materializeEntities: MaterializeEntities =
    (): Entity[] => {
        const notes: HoundstoothtopiaThemeNotes = buildNotes()

        const supertileLowerPitch: Entity = {
            notes: notes.supertileLowerPitch,
            timbreName: TimbreNameEnum.BASS,
        }
        const supertileHigherPitch: Entity = {
            notes: notes.supertileHigherPitch,
            timbreName: TimbreNameEnum.DYNA_EP_BRIGHT,
        }
        const perimeterTopRightGrain: Entity = {
            notes: notes.perimeterTopRightGrain,
            timbreName: TimbreNameEnum.WARM_TRIANGLE,
        }
        const perimeterTopGrain: Entity = {
            notes: notes.perimeterTopGrain,
            timbreName: TimbreNameEnum.BRASS,
        }
        const perimeterTopLeftGrain: Entity = {
            notes: notes.perimeterTopLeftGrain,
            timbreName: TimbreNameEnum.PHONEME_OOH,
        }
        const perimeterLeftGrain: Entity = {
            notes: notes.perimeterLeftGrain,
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
    materializeEntities,
}
