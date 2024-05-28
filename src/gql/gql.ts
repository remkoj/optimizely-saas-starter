/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment PageData on IContent {\n  ...IContentData\n}": types.PageDataFragmentDoc,
    "fragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}": types.ReferenceDataFragmentDoc,
    "fragment IContentListItem on IContent {\n  ...IContentData\n}": types.IContentListItemFragmentDoc,
    "query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n  content: Content(\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}\n    locale: $locale\n  ) {\n    total\n    items {\n      ...BlockData\n      ...PageData\n    }\n  }\n}": types.getContentByIdDocument,
    "fragment LinkItemData on Link {\n  title\n  text\n  target\n  url {\n    ...LinkData\n  }\n}": types.LinkItemDataFragmentDoc,
    "query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n  content: Content(\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}\n    locale: $locale\n  ) {\n    total\n    items {\n      _metadata {\n        types\n      }\n    }\n  }\n}": types.getContentTypeDocument,
    "query getContentByPath($path: String!, $version: String, $locale: [Locales!], $domain: String) {\n  content: Content(\n    where: {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    total\n    items {\n      ...PageData\n    }\n  }\n}": types.getContentByPathDocument,
    "fragment ExperienceData on IExperience {\n  experience: _metadata {\n    ... on CompositionMetadata {\n      composition {\n        ...CompositionData\n      }\n    }\n  }\n}": types.ExperienceDataFragmentDoc,
    "fragment ElementData on IElement {\n  ...IElementData\n}": types.ElementDataFragmentDoc,
    "fragment CompositionData on ICompositionNode {\n  name: displayName\n  layoutType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n  ... on ICompositionStructureNode {\n    nodes @recursive(depth: 10) {\n      name: displayName\n    }\n  }\n  ... on ICompositionElementNode {\n    element {\n      ...ElementData\n    }\n  }\n}": types.CompositionDataFragmentDoc,
    "fragment BlockData on IContent {\n  ...IContentData\n}": types.BlockDataFragmentDoc,
    "fragment IElementData on IElement {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}": types.IElementDataFragmentDoc,
    "fragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}": types.IContentInfoFragmentDoc,
    "fragment IContentData on IContent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}": types.IContentDataFragmentDoc,
    "fragment LinkData on ContentUrl {\n  base\n  hierarchical\n  default\n}": types.LinkDataFragmentDoc,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageData on IContent {\n  ...IContentData\n}"): (typeof documents)["fragment PageData on IContent {\n  ...IContentData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment IContentListItem on IContent {\n  ...IContentData\n}"): (typeof documents)["fragment IContentListItem on IContent {\n  ...IContentData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n  content: Content(\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}\n    locale: $locale\n  ) {\n    total\n    items {\n      ...BlockData\n      ...PageData\n    }\n  }\n}"): (typeof documents)["query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n  content: Content(\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}\n    locale: $locale\n  ) {\n    total\n    items {\n      ...BlockData\n      ...PageData\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment LinkItemData on Link {\n  title\n  text\n  target\n  url {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment LinkItemData on Link {\n  title\n  text\n  target\n  url {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n  content: Content(\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}\n    locale: $locale\n  ) {\n    total\n    items {\n      _metadata {\n        types\n      }\n    }\n  }\n}"): (typeof documents)["query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n  content: Content(\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}\n    locale: $locale\n  ) {\n    total\n    items {\n      _metadata {\n        types\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getContentByPath($path: String!, $version: String, $locale: [Locales!], $domain: String) {\n  content: Content(\n    where: {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    total\n    items {\n      ...PageData\n    }\n  }\n}"): (typeof documents)["query getContentByPath($path: String!, $version: String, $locale: [Locales!], $domain: String) {\n  content: Content(\n    where: {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    total\n    items {\n      ...PageData\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExperienceData on IExperience {\n  experience: _metadata {\n    ... on CompositionMetadata {\n      composition {\n        ...CompositionData\n      }\n    }\n  }\n}"): (typeof documents)["fragment ExperienceData on IExperience {\n  experience: _metadata {\n    ... on CompositionMetadata {\n      composition {\n        ...CompositionData\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ElementData on IElement {\n  ...IElementData\n}"): (typeof documents)["fragment ElementData on IElement {\n  ...IElementData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment CompositionData on ICompositionNode {\n  name: displayName\n  layoutType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n  ... on ICompositionStructureNode {\n    nodes @recursive(depth: 10) {\n      name: displayName\n    }\n  }\n  ... on ICompositionElementNode {\n    element {\n      ...ElementData\n    }\n  }\n}"): (typeof documents)["fragment CompositionData on ICompositionNode {\n  name: displayName\n  layoutType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n  ... on ICompositionStructureNode {\n    nodes @recursive(depth: 10) {\n      name: displayName\n    }\n  }\n  ... on ICompositionElementNode {\n    element {\n      ...ElementData\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockData on IContent {\n  ...IContentData\n}"): (typeof documents)["fragment BlockData on IContent {\n  ...IContentData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment IElementData on IElement {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}"): (typeof documents)["fragment IElementData on IElement {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment IContentData on IContent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}"): (typeof documents)["fragment IContentData on IContent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment LinkData on ContentUrl {\n  base\n  hierarchical\n  default\n}"): (typeof documents)["fragment LinkData on ContentUrl {\n  base\n  hierarchical\n  default\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;