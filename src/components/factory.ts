import 'server-only'
import { type ComponentFactory, type ComponentTypeDictionary, DefaultComponentFactory, RichTextComponentDictionary } from '@remkoj/optimizely-cms-react/rsc'
import cmsComponents from './cms'

// Create the base factory
const baseFactory = new DefaultComponentFactory()
baseFactory.registerAll(RichTextComponentDictionary)
baseFactory.registerAll(cmsComponents)

// Normalize component type by removing Item prefixes and duplicates
function normalizeComponentType(type: string | string[]): string | string[] {
    if (typeof type === 'string') {
        // Remove "Item/" prefix if present
        let normalized = type.replace(/^Item\//, '')
        
        // Handle patterns like "Component/Item/Component/..." -> "Component/..."
        // Remove "Item" segments and duplicate prefixes
        const parts = normalized.split('/')
        const result: string[] = []
        let lastPart = ''
        
        for (const part of parts) {
            // Skip "Item" segments
            if (part === 'Item') continue
            
            // Skip duplicate consecutive prefixes (e.g., "Component/Component" -> "Component")
            if (part === lastPart && (part === 'Component' || part === 'Page' || part === 'Section' || part === 'Media' || part === 'Experience' || part === 'Nodes')) {
                continue
            }
            
            result.push(part)
            lastPart = part
        }
        
        return result.join('/')
    } else {
        // For array types, filter out "Item" and duplicates
        const result: string[] = []
        let lastPart = ''
        
        for (const part of type) {
            if (part === 'Item') continue
            if (part === lastPart && (part === 'Component' || part === 'Page' || part === 'Section' || part === 'Media' || part === 'Experience' || part === 'Nodes')) {
                continue
            }
            result.push(part)
            lastPart = part
        }
        
        return result
    }
}

// Create a wrapper factory that normalizes component types before lookup
class NormalizingComponentFactory implements ComponentFactory {
    private base: ComponentFactory
    
    constructor(base: ComponentFactory) {
        this.base = base
    }
    
    register(type: string | string[], component: any): void {
        this.base.register(type, component)
    }
    
    registerAll(components: any[]): void {
        this.base.registerAll(components)
    }
    
    has(type: string | string[]): boolean {
        const normalized = normalizeComponentType(type)
        return this.base.has(normalized)
    }
    
    resolve(type: string | string[]): any {
        const normalized = normalizeComponentType(type)
        return this.base.resolve(normalized)
    }
    
    extract(): ComponentTypeDictionary {
        return this.base.extract()
    }
}

// Create the normalized factory
export const factory : ComponentFactory = new NormalizingComponentFactory(baseFactory)

/**
 * Get the cached version of the Component Factory to use, this ensure that the
 * minimum number of instances of the factory will be created.
 */
export const setupFactory = () => factory;

export default setupFactory