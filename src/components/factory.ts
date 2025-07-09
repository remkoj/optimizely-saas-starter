import 'server-only'
import { getFactory as getBaseFactory, RichTextComponentDictionary } from "@remkoj/optimizely-cms-react/rsc";

// Import all server components that should be loaded dynamically when the 
// content requires them
import components from './cms';

// Build the factory statically, so it doesn't need to be rebuild every time
// it is needed.
export const factory = getBaseFactory()
// Register the default components (for rendering Rich Text)
factory.registerAll(RichTextComponentDictionary)
// Register the CMS Components
factory.registerAll(components)

export default factory