import { CmsPage as OptimizelyCmsPage } from '@remkoj/optimizely-cms-nextjs'
import getFactory from '@/components/factory'

const { CmsPage, generateMetadata, generateStaticParams } = OptimizelyCmsPage.createPage(getFactory(), {})

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