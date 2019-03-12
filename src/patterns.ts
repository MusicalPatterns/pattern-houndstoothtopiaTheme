import { Id, Patterns, StandardPattern } from '@musical-patterns/pattern'
import { material } from './material'
import { metadata } from './metadata'
import { spec } from './spec'

const pattern: StandardPattern = {
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
