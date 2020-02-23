import { as, Block, Cardinal, flatten, map, ONCE, Ordinal, repeat, Thunk, TWICE } from '@musical-patterns/utilities'
import { Stripe } from './types'

const thunkSupertileRhythm: Thunk<Block> =
    (): Block => {
        const supertile: Stripe[][] = [
            [ Stripe.BLACK, Stripe.BLACK ],
            [ Stripe.WHITE, Stripe.BLACK ],
            [ Stripe.WHITE, Stripe.WHITE ],
            [ Stripe.BLACK, Stripe.WHITE ],
        ]
        const durationIndicesForTile: Array<Array<Ordinal<Stripe[]>>> = supertile.map(
            (tile: Stripe[]): Array<Ordinal<Stripe[]>> => {
                const durationIndicesForStripes: Array<Array<Ordinal<Stripe[]>>> =
                    map(tile, (stripe: Stripe, index: Ordinal<Stripe[]>): Array<Ordinal<Stripe[]>> => {
                        const count: Cardinal<Array<Ordinal<Stripe[]>>> = stripe === Stripe.BLACK ? ONCE : TWICE

                        return repeat([ index ], count)
                    })

                return flatten(durationIndicesForStripes)
            },
        )

        return as.Block(
            flatten(durationIndicesForTile)
                .map(
                    (durationIndexForTile: Ordinal<Stripe[]>): number =>
                        as.number(durationIndexForTile),
                ),
        )
    }

export {
    thunkSupertileRhythm,
}
