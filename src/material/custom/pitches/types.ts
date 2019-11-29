import { Frequency, Scalar } from '@musical-patterns/utilities'

interface PerimeterPitches {
    leftGrain: Array<Scalar<Frequency>>
    topGrain: Array<Scalar<Frequency>>
    topLeftGrain: Array<Scalar<Frequency>>
    topRightGrain: Array<Scalar<Frequency>>
    rightGrain: Array<Scalar<Frequency>>
    bottomRightGrain: Array<Scalar<Frequency>>
    bottomGrain: Array<Scalar<Frequency>>
    bottomLeftGrain: Array<Scalar<Frequency>>
}

export {
    PerimeterPitches,
}
