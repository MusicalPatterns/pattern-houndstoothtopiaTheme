"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pattern_1 = require("@musical-patterns/pattern");
var utilities_1 = require("@musical-patterns/utilities");
var scalars_1 = require("./scalars");
var buildScales = function (patternSpec) {
    var nonScale = pattern_1.buildStandardScales().nonScale;
    var rootOfTwoScalars = scalars_1.buildScalars().rootOfTwoScalars;
    var gainScale = nonScale;
    var durationsScale = {
        offset: patternSpec.patternDurationOffset,
        scalar: patternSpec.patternDurationScalar,
        scalars: rootOfTwoScalars,
    };
    var pitchesScale = {
        offset: patternSpec.patternPitchOffset,
        scalar: patternSpec.patternPitchScalar,
        scalars: nonScale.scalars,
    };
    var xPositionsScale = {
        offset: utilities_1.apply.Index(patternSpec.patternPositionOffset, utilities_1.X_AXIS),
        scalar: patternSpec.patternPositionScalar,
        scalars: nonScale.scalars,
    };
    var yPositionsScale = {
        offset: utilities_1.apply.Index(patternSpec.patternPositionOffset, utilities_1.Y_AXIS),
        scalar: patternSpec.patternPositionScalar,
        scalars: nonScale.scalars,
    };
    var zPositionsScale = {
        offset: utilities_1.apply.Index(patternSpec.patternPositionOffset, utilities_1.Z_AXIS),
        scalar: patternSpec.patternPositionScalar,
        scalars: nonScale.scalars,
    };
    return [
        gainScale,
        durationsScale,
        pitchesScale,
        xPositionsScale,
        yPositionsScale,
        zPositionsScale,
    ];
};
exports.buildScales = buildScales;
//# sourceMappingURL=scales.js.map