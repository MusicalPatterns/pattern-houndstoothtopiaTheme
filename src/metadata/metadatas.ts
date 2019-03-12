import { Metadata } from '@musical-patterns/pattern'
import { post } from './posts'

const metadata: Metadata = {
    description: post,
    formattedName: 'Houndstoothtopia',
    mostRecentPublish: process.env.PUBLISH_DATE || '2018-02-21T07:00:00.000Z',
    musicalIdeaIllustrated: 'irrational rhythm and harmony',
    originalPublish: '2018-02-21T07:00:00.000Z',
    version: process.env.PATTERN_VERSION || 'unknown',
}

export {
    metadata,
}
