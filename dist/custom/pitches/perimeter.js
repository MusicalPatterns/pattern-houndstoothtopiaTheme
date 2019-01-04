"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("@musical-patterns/utilities");
var constants_1 = require("../constants");
var coordinates_1 = require("../coordinates");
var constants_2 = require("./constants");
var heights = [];
var extractHeight = function (coordinates) {
    return coordinates.map(function (coordinate) {
        var height = coordinate[1];
        heights.push(height);
        return utilities_1.to.Scalar(utilities_1.apply.Offset(height, constants_1.PERIMETER_PITCH_OFFSET));
    });
};
var buildPerimeterPitches = function () {
    var houndstoothCoordinates = coordinates_1.buildHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme();
    var cycledHoundstoothCoordinates = utilities_1.cycle(houndstoothCoordinates, constants_2.CYCLE_TO_START_ON_ROOT_TIP_BEFORE_ROOT_BASE);
    var houndstoothCenterCoordinate = coordinates_1.buildHoundstoothSolidCenterOriginCoordinate();
    var houndstoothTopRightGrainCoordinates = cycledHoundstoothCoordinates.map(function (coordinate) {
        return utilities_1.rotate({
            coordinate: coordinate,
            fixedCoordinate: houndstoothCenterCoordinate,
            rotation: constants_1.NO_TURN_COUNTERCLOCKWISE,
        });
    });
    var houndstoothTopGrainCoordinates = cycledHoundstoothCoordinates.map(function (coordinate) {
        return utilities_1.rotate({
            coordinate: coordinate,
            fixedCoordinate: houndstoothCenterCoordinate,
            rotation: constants_1.EIGHTH_TURN_COUNTERCLOCKWISE,
        });
    });
    var houndstoothTopLeftGrainCoordinates = cycledHoundstoothCoordinates.map(function (coordinate) {
        return utilities_1.rotate({
            coordinate: coordinate,
            fixedCoordinate: houndstoothCenterCoordinate,
            rotation: constants_1.QUARTER_TURN_COUNTERCLOCKWISE,
        });
    });
    var houndstoothLeftGrainCoordinates = cycledHoundstoothCoordinates.map(function (coordinate) {
        return utilities_1.rotate({
            coordinate: coordinate,
            fixedCoordinate: houndstoothCenterCoordinate,
            rotation: constants_1.THREE_EIGHTHS_TURN_COUNTERCLOCKWISE,
        });
    });
    var perimeterRhythmLeftGrainPitches = extractHeight(houndstoothLeftGrainCoordinates);
    var perimeterRhythmTopGrainPitches = extractHeight(houndstoothTopGrainCoordinates);
    var perimeterRhythmTopLeftGrainPitches = extractHeight(houndstoothTopLeftGrainCoordinates);
    var perimeterRhythmTopRightGrainPitches = extractHeight(houndstoothTopRightGrainCoordinates);
    return {
        perimeterRhythmLeftGrainPitches: perimeterRhythmLeftGrainPitches,
        perimeterRhythmTopGrainPitches: perimeterRhythmTopGrainPitches,
        perimeterRhythmTopLeftGrainPitches: perimeterRhythmTopLeftGrainPitches,
        perimeterRhythmTopRightGrainPitches: perimeterRhythmTopRightGrainPitches,
    };
};
exports.buildPerimeterPitches = buildPerimeterPitches;
//# sourceMappingURL=perimeter.js.map