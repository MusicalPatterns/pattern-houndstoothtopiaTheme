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
    HOUNDSTOOTHTOPIA_THEME_INITIAL_BASIS_POSITION,
} from './constants'

const initialSpecs: StandardSpecs = {
    ...standardInitialSpecs,
    [ StandardSpec.BASIS_DURATION ]: HOUNDSTOOTHTOPIA_THEME_INITIAL_BASIS_DURATION,
    [ StandardSpec.BASIS_FREQUENCY ]: HOUNDSTOOTHTOPIA_THEME_INITIAL_BASIS_FREQUENCY,
    [ StandardSpec.BASIS_POSITION ]: HOUNDSTOOTHTOPIA_THEME_INITIAL_BASIS_POSITION,
}

const spec: Spec<StandardSpecs> = {
    configurations: standardConfigurations,
    initialSpecs,
}

export {
    spec,
}
