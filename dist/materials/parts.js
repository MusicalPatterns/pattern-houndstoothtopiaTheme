"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var notes_1 = require("./notes");
var wholes_1 = require("./wholes");
var buildParts = function () {
    var _a = wholes_1.buildContourWholes(), supertileRhythmLowerPitchContourWhole = _a.supertileRhythmLowerPitchContourWhole, supertileRhythmHigherPitchContourWhole = _a.supertileRhythmHigherPitchContourWhole, perimeterRhythmTopRightGrainContourWhole = _a.perimeterRhythmTopRightGrainContourWhole, perimeterRhythmTopGrainContourWhole = _a.perimeterRhythmTopGrainContourWhole, perimeterRhythmTopLeftGrainContourWhole = _a.perimeterRhythmTopLeftGrainContourWhole, perimeterRhythmLeftGrainContourWhole = _a.perimeterRhythmLeftGrainContourWhole;
    var supertileRhythmLowerPitchPart = supertileRhythmLowerPitchContourWhole.map(notes_1.buildSupertileNoteSpec);
    var supertileRhythmHigherPitchPart = supertileRhythmHigherPitchContourWhole.map(notes_1.buildSupertileNoteSpec);
    var perimeterRhythmTopRightGrainPart = perimeterRhythmTopRightGrainContourWhole.map(notes_1.buildPerimeterNoteSpec);
    var perimeterRhythmTopGrainPart = perimeterRhythmTopGrainContourWhole.map(notes_1.buildPerimeterNoteSpec);
    var perimeterRhythmTopLeftGrainPart = perimeterRhythmTopLeftGrainContourWhole.map(notes_1.buildPerimeterNoteSpec);
    var perimeterRhythmLeftGrainPart = perimeterRhythmLeftGrainContourWhole.map(notes_1.buildPerimeterNoteSpec);
    return {
        perimeterRhythmLeftGrainPart: perimeterRhythmLeftGrainPart,
        perimeterRhythmTopGrainPart: perimeterRhythmTopGrainPart,
        perimeterRhythmTopLeftGrainPart: perimeterRhythmTopLeftGrainPart,
        perimeterRhythmTopRightGrainPart: perimeterRhythmTopRightGrainPart,
        supertileRhythmHigherPitchPart: supertileRhythmHigherPitchPart,
        supertileRhythmLowerPitchPart: supertileRhythmLowerPitchPart,
    };
};
exports.buildParts = buildParts;
//# sourceMappingURL=parts.js.map