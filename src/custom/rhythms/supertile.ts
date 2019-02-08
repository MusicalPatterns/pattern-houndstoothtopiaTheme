import { Block, Cardinal, from, map, ONCE, Ordinal, repeat, sequence, to, TWICE } from '@musical-patterns/utilities'

const buildSupertileRhythm: () => Block =
    (): Block => {
        const supertile: string[][] = [
            [ 'black', 'black' ],
            [ 'white', 'black' ],
            [ 'white', 'white' ],
            [ 'black', 'white' ],
        ]
        const durationIndicesForTile: Ordinal[][] = supertile.map((tile: string[]): Ordinal[] => {
            const durationIndicesForStripes: Ordinal[][] =
                map(tile, (stripe: string, index: Ordinal): Ordinal[] => {
                    const count: Cardinal = stripe === 'black' ? ONCE : TWICE

                    return repeat([ index ], count)
                })

            return sequence(durationIndicesForStripes)
        })

        return to.Block(sequence(durationIndicesForTile)
            .map(from.Ordinal))
    }

export {
    buildSupertileRhythm,
}
