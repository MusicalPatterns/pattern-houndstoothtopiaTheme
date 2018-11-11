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
                [ perimeterRhythmLeftGrainPitches[ index ], duration ],
            ),
            perimeterRhythmTopGrainContour: perimeterRhythm.map((duration: Index, index: number): ContourElement =>
                [ perimeterRhythmTopGrainPitches[ index ], duration ],
            ),
            perimeterRhythmTopLeftGrainContour: perimeterRhythm.map((duration: Index, index: number): ContourElement =>
                [ perimeterRhythmTopLeftGrainPitches[ index ], duration ],
            ),
            perimeterRhythmTopRightGrainContour: perimeterRhythm.map((duration: Index, index: number): ContourElement =>
                [ perimeterRhythmTopRightGrainPitches[ index ], duration ],
            ),
            supertileRhythmHigherPitchContour: supertileRhythm.map((duration: Index): ContourElement =>
                [ HIGHER_PITCH , duration ]),
            supertileRhythmLowerPitchContour: supertileRhythm.map((duration: Index): ContourElement =>
                [ LOWER_PITCH , duration ]),
        }
    }

export {
    buildContours,
}
