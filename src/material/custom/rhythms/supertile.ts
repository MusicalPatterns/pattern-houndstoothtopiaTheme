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
        const durationIndicesForTile: Ordinal[][] = supertile.map((tile: Stripe[]): Ordinal[] => {
            const durationIndicesForStripes: Ordinal[][] =
                map(tile, (stripe: Stripe, index: Ordinal): Ordinal[] => {
                    const count: Cardinal = stripe === Stripe.BLACK ? ONCE : TWICE

                    return repeat([ index ], count)
                })

            return sequence(durationIndicesForStripes)
        })

        return to.Block(sequence(durationIndicesForTile)
            .map(from.Ordinal))
    }

export {
    computeSupertileRhythm,
}
