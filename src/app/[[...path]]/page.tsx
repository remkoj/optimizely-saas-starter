import { CmsPage as OptimizelyCmsPage, getServerClient } from "@remkoj/optimizely-cms-nextjs";
import { getContentByPath } from "@/gql/functions";
import getFactory from "@/components/factory";

// Deconstruct the created page in the constants Next.js needs
const { CmsPage, generateMetadata, generateStaticParams } =
  
  OptimizelyCmsPage.createPage( // Create the page handler
    getFactory(), { // Using the component factory
      getContentByPath: getContentByPath, // The compile 'getContentByPath' function that has all the fragments merged
      client: getServerClient, // And the fully configured GraphQL Client
    }
  );

// Configure the Next.JS route handling for the pages
export const dynamic = "force-static"; // Make sure we cache pages
export const dynamicParams = true; // Allow new pages to be resolved without rebuilding the site
export const revalidate = false; // Keep the cache untill manually revalidated using the Webhook
export const fetchCache = "default-cache"; // Cache fetch results by default

// Export CMS Page
export { generateMetadata, generateStaticParams };
export default CmsPage;
