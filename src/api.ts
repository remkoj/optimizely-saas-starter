import 'server-only';
import { createClient } from '@remkoj/optimizely-cms-nextjs';
import { ServerContext } from '@remkoj/optimizely-cms-react/rsc';
import { factory } from "@/components/factory";
import { getSdk } from '@/gql';

export { getSdk, type Sdk as AppSdk } from "@/gql";

/**
 * A public, shared, application scoped client that is intended to be used where there's
 * no context available. For example, Layouts, APIs, custom routes. This always uses a
 * client for published content.
 */
export const client = createClient();

/**
 * A public, shared, application scoped sdk that is intended to be used where there's
 * no context available. For example, Layouts, APIs, custom routes. This always uses a
 * sdk for published content.
 */
export const sdk = getSdk(client);

/**
 * A public, shared, application scoped context that is intended to be used where there's
 * no context available. For example, Layouts, APIs, custom routes. This always uses a
 * context for published content.
 */
export const context = new ServerContext({ factory, client, mode: 'public' });

export default client;