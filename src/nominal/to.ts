// tslint:disable:variable-name no-any

import { Contour, ContourElement } from './types'

const Contour: (contour: Array<number[] | ContourElement>) => Contour =
    (contour: Array<number[] | ContourElement>): Contour =>
        contour.map((contourElement: number[] | ContourElement): ContourElement => contourElement as any) as any

export {
    Contour,
}
