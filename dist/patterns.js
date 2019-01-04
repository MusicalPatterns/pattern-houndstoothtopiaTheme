"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var registry_1 = require("@musical-patterns/registry");
var utilities_1 = require("@musical-patterns/utilities");
var constants_1 = require("./constants");
var materials_1 = require("./materials");
var material = {
    buildEntitiesFunction: materials_1.buildEntities,
    buildScalesFunction: materials_1.buildScales,
};
var metadata = {
    description: 'music in the shape of a houndstooth, using the square root of 2 extensively',
    formattedName: 'Houndstoothtopia Theme',
    musicalIdeaIllustrated: 'irrational rhythm and harmony',
};
var spec = {
    patternDurationOffset: utilities_1.to.Offset(0),
    patternDurationScalar: constants_1.HOUNDSTOOTHTOPIA_THEME_DURATION_SCALAR,
    patternPitchOffset: utilities_1.to.Offset(0),
    patternPitchScalar: constants_1.HOUNDSTOOTHTOPIA_THEME_PITCH_SCALAR,
    patternPositionOffset: constants_1.HOUNDSTOOTHTOPIA_THEME_POSITION_OFFSET,
    patternPositionScalar: constants_1.HOUNDSTOOTHTOPIA_THEME_POSITION_SCALAR,
};
exports.spec = spec;
var pattern = {
    material: material,
    metadata: metadata,
    patternId: registry_1.PatternId.HOUNDSTOOTHTOPIA_THEME,
    spec: spec,
};
exports.pattern = pattern;
//# sourceMappingURL=patterns.js.map