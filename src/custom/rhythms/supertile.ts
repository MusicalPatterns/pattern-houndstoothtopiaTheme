import { Block, Count, Index, ONCE, repeat, sequence, to, TWICE } from '@musical-patterns/utilities'

const buildSupertileRhythm: () => Block =
    (): Block => {
        const supertile: string[][] = [
            [ 'black', 'black' ],
            [ 'white', 'black' ],
            [ 'white', 'white' ],
            [ 'black', 'white' ],
        ]
        const durationIndicesForTiles: Index[][] = supertile.map((tile: string[]): Index[] => {
            const durationIndicesForTileStripes: Index[][] =
                tile.map((stripeColor: string, index: number): Index[] => {
                    const count: Count = stripeColor === 'black' ? ONCE : TWICE
                    const durationIndex: Index = to.Index(index)

                    return repeat([ durationIndex ], count)
                })

            return sequence(durationIndicesForTileStripes)
        })

        return to.Block(sequence(durationIndicesForTiles))
    }

export {
    buildSupertileRhythm,
}
