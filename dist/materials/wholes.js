"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("@musical-patterns/utilities");
var nominal_1 = require("../nominal");
var constants_1 = require("./constants");
var pieces_1 = require("./pieces");
var buildContourWholes = function () {
    var _a = pieces_1.buildContourPieces(), perimeterRhythmLeftGrainContourPiece = _a.perimeterRhythmLeftGrainContourPiece, perimeterRhythmTopGrainContourPiece = _a.perimeterRhythmTopGrainContourPiece, perimeterRhythmTopLeftGrainContourPiece = _a.perimeterRhythmTopLeftGrainContourPiece, perimeterRhythmTopRightGrainContourPiece = _a.perimeterRhythmTopRightGrainContourPiece, supertileRhythmHigherPitchContourPiece = _a.supertileRhythmHigherPitchContourPiece, supertileRhythmLowerPitchContourPiece = _a.supertileRhythmLowerPitchContourPiece, perimeterRestContourPiece = _a.perimeterRestContourPiece;
    var basicGrainSet = nominal_1.to.GrainSet([0, 0, 1, 1]);
    var variedGrainSet = nominal_1.to.GrainSet(utilities_1.cycle(basicGrainSet, utilities_1.to.Offset(1)));
    var buildGrainSetSequence = function (indexToVary) {
        var grainSets = [basicGrainSet, basicGrainSet, basicGrainSet, basicGrainSet];
        grainSets[utilities_1.from.Index(indexToVary)] = variedGrainSet;
        return nominal_1.to.GrainSetSequence(utilities_1.sequence(grainSets));
    };
    var grainSetSequenceToContourWhole = function (grainSetSequence, contourPiece) {
        return nominal_1.to.HoundstoothtopiaContourWhole(utilities_1.sequence(grainSetSequence.map(function (grainSetElement) {
            return grainSetElement ? contourPiece : perimeterRestContourPiece;
        })));
    };
    var perimeterRhythmTopRightGrainContourWhole = grainSetSequenceToContourWhole(buildGrainSetSequence(constants_1.TOP_RIGHT_GRAIN_SEQUENCE_INDEX_TO_VARY), perimeterRhythmTopRightGrainContourPiece);
    var perimeterRhythmTopGrainContourWhole = grainSetSequenceToContourWhole(buildGrainSetSequence(constants_1.TOP_GRAIN_SEQUENCE_INDEX_TO_VARY), perimeterRhythmTopGrainContourPiece);
    var perimeterRhythmTopLeftGrainContourWhole = grainSetSequenceToContourWhole(buildGrainSetSequence(constants_1.TOP_LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY), perimeterRhythmTopLeftGrainContourPiece);
    var perimeterRhythmLeftGrainContourWhole = grainSetSequenceToContourWhole(buildGrainSetSequence(constants_1.LEFT_GRAIN_SEQUENCE_INDEX_TO_VARY), perimeterRhythmLeftGrainContourPiece);
    return {
        perimeterRhythmLeftGrainContourWhole: perimeterRhythmLeftGrainContourWhole,
        perimeterRhythmTopGrainContourWhole: perimeterRhythmTopGrainContourWhole,
        perimeterRhythmTopLeftGrainContourWhole: perimeterRhythmTopLeftGrainContourWhole,
        perimeterRhythmTopRightGrainContourWhole: perimeterRhythmTopRightGrainContourWhole,
        supertileRhythmHigherPitchContourWhole: nominal_1.to.HoundstoothtopiaContourWhole(utilities_1.sequence([
            supertileRhythmHigherPitchContourPiece,
        ])),
        supertileRhythmLowerPitchContourWhole: nominal_1.to.HoundstoothtopiaContourWhole(utilities_1.sequence([
            supertileRhythmLowerPitchContourPiece,
        ])),
    };
};
exports.buildContourWholes = buildContourWholes;
//# sourceMappingURL=wholes.js.map