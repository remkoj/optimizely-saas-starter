import { gql, type GraphQLClient } from 'graphql-request'
import type * as Types from './graphql'


export function getContentType(client: GraphQLClient, variables: Types.getContentTypeQueryVariables) : Promise<Types.getContentTypeQuery>
{
  const query = gql`query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) { content: Content( where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]} locale: $locale ) { total items { _metadata { types } } } }`
  return client.request<Types.getContentTypeQuery, Types.getContentTypeQueryVariables>(query, variables)
}
export function getContentByPath(client: GraphQLClient, variables: Types.getContentByPathQueryVariables) : Promise<Types.getContentByPathQuery>
{
  const query = gql`query getContentByPath($path: String!, $version: String, $locale: [Locales!], $domain: String) { content: Content( where: {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}} locale: $locale ) { total items { ...PageData } } } fragment PageData on IContent { ...IContentData } fragment IContentData on IContent { _metadata { ...IContentInfo } _type: __typename } fragment IContentInfo on IContentMetadata { key locale types displayName version url { ...LinkData } } fragment LinkData on ContentUrl { base hierarchical default }`
  return client.request<Types.getContentByPathQuery, Types.getContentByPathQueryVariables>(query, variables)
}
export function getContentById(client: GraphQLClient, variables: Types.getContentByIdQueryVariables) : Promise<Types.getContentByIdQuery>
{
  const query = gql`query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) { content: Content( where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]} locale: $locale ) { total items { ...BlockData ...PageData } } } fragment PageData on IContent { ...IContentData } fragment BlockData on IContent { ...IContentData } fragment IContentData on IContent { _metadata { ...IContentInfo } _type: __typename } fragment IContentInfo on IContentMetadata { key locale types displayName version url { ...LinkData } } fragment LinkData on ContentUrl { base hierarchical default }`
  return client.request<Types.getContentByIdQuery, Types.getContentByIdQueryVariables>(query, variables)
}

