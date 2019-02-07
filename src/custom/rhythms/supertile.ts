import { Block, Cardinal, ONCE, repeat, sequence, to, TWICE } from '@musical-patterns/utilities'

const buildSupertileRhythm: () => Block =
    (): Block => {
        const supertile: string[][] = [
            [ 'black', 'black' ],
            [ 'white', 'black' ],
            [ 'white', 'white' ],
            [ 'black', 'white' ],
        ]
        const durationIndicesForTile: number[][] = supertile.map((tile: string[]): number[] => {
            const durationIndicesForStripes: number[][] =
                tile.map((stripe: string, index: number): number[] => {
                    const count: Cardinal = stripe === 'black' ? ONCE : TWICE

                    return repeat([ index ], count)
                })

            return sequence(durationIndicesForStripes)
        })

        return to.Block(sequence(durationIndicesForTile))
    }

export {
    buildSupertileRhythm,
}
