import { Frequency, Scalar } from '@musical-patterns/utilities'

interface PerimeterPitches {
    leftGrain: Array<Scalar<Frequency>>
    topGrain: Array<Scalar<Frequency>>
    topLeftGrain: Array<Scalar<Frequency>>
    topRightGrain: Array<Scalar<Frequency>>
}

export {
    PerimeterPitches,
}
