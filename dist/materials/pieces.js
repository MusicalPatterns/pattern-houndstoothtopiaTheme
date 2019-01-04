"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("@musical-patterns/utilities");
var constants_1 = require("../constants");
var custom_1 = require("../custom");
var nominal_1 = require("../nominal");
var constants_2 = require("./constants");
var buildContourPieces = function () {
    var perimeterRhythm = custom_1.buildPerimeterRhythm();
    var supertileRhythm = custom_1.buildSupertileRhythm();
    var _a = custom_1.buildPerimeterPitches(), perimeterRhythmLeftGrainPitches = _a.perimeterRhythmLeftGrainPitches, perimeterRhythmTopGrainPitches = _a.perimeterRhythmTopGrainPitches, perimeterRhythmTopLeftGrainPitches = _a.perimeterRhythmTopLeftGrainPitches, perimeterRhythmTopRightGrainPitches = _a.perimeterRhythmTopRightGrainPitches;
    var perimeterRhythmLeftGrainContourPiece = nominal_1.to.HoundstoothtopiaContourPiece(perimeterRhythm.map(function (duration, index) {
        return [
            utilities_1.from.Scalar(perimeterRhythmLeftGrainPitches[index]),
            duration,
            [0, 1, 0],
        ];
    }));
    var perimeterRhythmTopGrainContourPiece = nominal_1.to.HoundstoothtopiaContourPiece(perimeterRhythm.map(function (duration, index) {
        return [
            utilities_1.from.Scalar(perimeterRhythmTopGrainPitches[index]),
            duration,
            [0, -1, 0],
        ];
    }));
    var perimeterRhythmTopLeftGrainContourPiece = nominal_1.to.HoundstoothtopiaContourPiece(perimeterRhythm.map(function (duration, index) {
        return [
            utilities_1.from.Scalar(perimeterRhythmTopLeftGrainPitches[index]),
            duration,
            [0, 0, 1],
        ];
    }));
    var perimeterRhythmTopRightGrainContourPiece = nominal_1.to.HoundstoothtopiaContourPiece(perimeterRhythm.map(function (duration, index) {
        return [
            utilities_1.from.Scalar(perimeterRhythmTopRightGrainPitches[index]),
            duration,
            [0, 0, -1],
        ];
    }));
    var supertileRhythmHigherPitchContourPiece = nominal_1.to.HoundstoothtopiaContourPiece(supertileRhythm.map(function (duration) {
        return [utilities_1.from.Scalar(constants_2.HIGHER_SUPERTILE_PITCH), duration, [1, 0, 0]];
    }));
    var supertileRhythmLowerPitchContourPiece = nominal_1.to.HoundstoothtopiaContourPiece(supertileRhythm.map(function (duration) {
        return [utilities_1.from.Scalar(constants_2.LOWER_SUPERTILE_PITCH), duration, [-1, 0, 0]];
    }));
    var perimeterRestContourPiece = nominal_1.to.HoundstoothtopiaContourPiece(perimeterRhythm.map(function (duration) {
        return [utilities_1.from.Scalar(constants_1.PITCH_SCALAR_INDICATING_REST), duration, [0, 0, 0]];
    }));
    var supertileRestContourPiece = nominal_1.to.HoundstoothtopiaContourPiece(supertileRhythm.map(function (duration) {
        return [utilities_1.from.Scalar(constants_1.PITCH_SCALAR_INDICATING_REST), duration, [0, 0, 0]];
    }));
    return {
        perimeterRestContourPiece: perimeterRestContourPiece,
        perimeterRhythmLeftGrainContourPiece: perimeterRhythmLeftGrainContourPiece,
        perimeterRhythmTopGrainContourPiece: perimeterRhythmTopGrainContourPiece,
        perimeterRhythmTopLeftGrainContourPiece: perimeterRhythmTopLeftGrainContourPiece,
        perimeterRhythmTopRightGrainContourPiece: perimeterRhythmTopRightGrainContourPiece,
        supertileRestContourPiece: supertileRestContourPiece,
        supertileRhythmHigherPitchContourPiece: supertileRhythmHigherPitchContourPiece,
        supertileRhythmLowerPitchContourPiece: supertileRhythmLowerPitchContourPiece,
    };
};
exports.buildContourPieces = buildContourPieces;
//# sourceMappingURL=pieces.js.map