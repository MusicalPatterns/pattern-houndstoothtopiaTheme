"use strict";
// tslint:disable:no-magic-numbers
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("@musical-patterns/utilities");
var houndstoothOutline_1 = require("./houndstoothOutline");
var buildHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme = function () {
    return utilities_1.cycle(houndstoothOutline_1.default, utilities_1.to.Offset(1));
};
exports.buildHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme = buildHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme;
var buildHoundstoothSolidCenterOriginCoordinate = function () {
    return [0, 0];
};
exports.buildHoundstoothSolidCenterOriginCoordinate = buildHoundstoothSolidCenterOriginCoordinate;
//# sourceMappingURL=coordinates.js.map