import {
    Spec,
    standardConfigurations,
    standardInitialSpecs,
    StandardSpec,
    StandardSpecs,
} from '@musical-patterns/pattern'
import {
    HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_DURATION,
    HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_FREQUENCY,
    HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_POSITION_SCALAR,
} from './constants'

const initialSpecs: StandardSpecs = {
    ...standardInitialSpecs,
    [ StandardSpec.BASE_DURATION ]: HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_DURATION,
    [ StandardSpec.BASE_FREQUENCY ]: HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_FREQUENCY,
    [ StandardSpec.BASE_POSITION_SCALAR ]: HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_POSITION_SCALAR,
}

const spec: Spec<StandardSpecs> = {
    configurations: standardConfigurations,
    initialSpecs,
}

export {
    spec,
}
