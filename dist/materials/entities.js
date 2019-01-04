"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compiler_1 = require("@musical-patterns/compiler");
var parts_1 = require("./parts");
var buildEntities = function () {
    var _a = parts_1.buildParts(), supertileRhythmLowerPitchPart = _a.supertileRhythmLowerPitchPart, supertileRhythmHigherPitchPart = _a.supertileRhythmHigherPitchPart, perimeterRhythmTopRightGrainPart = _a.perimeterRhythmTopRightGrainPart, perimeterRhythmTopGrainPart = _a.perimeterRhythmTopGrainPart, perimeterRhythmTopLeftGrainPart = _a.perimeterRhythmTopLeftGrainPart, perimeterRhythmLeftGrainPart = _a.perimeterRhythmLeftGrainPart;
    var supertileRhythmLowerPitchEntity = {
        noteSpecs: supertileRhythmLowerPitchPart,
        timbreName: compiler_1.TimbreNameEnum.BASS,
    };
    var supertileRhythmHigherPitchEntity = {
        noteSpecs: supertileRhythmHigherPitchPart,
        timbreName: compiler_1.TimbreNameEnum.DYNA_EP_BRIGHT,
    };
    var perimeterRhythmTopRightGrainEntity = {
        noteSpecs: perimeterRhythmTopRightGrainPart,
        timbreName: compiler_1.TimbreNameEnum.WARM_TRIANGLE,
    };
    var perimeterRhythmTopGrainEntity = {
        noteSpecs: perimeterRhythmTopGrainPart,
        timbreName: compiler_1.TimbreNameEnum.BRASS,
    };
    var perimeterRhythmTopLeftGrainEntity = {
        noteSpecs: perimeterRhythmTopLeftGrainPart,
        timbreName: compiler_1.TimbreNameEnum.PHONEME_OOH,
    };
    var perimeterRhythmLeftGrainEntity = {
        noteSpecs: perimeterRhythmLeftGrainPart,
        timbreName: compiler_1.TimbreNameEnum.TWELVE_OP_TINES,
    };
    return [
        supertileRhythmLowerPitchEntity,
        supertileRhythmHigherPitchEntity,
        perimeterRhythmTopRightGrainEntity,
        perimeterRhythmTopGrainEntity,
        perimeterRhythmTopLeftGrainEntity,
        perimeterRhythmLeftGrainEntity,
    ];
};
exports.buildEntities = buildEntities;
//# sourceMappingURL=entities.js.map