import { createPage } from "@remkoj/optimizely-cms-nextjs/page";
import { getContentByPath } from "@/gql/functions";
import getFactory from "@/components/factory";

// Deconstruct the created page in the constants Next.js needs
const { CmsPage, generateMetadata, generateStaticParams } =
  createPage(getFactory(), {
    getContentByPath
  });

// Configure the Next.JS route handling for the pages
export const dynamic = "error"; // Make sure we cache pages, if one component is not static none of the routes will be static
export const dynamicParams = true; // Allow new pages to be resolved without rebuilding the site
export const revalidate = false; // Keep the cache untill manually revalidated using the Webhook
export const fetchCache = "default-cache"; // Cache fetch results by default

// Export CMS Page
export { generateMetadata, generateStaticParams };
export default CmsPage;
