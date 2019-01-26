import {
    standardInitialSpec,
    StandardSpec,
    standardSpecAttributes,
    StandardSpecData,
    StandardSpecProperties,
} from '@musical-patterns/pattern'
import {
    HOUNDSTOOTHTOPIA_THEME_BASE_DURATION,
    HOUNDSTOOTHTOPIA_THEME_BASE_FREQUENCY,
    HOUNDSTOOTHTOPIA_THEME_BASE_POSITION_SCALAR,
} from './constants'

const initial: StandardSpec = {
    ...standardInitialSpec,
    [ StandardSpecProperties.BASE_DURATION ]: HOUNDSTOOTHTOPIA_THEME_BASE_DURATION,
    [ StandardSpecProperties.BASE_FREQUENCY ]: HOUNDSTOOTHTOPIA_THEME_BASE_FREQUENCY,
    [ StandardSpecProperties.BASE_POSITION_SCALAR ]: HOUNDSTOOTHTOPIA_THEME_BASE_POSITION_SCALAR,
}

const specData: StandardSpecData = {
    attributes: standardSpecAttributes,
    initial,
}

export {
    specData,
}
