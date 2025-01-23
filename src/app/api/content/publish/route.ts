import createPublishApi from '@remkoj/optimizely-cms-nextjs/publish'

const publishApi = createPublishApi({ 
    optimizePublish: true, //Only publish the actual content item
    additionalPaths: ['/sitemap.xml','/robots.txt'] // Always ensure that the sitemap.xml & robots.txt are up-to-date
})

// Configure the Next.JS route handling for the pages
export const dynamic = 'force-dynamic'      // Make sure all API-Requests are executed
export const dynamicParams = true           // Make sure all matching routes are always executed
export const revalidate = 0                 // Don't cache
export const fetchCache = 'force-no-store'  // Don't cache
export const runtime = 'nodejs'             // Run at the edge

// Export API Handler
export const GET = publishApi
export const POST = publishApi