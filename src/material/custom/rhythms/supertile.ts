import { Block, Cardinal, from, map, ONCE, Ordinal, repeat, sequence, to, TWICE } from '@musical-patterns/utilities'
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

        return to.Block(
            sequence(...durationIndicesForTile)
                .map((durationIndexForTile: Ordinal<Stripe>): number => from.Ordinal<Stripe>(durationIndexForTile)),
        )
    }

export {
    computeSupertileRhythm,
}
