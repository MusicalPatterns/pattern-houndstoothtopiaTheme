import { Material } from '@musical-patterns/compiler'
import { Id, Metadata, Patterns, StandardPattern } from '@musical-patterns/pattern'
import { buildEntities, buildScales } from './material'
import { post } from './metadata'
import { data } from './spec'

const material: Material = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: buildScales,
}

const metadata: Metadata = {
    description: post,
    formattedName: 'Houndstoothtopia',
    mostRecentPublish: process.env.PUBLISH_DATE || '2018-02-21T07:00:00.000Z',
    musicalIdeaIllustrated: 'irrational rhythm and harmony',
    originalPublish: '2018-02-21T07:00:00.000Z',
    version: process.env.PATTERN_VERSION || 'unknown',
}

const pattern: StandardPattern = {
    data,
    id: Id.HOUNDSTOOTHTOPIA_THEME,
    material,
    metadata,
}

const patterns: Partial<Patterns> = {
    [ pattern.id ]: pattern,
}

export {
    pattern,
    patterns,
}
