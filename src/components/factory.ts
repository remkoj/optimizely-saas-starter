import 'server-only'
import { DefaultComponents } from '@remkoj/optimizely-cms-react/components'
import { getFactory as getBaseFactory } from "@remkoj/optimizely-cms-react/rsc";
import { cache } from 'react'

// Import all server components that should be loaded dynamically when the 
// content requires them
import components from './cms';

/**
 * Get a configured instance of the component factory, which handles the
 * resolution of the ContentType within the Optimizely CMS to a React
 * component that will render it.
 */
export const getFactory = cache(() => {
    const factory = getBaseFactory()
    // Register the default components (for rendering Rich Text)
    factory.registerAll(DefaultComponents)

    // Register the CMS Components
    factory.registerAll(components)
    return factory
})

export default getFactory