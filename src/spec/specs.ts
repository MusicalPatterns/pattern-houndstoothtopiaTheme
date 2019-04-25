import {
    Spec,
    standardConfigurations,
    standardInitialSpecs,
    StandardSpec,
    StandardSpecs,
} from '@musical-patterns/spec'
import {
    HOUNDSTOOTHTOPIA_THEME_INITIAL_BASIS_DURATION,
    HOUNDSTOOTHTOPIA_THEME_INITIAL_BASIS_FREQUENCY,
    HOUNDSTOOTHTOPIA_THEME_INITIAL_BASIS_POSITION_SCALAR,
} from './constants'

const initialSpecs: StandardSpecs = {
    ...standardInitialSpecs,
    [ StandardSpec.BASIS_DURATION ]: HOUNDSTOOTHTOPIA_THEME_INITIAL_BASIS_DURATION,
    [ StandardSpec.BASIS_FREQUENCY ]: HOUNDSTOOTHTOPIA_THEME_INITIAL_BASIS_FREQUENCY,
    [ StandardSpec.BASIS_POSITION_SCALAR ]: HOUNDSTOOTHTOPIA_THEME_INITIAL_BASIS_POSITION_SCALAR,
}

const spec: Spec<StandardSpecs> = {
    configurations: standardConfigurations,
    initialSpecs,
}

export {
    spec,
}
