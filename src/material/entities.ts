import { Entity, MaterializeEntities, TimbreNameEnum } from '@musical-patterns/compiler'
import { computeNotes } from './notes'
import { HoundstoothtopiaThemeNotes } from './types'

const materializeEntities: MaterializeEntities =
    (): Entity[] => {
        const notes: HoundstoothtopiaThemeNotes = computeNotes()

        const supertileLowerPitch: Entity = {
            sections: [ { notes: notes.supertileLowerPitch } ],
            timbreName: TimbreNameEnum.BASS,
        }
        const supertileHigherPitch: Entity = {
            sections: [ { notes: notes.supertileHigherPitch } ],
            timbreName: TimbreNameEnum.DYNA_EP_BRIGHT,
        }
        const perimeterTopRightGrain: Entity = {
            sections: [ { notes: notes.perimeterTopRightGrain } ],
            timbreName: TimbreNameEnum.WARM_TRIANGLE,
        }
        const perimeterTopGrain: Entity = {
            sections: [ { notes: notes.perimeterTopGrain } ],
            timbreName: TimbreNameEnum.BRASS,
        }
        const perimeterTopLeftGrain: Entity = {
            sections: [ { notes: notes.perimeterTopLeftGrain } ],
            timbreName: TimbreNameEnum.PHONEME_OOH,
        }
        const perimeterLeftGrain: Entity = {
            sections: [ { notes: notes.perimeterLeftGrain } ],
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
