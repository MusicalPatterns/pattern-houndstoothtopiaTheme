import { Id } from '@musical-patterns/id'
import { Pattern, Patterns } from '@musical-patterns/pattern'
import { material } from './material'
import { metadata } from './metadata'
import { spec } from './spec'

const pattern: Pattern = {
    id: Id.HOUNDSTOOTHTOPIA_THEME,
    material,
    metadata,
    spec,
}

const patterns: Partial<Patterns> = {
    [ pattern.id ]: pattern,
}

export {
    pattern,
    patterns,
}
