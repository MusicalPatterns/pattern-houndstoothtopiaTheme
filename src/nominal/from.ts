// tslint:disable:variable-name no-any

import { Length, Radian } from './types'

const Length: (length: Length) => number =
    (length: Length): number => length as any

const Radian: (radian: Radian) => number =
    (radian: Radian): number => radian as any

export {
    Length,
    Radian,
}
