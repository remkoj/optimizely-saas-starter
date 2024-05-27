import { type ComponentTypeDictionary } from "@remkoj/optimizely-cms-react";

// Load all components available for a given base type
import pages from './page'
import components from "./component";

// Apply the needed prefix to these components, so they can be resolved
// correctly
prefixDictionaryEntries(pages, 'Page')
prefixDictionaryEntries(components, 'Component')

/**
 * A list of all components, combined from the individual base types
 */
export const cmsComponents = [
    ...pages,
    ...components
]

export default cmsComponents

/**
 * Modify the ComponentTypeDictionary in place
 * 
 * @param       list        The ComponentTypeDictionary to modify
 * @param       prefix      The prefix to add to each of the type definitions in the list
 * @returns     The modified list
 */
function prefixDictionaryEntries(list: ComponentTypeDictionary, prefix: string) : ComponentTypeDictionary
{
    list.forEach((component, idx, dictionary) => {
        dictionary[idx].type = typeof component.type == 'string' ? prefix + "/" + component.type : [ prefix, ...component.type ]
    })
    return list
}