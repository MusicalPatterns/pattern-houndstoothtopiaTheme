import { PatternId } from '../../patternId'
import { Pattern, PatternMaterial, PatternMetadata, PatternSpec } from '../../types'
import { HOUNDSTOOTHTOPIA_THEME_DURATION_SCALAR, HOUNDSTOOTHTOPIA_THEME_PITCH_SCALAR } from './constants'
import { buildEntities, buildScales } from './materials'

const houndstoothtopiaPatternMaterial: PatternMaterial = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: buildScales,
}

const houndstoothtopiaPatternMetadata: PatternMetadata = {
    description: 'music in the shape of a houndstooth, using the square roots of 2 (and 3)',
    formattedName: 'Houndstoothtopia Theme',
    musicalIdeaIllustrated: 'irrational rhythm and harmony',
}

const patternSpec: PatternSpec = {
    patternDurationScalar: HOUNDSTOOTHTOPIA_THEME_DURATION_SCALAR,
    patternPitchScalar: HOUNDSTOOTHTOPIA_THEME_PITCH_SCALAR,
}

const pattern: Pattern = {
    material: houndstoothtopiaPatternMaterial,
    metadata: houndstoothtopiaPatternMetadata,
    patternId: PatternId.HOUNDSTOOTHTOPIA_THEME,
    spec: patternSpec,
}

export {
    pattern,
    patternSpec,
}
