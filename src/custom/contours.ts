import { DictionaryOf, Index } from '../../../../src'
import { buildBlocks } from '../materials'
import { Contour, ContourElement } from '../nominal'
import { HIGHER_PITCH, LOWER_PITCH } from './constants'

const buildContours: () => DictionaryOf<Contour> =
    (): DictionaryOf<Contour> => {
        const {
            perimeterRhythm,
            supertileRhythm,
            perimeterRhythmLeftGrainPitches,
            perimeterRhythmTopGrainPitches,
            perimeterRhythmTopLeftGrainPitches,
            perimeterRhythmTopRightGrainPitches,
        } = buildBlocks()

        return {
            perimeterRhythmLeftGrainContour: perimeterRhythm.map((duration: Index, index: number): ContourElement =>
                [ duration, perimeterRhythmLeftGrainPitches[ index ] ],
            ),
            perimeterRhythmTopGrainContour: perimeterRhythm.map((duration: Index, index: number): ContourElement =>
                [ duration, perimeterRhythmTopGrainPitches[ index ] ],
            ),
            perimeterRhythmTopLeftGrainContour: perimeterRhythm.map((duration: Index, index: number): ContourElement =>
                [ duration, perimeterRhythmTopLeftGrainPitches[ index ] ],
            ),
            perimeterRhythmTopRightGrainContour: perimeterRhythm.map((duration: Index, index: number): ContourElement =>
                [ duration, perimeterRhythmTopRightGrainPitches[ index ] ],
            ),
            supertileRhythmHigherPitchContour: supertileRhythm.map((duration: Index): ContourElement =>
                [ duration, HIGHER_PITCH ]),
            supertileRhythmLowerPitchContour: supertileRhythm.map((duration: Index): ContourElement =>
                [ duration, LOWER_PITCH ]),
        }
    }

export {
    buildContours,
}
