import {
    Spec,
    standardConfigurations,
    standardInitialSpecs,
    StandardSpec,
    StandardSpecs,
} from '@musical-patterns/spec'
import {
    HOUNDSTOOTHTOPIA_THEME_INITIAL_HZ_PHYSICALIZATION,
    HOUNDSTOOTHTOPIA_THEME_INITIAL_METERS_PHYSICALIZATION,
    HOUNDSTOOTHTOPIA_THEME_INITIAL_MS_PHYSICALIZATION,
} from './constants'

const initialSpecs: StandardSpecs = {
    ...standardInitialSpecs,
    [ StandardSpec.MS_PHYSICALIZATION ]: HOUNDSTOOTHTOPIA_THEME_INITIAL_MS_PHYSICALIZATION,
    [ StandardSpec.HZ_PHYSICALIZATION ]: HOUNDSTOOTHTOPIA_THEME_INITIAL_HZ_PHYSICALIZATION,
    [ StandardSpec.METERS_PHYSICALIZATION ]: HOUNDSTOOTHTOPIA_THEME_INITIAL_METERS_PHYSICALIZATION,
}

const spec: Spec<StandardSpecs> = {
    configurations: standardConfigurations,
    initialSpecs,
}

export {
    spec,
}
