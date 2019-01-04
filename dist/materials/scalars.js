"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pattern_1 = require("@musical-patterns/pattern");
var utilities_1 = require("@musical-patterns/utilities");
var constants_1 = require("../constants");
var buildScalars = function () {
    var harmonicSeriesScale = pattern_1.buildStandardScales().harmonicSeriesScale;
    var harmonicSeriesScalars = harmonicSeriesScale.scalars || [];
    var rootOfTwoScalars = harmonicSeriesScalars.map(function (n) { return utilities_1.to.Scalar(utilities_1.apply.Power(utilities_1.from.Base(constants_1.SQRT_TWO_AS_BASE), utilities_1.to.Power(utilities_1.from.Scalar(n) - 1))); });
    return {
        rootOfTwoScalars: rootOfTwoScalars,
    };
};
exports.buildScalars = buildScalars;
//# sourceMappingURL=scalars.js.map