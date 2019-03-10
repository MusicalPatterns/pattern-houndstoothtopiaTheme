import {
    standardAttributes,
    StandardData,
    standardInitialSpec,
    StandardProperty,
    StandardSpec,
} from '@musical-patterns/pattern'
import {
    HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_DURATION,
    HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_FREQUENCY,
    HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_POSITION_SCALAR,
} from './constants'

const initial: StandardSpec = {
    ...standardInitialSpec,
    [ StandardProperty.BASE_DURATION ]: HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_DURATION,
    [ StandardProperty.BASE_FREQUENCY ]: HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_FREQUENCY,
    [ StandardProperty.BASE_POSITION_SCALAR ]: HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_POSITION_SCALAR,
}

const data: StandardData = {
    attributes: standardAttributes,
    initial,
}

export {
    data,
}
