"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("@musical-patterns/utilities");
var buildSupertileRhythm = function () {
    var supertile = [
        ['black', 'black'],
        ['white', 'black'],
        ['white', 'white'],
        ['black', 'white'],
    ];
    var durationIndicesForTiles = supertile.map(function (tile) {
        var durationIndicesForTileStripes = tile.map(function (stripeColor, index) {
            var count = stripeColor === 'black' ? utilities_1.ONCE : utilities_1.TWICE;
            var durationIndex = utilities_1.to.Index(index);
            return utilities_1.repeat([durationIndex], count);
        });
        return utilities_1.sequence(durationIndicesForTileStripes);
    });
    return utilities_1.to.Block(utilities_1.sequence(durationIndicesForTiles));
};
exports.buildSupertileRhythm = buildSupertileRhythm;
//# sourceMappingURL=supertile.js.map