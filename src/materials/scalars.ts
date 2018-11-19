import { apply, from, Scalar, to } from '@musical-patterns/utilities'
import { buildStandardScales, DictionaryOf } from '../../../../src'
import { SQRT_TWO_AS_BASE } from '../constants'

const buildScalars: () => DictionaryOf<Scalar[]> =
    (): DictionaryOf<Scalar[]> => {
        const { harmonicSeriesScale } = buildStandardScales()

        const rootOfTwoScalars: Scalar[] = harmonicSeriesScale.scalars.map(
            (n: Scalar): Scalar => to.Scalar(apply.Power(from.Base(SQRT_TWO_AS_BASE), to.Power(from.Scalar(n) - 1))),
        )

        return {
            rootOfTwoScalars,
        }
    }

export {
    buildScalars,
}
