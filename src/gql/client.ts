import type * as Schema from "./graphql";
import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export const LinkDataFragmentDoc = /*#__PURE__*/ gql`
    fragment LinkData on ContentUrl {
  base
  hierarchical
  default
}
    `;
export const IContentInfoFragmentDoc = /*#__PURE__*/ gql`
    fragment IContentInfo on IContentMetadata {
  key
  locale
  types
  displayName
  version
  url {
    ...LinkData
  }
}
    `;
export const IContentDataFragmentDoc = /*#__PURE__*/ gql`
    fragment IContentData on IContent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const PageDataFragmentDoc = /*#__PURE__*/ gql`
    fragment PageData on IContent {
  ...IContentData
}
    `;
export const ReferenceDataFragmentDoc = /*#__PURE__*/ gql`
    fragment ReferenceData on ContentReference {
  key
  url {
    ...LinkData
  }
}
    `;
export const IContentListItemFragmentDoc = /*#__PURE__*/ gql`
    fragment IContentListItem on IContent {
  ...IContentData
}
    `;
export const LinkItemDataFragmentDoc = /*#__PURE__*/ gql`
    fragment LinkItemData on Link {
  title
  text
  target
  url {
    ...LinkData
  }
}
    `;
export const IElementDataFragmentDoc = /*#__PURE__*/ gql`
    fragment IElementData on IElement {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const ElementDataFragmentDoc = /*#__PURE__*/ gql`
    fragment ElementData on IElement {
  ...IElementData
}
    `;
export const CompositionDataFragmentDoc = /*#__PURE__*/ gql`
    fragment CompositionData on ICompositionNode {
  name: displayName
  layoutType
  type
  key
  template: displayTemplateKey
  settings: displaySettings {
    key
    value
  }
  ... on ICompositionStructureNode {
    nodes @recursive(depth: 10) {
      name: displayName
    }
  }
  ... on ICompositionElementNode {
    element {
      ...ElementData
    }
  }
}
    `;
export const ExperienceDataFragmentDoc = /*#__PURE__*/ gql`
    fragment ExperienceData on IExperience {
  experience: _metadata {
    ... on CompositionMetadata {
      composition {
        ...CompositionData
      }
    }
  }
}
    `;
export const BlockDataFragmentDoc = /*#__PURE__*/ gql`
    fragment BlockData on IContent {
  ...IContentData
}
    `;
export const getContentByIdDocument = /*#__PURE__*/ gql`
    query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {
  content: Content(
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items {
      ...BlockData
      ...PageData
    }
  }
}
    ${BlockDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${PageDataFragmentDoc}`;
export const getContentTypeDocument = /*#__PURE__*/ gql`
    query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {
  content: Content(
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items {
      _metadata {
        types
      }
    }
  }
}
    `;
export const getContentByPathDocument = /*#__PURE__*/ gql`
    query getContentByPath($path: String!, $version: String, $locale: [Locales!], $domain: String) {
  content: Content(
    where: {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}
    locale: $locale
  ) {
    total
    items {
      ...PageData
    }
  }
}
    ${PageDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getContentById(variables: Schema.getContentByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByIdQuery>(getContentByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentById', 'query', variables);
    },
    getContentType(variables: Schema.getContentTypeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentTypeQuery>(getContentTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentType', 'query', variables);
    },
    getContentByPath(variables: Schema.getContentByPathQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentByPathQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByPathQuery>(getContentByPathDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentByPath', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;