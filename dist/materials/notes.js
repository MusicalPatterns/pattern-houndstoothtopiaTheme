"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var pattern_1 = require("@musical-patterns/pattern");
var utilities_1 = require("@musical-patterns/utilities");
var constants_1 = require("../constants");
var constants_2 = require("./constants");
var unpackHoundstoothtopiaContourElement = function (contourElement) { return ({
    duration: utilities_1.to.Index(contourElement[1]),
    pitch: utilities_1.to.Scalar(contourElement[0]),
    // tslint:disable-next-line:no-magic-numbers
    position: utilities_1.to.Coordinate(contourElement[2]),
}); };
var buildHoundstoothtopiaNoteSpec = function (contourElement) {
    var _a = unpackHoundstoothtopiaContourElement(contourElement), pitch = _a.pitch, duration = _a.duration, position = _a.position;
    return {
        durationSpec: {
            index: duration,
            scaleIndex: pattern_1.DEFAULT_DURATIONS_SCALE_INDEX,
        },
        gainSpec: {
            scalar: pitch === constants_1.PITCH_SCALAR_INDICATING_REST ? utilities_1.to.Scalar(0) : undefined,
        },
        pitchSpec: {
            scalar: pitch,
            scaleIndex: pattern_1.DEFAULT_PITCH_SCALE_INDEX,
        },
        positionSpec: position.map(function (positionElement, index) {
            return ({
                scalar: utilities_1.to.Scalar(utilities_1.from.CoordinateElement(positionElement)),
                scaleIndex: utilities_1.apply.Offset(constants_2.HOUNDSTOOTHTOPIA_THEME_X_POSITION_SCALE_INDEX, utilities_1.to.Offset(index)),
            });
        }),
        sustainSpec: {
            scalar: constants_2.HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR,
            scaleIndex: pattern_1.DEFAULT_DURATIONS_SCALE_INDEX,
        },
    };
};
var buildSupertileNoteSpec = function (contourElement) {
    var pitch = unpackHoundstoothtopiaContourElement(contourElement).pitch;
    return __assign({}, buildHoundstoothtopiaNoteSpec(contourElement), { gainSpec: {
            scalar: pitch === constants_1.PITCH_SCALAR_INDICATING_REST ? utilities_1.to.Scalar(0) : utilities_1.HALF,
        } });
};
exports.buildSupertileNoteSpec = buildSupertileNoteSpec;
var buildPerimeterNoteSpec = function (contourElement) { return (__assign({}, buildHoundstoothtopiaNoteSpec(contourElement), { sustainSpec: {
        scalar: utilities_1.apply.Scalar(constants_2.HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR, utilities_1.to.Scalar(utilities_1.from.Base(constants_1.SQRT_TWO_AS_BASE))),
        scaleIndex: pattern_1.DEFAULT_DURATIONS_SCALE_INDEX,
    } })); };
exports.buildPerimeterNoteSpec = buildPerimeterNoteSpec;
//# sourceMappingURL=notes.js.map