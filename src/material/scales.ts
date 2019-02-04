import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import {
    buildStandardScales,
    StandardSpec,
    StandardSpecProperties,
} from '@musical-patterns/pattern'
import { apply, from, Index, to, X_AXIS, Y_AXIS, Z_AXIS } from '@musical-patterns/utilities'
import { buildScalars } from './scalars'

const buildScaleForDimension: (spec: StandardSpec, nonScale: Scale, index: Index) => Scale =
    (spec: StandardSpec, nonScale: Scale, index: Index): Scale => ({
        offset: apply.Index(spec[ StandardSpecProperties.BASE_POSITION ] || [ 0, 0, 0 ].map(to.Offset), index),
        scalar: spec.basePositionScalar,
        scalars: nonScale.scalars,
    })

const buildScales: BuildScalesFunction =
    (spec: StandardSpec): Scale[] => {
        const { nonScale } = buildStandardScales()
        const {
            rootOfTwoScalars,
        } = buildScalars()

        const gainScale: Scale = nonScale
        const durationsScale: Scale = {
            offset: spec[ StandardSpecProperties.DURATION_OFFSET ],
            scalar: to.Scalar(from.Milliseconds(spec[ StandardSpecProperties.BASE_DURATION ] || to.Milliseconds(1))),
            scalars: rootOfTwoScalars,
        }
        const pitchesScale: Scale = {
            offset: spec[ StandardSpecProperties.FREQUENCY_OFFSET ],
            scalar: to.Scalar(from.Frequency(spec[ StandardSpecProperties.BASE_FREQUENCY ] || to.Frequency(1))),
            scalars: nonScale.scalars,
        }
        const xPositionsScale: Scale = buildScaleForDimension(spec, nonScale, X_AXIS)
        const yPositionsScale: Scale = buildScaleForDimension(spec, nonScale, Y_AXIS)
        const zPositionsScale: Scale = buildScaleForDimension(spec, nonScale, Z_AXIS)

        return [
            gainScale,
            durationsScale,
            pitchesScale,
            xPositionsScale,
            yPositionsScale,
            zPositionsScale,
        ]
    }

export {
    buildScales,
}
