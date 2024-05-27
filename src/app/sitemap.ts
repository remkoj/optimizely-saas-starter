import type { MetadataRoute } from "next"
import { RouteResolver } from "@remkoj/optimizely-graph-client"

export default async function sitemap() : Promise<MetadataRoute.Sitemap>
{
    const domain = process.env.NEXT_PUBLIC_SITE_DOMAIN
    const scheme = domain && (domain.startsWith("localhost") || domain.endsWith(".local")) ? 'http' : 'https'
    const host = domain ? new URL(`${scheme}://${domain}`) : undefined
    const resolver = new RouteResolver()
    const routes = await resolver.getRoutes();
    return routes.map(r => { return {
        url: new URL(r.url.pathname, host ?? r.url).href,
        lastModified: r.changed ?? new Date(),
        changeFrequency: "daily",
        priority: 1
    }})
}

export const revalidate = 21600 // Revalidate at a minimum every 6 hours