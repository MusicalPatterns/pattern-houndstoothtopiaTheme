import { PatternMaterial } from '@musical-patterns/compiler'
import { PatternMetadata } from '@musical-patterns/pattern'
import { buildPatterns, Pattern, PatternId, Patterns } from '@musical-patterns/registry'
import { to } from '@musical-patterns/utilities'
import {
    HOUNDSTOOTHTOPIA_THEME_DURATION_SCALAR,
    HOUNDSTOOTHTOPIA_THEME_PITCH_SCALAR,
    HOUNDSTOOTHTOPIA_THEME_POSITION_OFFSET,
    HOUNDSTOOTHTOPIA_THEME_POSITION_SCALAR,
} from './constants'
import { buildEntities, buildScales, HoundstoothtopiaThemePatternSpec } from './materials'

const material: PatternMaterial = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: buildScales,
}

const metadata: PatternMetadata = {
    description: 'music in the shape of a houndstooth, using the square root of 2 extensively',
    formattedName: 'Houndstoothtopia',
    musicalIdeaIllustrated: 'irrational rhythm and harmony',
}

const spec: HoundstoothtopiaThemePatternSpec = {
    patternDurationOffset: to.Offset(0),
    patternDurationScalar: HOUNDSTOOTHTOPIA_THEME_DURATION_SCALAR,
    patternPitchOffset: to.Offset(0),
    patternPitchScalar: HOUNDSTOOTHTOPIA_THEME_PITCH_SCALAR,
    patternPositionOffset: HOUNDSTOOTHTOPIA_THEME_POSITION_OFFSET,
    patternPositionScalar: HOUNDSTOOTHTOPIA_THEME_POSITION_SCALAR,
}

const pattern: Pattern = {
    material,
    metadata,
    patternId: PatternId.HOUNDSTOOTHTOPIA_THEME,
    spec,
}

const patterns: Patterns = buildPatterns({
    [ pattern.patternId ]: pattern,
})

export {
    pattern,
    patterns,
    spec,
}
