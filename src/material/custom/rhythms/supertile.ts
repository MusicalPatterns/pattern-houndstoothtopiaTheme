import { as, Block, Cardinal, map, notAs, ONCE, Ordinal, repeat, sequence, TWICE } from '@musical-patterns/utilities'
import { Stripe } from './types'

const computeSupertileRhythm: () => Block =
    (): Block => {
        const supertile: Stripe[][] = [
            [ Stripe.BLACK, Stripe.BLACK ],
            [ Stripe.WHITE, Stripe.BLACK ],
            [ Stripe.WHITE, Stripe.WHITE ],
            [ Stripe.BLACK, Stripe.WHITE ],
        ]
        const durationIndicesForTile: Array<Array<Ordinal<Stripe>>> = supertile.map((tile: Stripe[]) => {
            const durationIndicesForStripes: Array<Array<Ordinal<Stripe>>> =
                map(tile, (stripe: Stripe, index: Ordinal<Stripe>): Array<Ordinal<Stripe>> => {
                    const count: Cardinal = stripe === Stripe.BLACK ? ONCE : TWICE

                    return repeat([ index ], count)
                })

            return sequence(...durationIndicesForStripes)
        })

        return as.Block(
            sequence(...durationIndicesForTile)
                .map((durationIndexForTile: Ordinal<Stripe>): number => notAs.Ordinal<Stripe>(durationIndexForTile)),
        )
    }

export {
    computeSupertileRhythm,
}
