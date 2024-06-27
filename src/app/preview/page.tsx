import { OnPageEdit } from "@remkoj/optimizely-cms-nextjs";
import getFactory from '@/components/factory'
import { getAuthorizedServerClient } from '@remkoj/optimizely-cms-nextjs'
import { getContentById } from "@/gql/functions";

const Page = OnPageEdit.createEditPageComponent(getFactory(), {
    // Casting is needed due to the locale being an enum in the generated types and a string in the generic query used by the loader
    loader: getContentById as OnPageEdit.Types.GetContentByIdMethod,
    clientFactory: (token?: string) => {
        const client = getAuthorizedServerClient(token)
        client.updateFlags({ queryCache: false, cache: false })
        return client
    }
})

// Configure the Next.JS route handling for the pages
export const fetchCache = "force-no-store";     // No caching of fetch results
export const dynamic = "force-dynamic";         // Force SSR
export const dynamicParams = true;              // Allow new pages to be resolved without rebuilding the site
export const revalidate = 0;                    // Set page cache validity to 0 miliseconds

// Export CMS Page, Preview mode
export default Page