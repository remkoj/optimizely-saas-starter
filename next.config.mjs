/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            // Optimizely CMS
            {
                protocol: 'https',
                hostname: '*.cms.optimizely.com',
                pathname: '/**'
            },
            // Optimizely Content Recommendations
            {
                protocol: 'https',
                hostname: '*.idio.co',
                pathname: '/**'
            },
            // Optimizely DAM
            {
                protocol: 'https',
                hostname: '*.cmp.optimizely.com',
                pathname: '/**'
            }
        ]
    },
    experimental: {
        serverActions: {
          allowedOrigins: [
            // Optimizely CMP Preview
            '*.webproofing.cmp.optimizely.com', 
            // Optimizely Web Experimentation & Personalization Editor
            'www.optimizelyedit.com/' 
          ],
        }
    }
};

export default nextConfig;
