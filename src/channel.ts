import ChannelRepository from '@remkoj/optimizely-graph-client/channels'

// Determine the CMS URL
const cms_url = process.env.OPTIMIZELY_CMS_URL ?? 'https://example.cms.optimizely.com';

// Read the URLs from the environment
const netlifyUrl = process.env.URL;
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined;
const customUrl = process.env.SITE_DOMAIN ? (process.env.SITE_DOMAIN.startsWith('http') ? process.env.SITE_DOMAIN : `https://${process.env.SITE_DOMAIN}`) : undefined;

// Determine the ChannelURL
const channelId = customUrl || vercelUrl || netlifyUrl || 'http://localhost:3000';

/**
 * The default channel definition for this deployment
 */
export const channel = ChannelRepository.createDefinition(
  "Basic Project",              // The Website / Application name
  channelId,                    // The primary (main) domain where this website/application is deployment
  ["en", "en-US", "en-UK"],     // The locales that are available on the website/application
  cms_url                       // The domain where the CMS is hosted
);
export default channel;