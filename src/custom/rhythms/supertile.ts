import { Block, Cardinal, ONCE, Ordinal, repeat, sequence, to, TWICE } from '@musical-patterns/utilities'

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
                tile.map((stripe: string, index: number): Ordinal[] => {
                    const count: Cardinal = stripe === 'black' ? ONCE : TWICE
                    const durationIndex: Ordinal = to.Ordinal(index)

                    return repeat([ durationIndex ], count)
                })

            return sequence(durationIndicesForStripes)
        })

        return to.Block(sequence(durationIndicesForTile))
    }

export {
    buildSupertileRhythm,
}
