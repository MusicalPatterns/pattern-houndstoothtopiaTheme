import { Material } from '@musical-patterns/compiler'
import { buildPatterns, Id, Metadata, PatternFor, Patterns } from '@musical-patterns/pattern'
import { buildEntities, buildScales } from './materials'
import { post } from './metadata'
import { specData } from './specs'
import { HoundstoothtopiaThemeSpec } from './types'

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
}

const pattern: PatternFor<HoundstoothtopiaThemeSpec> = {
    id: Id.HOUNDSTOOTHTOPIA_THEME,
    material,
    metadata,
    specData,
}

const patterns: Patterns = buildPatterns({
    [ pattern.id ]: pattern,
})

export {
    pattern,
    patterns,
}
