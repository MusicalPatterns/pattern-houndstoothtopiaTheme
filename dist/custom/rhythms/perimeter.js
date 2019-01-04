"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("@musical-patterns/utilities");
var constants_1 = require("../../constants");
var coordinates_1 = require("../coordinates");
var buildPerimeterRhythm = function () {
    var houndstoothCoordinates = coordinates_1.buildHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme();
    var houndstoothPerimeterSegmentLengths = houndstoothCoordinates.map(function (coordinate, index) {
        var nextIndex = utilities_1.wrapWithin(utilities_1.apply.Offset(index, utilities_1.to.Offset(1)), houndstoothCoordinates.length);
        var nextCoordinate = houndstoothCoordinates[nextIndex];
        return utilities_1.distanceBetween(utilities_1.to.Coordinate(coordinate), utilities_1.to.Coordinate(nextCoordinate));
    });
    return utilities_1.to.Block(houndstoothPerimeterSegmentLengths.map(function (length) {
        return utilities_1.to.Index(utilities_1.apply.Base(utilities_1.from.Length(length), constants_1.SQRT_TWO_AS_BASE));
    }));
};
exports.buildPerimeterRhythm = buildPerimeterRhythm;
//# sourceMappingURL=perimeter.js.map