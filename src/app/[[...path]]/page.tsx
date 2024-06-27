import { CmsPage as OptimizelyCmsPage, getServerClient } from "@remkoj/optimizely-cms-nextjs";
import { getContentByPath } from '@/gql/functions';
import getFactory from '@/components/factory'

const { CmsPage, generateMetadata, generateStaticParams } = OptimizelyCmsPage.createPage(getFactory(), {
    getContentByPath: getContentByPath as OptimizelyCmsPage.GetContentByPathMethod,
    client: () => {
        const client = getServerClient()
        client.updateFlags({
            queryCache: false // We're depending on @recursive & cursors, which don't work with the queryCache
        })
        return client
    }
})

// Configure the Next.JS route handling for the pages
export const dynamic = "force-static"; // Make sure we cache pages
export const dynamicParams = true; // Allow new pages to be resolved without rebuilding the site
export const revalidate = false; // Keep the cache untill manually revalidated using the Webhook
export const fetchCache = "default-cache"; // Cache fetch results by default

// Export CMS Page
export {
    generateMetadata,
    generateStaticParams
}
export default CmsPage