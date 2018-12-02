import { PatternMaterial } from '@musical-patterns/compiler'
import { Pattern, PatternId, PatternMetadata } from '@musical-patterns/pattern'
import {
    HOUNDSTOOTHTOPIA_THEME_DURATION_SCALAR,
    HOUNDSTOOTHTOPIA_THEME_PITCH_SCALAR,
    HOUNDSTOOTHTOPIA_THEME_POSITION_OFFSET,
    HOUNDSTOOTHTOPIA_THEME_POSITION_SCALAR,
} from './constants'
import { buildEntities, buildScales, HoundstoothtopiaThemePatternSpec } from './materials'

const houndstoothtopiaPatternMaterial: PatternMaterial = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: buildScales,
}

const houndstoothtopiaPatternMetadata: PatternMetadata = {
    description: 'music in the shape of a houndstooth, using the square root of 2 extensively',
    formattedName: 'Houndstoothtopia Theme',
    musicalIdeaIllustrated: 'irrational rhythm and harmony',
}

const patternSpec: HoundstoothtopiaThemePatternSpec = {
    patternDurationScalar: HOUNDSTOOTHTOPIA_THEME_DURATION_SCALAR,
    patternPitchScalar: HOUNDSTOOTHTOPIA_THEME_PITCH_SCALAR,
    patternPositionOffset: HOUNDSTOOTHTOPIA_THEME_POSITION_OFFSET,
    patternPositionScalar: HOUNDSTOOTHTOPIA_THEME_POSITION_SCALAR,
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
