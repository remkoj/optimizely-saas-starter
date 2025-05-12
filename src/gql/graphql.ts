/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Bool: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](https://ecma-international.org/publications-and-standards/standards/ecma-404/). */
  JSON: { input: any; output: any; }
};

export type ArticleListElement = IData & _IComponent & _IContent & {
  __typename?: 'ArticleListElement';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  articleListCount?: Maybe<Scalars['Int']['output']>;
  topics?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ArticleListElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ArticleListElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ArticleListElementAutocomplete = {
  __typename?: 'ArticleListElementAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ArticleListElementFacet = {
  __typename?: 'ArticleListElementFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ArticleListElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ArticleListElementOutput = {
  __typename?: 'ArticleListElementOutput';
  autocomplete?: Maybe<ArticleListElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ArticleListElementFacet>;
  item?: Maybe<ArticleListElement>;
  items?: Maybe<Array<Maybe<ArticleListElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ArticleListElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleListElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ArticleListElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ArticleListElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ArticleListElementWhereInput>>>;
};

export type BlankExperience = IData & _IContent & _IExperience & _IPage & {
  __typename?: 'BlankExperience';
  BlankExperienceSeoSettings?: Maybe<PageSeoSettingsProperty>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type BlankExperience_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlankExperience_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlankExperienceAutocomplete = {
  __typename?: 'BlankExperienceAutocomplete';
  BlankExperienceSeoSettings?: Maybe<PageSeoSettingsPropertyAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankExperienceFacet = {
  __typename?: 'BlankExperienceFacet';
  BlankExperienceSeoSettings?: Maybe<PageSeoSettingsPropertyFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type BlankExperienceOrderByInput = {
  BlankExperienceSeoSettings?: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankExperienceOutput = {
  __typename?: 'BlankExperienceOutput';
  autocomplete?: Maybe<BlankExperienceAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BlankExperienceFacet>;
  item?: Maybe<BlankExperience>;
  items?: Maybe<Array<Maybe<BlankExperience>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BlankExperienceOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankExperienceWhereInput = {
  BlankExperienceSeoSettings?: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type BlankSection = IData & _IComponent & _IContent & _ISection & {
  __typename?: 'BlankSection';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type BlankSection_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlankSection_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlankSectionAutocomplete = {
  __typename?: 'BlankSectionAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankSectionFacet = {
  __typename?: 'BlankSectionFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type BlankSectionOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankSectionOutput = {
  __typename?: 'BlankSectionOutput';
  autocomplete?: Maybe<BlankSectionAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BlankSectionFacet>;
  item?: Maybe<BlankSection>;
  items?: Maybe<Array<Maybe<BlankSection>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BlankSectionOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankSectionWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type BlogPostPage = IData & _IContent & _IPage & {
  __typename?: 'BlogPostPage';
  ArticleAuthor?: Maybe<Scalars['String']['output']>;
  ArticleSubHeading?: Maybe<Scalars['String']['output']>;
  BlogPostBody?: Maybe<SearchableRichText>;
  BlogPostPromoImage?: Maybe<ContentReference>;
  Heading?: Maybe<Scalars['String']['output']>;
  SeoSettings?: Maybe<PageSeoSettingsProperty>;
  Topic?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  continueReading?: Maybe<Array<Maybe<_IContent>>>;
};


export type BlogPostPageArticleAuthorArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlogPostPageArticleSubHeadingArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlogPostPageHeadingArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlogPostPageTopicArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlogPostPage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlogPostPage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlogPostPageAutocomplete = {
  __typename?: 'BlogPostPageAutocomplete';
  BlogPostPromoImage?: Maybe<ContentReferenceAutocomplete>;
  SeoSettings?: Maybe<PageSeoSettingsPropertyAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  continueReading?: Maybe<_IContentAutocomplete>;
};

export type BlogPostPageFacet = {
  __typename?: 'BlogPostPageFacet';
  ArticleAuthor?: Maybe<Array<Maybe<StringFacet>>>;
  ArticleSubHeading?: Maybe<Array<Maybe<StringFacet>>>;
  BlogPostBody?: Maybe<SearchableRichTextFacet>;
  BlogPostPromoImage?: Maybe<ContentReferenceFacet>;
  Heading?: Maybe<Array<Maybe<StringFacet>>>;
  SeoSettings?: Maybe<PageSeoSettingsPropertyFacet>;
  Topic?: Maybe<Array<Maybe<StringFacet>>>;
  _metadata?: Maybe<IContentMetadataFacet>;
  continueReading?: Maybe<_IContentFacet>;
};


export type BlogPostPageFacetArticleAuthorArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlogPostPageFacetArticleSubHeadingArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlogPostPageFacetHeadingArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlogPostPageFacetTopicArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type BlogPostPageOrderByInput = {
  ArticleAuthor?: InputMaybe<OrderBy>;
  ArticleSubHeading?: InputMaybe<OrderBy>;
  BlogPostBody?: InputMaybe<SearchableRichTextOrderByInput>;
  BlogPostPromoImage?: InputMaybe<ContentReferenceOrderByInput>;
  Heading?: InputMaybe<OrderBy>;
  SeoSettings?: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  Topic?: InputMaybe<OrderBy>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  continueReading?: InputMaybe<_IContentOrderByInput>;
};

export type BlogPostPageOutput = {
  __typename?: 'BlogPostPageOutput';
  autocomplete?: Maybe<BlogPostPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BlogPostPageFacet>;
  item?: Maybe<BlogPostPage>;
  items?: Maybe<Array<Maybe<BlogPostPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BlogPostPageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlogPostPageWhereInput = {
  ArticleAuthor?: InputMaybe<SearchableStringFilterInput>;
  ArticleSubHeading?: InputMaybe<SearchableStringFilterInput>;
  BlogPostBody?: InputMaybe<SearchableRichTextWhereInput>;
  BlogPostPromoImage?: InputMaybe<ContentReferenceWhereInput>;
  Heading?: InputMaybe<SearchableStringFilterInput>;
  SeoSettings?: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  Topic?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<BlogPostPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlogPostPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlogPostPageWhereInput>>>;
  continueReading?: InputMaybe<_IContentWhereInput>;
};

export type BlogSectionExperience = IData & _IContent & _IExperience & _IPage & {
  __typename?: 'BlogSectionExperience';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<CompositionStructureNode>;
  seo_data?: Maybe<PageSeoSettingsProperty>;
};


export type BlogSectionExperience_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlogSectionExperience_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlogSectionExperienceAutocomplete = {
  __typename?: 'BlogSectionExperienceAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
  seo_data?: Maybe<PageSeoSettingsPropertyAutocomplete>;
};

export type BlogSectionExperienceFacet = {
  __typename?: 'BlogSectionExperienceFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
  seo_data?: Maybe<PageSeoSettingsPropertyFacet>;
};

export type BlogSectionExperienceOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
  seo_data?: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
};

export type BlogSectionExperienceOutput = {
  __typename?: 'BlogSectionExperienceOutput';
  autocomplete?: Maybe<BlogSectionExperienceAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BlogSectionExperienceFacet>;
  item?: Maybe<BlogSectionExperience>;
  items?: Maybe<Array<Maybe<BlogSectionExperience>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BlogSectionExperienceOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlogSectionExperienceWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<BlogSectionExperienceWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlogSectionExperienceWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlogSectionExperienceWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
  seo_data?: InputMaybe<PageSeoSettingsPropertyWhereInput>;
};

export type BoolFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ButtonBlock = IData & _IComponent & _IContent & {
  __typename?: 'ButtonBlock';
  ButtonClass?: Maybe<Scalars['String']['output']>;
  ButtonText?: Maybe<Scalars['String']['output']>;
  ButtonType?: Maybe<Scalars['String']['output']>;
  ButtonUrl?: Maybe<ContentUrl>;
  ButtonVariant?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type ButtonBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ButtonBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ButtonBlockAutocomplete = {
  __typename?: 'ButtonBlockAutocomplete';
  ButtonUrl?: Maybe<ContentUrlAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ButtonBlockFacet = {
  __typename?: 'ButtonBlockFacet';
  ButtonUrl?: Maybe<ContentUrlFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ButtonBlockOrderByInput = {
  ButtonUrl?: InputMaybe<ContentUrlOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ButtonBlockOutput = {
  __typename?: 'ButtonBlockOutput';
  autocomplete?: Maybe<ButtonBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ButtonBlockFacet>;
  item?: Maybe<ButtonBlock>;
  items?: Maybe<Array<Maybe<ButtonBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ButtonBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ButtonBlockProperty = {
  __typename?: 'ButtonBlockProperty';
  ButtonClass?: Maybe<Scalars['String']['output']>;
  ButtonText?: Maybe<Scalars['String']['output']>;
  ButtonType?: Maybe<Scalars['String']['output']>;
  ButtonUrl?: Maybe<ContentUrl>;
  ButtonVariant?: Maybe<Scalars['String']['output']>;
};

export type ButtonBlockPropertyAutocomplete = {
  __typename?: 'ButtonBlockPropertyAutocomplete';
  ButtonUrl?: Maybe<ContentUrlAutocomplete>;
};

export type ButtonBlockPropertyFacet = {
  __typename?: 'ButtonBlockPropertyFacet';
  ButtonUrl?: Maybe<ContentUrlFacet>;
};

export type ButtonBlockPropertyOrderByInput = {
  ButtonUrl?: InputMaybe<ContentUrlOrderByInput>;
};

export type ButtonBlockPropertyWhereInput = {
  ButtonUrl?: InputMaybe<ContentUrlWhereInput>;
};

export type ButtonBlockWhereInput = {
  ButtonUrl?: InputMaybe<ContentUrlWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
};

export type CTAElement = IData & _IComponent & _IContent & {
  __typename?: 'CTAElement';
  Link?: Maybe<ContentUrl>;
  Text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type CTAElementTextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type CTAElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type CTAElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type CTAElementAutocomplete = {
  __typename?: 'CTAElementAutocomplete';
  Link?: Maybe<ContentUrlAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type CTAElementFacet = {
  __typename?: 'CTAElementFacet';
  Link?: Maybe<ContentUrlFacet>;
  Text?: Maybe<Array<Maybe<StringFacet>>>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type CTAElementFacetTextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CTAElementOrderByInput = {
  Link?: InputMaybe<ContentUrlOrderByInput>;
  Text?: InputMaybe<OrderBy>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type CTAElementOutput = {
  __typename?: 'CTAElementOutput';
  autocomplete?: Maybe<CTAElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<CTAElementFacet>;
  item?: Maybe<CTAElement>;
  items?: Maybe<Array<Maybe<CTAElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type CTAElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CTAElementWhereInput = {
  Link?: InputMaybe<ContentUrlWhereInput>;
  Text?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<CTAElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<CTAElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<CTAElementWhereInput>>>;
};

export type CarouselBlock = IData & _IComponent & _IContent & {
  __typename?: 'CarouselBlock';
  CarouselItemsContentArea?: Maybe<Array<Maybe<_IContent>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type CarouselBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type CarouselBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type CarouselBlockAutocomplete = {
  __typename?: 'CarouselBlockAutocomplete';
  CarouselItemsContentArea?: Maybe<_IContentAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type CarouselBlockFacet = {
  __typename?: 'CarouselBlockFacet';
  CarouselItemsContentArea?: Maybe<_IContentFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type CarouselBlockOrderByInput = {
  CarouselItemsContentArea?: InputMaybe<_IContentOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type CarouselBlockOutput = {
  __typename?: 'CarouselBlockOutput';
  autocomplete?: Maybe<CarouselBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<CarouselBlockFacet>;
  item?: Maybe<CarouselBlock>;
  items?: Maybe<Array<Maybe<CarouselBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type CarouselBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CarouselBlockWhereInput = {
  CarouselItemsContentArea?: InputMaybe<_IContentWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<CarouselBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<CarouselBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<CarouselBlockWhereInput>>>;
};

export type CompositionComponentNode = ICompositionComponentNode & ICompositionNode & {
  __typename?: 'CompositionComponentNode';
  component?: Maybe<_IComponent>;
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySetting = {
  __typename?: 'CompositionDisplaySetting';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySettingAutocomplete = {
  __typename?: 'CompositionDisplaySettingAutocomplete';
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  value?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionDisplaySettingAutocompletekeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionDisplaySettingAutocompletevalueArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionDisplaySettingFacet = {
  __typename?: 'CompositionDisplaySettingFacet';
  key?: Maybe<Array<Maybe<StringFacet>>>;
  value?: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionDisplaySettingFacetkeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionDisplaySettingFacetvalueArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionDisplaySettingOrderByInput = {
  key?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

export type CompositionDisplaySettingWhereInput = {
  key?: InputMaybe<StringFilterInput>;
  value?: InputMaybe<StringFilterInput>;
};

export type CompositionNode = ICompositionNode & {
  __typename?: 'CompositionNode';
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNode = ICompositionNode & ICompositionStructureNode & {
  __typename?: 'CompositionStructureNode';
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  nodes?: Maybe<Array<Maybe<ICompositionNode>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNodeAutocomplete = {
  __typename?: 'CompositionStructureNodeAutocomplete';
  displayName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings?: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodes?: Maybe<ICompositionNodeAutocomplete>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionStructureNodeAutocompletedisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompletedisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompletekeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompletenodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompletetypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionStructureNodeFacet = {
  __typename?: 'CompositionStructureNodeFacet';
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings?: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  nodeType?: Maybe<Array<Maybe<StringFacet>>>;
  nodes?: Maybe<ICompositionNodeFacet>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionStructureNodeFacetdisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetdisplayTemplateKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetkeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetnodeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacettypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionStructureNodeOrderByInput = {
  displayName?: InputMaybe<OrderBy>;
  displaySettings?: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  nodeType?: InputMaybe<OrderBy>;
  nodes?: InputMaybe<ICompositionNodeOrderByInput>;
  type?: InputMaybe<OrderBy>;
};

export type CompositionStructureNodeWhereInput = {
  displayName?: InputMaybe<StringFilterInput>;
  displaySettings?: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey?: InputMaybe<StringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  nodeType?: InputMaybe<StringFilterInput>;
  nodes?: InputMaybe<ICompositionNodeWhereInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type ContentMetadata = IContentMetadata & {
  __typename?: 'ContentMetadata';
  changeset?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type ContentMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ContentRecsElement = IData & _IComponent & _IContent & {
  __typename?: 'ContentRecsElement';
  ElementDeliveryApiKey?: Maybe<Scalars['String']['output']>;
  ElementRecommendationCount?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type ContentRecsElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ContentRecsElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ContentRecsElementAutocomplete = {
  __typename?: 'ContentRecsElementAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ContentRecsElementFacet = {
  __typename?: 'ContentRecsElementFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ContentRecsElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ContentRecsElementOutput = {
  __typename?: 'ContentRecsElementOutput';
  autocomplete?: Maybe<ContentRecsElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ContentRecsElementFacet>;
  item?: Maybe<ContentRecsElement>;
  items?: Maybe<Array<Maybe<ContentRecsElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ContentRecsElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentRecsElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ContentRecsElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ContentRecsElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ContentRecsElementWhereInput>>>;
};

export type ContentReference = {
  __typename?: 'ContentReference';
  /**
   * `reference`
   * |          |        |      |
   * | -------: | ------ | :--- |
   * | **type** | &nbsp; | `Data` |
   * | **id**   | &nbsp; | `_id` |
   *
   */
  item?: Maybe<IData>;
  key?: Maybe<Scalars['String']['output']>;
  url?: Maybe<ContentUrl>;
};

export type ContentReferenceAutocomplete = {
  __typename?: 'ContentReferenceAutocomplete';
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrlAutocomplete>;
};


export type ContentReferenceAutocompletekeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentReferenceFacet = {
  __typename?: 'ContentReferenceFacet';
  key?: Maybe<Array<Maybe<StringFacet>>>;
  url?: Maybe<ContentUrlFacet>;
};


export type ContentReferenceFacetkeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentReferenceOrderByInput = {
  key?: InputMaybe<OrderBy>;
  url?: InputMaybe<ContentUrlOrderByInput>;
};

export type ContentReferenceWhereInput = {
  key?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<ContentUrlWhereInput>;
};

export type ContentUrl = {
  __typename?: 'ContentUrl';
  base?: Maybe<Scalars['String']['output']>;
  default?: Maybe<Scalars['String']['output']>;
  graph?: Maybe<Scalars['String']['output']>;
  hierarchical?: Maybe<Scalars['String']['output']>;
  internal?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentUrlAutocomplete = {
  __typename?: 'ContentUrlAutocomplete';
  base?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  default?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  graph?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  hierarchical?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  internal?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentUrlAutocompletebaseArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompletedefaultArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompletegraphArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompletehierarchicalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteinternalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompletetypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentUrlFacet = {
  __typename?: 'ContentUrlFacet';
  base?: Maybe<Array<Maybe<StringFacet>>>;
  default?: Maybe<Array<Maybe<StringFacet>>>;
  graph?: Maybe<Array<Maybe<StringFacet>>>;
  hierarchical?: Maybe<Array<Maybe<StringFacet>>>;
  internal?: Maybe<Array<Maybe<StringFacet>>>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentUrlFacetbaseArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetdefaultArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetgraphArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacethierarchicalArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetinternalArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacettypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentUrlOrderByInput = {
  base?: InputMaybe<OrderBy>;
  default?: InputMaybe<OrderBy>;
  graph?: InputMaybe<OrderBy>;
  hierarchical?: InputMaybe<OrderBy>;
  internal?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

export type ContentUrlWhereInput = {
  base?: InputMaybe<StringFilterInput>;
  default?: InputMaybe<StringFilterInput>;
  graph?: InputMaybe<StringFilterInput>;
  hierarchical?: InputMaybe<StringFilterInput>;
  internal?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type ContinueReadingComponent = IData & _IComponent & _IContent & {
  __typename?: 'ContinueReadingComponent';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  content?: Maybe<Array<Maybe<_IContent>>>;
  heading?: Maybe<Scalars['String']['output']>;
  shared?: Maybe<Scalars['Boolean']['output']>;
  topline?: Maybe<Scalars['String']['output']>;
};


export type ContinueReadingComponent_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ContinueReadingComponent_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ContinueReadingComponentAutocomplete = {
  __typename?: 'ContinueReadingComponentAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  content?: Maybe<_IContentAutocomplete>;
};

export type ContinueReadingComponentFacet = {
  __typename?: 'ContinueReadingComponentFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  content?: Maybe<_IContentFacet>;
  shared?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContinueReadingComponentFacetsharedArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContinueReadingComponentOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  content?: InputMaybe<_IContentOrderByInput>;
  shared?: InputMaybe<OrderBy>;
};

export type ContinueReadingComponentOutput = {
  __typename?: 'ContinueReadingComponentOutput';
  autocomplete?: Maybe<ContinueReadingComponentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ContinueReadingComponentFacet>;
  item?: Maybe<ContinueReadingComponent>;
  items?: Maybe<Array<Maybe<ContinueReadingComponent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ContinueReadingComponentOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContinueReadingComponentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ContinueReadingComponentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ContinueReadingComponentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ContinueReadingComponentWhereInput>>>;
  content?: InputMaybe<_IContentWhereInput>;
  shared?: InputMaybe<BoolFilterInput>;
};

export type Data = IData & {
  __typename?: 'Data';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Data_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Data_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DataOrderByInput = {
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type DataOutput = {
  __typename?: 'DataOutput';
  cursor?: Maybe<Scalars['String']['output']>;
  item?: Maybe<IData>;
  items?: Maybe<Array<Maybe<IData>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DataOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DataWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
};

export type DateFacet = {
  __typename?: 'DateFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum DateFacetUnit {
  /** Defined as 24 hours (86,400,000 milliseconds). All days begin at the earliest possible time, which is usually 00:00:00 (midnight). */
  DAY = 'DAY',
  /** Defined as 60 minutes each (3,600,000 milliseconds). All hours begin at 00 minutes and 00 seconds. */
  HOUR = 'HOUR',
  /** Defined as 1000 milliseconds each. */
  MINUTE = 'MINUTE'
}

export type DateFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `decay` influences the weight of the score with a decay function. For example, results that have a more recent datetime will be ranked higher. The `origin` will be `now()` in case not specified. The `scale` is by default 10. The `rate` must be in the range `[0..1]`. */
  decay?: InputMaybe<Decay>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Date']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars['Date']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars['Date']['input']>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars['Date']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars['Date']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Date']['input']>;
};

/** Decay influences the weight of the score based on field values with a decay function */
export type Decay = {
  origin?: InputMaybe<Scalars['Date']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  scale?: InputMaybe<Scalars['Int']['input']>;
};

export enum FactorModifier {
  /** Add 1 to the field value and take the natural logarithm */
  LOG = 'LOG',
  /** Do not apply any multiplier to the field value */
  NONE = 'NONE',
  /** Reciprocate the field value, same as 1/x where x is the field's value */
  RECIPROCAL = 'RECIPROCAL',
  /** Take the square root of the field value */
  SQRT = 'SQRT',
  /** Square the field value (multiply it by itself) */
  SQUARE = 'SQUARE'
}

export type GenericMedia = IData & _IContent & _IMedia & {
  __typename?: 'GenericMedia';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type GenericMedia_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type GenericMedia_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type GenericMediaAutocomplete = {
  __typename?: 'GenericMediaAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type GenericMediaFacet = {
  __typename?: 'GenericMediaFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type GenericMediaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMediaOutput = {
  __typename?: 'GenericMediaOutput';
  autocomplete?: Maybe<GenericMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<GenericMediaFacet>;
  item?: Maybe<GenericMedia>;
  items?: Maybe<Array<Maybe<GenericMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type GenericMediaOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GenericMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
};

export type HeadingElement = IData & _IComponent & _IContent & {
  __typename?: 'HeadingElement';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  headingText?: Maybe<Scalars['String']['output']>;
};


export type HeadingElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type HeadingElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};


export type HeadingElementheadingTextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type HeadingElementAutocomplete = {
  __typename?: 'HeadingElementAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type HeadingElementFacet = {
  __typename?: 'HeadingElementFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  headingText?: Maybe<Array<Maybe<StringFacet>>>;
};


export type HeadingElementFacetheadingTextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type HeadingElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  headingText?: InputMaybe<OrderBy>;
};

export type HeadingElementOutput = {
  __typename?: 'HeadingElementOutput';
  autocomplete?: Maybe<HeadingElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<HeadingElementFacet>;
  item?: Maybe<HeadingElement>;
  items?: Maybe<Array<Maybe<HeadingElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type HeadingElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeadingElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
  headingText?: InputMaybe<SearchableStringFilterInput>;
};

export type HeroBlock = IData & _IComponent & _IContent & {
  __typename?: 'HeroBlock';
  Description?: Maybe<RichText>;
  Eyebrow?: Maybe<Scalars['String']['output']>;
  Heading?: Maybe<Scalars['String']['output']>;
  HeroButton?: Maybe<ButtonBlockProperty>;
  HeroColor?: Maybe<Scalars['String']['output']>;
  HeroImage?: Maybe<ContentReference>;
  Icon?: Maybe<Scalars['String']['output']>;
  SubHeading?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type HeroBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type HeroBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type HeroBlockAutocomplete = {
  __typename?: 'HeroBlockAutocomplete';
  Description?: Maybe<RichTextAutocomplete>;
  HeroButton?: Maybe<ButtonBlockPropertyAutocomplete>;
  HeroImage?: Maybe<ContentReferenceAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type HeroBlockFacet = {
  __typename?: 'HeroBlockFacet';
  Description?: Maybe<RichTextFacet>;
  HeroButton?: Maybe<ButtonBlockPropertyFacet>;
  HeroImage?: Maybe<ContentReferenceFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type HeroBlockOrderByInput = {
  Description?: InputMaybe<RichTextOrderByInput>;
  HeroButton?: InputMaybe<ButtonBlockPropertyOrderByInput>;
  HeroImage?: InputMaybe<ContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type HeroBlockOutput = {
  __typename?: 'HeroBlockOutput';
  autocomplete?: Maybe<HeroBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<HeroBlockFacet>;
  item?: Maybe<HeroBlock>;
  items?: Maybe<Array<Maybe<HeroBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type HeroBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeroBlockWhereInput = {
  Description?: InputMaybe<RichTextWhereInput>;
  HeroButton?: InputMaybe<ButtonBlockPropertyWhereInput>;
  HeroImage?: InputMaybe<ContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
};

/** Options for highlighting */
export type HighlightOptions = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  endToken?: InputMaybe<Scalars['String']['input']>;
  startToken?: InputMaybe<Scalars['String']['input']>;
};

export type ICompositionComponentNode = {
  component?: Maybe<_IComponent>;
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ICompositionNode = {
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ICompositionNodeAutocomplete = {
  __typename?: 'ICompositionNodeAutocomplete';
  displayName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings?: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ICompositionNodeAutocompletedisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompletedisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompletekeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompletenodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompletetypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ICompositionNodeFacet = {
  __typename?: 'ICompositionNodeFacet';
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings?: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  nodeType?: Maybe<Array<Maybe<StringFacet>>>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ICompositionNodeFacetdisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetdisplayTemplateKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetkeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetnodeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacettypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ICompositionNodeOrderByInput = {
  displayName?: InputMaybe<OrderBy>;
  displaySettings?: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  nodeType?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

export type ICompositionNodeWhereInput = {
  displayName?: InputMaybe<StringFilterInput>;
  displaySettings?: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey?: InputMaybe<StringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  nodeType?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type ICompositionStructureNode = {
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  nodes?: Maybe<Array<Maybe<ICompositionNode>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IContentMetadata = {
  changeset?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IContentMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IContentMetadataAutocomplete = {
  __typename?: 'IContentMetadataAutocomplete';
  changeset?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  fallbackForLocale?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  locale?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrlAutocomplete>;
  version?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type IContentMetadataAutocompletechangesetArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompletefallbackForLocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompletekeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompletelocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompletestatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompletetypesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteversionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type IContentMetadataFacet = {
  __typename?: 'IContentMetadataFacet';
  changeset?: Maybe<Array<Maybe<StringFacet>>>;
  created?: Maybe<Array<Maybe<DateFacet>>>;
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  fallbackForLocale?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  lastModified?: Maybe<Array<Maybe<DateFacet>>>;
  locale?: Maybe<Array<Maybe<StringFacet>>>;
  published?: Maybe<Array<Maybe<DateFacet>>>;
  sortOrder?: Maybe<Array<Maybe<NumberFacet>>>;
  status?: Maybe<Array<Maybe<StringFacet>>>;
  types?: Maybe<Array<Maybe<StringFacet>>>;
  url?: Maybe<ContentUrlFacet>;
  version?: Maybe<Array<Maybe<StringFacet>>>;
};


export type IContentMetadataFacetchangesetArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetcreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetdisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetfallbackForLocaleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetkeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetlastModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetlocaleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetpublishedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetsortOrderArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type IContentMetadataFacetstatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacettypesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetversionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type IContentMetadataOrderByInput = {
  changeset?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  displayName?: InputMaybe<OrderBy>;
  fallbackForLocale?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  lastModified?: InputMaybe<OrderBy>;
  locale?: InputMaybe<OrderBy>;
  published?: InputMaybe<OrderBy>;
  sortOrder?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  types?: InputMaybe<OrderBy>;
  url?: InputMaybe<ContentUrlOrderByInput>;
  version?: InputMaybe<OrderBy>;
};

export type IContentMetadataWhereInput = {
  changeset?: InputMaybe<StringFilterInput>;
  created?: InputMaybe<DateFilterInput>;
  displayName?: InputMaybe<SearchableStringFilterInput>;
  fallbackForLocale?: InputMaybe<StringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  lastModified?: InputMaybe<DateFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  published?: InputMaybe<DateFilterInput>;
  sortOrder?: InputMaybe<IntFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  types?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<ContentUrlWhereInput>;
  version?: InputMaybe<StringFilterInput>;
};

export type IData = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IData_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IData_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type IInstanceMetadata = {
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IInstanceMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IItemMetadata = {
  changeset?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  displayOption?: Maybe<Scalars['String']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IItemMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IMediaMetadata = {
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IMediaMetadatacontentArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IMediaMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type Icmp_Asset = {
  DateCreated?: Maybe<Scalars['Date']['output']>;
  DateModified?: Maybe<Scalars['Date']['output']>;
  ExpiryDate?: Maybe<Scalars['Date']['output']>;
  Fields?: Maybe<Array<Maybe<Icmp_Field>>>;
  FolderGuids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Id?: Maybe<Scalars['String']['output']>;
  Labels?: Maybe<Array<Maybe<cmp_AssetLabel>>>;
  LibraryPath?: Maybe<Scalars['String']['output']>;
  MimeType?: Maybe<Scalars['String']['output']>;
  ParentFolderGuid?: Maybe<Scalars['String']['output']>;
  Tags?: Maybe<Array<Maybe<cmp_Tag>>>;
  Title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Icmp_AssetIdArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Icmp_Asset_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Icmp_Asset_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type Icmp_Field = {
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Icmp_Field_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Icmp_Field_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type Icmp_FieldAutocomplete = {
  __typename?: 'Icmp_FieldAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type Icmp_FieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Icmp_FieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Icmp_FieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type Icmp_FieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type Icmp_FieldFacet = {
  __typename?: 'Icmp_FieldFacet';
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
};


export type Icmp_FieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Icmp_FieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Icmp_FieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type Icmp_FieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type Icmp_FieldOrderByInput = {
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type Icmp_FieldWhereInput = {
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<Icmp_FieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<Icmp_FieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<Icmp_FieldWhereInput>>>;
};

export type ImageElement = IData & _IComponent & _IContent & {
  __typename?: 'ImageElement';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  altText?: Maybe<Scalars['String']['output']>;
  imageLink?: Maybe<ContentReference>;
};


export type ImageElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ImageElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ImageElementAutocomplete = {
  __typename?: 'ImageElementAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  imageLink?: Maybe<ContentReferenceAutocomplete>;
};

export type ImageElementFacet = {
  __typename?: 'ImageElementFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  imageLink?: Maybe<ContentReferenceFacet>;
};

export type ImageElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  imageLink?: InputMaybe<ContentReferenceOrderByInput>;
};

export type ImageElementOutput = {
  __typename?: 'ImageElementOutput';
  autocomplete?: Maybe<ImageElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ImageElementFacet>;
  item?: Maybe<ImageElement>;
  items?: Maybe<Array<Maybe<ImageElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ImageElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ImageElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ImageElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ImageElementWhereInput>>>;
  imageLink?: InputMaybe<ContentReferenceWhereInput>;
};

export type ImageMedia = IData & _IContent & _IImage & _IMedia & {
  __typename?: 'ImageMedia';
  AltText?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type ImageMedia_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ImageMedia_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ImageMediaAutocomplete = {
  __typename?: 'ImageMediaAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ImageMediaFacet = {
  __typename?: 'ImageMediaFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ImageMediaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ImageMediaOutput = {
  __typename?: 'ImageMediaOutput';
  autocomplete?: Maybe<ImageMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ImageMediaFacet>;
  item?: Maybe<ImageMedia>;
  items?: Maybe<Array<Maybe<ImageMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ImageMediaOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
};

export type InstanceMetadata = IContentMetadata & IInstanceMetadata & {
  __typename?: 'InstanceMetadata';
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type InstanceMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IntFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Int']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `Factor` allows you to use a number value in a field to influence the `_score` directly. If used on a multi-valued field, then only the lowest value of the field is used in calculations. Default for `value` is `1`. Default for `modifier` is `NONE`. */
  factor?: InputMaybe<NumberFactor>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars['Int']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars['Int']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars['Int']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars['Int']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Int']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type ItemMetadata = IContentMetadata & IItemMetadata & {
  __typename?: 'ItemMetadata';
  changeset?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  displayOption?: Maybe<Scalars['String']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type ItemMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type LandingPage = IData & _IContent & _IPage & {
  __typename?: 'LandingPage';
  MainContentArea?: Maybe<Array<Maybe<_IContent>>>;
  SeoSettings?: Maybe<PageSeoSettingsProperty>;
  TopContentArea?: Maybe<Array<Maybe<_IContent>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type LandingPage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type LandingPage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type LandingPageAutocomplete = {
  __typename?: 'LandingPageAutocomplete';
  MainContentArea?: Maybe<_IContentAutocomplete>;
  SeoSettings?: Maybe<PageSeoSettingsPropertyAutocomplete>;
  TopContentArea?: Maybe<_IContentAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type LandingPageFacet = {
  __typename?: 'LandingPageFacet';
  MainContentArea?: Maybe<_IContentFacet>;
  SeoSettings?: Maybe<PageSeoSettingsPropertyFacet>;
  TopContentArea?: Maybe<_IContentFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type LandingPageOrderByInput = {
  MainContentArea?: InputMaybe<_IContentOrderByInput>;
  SeoSettings?: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  TopContentArea?: InputMaybe<_IContentOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type LandingPageOutput = {
  __typename?: 'LandingPageOutput';
  autocomplete?: Maybe<LandingPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<LandingPageFacet>;
  item?: Maybe<LandingPage>;
  items?: Maybe<Array<Maybe<LandingPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type LandingPageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LandingPageWhereInput = {
  MainContentArea?: InputMaybe<_IContentWhereInput>;
  SeoSettings?: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  TopContentArea?: InputMaybe<_IContentWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
};

export type LayoutSettingsBlock = IData & _IComponent & _IContent & {
  __typename?: 'LayoutSettingsBlock';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  appIdentifiers?: Maybe<Scalars['String']['output']>;
  contactInfo?: Maybe<RichText>;
  contactInfoHeading?: Maybe<Scalars['String']['output']>;
  copyright?: Maybe<Scalars['String']['output']>;
  footerMenus?: Maybe<Array<Maybe<_IContent>>>;
  legalLinks?: Maybe<Array<Maybe<Link>>>;
  mainMenu?: Maybe<Array<Maybe<_IContent>>>;
  serviceButtons?: Maybe<Array<Maybe<_IContent>>>;
};


export type LayoutSettingsBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type LayoutSettingsBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type LayoutSettingsBlockAutocomplete = {
  __typename?: 'LayoutSettingsBlockAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  appIdentifiers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  contactInfo?: Maybe<RichTextAutocomplete>;
  footerMenus?: Maybe<_IContentAutocomplete>;
  legalLinks?: Maybe<LinkAutocomplete>;
  mainMenu?: Maybe<_IContentAutocomplete>;
  serviceButtons?: Maybe<_IContentAutocomplete>;
};


export type LayoutSettingsBlockAutocompleteappIdentifiersArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type LayoutSettingsBlockFacet = {
  __typename?: 'LayoutSettingsBlockFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  appIdentifiers?: Maybe<Array<Maybe<StringFacet>>>;
  contactInfo?: Maybe<RichTextFacet>;
  footerMenus?: Maybe<_IContentFacet>;
  legalLinks?: Maybe<LinkFacet>;
  mainMenu?: Maybe<_IContentFacet>;
  serviceButtons?: Maybe<_IContentFacet>;
};


export type LayoutSettingsBlockFacetappIdentifiersArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LayoutSettingsBlockOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  appIdentifiers?: InputMaybe<OrderBy>;
  contactInfo?: InputMaybe<RichTextOrderByInput>;
  footerMenus?: InputMaybe<_IContentOrderByInput>;
  legalLinks?: InputMaybe<LinkOrderByInput>;
  mainMenu?: InputMaybe<_IContentOrderByInput>;
  serviceButtons?: InputMaybe<_IContentOrderByInput>;
};

export type LayoutSettingsBlockOutput = {
  __typename?: 'LayoutSettingsBlockOutput';
  autocomplete?: Maybe<LayoutSettingsBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<LayoutSettingsBlockFacet>;
  item?: Maybe<LayoutSettingsBlock>;
  items?: Maybe<Array<Maybe<LayoutSettingsBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type LayoutSettingsBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LayoutSettingsBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<LayoutSettingsBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<LayoutSettingsBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<LayoutSettingsBlockWhereInput>>>;
  appIdentifiers?: InputMaybe<StringFilterInput>;
  contactInfo?: InputMaybe<RichTextWhereInput>;
  footerMenus?: InputMaybe<_IContentWhereInput>;
  legalLinks?: InputMaybe<LinkWhereInput>;
  mainMenu?: InputMaybe<_IContentWhereInput>;
  serviceButtons?: InputMaybe<_IContentWhereInput>;
};

export type Link = {
  __typename?: 'Link';
  target?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<ContentUrl>;
};


export type LinktextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type LinkAutocomplete = {
  __typename?: 'LinkAutocomplete';
  target?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrlAutocomplete>;
};


export type LinkAutocompletetargetArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LinkAutocompletetitleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type LinkConfig = {
  from?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type LinkFacet = {
  __typename?: 'LinkFacet';
  target?: Maybe<Array<Maybe<StringFacet>>>;
  text?: Maybe<Array<Maybe<StringFacet>>>;
  title?: Maybe<Array<Maybe<StringFacet>>>;
  url?: Maybe<ContentUrlFacet>;
};


export type LinkFacettargetArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkFacettextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkFacettitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LinkOrderByInput = {
  target?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  url?: InputMaybe<ContentUrlOrderByInput>;
};

export enum LinkTypes {
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.owner`   |
   */
  ASSETS = 'ASSETS',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `ContentLink.GuidValue` |
   * | *to*        |        | `ParentLink.GuidValue`   |
   */
  DEFAULT = 'DEFAULT',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.container`   |
   */
  ITEMS = 'ITEMS',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.path` |
   * | *to*        |        | `_metadata.key`   |
   */
  PATH = 'PATH'
}

export type LinkWhereInput = {
  target?: InputMaybe<StringFilterInput>;
  text?: InputMaybe<SearchableStringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<ContentUrlWhereInput>;
};

export enum Locales {
  ALL = 'ALL',
  NEUTRAL = 'NEUTRAL',
  en = 'en'
}

export type MediaMetadata = IContentMetadata & IInstanceMetadata & IMediaMetadata & {
  __typename?: 'MediaMetadata';
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type MediaMetadatacontentArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type MediaMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type MegaMenuGroupBlock = IData & _IComponent & _IContent & {
  __typename?: 'MegaMenuGroupBlock';
  MegaMenuContentArea?: Maybe<Array<Maybe<_IContent>>>;
  MegaMenuUrl?: Maybe<ContentUrl>;
  MenuMenuHeading?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type MegaMenuGroupBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type MegaMenuGroupBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type MegaMenuGroupBlockAutocomplete = {
  __typename?: 'MegaMenuGroupBlockAutocomplete';
  MegaMenuContentArea?: Maybe<_IContentAutocomplete>;
  MegaMenuUrl?: Maybe<ContentUrlAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type MegaMenuGroupBlockFacet = {
  __typename?: 'MegaMenuGroupBlockFacet';
  MegaMenuContentArea?: Maybe<_IContentFacet>;
  MegaMenuUrl?: Maybe<ContentUrlFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type MegaMenuGroupBlockOrderByInput = {
  MegaMenuContentArea?: InputMaybe<_IContentOrderByInput>;
  MegaMenuUrl?: InputMaybe<ContentUrlOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type MegaMenuGroupBlockOutput = {
  __typename?: 'MegaMenuGroupBlockOutput';
  autocomplete?: Maybe<MegaMenuGroupBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<MegaMenuGroupBlockFacet>;
  item?: Maybe<MegaMenuGroupBlock>;
  items?: Maybe<Array<Maybe<MegaMenuGroupBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type MegaMenuGroupBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MegaMenuGroupBlockWhereInput = {
  MegaMenuContentArea?: InputMaybe<_IContentWhereInput>;
  MegaMenuUrl?: InputMaybe<ContentUrlWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
};

export type MenuNavigationBlock = IData & _IComponent & _IContent & {
  __typename?: 'MenuNavigationBlock';
  MenuNavigationHeading?: Maybe<Scalars['String']['output']>;
  NavigationLinks?: Maybe<Array<Maybe<Link>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type MenuNavigationBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type MenuNavigationBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type MenuNavigationBlockAutocomplete = {
  __typename?: 'MenuNavigationBlockAutocomplete';
  NavigationLinks?: Maybe<LinkAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type MenuNavigationBlockFacet = {
  __typename?: 'MenuNavigationBlockFacet';
  NavigationLinks?: Maybe<LinkFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type MenuNavigationBlockOrderByInput = {
  NavigationLinks?: InputMaybe<LinkOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type MenuNavigationBlockOutput = {
  __typename?: 'MenuNavigationBlockOutput';
  autocomplete?: Maybe<MenuNavigationBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<MenuNavigationBlockFacet>;
  item?: Maybe<MenuNavigationBlock>;
  items?: Maybe<Array<Maybe<MenuNavigationBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type MenuNavigationBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MenuNavigationBlockWhereInput = {
  NavigationLinks?: InputMaybe<LinkWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<MenuNavigationBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<MenuNavigationBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<MenuNavigationBlockWhereInput>>>;
};

export type NumberFacet = {
  __typename?: 'NumberFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Factor influences the score based of number values with a factor function */
export type NumberFactor = {
  modifier?: InputMaybe<FactorModifier>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type OdpEmbedBlock = IData & _IComponent & _IContent & {
  __typename?: 'OdpEmbedBlock';
  ContentId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type OdpEmbedBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OdpEmbedBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OdpEmbedBlockAutocomplete = {
  __typename?: 'OdpEmbedBlockAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type OdpEmbedBlockFacet = {
  __typename?: 'OdpEmbedBlockFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type OdpEmbedBlockOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type OdpEmbedBlockOutput = {
  __typename?: 'OdpEmbedBlockOutput';
  autocomplete?: Maybe<OdpEmbedBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OdpEmbedBlockFacet>;
  item?: Maybe<OdpEmbedBlock>;
  items?: Maybe<Array<Maybe<OdpEmbedBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OdpEmbedBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OdpEmbedBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<OdpEmbedBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OdpEmbedBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OdpEmbedBlockWhereInput>>>;
};

export enum OrderBy {
  ASC = 'ASC',
  DESC = 'DESC'
}

export enum OrderByFacetType {
  COUNT = 'COUNT',
  VALUE = 'VALUE'
}

export type PageSeoSettings = IData & _IComponent & _IContent & {
  __typename?: 'PageSeoSettings';
  GraphType?: Maybe<Scalars['String']['output']>;
  MetaDescription?: Maybe<Scalars['String']['output']>;
  MetaKeywords?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MetaTitle?: Maybe<Scalars['String']['output']>;
  SharingImage?: Maybe<ContentReference>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type PageSeoSettingsGraphTypeArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PageSeoSettingsMetaDescriptionArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PageSeoSettingsMetaKeywordsArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PageSeoSettingsMetaTitleArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PageSeoSettings_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PageSeoSettings_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type PageSeoSettingsAutocomplete = {
  __typename?: 'PageSeoSettingsAutocomplete';
  SharingImage?: Maybe<ContentReferenceAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type PageSeoSettingsFacet = {
  __typename?: 'PageSeoSettingsFacet';
  GraphType?: Maybe<Array<Maybe<StringFacet>>>;
  MetaDescription?: Maybe<Array<Maybe<StringFacet>>>;
  MetaKeywords?: Maybe<Array<Maybe<StringFacet>>>;
  MetaTitle?: Maybe<Array<Maybe<StringFacet>>>;
  SharingImage?: Maybe<ContentReferenceFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type PageSeoSettingsFacetGraphTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsFacetMetaDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsFacetMetaKeywordsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsFacetMetaTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type PageSeoSettingsOrderByInput = {
  GraphType?: InputMaybe<OrderBy>;
  MetaDescription?: InputMaybe<OrderBy>;
  MetaKeywords?: InputMaybe<OrderBy>;
  MetaTitle?: InputMaybe<OrderBy>;
  SharingImage?: InputMaybe<ContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type PageSeoSettingsOutput = {
  __typename?: 'PageSeoSettingsOutput';
  autocomplete?: Maybe<PageSeoSettingsAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<PageSeoSettingsFacet>;
  item?: Maybe<PageSeoSettings>;
  items?: Maybe<Array<Maybe<PageSeoSettings>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type PageSeoSettingsOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageSeoSettingsProperty = {
  __typename?: 'PageSeoSettingsProperty';
  GraphType?: Maybe<Scalars['String']['output']>;
  MetaDescription?: Maybe<Scalars['String']['output']>;
  MetaKeywords?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MetaTitle?: Maybe<Scalars['String']['output']>;
  SharingImage?: Maybe<ContentReference>;
};


export type PageSeoSettingsPropertyGraphTypeArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PageSeoSettingsPropertyMetaDescriptionArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PageSeoSettingsPropertyMetaKeywordsArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PageSeoSettingsPropertyMetaTitleArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type PageSeoSettingsPropertyAutocomplete = {
  __typename?: 'PageSeoSettingsPropertyAutocomplete';
  SharingImage?: Maybe<ContentReferenceAutocomplete>;
};

export type PageSeoSettingsPropertyFacet = {
  __typename?: 'PageSeoSettingsPropertyFacet';
  GraphType?: Maybe<Array<Maybe<StringFacet>>>;
  MetaDescription?: Maybe<Array<Maybe<StringFacet>>>;
  MetaKeywords?: Maybe<Array<Maybe<StringFacet>>>;
  MetaTitle?: Maybe<Array<Maybe<StringFacet>>>;
  SharingImage?: Maybe<ContentReferenceFacet>;
};


export type PageSeoSettingsPropertyFacetGraphTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsPropertyFacetMetaDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsPropertyFacetMetaKeywordsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsPropertyFacetMetaTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type PageSeoSettingsPropertyOrderByInput = {
  GraphType?: InputMaybe<OrderBy>;
  MetaDescription?: InputMaybe<OrderBy>;
  MetaKeywords?: InputMaybe<OrderBy>;
  MetaTitle?: InputMaybe<OrderBy>;
  SharingImage?: InputMaybe<ContentReferenceOrderByInput>;
};

export type PageSeoSettingsPropertyWhereInput = {
  GraphType?: InputMaybe<SearchableStringFilterInput>;
  MetaDescription?: InputMaybe<SearchableStringFilterInput>;
  MetaKeywords?: InputMaybe<SearchableStringFilterInput>;
  MetaTitle?: InputMaybe<SearchableStringFilterInput>;
  SharingImage?: InputMaybe<ContentReferenceWhereInput>;
};

export type PageSeoSettingsWhereInput = {
  GraphType?: InputMaybe<SearchableStringFilterInput>;
  MetaDescription?: InputMaybe<SearchableStringFilterInput>;
  MetaKeywords?: InputMaybe<SearchableStringFilterInput>;
  MetaTitle?: InputMaybe<SearchableStringFilterInput>;
  SharingImage?: InputMaybe<ContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
};

export type ParagraphElement = IData & _IComponent & _IContent & {
  __typename?: 'ParagraphElement';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  text?: Maybe<SearchableRichText>;
};


export type ParagraphElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ParagraphElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ParagraphElementAutocomplete = {
  __typename?: 'ParagraphElementAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ParagraphElementFacet = {
  __typename?: 'ParagraphElementFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  text?: Maybe<SearchableRichTextFacet>;
};

export type ParagraphElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  text?: InputMaybe<SearchableRichTextOrderByInput>;
};

export type ParagraphElementOutput = {
  __typename?: 'ParagraphElementOutput';
  autocomplete?: Maybe<ParagraphElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ParagraphElementFacet>;
  item?: Maybe<ParagraphElement>;
  items?: Maybe<Array<Maybe<ParagraphElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ParagraphElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ParagraphElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  text?: InputMaybe<SearchableRichTextWhereInput>;
};

export type Query = {
  __typename?: 'Query';
  ArticleListElement?: Maybe<ArticleListElementOutput>;
  BlankExperience?: Maybe<BlankExperienceOutput>;
  BlankSection?: Maybe<BlankSectionOutput>;
  BlogPostPage?: Maybe<BlogPostPageOutput>;
  BlogSectionExperience?: Maybe<BlogSectionExperienceOutput>;
  ButtonBlock?: Maybe<ButtonBlockOutput>;
  CTAElement?: Maybe<CTAElementOutput>;
  CarouselBlock?: Maybe<CarouselBlockOutput>;
  ContentRecsElement?: Maybe<ContentRecsElementOutput>;
  ContinueReadingComponent?: Maybe<ContinueReadingComponentOutput>;
  Data?: Maybe<DataOutput>;
  GenericMedia?: Maybe<GenericMediaOutput>;
  HeadingElement?: Maybe<HeadingElementOutput>;
  HeroBlock?: Maybe<HeroBlockOutput>;
  ImageElement?: Maybe<ImageElementOutput>;
  ImageMedia?: Maybe<ImageMediaOutput>;
  LandingPage?: Maybe<LandingPageOutput>;
  LayoutSettingsBlock?: Maybe<LayoutSettingsBlockOutput>;
  MegaMenuGroupBlock?: Maybe<MegaMenuGroupBlockOutput>;
  MenuNavigationBlock?: Maybe<MenuNavigationBlockOutput>;
  OdpEmbedBlock?: Maybe<OdpEmbedBlockOutput>;
  PageSeoSettings?: Maybe<PageSeoSettingsOutput>;
  ParagraphElement?: Maybe<ParagraphElementOutput>;
  QuoteBlock?: Maybe<QuoteBlockOutput>;
  RichTextElement?: Maybe<RichTextElementOutput>;
  SysContentFolder?: Maybe<SysContentFolderOutput>;
  TestimonialElement?: Maybe<TestimonialElementOutput>;
  TextBlock?: Maybe<TextBlockOutput>;
  VideoElement?: Maybe<VideoElementOutput>;
  VideoMedia?: Maybe<VideoMediaOutput>;
  _Component?: Maybe<_ComponentOutput>;
  _Content?: Maybe<_ContentOutput>;
  _Experience?: Maybe<_ExperienceOutput>;
  _Folder?: Maybe<_FolderOutput>;
  _Image?: Maybe<_ImageOutput>;
  _Media?: Maybe<_MediaOutput>;
  _Page?: Maybe<_PageOutput>;
  _Section?: Maybe<_SectionOutput>;
  _Video?: Maybe<_VideoOutput>;
  cmp_Asset?: Maybe<cmp_AssetOutput>;
  cmp_CheckboxField?: Maybe<cmp_CheckboxFieldOutput>;
  cmp_CurrencyField?: Maybe<cmp_CurrencyFieldOutput>;
  cmp_DateField?: Maybe<cmp_DateFieldOutput>;
  cmp_DropdownField?: Maybe<cmp_DropdownFieldOutput>;
  cmp_Field?: Maybe<cmp_FieldOutput>;
  cmp_ImageField?: Maybe<cmp_ImageFieldOutput>;
  cmp_LabelField?: Maybe<cmp_LabelFieldOutput>;
  cmp_NumberField?: Maybe<cmp_NumberFieldOutput>;
  cmp_PercentField?: Maybe<cmp_PercentFieldOutput>;
  cmp_PublicImageAsset?: Maybe<cmp_PublicImageAssetOutput>;
  cmp_PublicRawFileAsset?: Maybe<cmp_PublicRawFileAssetOutput>;
  cmp_PublicVideoAsset?: Maybe<cmp_PublicVideoAssetOutput>;
  cmp_RadioField?: Maybe<cmp_RadioFieldOutput>;
  cmp_RichTextField?: Maybe<cmp_RichTextFieldOutput>;
  cmp_StructuredContentAsset?: Maybe<cmp_StructuredContentAssetOutput>;
  cmp_TextAreaField?: Maybe<cmp_TextAreaFieldOutput>;
  cmp_TextField?: Maybe<cmp_TextFieldOutput>;
  cmp_VideoField?: Maybe<cmp_VideoFieldOutput>;
};


export type QueryArticleListElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticleListElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ArticleListElementWhereInput>;
};


export type QueryBlankExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryBlankSectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankSectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlankSectionWhereInput>;
};


export type QueryBlogPostPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlogPostPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlogPostPageWhereInput>;
};


export type QueryBlogSectionExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlogSectionExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlogSectionExperienceWhereInput>;
};


export type QueryButtonBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ButtonBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ButtonBlockWhereInput>;
};


export type QueryCTAElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CTAElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<CTAElementWhereInput>;
};


export type QueryCarouselBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CarouselBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<CarouselBlockWhereInput>;
};


export type QueryContentRecsElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContentRecsElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ContentRecsElementWhereInput>;
};


export type QueryContinueReadingComponentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContinueReadingComponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ContinueReadingComponentWhereInput>;
};


export type QueryDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<system_Locales>>>;
  orderBy?: InputMaybe<DataOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DataWhereInput>;
};


export type QueryGenericMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<GenericMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<GenericMediaWhereInput>;
};


export type QueryHeadingElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeadingElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<HeadingElementWhereInput>;
};


export type QueryHeroBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeroBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<HeroBlockWhereInput>;
};


export type QueryImageElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ImageElementWhereInput>;
};


export type QueryImageMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ImageMediaWhereInput>;
};


export type QueryLandingPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LandingPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<LandingPageWhereInput>;
};


export type QueryLayoutSettingsBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LayoutSettingsBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<LayoutSettingsBlockWhereInput>;
};


export type QueryMegaMenuGroupBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MegaMenuGroupBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<MegaMenuGroupBlockWhereInput>;
};


export type QueryMenuNavigationBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MenuNavigationBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<MenuNavigationBlockWhereInput>;
};


export type QueryOdpEmbedBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OdpEmbedBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<OdpEmbedBlockWhereInput>;
};


export type QueryPageSeoSettingsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PageSeoSettingsOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<PageSeoSettingsWhereInput>;
};


export type QueryParagraphElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ParagraphElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ParagraphElementWhereInput>;
};


export type QueryQuoteBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<QuoteBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<QuoteBlockWhereInput>;
};


export type QueryRichTextElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<RichTextElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<RichTextElementWhereInput>;
};


export type QuerySysContentFolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SysContentFolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryTestimonialElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TestimonialElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<TestimonialElementWhereInput>;
};


export type QueryTextBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TextBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<TextBlockWhereInput>;
};


export type QueryVideoElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<VideoElementWhereInput>;
};


export type QueryVideoMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<VideoMediaWhereInput>;
};


export type Query_ComponentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ComponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ComponentWhereInput>;
};


export type Query_ContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ContentWhereInput>;
};


export type Query_ExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ExperienceWhereInput>;
};


export type Query_FolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_FolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_FolderWhereInput>;
};


export type Query_ImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ImageWhereInput>;
};


export type Query_MediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_MediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_MediaWhereInput>;
};


export type Query_PageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_PageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_PageWhereInput>;
};


export type Query_SectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_SectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_SectionWhereInput>;
};


export type Query_VideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_VideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_VideoWhereInput>;
};


export type Querycmp_AssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_AssetOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_AssetWhereInput>;
};


export type Querycmp_CheckboxFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_CheckboxFieldOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_CheckboxFieldWhereInput>;
};


export type Querycmp_CurrencyFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_CurrencyFieldOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_CurrencyFieldWhereInput>;
};


export type Querycmp_DateFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_DateFieldOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_DateFieldWhereInput>;
};


export type Querycmp_DropdownFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_DropdownFieldOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_DropdownFieldWhereInput>;
};


export type Querycmp_FieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_FieldOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_FieldWhereInput>;
};


export type Querycmp_ImageFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_ImageFieldOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_ImageFieldWhereInput>;
};


export type Querycmp_LabelFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_LabelFieldOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_LabelFieldWhereInput>;
};


export type Querycmp_NumberFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_NumberFieldOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_NumberFieldWhereInput>;
};


export type Querycmp_PercentFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_PercentFieldOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_PercentFieldWhereInput>;
};


export type Querycmp_PublicImageAssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_PublicImageAssetOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_PublicImageAssetWhereInput>;
};


export type Querycmp_PublicRawFileAssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_PublicRawFileAssetOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_PublicRawFileAssetWhereInput>;
};


export type Querycmp_PublicVideoAssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_PublicVideoAssetOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_PublicVideoAssetWhereInput>;
};


export type Querycmp_RadioFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_RadioFieldOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_RadioFieldWhereInput>;
};


export type Querycmp_RichTextFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_RichTextFieldOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_RichTextFieldWhereInput>;
};


export type Querycmp_StructuredContentAssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_StructuredContentAssetOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_StructuredContentAssetWhereInput>;
};


export type Querycmp_TextAreaFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_TextAreaFieldOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_TextAreaFieldWhereInput>;
};


export type Querycmp_TextFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_TextFieldOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_TextFieldWhereInput>;
};


export type Querycmp_VideoFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_VideoFieldOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_VideoFieldWhereInput>;
};

export type QueryRef = {
  __typename?: 'QueryRef';
  ArticleListElement?: Maybe<ArticleListElementOutput>;
  BlankExperience?: Maybe<BlankExperienceOutput>;
  BlankSection?: Maybe<BlankSectionOutput>;
  BlogPostPage?: Maybe<BlogPostPageOutput>;
  BlogSectionExperience?: Maybe<BlogSectionExperienceOutput>;
  ButtonBlock?: Maybe<ButtonBlockOutput>;
  CTAElement?: Maybe<CTAElementOutput>;
  CarouselBlock?: Maybe<CarouselBlockOutput>;
  ContentRecsElement?: Maybe<ContentRecsElementOutput>;
  ContinueReadingComponent?: Maybe<ContinueReadingComponentOutput>;
  Data?: Maybe<DataOutput>;
  GenericMedia?: Maybe<GenericMediaOutput>;
  HeadingElement?: Maybe<HeadingElementOutput>;
  HeroBlock?: Maybe<HeroBlockOutput>;
  ImageElement?: Maybe<ImageElementOutput>;
  ImageMedia?: Maybe<ImageMediaOutput>;
  LandingPage?: Maybe<LandingPageOutput>;
  LayoutSettingsBlock?: Maybe<LayoutSettingsBlockOutput>;
  MegaMenuGroupBlock?: Maybe<MegaMenuGroupBlockOutput>;
  MenuNavigationBlock?: Maybe<MenuNavigationBlockOutput>;
  OdpEmbedBlock?: Maybe<OdpEmbedBlockOutput>;
  PageSeoSettings?: Maybe<PageSeoSettingsOutput>;
  ParagraphElement?: Maybe<ParagraphElementOutput>;
  QuoteBlock?: Maybe<QuoteBlockOutput>;
  RichTextElement?: Maybe<RichTextElementOutput>;
  SysContentFolder?: Maybe<SysContentFolderOutput>;
  TestimonialElement?: Maybe<TestimonialElementOutput>;
  TextBlock?: Maybe<TextBlockOutput>;
  VideoElement?: Maybe<VideoElementOutput>;
  VideoMedia?: Maybe<VideoMediaOutput>;
  _Component?: Maybe<_ComponentOutput>;
  _Content?: Maybe<_ContentOutput>;
  _Experience?: Maybe<_ExperienceOutput>;
  _Folder?: Maybe<_FolderOutput>;
  _Image?: Maybe<_ImageOutput>;
  _Media?: Maybe<_MediaOutput>;
  _Page?: Maybe<_PageOutput>;
  _Section?: Maybe<_SectionOutput>;
  _Video?: Maybe<_VideoOutput>;
  cmp_Asset?: Maybe<cmp_AssetOutput>;
  cmp_CheckboxField?: Maybe<cmp_CheckboxFieldOutput>;
  cmp_CurrencyField?: Maybe<cmp_CurrencyFieldOutput>;
  cmp_DateField?: Maybe<cmp_DateFieldOutput>;
  cmp_DropdownField?: Maybe<cmp_DropdownFieldOutput>;
  cmp_Field?: Maybe<cmp_FieldOutput>;
  cmp_ImageField?: Maybe<cmp_ImageFieldOutput>;
  cmp_LabelField?: Maybe<cmp_LabelFieldOutput>;
  cmp_NumberField?: Maybe<cmp_NumberFieldOutput>;
  cmp_PercentField?: Maybe<cmp_PercentFieldOutput>;
  cmp_PublicImageAsset?: Maybe<cmp_PublicImageAssetOutput>;
  cmp_PublicRawFileAsset?: Maybe<cmp_PublicRawFileAssetOutput>;
  cmp_PublicVideoAsset?: Maybe<cmp_PublicVideoAssetOutput>;
  cmp_RadioField?: Maybe<cmp_RadioFieldOutput>;
  cmp_RichTextField?: Maybe<cmp_RichTextFieldOutput>;
  cmp_StructuredContentAsset?: Maybe<cmp_StructuredContentAssetOutput>;
  cmp_TextAreaField?: Maybe<cmp_TextAreaFieldOutput>;
  cmp_TextField?: Maybe<cmp_TextFieldOutput>;
  cmp_VideoField?: Maybe<cmp_VideoFieldOutput>;
};


export type QueryRefArticleListElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticleListElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ArticleListElementWhereInput>;
};


export type QueryRefBlankExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryRefBlankSectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankSectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlankSectionWhereInput>;
};


export type QueryRefBlogPostPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlogPostPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlogPostPageWhereInput>;
};


export type QueryRefBlogSectionExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlogSectionExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlogSectionExperienceWhereInput>;
};


export type QueryRefButtonBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ButtonBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ButtonBlockWhereInput>;
};


export type QueryRefCTAElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CTAElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<CTAElementWhereInput>;
};


export type QueryRefCarouselBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CarouselBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<CarouselBlockWhereInput>;
};


export type QueryRefContentRecsElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContentRecsElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ContentRecsElementWhereInput>;
};


export type QueryRefContinueReadingComponentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContinueReadingComponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ContinueReadingComponentWhereInput>;
};


export type QueryRefDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<system_Locales>>>;
  orderBy?: InputMaybe<DataOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DataWhereInput>;
};


export type QueryRefGenericMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<GenericMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<GenericMediaWhereInput>;
};


export type QueryRefHeadingElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeadingElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<HeadingElementWhereInput>;
};


export type QueryRefHeroBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeroBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<HeroBlockWhereInput>;
};


export type QueryRefImageElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ImageElementWhereInput>;
};


export type QueryRefImageMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ImageMediaWhereInput>;
};


export type QueryRefLandingPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LandingPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<LandingPageWhereInput>;
};


export type QueryRefLayoutSettingsBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LayoutSettingsBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<LayoutSettingsBlockWhereInput>;
};


export type QueryRefMegaMenuGroupBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MegaMenuGroupBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<MegaMenuGroupBlockWhereInput>;
};


export type QueryRefMenuNavigationBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MenuNavigationBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<MenuNavigationBlockWhereInput>;
};


export type QueryRefOdpEmbedBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OdpEmbedBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<OdpEmbedBlockWhereInput>;
};


export type QueryRefPageSeoSettingsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PageSeoSettingsOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<PageSeoSettingsWhereInput>;
};


export type QueryRefParagraphElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ParagraphElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ParagraphElementWhereInput>;
};


export type QueryRefQuoteBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<QuoteBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<QuoteBlockWhereInput>;
};


export type QueryRefRichTextElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<RichTextElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<RichTextElementWhereInput>;
};


export type QueryRefSysContentFolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SysContentFolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryRefTestimonialElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TestimonialElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<TestimonialElementWhereInput>;
};


export type QueryRefTextBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TextBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<TextBlockWhereInput>;
};


export type QueryRefVideoElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<VideoElementWhereInput>;
};


export type QueryRefVideoMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<VideoMediaWhereInput>;
};


export type QueryRef_ComponentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ComponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ComponentWhereInput>;
};


export type QueryRef_ContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ContentWhereInput>;
};


export type QueryRef_ExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ExperienceWhereInput>;
};


export type QueryRef_FolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_FolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_FolderWhereInput>;
};


export type QueryRef_ImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ImageWhereInput>;
};


export type QueryRef_MediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_MediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_MediaWhereInput>;
};


export type QueryRef_PageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_PageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_PageWhereInput>;
};


export type QueryRef_SectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_SectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_SectionWhereInput>;
};


export type QueryRef_VideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_VideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_VideoWhereInput>;
};


export type QueryRefcmp_AssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_AssetOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_AssetWhereInput>;
};


export type QueryRefcmp_CheckboxFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_CheckboxFieldOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_CheckboxFieldWhereInput>;
};


export type QueryRefcmp_CurrencyFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_CurrencyFieldOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_CurrencyFieldWhereInput>;
};


export type QueryRefcmp_DateFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_DateFieldOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_DateFieldWhereInput>;
};


export type QueryRefcmp_DropdownFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_DropdownFieldOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_DropdownFieldWhereInput>;
};


export type QueryRefcmp_FieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_FieldOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_FieldWhereInput>;
};


export type QueryRefcmp_ImageFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_ImageFieldOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_ImageFieldWhereInput>;
};


export type QueryRefcmp_LabelFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_LabelFieldOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_LabelFieldWhereInput>;
};


export type QueryRefcmp_NumberFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_NumberFieldOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_NumberFieldWhereInput>;
};


export type QueryRefcmp_PercentFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_PercentFieldOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_PercentFieldWhereInput>;
};


export type QueryRefcmp_PublicImageAssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_PublicImageAssetOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_PublicImageAssetWhereInput>;
};


export type QueryRefcmp_PublicRawFileAssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_PublicRawFileAssetOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_PublicRawFileAssetWhereInput>;
};


export type QueryRefcmp_PublicVideoAssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_PublicVideoAssetOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_PublicVideoAssetWhereInput>;
};


export type QueryRefcmp_RadioFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_RadioFieldOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_RadioFieldWhereInput>;
};


export type QueryRefcmp_RichTextFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_RichTextFieldOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_RichTextFieldWhereInput>;
};


export type QueryRefcmp_StructuredContentAssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_StructuredContentAssetOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_StructuredContentAssetWhereInput>;
};


export type QueryRefcmp_TextAreaFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_TextAreaFieldOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_TextAreaFieldWhereInput>;
};


export type QueryRefcmp_TextFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_TextFieldOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_TextFieldWhereInput>;
};


export type QueryRefcmp_VideoFieldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<cmp_Locales>>>;
  orderBy?: InputMaybe<cmp_VideoFieldOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<cmp_VideoFieldWhereInput>;
};

export type QuoteBlock = IData & _IComponent & _IContent & {
  __typename?: 'QuoteBlock';
  QuoteActive?: Maybe<Scalars['Boolean']['output']>;
  QuoteColor?: Maybe<Scalars['String']['output']>;
  QuoteProfileLocation?: Maybe<Scalars['String']['output']>;
  QuoteProfileName?: Maybe<Scalars['String']['output']>;
  QuoteProfilePicture?: Maybe<ContentReference>;
  QuoteText?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type QuoteBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type QuoteBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type QuoteBlockAutocomplete = {
  __typename?: 'QuoteBlockAutocomplete';
  QuoteProfilePicture?: Maybe<ContentReferenceAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type QuoteBlockFacet = {
  __typename?: 'QuoteBlockFacet';
  QuoteProfilePicture?: Maybe<ContentReferenceFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type QuoteBlockOrderByInput = {
  QuoteProfilePicture?: InputMaybe<ContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type QuoteBlockOutput = {
  __typename?: 'QuoteBlockOutput';
  autocomplete?: Maybe<QuoteBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<QuoteBlockFacet>;
  item?: Maybe<QuoteBlock>;
  items?: Maybe<Array<Maybe<QuoteBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type QuoteBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuoteBlockWhereInput = {
  QuoteProfilePicture?: InputMaybe<ContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<QuoteBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<QuoteBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<QuoteBlockWhereInput>>>;
};

export type RangeFacetsInput = {
  from?: InputMaybe<Scalars['Int']['input']>;
  to?: InputMaybe<Scalars['Int']['input']>;
};

export enum Ranking {
  BOOST_ONLY = 'BOOST_ONLY',
  DOC = 'DOC',
  RELEVANCE = 'RELEVANCE',
  SEMANTIC = 'SEMANTIC'
}

export type RichText = {
  __typename?: 'RichText';
  html?: Maybe<Scalars['String']['output']>;
  json?: Maybe<Scalars['JSON']['output']>;
};

export type RichTextAutocomplete = {
  __typename?: 'RichTextAutocomplete';
  html?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type RichTextAutocompletehtmlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type RichTextElement = IData & _IComponent & _IContent & {
  __typename?: 'RichTextElement';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  text?: Maybe<SearchableRichText>;
};


export type RichTextElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type RichTextElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type RichTextElementAutocomplete = {
  __typename?: 'RichTextElementAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type RichTextElementFacet = {
  __typename?: 'RichTextElementFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  text?: Maybe<SearchableRichTextFacet>;
};

export type RichTextElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  text?: InputMaybe<SearchableRichTextOrderByInput>;
};

export type RichTextElementOutput = {
  __typename?: 'RichTextElementOutput';
  autocomplete?: Maybe<RichTextElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<RichTextElementFacet>;
  item?: Maybe<RichTextElement>;
  items?: Maybe<Array<Maybe<RichTextElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type RichTextElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RichTextElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<RichTextElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<RichTextElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<RichTextElementWhereInput>>>;
  text?: InputMaybe<SearchableRichTextWhereInput>;
};

export type RichTextFacet = {
  __typename?: 'RichTextFacet';
  html?: Maybe<Array<Maybe<StringFacet>>>;
};


export type RichTextFacethtmlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type RichTextOrderByInput = {
  html?: InputMaybe<OrderBy>;
};

export type RichTextWhereInput = {
  html?: InputMaybe<StringFilterInput>;
};

export type SearchableRichText = {
  __typename?: 'SearchableRichText';
  html?: Maybe<Scalars['String']['output']>;
  json?: Maybe<Scalars['JSON']['output']>;
};


export type SearchableRichTexthtmlArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type SearchableRichTextFacet = {
  __typename?: 'SearchableRichTextFacet';
  html?: Maybe<Array<Maybe<StringFacet>>>;
};


export type SearchableRichTextFacethtmlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type SearchableRichTextOrderByInput = {
  html?: InputMaybe<OrderBy>;
};

export type SearchableRichTextWhereInput = {
  html?: InputMaybe<SearchableStringFilterInput>;
};

export type SearchableStringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `contains` performs full-text search on a word or phrase. */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars['String']['input']>;
  /** `match` performs full-text search on a word or phrase where less relevant items are also returned. The `match` operator is only supported for `searchable` fields. It will improve fulltext search by making it easier to match on words. More exact matches will be ranked higher, less exact matches will be ranked lower. The `match` operator is supported with synonyms and fuzzy search. */
  match?: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export type StringFacet = {
  __typename?: 'StringFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type StringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `ends_with` retrieves matches that end with a certain value (suffix). */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export enum SynonymSlot {
  /** synonym slot 1 */
  ONE = 'ONE',
  /** synonym slot 2 */
  TWO = 'TWO'
}

export type SysContentFolder = IData & _IContent & _IFolder & {
  __typename?: 'SysContentFolder';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type SysContentFolder_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SysContentFolder_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type SysContentFolderAutocomplete = {
  __typename?: 'SysContentFolderAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type SysContentFolderFacet = {
  __typename?: 'SysContentFolderFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type SysContentFolderOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type SysContentFolderOutput = {
  __typename?: 'SysContentFolderOutput';
  autocomplete?: Maybe<SysContentFolderAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<SysContentFolderFacet>;
  item?: Maybe<SysContentFolder>;
  items?: Maybe<Array<Maybe<SysContentFolder>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type SysContentFolderOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SysContentFolderWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
};

export type TestimonialElement = IData & _IComponent & _IContent & {
  __typename?: 'TestimonialElement';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  customerImage?: Maybe<ContentReference>;
  customerLocation?: Maybe<Scalars['String']['output']>;
  customerName?: Maybe<Scalars['String']['output']>;
  referenceText?: Maybe<RichText>;
  referenceTitle?: Maybe<Scalars['String']['output']>;
};


export type TestimonialElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type TestimonialElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type TestimonialElementAutocomplete = {
  __typename?: 'TestimonialElementAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  customerImage?: Maybe<ContentReferenceAutocomplete>;
  referenceText?: Maybe<RichTextAutocomplete>;
};

export type TestimonialElementFacet = {
  __typename?: 'TestimonialElementFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  customerImage?: Maybe<ContentReferenceFacet>;
  referenceText?: Maybe<RichTextFacet>;
};

export type TestimonialElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  customerImage?: InputMaybe<ContentReferenceOrderByInput>;
  referenceText?: InputMaybe<RichTextOrderByInput>;
};

export type TestimonialElementOutput = {
  __typename?: 'TestimonialElementOutput';
  autocomplete?: Maybe<TestimonialElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<TestimonialElementFacet>;
  item?: Maybe<TestimonialElement>;
  items?: Maybe<Array<Maybe<TestimonialElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type TestimonialElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<TestimonialElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<TestimonialElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<TestimonialElementWhereInput>>>;
  customerImage?: InputMaybe<ContentReferenceWhereInput>;
  referenceText?: InputMaybe<RichTextWhereInput>;
};

export type TextBlock = IData & _IComponent & _IContent & {
  __typename?: 'TextBlock';
  TextBlockDescription?: Maybe<RichText>;
  TextBlockHeading?: Maybe<Scalars['String']['output']>;
  TextBlockHeadingSize?: Maybe<Scalars['String']['output']>;
  TextBlockOverline?: Maybe<Scalars['String']['output']>;
  TextBlockWidth?: Maybe<Scalars['String']['output']>;
  TextCenter?: Maybe<Scalars['Boolean']['output']>;
  TextClassName?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type TextBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type TextBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type TextBlockAutocomplete = {
  __typename?: 'TextBlockAutocomplete';
  TextBlockDescription?: Maybe<RichTextAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type TextBlockFacet = {
  __typename?: 'TextBlockFacet';
  TextBlockDescription?: Maybe<RichTextFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type TextBlockOrderByInput = {
  TextBlockDescription?: InputMaybe<RichTextOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type TextBlockOutput = {
  __typename?: 'TextBlockOutput';
  autocomplete?: Maybe<TextBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<TextBlockFacet>;
  item?: Maybe<TextBlock>;
  items?: Maybe<Array<Maybe<TextBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type TextBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TextBlockWhereInput = {
  TextBlockDescription?: InputMaybe<RichTextWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
};

export type VideoElement = IData & _IComponent & _IContent & {
  __typename?: 'VideoElement';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  placeholder?: Maybe<ContentReference>;
  title?: Maybe<Scalars['String']['output']>;
  video?: Maybe<ContentReference>;
};


export type VideoElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type VideoElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type VideoElementAutocomplete = {
  __typename?: 'VideoElementAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  placeholder?: Maybe<ContentReferenceAutocomplete>;
  video?: Maybe<ContentReferenceAutocomplete>;
};

export type VideoElementFacet = {
  __typename?: 'VideoElementFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  placeholder?: Maybe<ContentReferenceFacet>;
  video?: Maybe<ContentReferenceFacet>;
};

export type VideoElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  placeholder?: InputMaybe<ContentReferenceOrderByInput>;
  video?: InputMaybe<ContentReferenceOrderByInput>;
};

export type VideoElementOutput = {
  __typename?: 'VideoElementOutput';
  autocomplete?: Maybe<VideoElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<VideoElementFacet>;
  item?: Maybe<VideoElement>;
  items?: Maybe<Array<Maybe<VideoElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type VideoElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<VideoElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<VideoElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<VideoElementWhereInput>>>;
  placeholder?: InputMaybe<ContentReferenceWhereInput>;
  video?: InputMaybe<ContentReferenceWhereInput>;
};

export type VideoMedia = IData & _IContent & _IMedia & _IVideo & {
  __typename?: 'VideoMedia';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type VideoMedia_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type VideoMedia_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type VideoMediaAutocomplete = {
  __typename?: 'VideoMediaAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type VideoMediaFacet = {
  __typename?: 'VideoMediaFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type VideoMediaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type VideoMediaOutput = {
  __typename?: 'VideoMediaOutput';
  autocomplete?: Maybe<VideoMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<VideoMediaFacet>;
  item?: Maybe<VideoMedia>;
  items?: Maybe<Array<Maybe<VideoMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type VideoMediaOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
};

export type _Component = IData & _IComponent & _IContent & {
  __typename?: '_Component';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _Component_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Component_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ComponentAutocomplete = {
  __typename?: '_ComponentAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _ComponentFacet = {
  __typename?: '_ComponentFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _ComponentOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ComponentOutput = {
  __typename?: '_ComponentOutput';
  autocomplete?: Maybe<_ComponentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ComponentFacet>;
  item?: Maybe<_IComponent>;
  items?: Maybe<Array<Maybe<_IComponent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ComponentOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ComponentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
};

export type _Content = IData & _IContent & {
  __typename?: '_Content';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _Content_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Content_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ContentAutocomplete = {
  __typename?: '_ContentAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _ContentFacet = {
  __typename?: '_ContentFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _ContentOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ContentOutput = {
  __typename?: '_ContentOutput';
  autocomplete?: Maybe<_ContentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ContentFacet>;
  item?: Maybe<_IContent>;
  items?: Maybe<Array<Maybe<_IContent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ContentOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ContentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
};

export type _Experience = IData & _IContent & _IExperience & _IPage & {
  __typename?: '_Experience';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _Experience_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Experience_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ExperienceAutocomplete = {
  __typename?: '_ExperienceAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _ExperienceFacet = {
  __typename?: '_ExperienceFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type _ExperienceOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _ExperienceOutput = {
  __typename?: '_ExperienceOutput';
  autocomplete?: Maybe<_ExperienceAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ExperienceFacet>;
  item?: Maybe<_IExperience>;
  items?: Maybe<Array<Maybe<_IExperience>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ExperienceOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ExperienceWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Folder = IData & _IContent & _IFolder & {
  __typename?: '_Folder';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _Folder_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Folder_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _FolderAutocomplete = {
  __typename?: '_FolderAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _FolderFacet = {
  __typename?: '_FolderFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _FolderOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _FolderOutput = {
  __typename?: '_FolderOutput';
  autocomplete?: Maybe<_FolderAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_FolderFacet>;
  item?: Maybe<_IFolder>;
  items?: Maybe<Array<Maybe<_IFolder>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _FolderOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _FolderWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
};

export type _IComponent = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _IComponent_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IComponent_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IContent = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _IContent_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IContent_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IContentAutocomplete = {
  __typename?: '_IContentAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _IContentFacet = {
  __typename?: '_IContentFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _IContentOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _IContentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
};

export type _IExperience = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _IExperience_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IExperience_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IFolder = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _IFolder_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IFolder_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IImage = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _IImage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IImage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IMedia = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _IMedia_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IMedia_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IPage = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _IPage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IPage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ISection = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _ISection_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _ISection_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IVideo = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _IVideo_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IVideo_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _Image = IData & _IContent & _IImage & _IMedia & {
  __typename?: '_Image';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _Image_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Image_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ImageAutocomplete = {
  __typename?: '_ImageAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _ImageFacet = {
  __typename?: '_ImageFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _ImageOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ImageOutput = {
  __typename?: '_ImageOutput';
  autocomplete?: Maybe<_ImageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ImageFacet>;
  item?: Maybe<_IImage>;
  items?: Maybe<Array<Maybe<_IImage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ImageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ImageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
};

export type _Media = IData & _IContent & _IMedia & {
  __typename?: '_Media';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _Media_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Media_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _MediaAutocomplete = {
  __typename?: '_MediaAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _MediaFacet = {
  __typename?: '_MediaFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _MediaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _MediaOutput = {
  __typename?: '_MediaOutput';
  autocomplete?: Maybe<_MediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_MediaFacet>;
  item?: Maybe<_IMedia>;
  items?: Maybe<Array<Maybe<_IMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _MediaOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _MediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
};

export type _Page = IData & _IContent & _IPage & {
  __typename?: '_Page';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _Page_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Page_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _PageAutocomplete = {
  __typename?: '_PageAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _PageFacet = {
  __typename?: '_PageFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _PageOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _PageOutput = {
  __typename?: '_PageOutput';
  autocomplete?: Maybe<_PageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_PageFacet>;
  item?: Maybe<_IPage>;
  items?: Maybe<Array<Maybe<_IPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _PageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _PageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
};

export type _Section = IData & _IComponent & _IContent & _ISection & {
  __typename?: '_Section';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _Section_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Section_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _SectionAutocomplete = {
  __typename?: '_SectionAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _SectionFacet = {
  __typename?: '_SectionFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type _SectionOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _SectionOutput = {
  __typename?: '_SectionOutput';
  autocomplete?: Maybe<_SectionAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_SectionFacet>;
  item?: Maybe<_ISection>;
  items?: Maybe<Array<Maybe<_ISection>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _SectionOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _SectionWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Video = IData & _IContent & _IMedia & _IVideo & {
  __typename?: '_Video';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _Video_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Video_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _VideoAutocomplete = {
  __typename?: '_VideoAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _VideoFacet = {
  __typename?: '_VideoFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _VideoOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _VideoOutput = {
  __typename?: '_VideoOutput';
  autocomplete?: Maybe<_VideoAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_VideoFacet>;
  item?: Maybe<_IVideo>;
  items?: Maybe<Array<Maybe<_IVideo>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _VideoOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _VideoWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
};

export type cmp_Asset = IData & Icmp_Asset & {
  __typename?: 'cmp_Asset';
  DateCreated?: Maybe<Scalars['Date']['output']>;
  DateModified?: Maybe<Scalars['Date']['output']>;
  ExpiryDate?: Maybe<Scalars['Date']['output']>;
  Fields?: Maybe<Array<Maybe<Icmp_Field>>>;
  FolderGuids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Id?: Maybe<Scalars['String']['output']>;
  Labels?: Maybe<Array<Maybe<cmp_AssetLabel>>>;
  LibraryPath?: Maybe<Scalars['String']['output']>;
  MimeType?: Maybe<Scalars['String']['output']>;
  ParentFolderGuid?: Maybe<Scalars['String']['output']>;
  Tags?: Maybe<Array<Maybe<cmp_Tag>>>;
  Title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type cmp_AssetIdArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type cmp_Asset_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type cmp_Asset_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type cmp_AssetAutocomplete = {
  __typename?: 'cmp_AssetAutocomplete';
  Fields?: Maybe<Icmp_FieldAutocomplete>;
  FolderGuids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Labels?: Maybe<cmp_AssetLabelAutocomplete>;
  LibraryPath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MimeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentFolderGuid?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Tags?: Maybe<cmp_TagAutocomplete>;
  Title?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type cmp_AssetAutocompleteFolderGuidsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_AssetAutocompleteLibraryPathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_AssetAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_AssetAutocompleteParentFolderGuidArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_AssetAutocompleteTitleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type cmp_AssetFacet = {
  __typename?: 'cmp_AssetFacet';
  DateCreated?: Maybe<Array<Maybe<DateFacet>>>;
  DateModified?: Maybe<Array<Maybe<DateFacet>>>;
  ExpiryDate?: Maybe<Array<Maybe<DateFacet>>>;
  Fields?: Maybe<Icmp_FieldFacet>;
  FolderGuids?: Maybe<Array<Maybe<StringFacet>>>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Labels?: Maybe<cmp_AssetLabelFacet>;
  LibraryPath?: Maybe<Array<Maybe<StringFacet>>>;
  MimeType?: Maybe<Array<Maybe<StringFacet>>>;
  ParentFolderGuid?: Maybe<Array<Maybe<StringFacet>>>;
  Tags?: Maybe<cmp_TagFacet>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
};


export type cmp_AssetFacetDateCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type cmp_AssetFacetDateModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type cmp_AssetFacetExpiryDateArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type cmp_AssetFacetFolderGuidsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_AssetFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_AssetFacetLibraryPathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_AssetFacetMimeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_AssetFacetParentFolderGuidArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_AssetFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type cmp_AssetLabel = {
  __typename?: 'cmp_AssetLabel';
  Group?: Maybe<cmp_AssetLabelGroup>;
  Values?: Maybe<Array<Maybe<cmp_AssetLabelValue>>>;
};

export type cmp_AssetLabelAutocomplete = {
  __typename?: 'cmp_AssetLabelAutocomplete';
  Group?: Maybe<cmp_AssetLabelGroupAutocomplete>;
};

export type cmp_AssetLabelFacet = {
  __typename?: 'cmp_AssetLabelFacet';
  Group?: Maybe<cmp_AssetLabelGroupFacet>;
  Values?: Maybe<cmp_AssetLabelValueFacet>;
};

export type cmp_AssetLabelGroup = {
  __typename?: 'cmp_AssetLabelGroup';
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
};

export type cmp_AssetLabelGroupAutocomplete = {
  __typename?: 'cmp_AssetLabelGroupAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type cmp_AssetLabelGroupAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_AssetLabelGroupAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type cmp_AssetLabelGroupFacet = {
  __typename?: 'cmp_AssetLabelGroupFacet';
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type cmp_AssetLabelGroupFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_AssetLabelGroupFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type cmp_AssetLabelGroupOrderByInput = {
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
};

export type cmp_AssetLabelGroupWhereInput = {
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
};

export type cmp_AssetLabelOrderByInput = {
  Group?: InputMaybe<cmp_AssetLabelGroupOrderByInput>;
  Values?: InputMaybe<cmp_AssetLabelValueOrderByInput>;
};

export type cmp_AssetLabelValue = {
  __typename?: 'cmp_AssetLabelValue';
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
};

export type cmp_AssetLabelValueFacet = {
  __typename?: 'cmp_AssetLabelValueFacet';
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type cmp_AssetLabelValueFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_AssetLabelValueFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type cmp_AssetLabelValueOrderByInput = {
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
};

export type cmp_AssetLabelValueWhereInput = {
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
};

export type cmp_AssetLabelWhereInput = {
  Group?: InputMaybe<cmp_AssetLabelGroupWhereInput>;
  Values?: InputMaybe<cmp_AssetLabelValueWhereInput>;
};

export type cmp_AssetOrderByInput = {
  DateCreated?: InputMaybe<OrderBy>;
  DateModified?: InputMaybe<OrderBy>;
  ExpiryDate?: InputMaybe<OrderBy>;
  Fields?: InputMaybe<Icmp_FieldOrderByInput>;
  FolderGuids?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Labels?: InputMaybe<cmp_AssetLabelOrderByInput>;
  LibraryPath?: InputMaybe<OrderBy>;
  MimeType?: InputMaybe<OrderBy>;
  ParentFolderGuid?: InputMaybe<OrderBy>;
  Tags?: InputMaybe<cmp_TagOrderByInput>;
  Title?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type cmp_AssetOutput = {
  __typename?: 'cmp_AssetOutput';
  autocomplete?: Maybe<cmp_AssetAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<cmp_AssetFacet>;
  item?: Maybe<Icmp_Asset>;
  items?: Maybe<Array<Maybe<Icmp_Asset>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type cmp_AssetOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type cmp_AssetWhereInput = {
  DateCreated?: InputMaybe<DateFilterInput>;
  DateModified?: InputMaybe<DateFilterInput>;
  ExpiryDate?: InputMaybe<DateFilterInput>;
  Fields?: InputMaybe<Icmp_FieldWhereInput>;
  FolderGuids?: InputMaybe<StringFilterInput>;
  Id?: InputMaybe<SearchableStringFilterInput>;
  Labels?: InputMaybe<cmp_AssetLabelWhereInput>;
  LibraryPath?: InputMaybe<StringFilterInput>;
  MimeType?: InputMaybe<StringFilterInput>;
  ParentFolderGuid?: InputMaybe<StringFilterInput>;
  Tags?: InputMaybe<cmp_TagWhereInput>;
  Title?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<cmp_AssetWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<cmp_AssetWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<cmp_AssetWhereInput>>>;
};

export type cmp_CheckboxField = IData & Icmp_Field & {
  __typename?: 'cmp_CheckboxField';
  Choices?: Maybe<Array<Maybe<cmp_FieldChoiceProperty>>>;
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type cmp_CheckboxField_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type cmp_CheckboxField_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type cmp_CheckboxFieldAutocomplete = {
  __typename?: 'cmp_CheckboxFieldAutocomplete';
  Choices?: Maybe<cmp_FieldChoicePropertyAutocomplete>;
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type cmp_CheckboxFieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_CheckboxFieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_CheckboxFieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_CheckboxFieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type cmp_CheckboxFieldFacet = {
  __typename?: 'cmp_CheckboxFieldFacet';
  Choices?: Maybe<cmp_FieldChoicePropertyFacet>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
};


export type cmp_CheckboxFieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_CheckboxFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_CheckboxFieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_CheckboxFieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type cmp_CheckboxFieldOrderByInput = {
  Choices?: InputMaybe<cmp_FieldChoicePropertyOrderByInput>;
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type cmp_CheckboxFieldOutput = {
  __typename?: 'cmp_CheckboxFieldOutput';
  autocomplete?: Maybe<cmp_CheckboxFieldAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<cmp_CheckboxFieldFacet>;
  item?: Maybe<cmp_CheckboxField>;
  items?: Maybe<Array<Maybe<cmp_CheckboxField>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type cmp_CheckboxFieldOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type cmp_CheckboxFieldWhereInput = {
  Choices?: InputMaybe<cmp_FieldChoicePropertyWhereInput>;
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<cmp_CheckboxFieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<cmp_CheckboxFieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<cmp_CheckboxFieldWhereInput>>>;
};

export type cmp_CurrencyField = IData & Icmp_Field & {
  __typename?: 'cmp_CurrencyField';
  CurrencyCode?: Maybe<Scalars['String']['output']>;
  DecimalPlaces?: Maybe<Scalars['Int']['output']>;
  HasThousandSeparator?: Maybe<Scalars['Boolean']['output']>;
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type cmp_CurrencyField_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type cmp_CurrencyField_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type cmp_CurrencyFieldAutocomplete = {
  __typename?: 'cmp_CurrencyFieldAutocomplete';
  CurrencyCode?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type cmp_CurrencyFieldAutocompleteCurrencyCodeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_CurrencyFieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_CurrencyFieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_CurrencyFieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_CurrencyFieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type cmp_CurrencyFieldFacet = {
  __typename?: 'cmp_CurrencyFieldFacet';
  CurrencyCode?: Maybe<Array<Maybe<StringFacet>>>;
  DecimalPlaces?: Maybe<Array<Maybe<NumberFacet>>>;
  HasThousandSeparator?: Maybe<Array<Maybe<StringFacet>>>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
};


export type cmp_CurrencyFieldFacetCurrencyCodeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_CurrencyFieldFacetDecimalPlacesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type cmp_CurrencyFieldFacetHasThousandSeparatorArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_CurrencyFieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_CurrencyFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_CurrencyFieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_CurrencyFieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type cmp_CurrencyFieldOrderByInput = {
  CurrencyCode?: InputMaybe<OrderBy>;
  DecimalPlaces?: InputMaybe<OrderBy>;
  HasThousandSeparator?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type cmp_CurrencyFieldOutput = {
  __typename?: 'cmp_CurrencyFieldOutput';
  autocomplete?: Maybe<cmp_CurrencyFieldAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<cmp_CurrencyFieldFacet>;
  item?: Maybe<cmp_CurrencyField>;
  items?: Maybe<Array<Maybe<cmp_CurrencyField>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type cmp_CurrencyFieldOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type cmp_CurrencyFieldWhereInput = {
  CurrencyCode?: InputMaybe<StringFilterInput>;
  DecimalPlaces?: InputMaybe<IntFilterInput>;
  HasThousandSeparator?: InputMaybe<BoolFilterInput>;
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<cmp_CurrencyFieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<cmp_CurrencyFieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<cmp_CurrencyFieldWhereInput>>>;
};

export type cmp_DateField = IData & Icmp_Field & {
  __typename?: 'cmp_DateField';
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};


export type cmp_DateField_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type cmp_DateField_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};


export type cmp_DateFieldnameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type cmp_DateFieldAutocomplete = {
  __typename?: 'cmp_DateFieldAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type cmp_DateFieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_DateFieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_DateFieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_DateFieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type cmp_DateFieldFacet = {
  __typename?: 'cmp_DateFieldFacet';
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
  name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type cmp_DateFieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_DateFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_DateFieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_DateFieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_DateFieldFacetnameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type cmp_DateFieldOrderByInput = {
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<OrderBy>;
};

export type cmp_DateFieldOutput = {
  __typename?: 'cmp_DateFieldOutput';
  autocomplete?: Maybe<cmp_DateFieldAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<cmp_DateFieldFacet>;
  item?: Maybe<cmp_DateField>;
  items?: Maybe<Array<Maybe<cmp_DateField>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type cmp_DateFieldOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type cmp_DateFieldWhereInput = {
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<cmp_DateFieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<cmp_DateFieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<cmp_DateFieldWhereInput>>>;
  name?: InputMaybe<SearchableStringFilterInput>;
};

export type cmp_DropdownField = IData & Icmp_Field & {
  __typename?: 'cmp_DropdownField';
  Choices?: Maybe<Array<Maybe<cmp_FieldChoiceProperty>>>;
  Id?: Maybe<Scalars['String']['output']>;
  IsMultiSelect?: Maybe<Scalars['Boolean']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type cmp_DropdownField_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type cmp_DropdownField_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type cmp_DropdownFieldAutocomplete = {
  __typename?: 'cmp_DropdownFieldAutocomplete';
  Choices?: Maybe<cmp_FieldChoicePropertyAutocomplete>;
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type cmp_DropdownFieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_DropdownFieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_DropdownFieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_DropdownFieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type cmp_DropdownFieldFacet = {
  __typename?: 'cmp_DropdownFieldFacet';
  Choices?: Maybe<cmp_FieldChoicePropertyFacet>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  IsMultiSelect?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
};


export type cmp_DropdownFieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_DropdownFieldFacetIsMultiSelectArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_DropdownFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_DropdownFieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_DropdownFieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type cmp_DropdownFieldOrderByInput = {
  Choices?: InputMaybe<cmp_FieldChoicePropertyOrderByInput>;
  Id?: InputMaybe<OrderBy>;
  IsMultiSelect?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type cmp_DropdownFieldOutput = {
  __typename?: 'cmp_DropdownFieldOutput';
  autocomplete?: Maybe<cmp_DropdownFieldAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<cmp_DropdownFieldFacet>;
  item?: Maybe<cmp_DropdownField>;
  items?: Maybe<Array<Maybe<cmp_DropdownField>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type cmp_DropdownFieldOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type cmp_DropdownFieldWhereInput = {
  Choices?: InputMaybe<cmp_FieldChoicePropertyWhereInput>;
  Id?: InputMaybe<StringFilterInput>;
  IsMultiSelect?: InputMaybe<BoolFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<cmp_DropdownFieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<cmp_DropdownFieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<cmp_DropdownFieldWhereInput>>>;
};

export type cmp_Field = IData & Icmp_Field & {
  __typename?: 'cmp_Field';
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type cmp_Field_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type cmp_Field_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type cmp_FieldAutocomplete = {
  __typename?: 'cmp_FieldAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type cmp_FieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_FieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_FieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_FieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type cmp_FieldChoiceProperty = {
  __typename?: 'cmp_FieldChoiceProperty';
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
};

export type cmp_FieldChoicePropertyAutocomplete = {
  __typename?: 'cmp_FieldChoicePropertyAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type cmp_FieldChoicePropertyAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_FieldChoicePropertyAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type cmp_FieldChoicePropertyFacet = {
  __typename?: 'cmp_FieldChoicePropertyFacet';
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type cmp_FieldChoicePropertyFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_FieldChoicePropertyFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type cmp_FieldChoicePropertyOrderByInput = {
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
};

export type cmp_FieldChoicePropertyWhereInput = {
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
};

export type cmp_FieldFacet = {
  __typename?: 'cmp_FieldFacet';
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
};


export type cmp_FieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_FieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_FieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_FieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type cmp_FieldOrderByInput = {
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type cmp_FieldOutput = {
  __typename?: 'cmp_FieldOutput';
  autocomplete?: Maybe<cmp_FieldAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<cmp_FieldFacet>;
  item?: Maybe<Icmp_Field>;
  items?: Maybe<Array<Maybe<Icmp_Field>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type cmp_FieldOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type cmp_FieldWhereInput = {
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<cmp_FieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<cmp_FieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<cmp_FieldWhereInput>>>;
};

export type cmp_FocalPoint = {
  __typename?: 'cmp_FocalPoint';
  X?: Maybe<Scalars['Int']['output']>;
  Y?: Maybe<Scalars['Int']['output']>;
};

export type cmp_FocalPointFacet = {
  __typename?: 'cmp_FocalPointFacet';
  X?: Maybe<Array<Maybe<NumberFacet>>>;
  Y?: Maybe<Array<Maybe<NumberFacet>>>;
};


export type cmp_FocalPointFacetXArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type cmp_FocalPointFacetYArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type cmp_FocalPointOrderByInput = {
  X?: InputMaybe<OrderBy>;
  Y?: InputMaybe<OrderBy>;
};

export type cmp_FocalPointWhereInput = {
  X?: InputMaybe<IntFilterInput>;
  Y?: InputMaybe<IntFilterInput>;
};

export type cmp_ImageField = IData & Icmp_Field & {
  __typename?: 'cmp_ImageField';
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};


export type cmp_ImageField_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type cmp_ImageField_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};


export type cmp_ImageFieldnameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type cmp_ImageFieldAutocomplete = {
  __typename?: 'cmp_ImageFieldAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type cmp_ImageFieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_ImageFieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_ImageFieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_ImageFieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type cmp_ImageFieldFacet = {
  __typename?: 'cmp_ImageFieldFacet';
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
  name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type cmp_ImageFieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_ImageFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_ImageFieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_ImageFieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_ImageFieldFacetnameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type cmp_ImageFieldOrderByInput = {
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<OrderBy>;
};

export type cmp_ImageFieldOutput = {
  __typename?: 'cmp_ImageFieldOutput';
  autocomplete?: Maybe<cmp_ImageFieldAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<cmp_ImageFieldFacet>;
  item?: Maybe<cmp_ImageField>;
  items?: Maybe<Array<Maybe<cmp_ImageField>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type cmp_ImageFieldOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type cmp_ImageFieldWhereInput = {
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<cmp_ImageFieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<cmp_ImageFieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<cmp_ImageFieldWhereInput>>>;
  name?: InputMaybe<SearchableStringFilterInput>;
};

export type cmp_LabelField = IData & Icmp_Field & {
  __typename?: 'cmp_LabelField';
  Choices?: Maybe<Array<Maybe<cmp_FieldChoiceProperty>>>;
  Id?: Maybe<Scalars['String']['output']>;
  IsMultiSelect?: Maybe<Scalars['Boolean']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type cmp_LabelField_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type cmp_LabelField_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type cmp_LabelFieldAutocomplete = {
  __typename?: 'cmp_LabelFieldAutocomplete';
  Choices?: Maybe<cmp_FieldChoicePropertyAutocomplete>;
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type cmp_LabelFieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_LabelFieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_LabelFieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_LabelFieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type cmp_LabelFieldFacet = {
  __typename?: 'cmp_LabelFieldFacet';
  Choices?: Maybe<cmp_FieldChoicePropertyFacet>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  IsMultiSelect?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
};


export type cmp_LabelFieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_LabelFieldFacetIsMultiSelectArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_LabelFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_LabelFieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_LabelFieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type cmp_LabelFieldOrderByInput = {
  Choices?: InputMaybe<cmp_FieldChoicePropertyOrderByInput>;
  Id?: InputMaybe<OrderBy>;
  IsMultiSelect?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type cmp_LabelFieldOutput = {
  __typename?: 'cmp_LabelFieldOutput';
  autocomplete?: Maybe<cmp_LabelFieldAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<cmp_LabelFieldFacet>;
  item?: Maybe<cmp_LabelField>;
  items?: Maybe<Array<Maybe<cmp_LabelField>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type cmp_LabelFieldOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type cmp_LabelFieldWhereInput = {
  Choices?: InputMaybe<cmp_FieldChoicePropertyWhereInput>;
  Id?: InputMaybe<StringFilterInput>;
  IsMultiSelect?: InputMaybe<BoolFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<cmp_LabelFieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<cmp_LabelFieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<cmp_LabelFieldWhereInput>>>;
};

export enum cmp_Locales {
  ALL = 'ALL',
  NEUTRAL = 'NEUTRAL',
  en = 'en'
}

export type cmp_NumberField = IData & Icmp_Field & {
  __typename?: 'cmp_NumberField';
  DecimalPlaces?: Maybe<Scalars['Int']['output']>;
  HasThousandSeparator?: Maybe<Scalars['Boolean']['output']>;
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type cmp_NumberField_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type cmp_NumberField_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type cmp_NumberFieldAutocomplete = {
  __typename?: 'cmp_NumberFieldAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type cmp_NumberFieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_NumberFieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_NumberFieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_NumberFieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type cmp_NumberFieldFacet = {
  __typename?: 'cmp_NumberFieldFacet';
  DecimalPlaces?: Maybe<Array<Maybe<NumberFacet>>>;
  HasThousandSeparator?: Maybe<Array<Maybe<StringFacet>>>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
};


export type cmp_NumberFieldFacetDecimalPlacesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type cmp_NumberFieldFacetHasThousandSeparatorArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_NumberFieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_NumberFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_NumberFieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_NumberFieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type cmp_NumberFieldOrderByInput = {
  DecimalPlaces?: InputMaybe<OrderBy>;
  HasThousandSeparator?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type cmp_NumberFieldOutput = {
  __typename?: 'cmp_NumberFieldOutput';
  autocomplete?: Maybe<cmp_NumberFieldAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<cmp_NumberFieldFacet>;
  item?: Maybe<cmp_NumberField>;
  items?: Maybe<Array<Maybe<cmp_NumberField>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type cmp_NumberFieldOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type cmp_NumberFieldWhereInput = {
  DecimalPlaces?: InputMaybe<IntFilterInput>;
  HasThousandSeparator?: InputMaybe<BoolFilterInput>;
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<cmp_NumberFieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<cmp_NumberFieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<cmp_NumberFieldWhereInput>>>;
};

export type cmp_PercentField = IData & Icmp_Field & {
  __typename?: 'cmp_PercentField';
  DecimalPlaces?: Maybe<Scalars['Int']['output']>;
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type cmp_PercentField_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type cmp_PercentField_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type cmp_PercentFieldAutocomplete = {
  __typename?: 'cmp_PercentFieldAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type cmp_PercentFieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_PercentFieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_PercentFieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_PercentFieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type cmp_PercentFieldFacet = {
  __typename?: 'cmp_PercentFieldFacet';
  DecimalPlaces?: Maybe<Array<Maybe<NumberFacet>>>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
};


export type cmp_PercentFieldFacetDecimalPlacesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type cmp_PercentFieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_PercentFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_PercentFieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_PercentFieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type cmp_PercentFieldOrderByInput = {
  DecimalPlaces?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type cmp_PercentFieldOutput = {
  __typename?: 'cmp_PercentFieldOutput';
  autocomplete?: Maybe<cmp_PercentFieldAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<cmp_PercentFieldFacet>;
  item?: Maybe<cmp_PercentField>;
  items?: Maybe<Array<Maybe<cmp_PercentField>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type cmp_PercentFieldOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type cmp_PercentFieldWhereInput = {
  DecimalPlaces?: InputMaybe<IntFilterInput>;
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<cmp_PercentFieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<cmp_PercentFieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<cmp_PercentFieldWhereInput>>>;
};

export type cmp_PublicImageAsset = IData & Icmp_Asset & {
  __typename?: 'cmp_PublicImageAsset';
  AltText?: Maybe<Scalars['String']['output']>;
  DateCreated?: Maybe<Scalars['Date']['output']>;
  DateModified?: Maybe<Scalars['Date']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  ExpiryDate?: Maybe<Scalars['Date']['output']>;
  Fields?: Maybe<Array<Maybe<Icmp_Field>>>;
  FocalPoint?: Maybe<cmp_FocalPoint>;
  FolderGuids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Height?: Maybe<Scalars['Int']['output']>;
  Id?: Maybe<Scalars['String']['output']>;
  Labels?: Maybe<Array<Maybe<cmp_AssetLabel>>>;
  LibraryPath?: Maybe<Scalars['String']['output']>;
  MimeType?: Maybe<Scalars['String']['output']>;
  ParentFolderGuid?: Maybe<Scalars['String']['output']>;
  Renditions?: Maybe<Array<Maybe<cmp_RenditionProperty>>>;
  Tags?: Maybe<Array<Maybe<cmp_Tag>>>;
  Title?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  Width?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type cmp_PublicImageAssetIdArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type cmp_PublicImageAsset_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type cmp_PublicImageAsset_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type cmp_PublicImageAssetAutocomplete = {
  __typename?: 'cmp_PublicImageAssetAutocomplete';
  AltText?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Description?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Fields?: Maybe<Icmp_FieldAutocomplete>;
  FolderGuids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Labels?: Maybe<cmp_AssetLabelAutocomplete>;
  LibraryPath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MimeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentFolderGuid?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Renditions?: Maybe<cmp_RenditionPropertyAutocomplete>;
  Tags?: Maybe<cmp_TagAutocomplete>;
  Title?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type cmp_PublicImageAssetAutocompleteAltTextArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_PublicImageAssetAutocompleteDescriptionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_PublicImageAssetAutocompleteFolderGuidsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_PublicImageAssetAutocompleteLibraryPathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_PublicImageAssetAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_PublicImageAssetAutocompleteParentFolderGuidArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_PublicImageAssetAutocompleteTitleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_PublicImageAssetAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type cmp_PublicImageAssetFacet = {
  __typename?: 'cmp_PublicImageAssetFacet';
  AltText?: Maybe<Array<Maybe<StringFacet>>>;
  DateCreated?: Maybe<Array<Maybe<DateFacet>>>;
  DateModified?: Maybe<Array<Maybe<DateFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  ExpiryDate?: Maybe<Array<Maybe<DateFacet>>>;
  Fields?: Maybe<Icmp_FieldFacet>;
  FocalPoint?: Maybe<cmp_FocalPointFacet>;
  FolderGuids?: Maybe<Array<Maybe<StringFacet>>>;
  Height?: Maybe<Array<Maybe<NumberFacet>>>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Labels?: Maybe<cmp_AssetLabelFacet>;
  LibraryPath?: Maybe<Array<Maybe<StringFacet>>>;
  MimeType?: Maybe<Array<Maybe<StringFacet>>>;
  ParentFolderGuid?: Maybe<Array<Maybe<StringFacet>>>;
  Renditions?: Maybe<cmp_RenditionPropertyFacet>;
  Tags?: Maybe<cmp_TagFacet>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  Width?: Maybe<Array<Maybe<NumberFacet>>>;
};


export type cmp_PublicImageAssetFacetAltTextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_PublicImageAssetFacetDateCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type cmp_PublicImageAssetFacetDateModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type cmp_PublicImageAssetFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_PublicImageAssetFacetExpiryDateArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type cmp_PublicImageAssetFacetFolderGuidsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_PublicImageAssetFacetHeightArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type cmp_PublicImageAssetFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_PublicImageAssetFacetLibraryPathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_PublicImageAssetFacetMimeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_PublicImageAssetFacetParentFolderGuidArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_PublicImageAssetFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_PublicImageAssetFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_PublicImageAssetFacetWidthArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type cmp_PublicImageAssetOrderByInput = {
  AltText?: InputMaybe<OrderBy>;
  DateCreated?: InputMaybe<OrderBy>;
  DateModified?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  ExpiryDate?: InputMaybe<OrderBy>;
  Fields?: InputMaybe<Icmp_FieldOrderByInput>;
  FocalPoint?: InputMaybe<cmp_FocalPointOrderByInput>;
  FolderGuids?: InputMaybe<OrderBy>;
  Height?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Labels?: InputMaybe<cmp_AssetLabelOrderByInput>;
  LibraryPath?: InputMaybe<OrderBy>;
  MimeType?: InputMaybe<OrderBy>;
  ParentFolderGuid?: InputMaybe<OrderBy>;
  Renditions?: InputMaybe<cmp_RenditionPropertyOrderByInput>;
  Tags?: InputMaybe<cmp_TagOrderByInput>;
  Title?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  Width?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type cmp_PublicImageAssetOutput = {
  __typename?: 'cmp_PublicImageAssetOutput';
  autocomplete?: Maybe<cmp_PublicImageAssetAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<cmp_PublicImageAssetFacet>;
  item?: Maybe<cmp_PublicImageAsset>;
  items?: Maybe<Array<Maybe<cmp_PublicImageAsset>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type cmp_PublicImageAssetOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type cmp_PublicImageAssetWhereInput = {
  AltText?: InputMaybe<StringFilterInput>;
  DateCreated?: InputMaybe<DateFilterInput>;
  DateModified?: InputMaybe<DateFilterInput>;
  Description?: InputMaybe<StringFilterInput>;
  ExpiryDate?: InputMaybe<DateFilterInput>;
  Fields?: InputMaybe<Icmp_FieldWhereInput>;
  FocalPoint?: InputMaybe<cmp_FocalPointWhereInput>;
  FolderGuids?: InputMaybe<StringFilterInput>;
  Height?: InputMaybe<IntFilterInput>;
  Id?: InputMaybe<SearchableStringFilterInput>;
  Labels?: InputMaybe<cmp_AssetLabelWhereInput>;
  LibraryPath?: InputMaybe<StringFilterInput>;
  MimeType?: InputMaybe<StringFilterInput>;
  ParentFolderGuid?: InputMaybe<StringFilterInput>;
  Renditions?: InputMaybe<cmp_RenditionPropertyWhereInput>;
  Tags?: InputMaybe<cmp_TagWhereInput>;
  Title?: InputMaybe<StringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  Width?: InputMaybe<IntFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<cmp_PublicImageAssetWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<cmp_PublicImageAssetWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<cmp_PublicImageAssetWhereInput>>>;
};

export type cmp_PublicRawFileAsset = IData & Icmp_Asset & {
  __typename?: 'cmp_PublicRawFileAsset';
  DateCreated?: Maybe<Scalars['Date']['output']>;
  DateModified?: Maybe<Scalars['Date']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  ExpiryDate?: Maybe<Scalars['Date']['output']>;
  Fields?: Maybe<Array<Maybe<Icmp_Field>>>;
  FolderGuids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Id?: Maybe<Scalars['String']['output']>;
  Labels?: Maybe<Array<Maybe<cmp_AssetLabel>>>;
  LibraryPath?: Maybe<Scalars['String']['output']>;
  MimeType?: Maybe<Scalars['String']['output']>;
  ParentFolderGuid?: Maybe<Scalars['String']['output']>;
  Tags?: Maybe<Array<Maybe<cmp_Tag>>>;
  Title?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type cmp_PublicRawFileAssetIdArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type cmp_PublicRawFileAsset_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type cmp_PublicRawFileAsset_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type cmp_PublicRawFileAssetAutocomplete = {
  __typename?: 'cmp_PublicRawFileAssetAutocomplete';
  Description?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Fields?: Maybe<Icmp_FieldAutocomplete>;
  FolderGuids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Labels?: Maybe<cmp_AssetLabelAutocomplete>;
  LibraryPath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MimeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentFolderGuid?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Tags?: Maybe<cmp_TagAutocomplete>;
  Title?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type cmp_PublicRawFileAssetAutocompleteDescriptionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_PublicRawFileAssetAutocompleteFolderGuidsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_PublicRawFileAssetAutocompleteLibraryPathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_PublicRawFileAssetAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_PublicRawFileAssetAutocompleteParentFolderGuidArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_PublicRawFileAssetAutocompleteTitleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_PublicRawFileAssetAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type cmp_PublicRawFileAssetFacet = {
  __typename?: 'cmp_PublicRawFileAssetFacet';
  DateCreated?: Maybe<Array<Maybe<DateFacet>>>;
  DateModified?: Maybe<Array<Maybe<DateFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  ExpiryDate?: Maybe<Array<Maybe<DateFacet>>>;
  Fields?: Maybe<Icmp_FieldFacet>;
  FolderGuids?: Maybe<Array<Maybe<StringFacet>>>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Labels?: Maybe<cmp_AssetLabelFacet>;
  LibraryPath?: Maybe<Array<Maybe<StringFacet>>>;
  MimeType?: Maybe<Array<Maybe<StringFacet>>>;
  ParentFolderGuid?: Maybe<Array<Maybe<StringFacet>>>;
  Tags?: Maybe<cmp_TagFacet>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type cmp_PublicRawFileAssetFacetDateCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type cmp_PublicRawFileAssetFacetDateModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type cmp_PublicRawFileAssetFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_PublicRawFileAssetFacetExpiryDateArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type cmp_PublicRawFileAssetFacetFolderGuidsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_PublicRawFileAssetFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_PublicRawFileAssetFacetLibraryPathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_PublicRawFileAssetFacetMimeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_PublicRawFileAssetFacetParentFolderGuidArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_PublicRawFileAssetFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_PublicRawFileAssetFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type cmp_PublicRawFileAssetOrderByInput = {
  DateCreated?: InputMaybe<OrderBy>;
  DateModified?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  ExpiryDate?: InputMaybe<OrderBy>;
  Fields?: InputMaybe<Icmp_FieldOrderByInput>;
  FolderGuids?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Labels?: InputMaybe<cmp_AssetLabelOrderByInput>;
  LibraryPath?: InputMaybe<OrderBy>;
  MimeType?: InputMaybe<OrderBy>;
  ParentFolderGuid?: InputMaybe<OrderBy>;
  Tags?: InputMaybe<cmp_TagOrderByInput>;
  Title?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type cmp_PublicRawFileAssetOutput = {
  __typename?: 'cmp_PublicRawFileAssetOutput';
  autocomplete?: Maybe<cmp_PublicRawFileAssetAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<cmp_PublicRawFileAssetFacet>;
  item?: Maybe<cmp_PublicRawFileAsset>;
  items?: Maybe<Array<Maybe<cmp_PublicRawFileAsset>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type cmp_PublicRawFileAssetOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type cmp_PublicRawFileAssetWhereInput = {
  DateCreated?: InputMaybe<DateFilterInput>;
  DateModified?: InputMaybe<DateFilterInput>;
  Description?: InputMaybe<StringFilterInput>;
  ExpiryDate?: InputMaybe<DateFilterInput>;
  Fields?: InputMaybe<Icmp_FieldWhereInput>;
  FolderGuids?: InputMaybe<StringFilterInput>;
  Id?: InputMaybe<SearchableStringFilterInput>;
  Labels?: InputMaybe<cmp_AssetLabelWhereInput>;
  LibraryPath?: InputMaybe<StringFilterInput>;
  MimeType?: InputMaybe<StringFilterInput>;
  ParentFolderGuid?: InputMaybe<StringFilterInput>;
  Tags?: InputMaybe<cmp_TagWhereInput>;
  Title?: InputMaybe<StringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<cmp_PublicRawFileAssetWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<cmp_PublicRawFileAssetWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<cmp_PublicRawFileAssetWhereInput>>>;
};

export type cmp_PublicVideoAsset = IData & Icmp_Asset & {
  __typename?: 'cmp_PublicVideoAsset';
  AltText?: Maybe<Scalars['String']['output']>;
  DateCreated?: Maybe<Scalars['Date']['output']>;
  DateModified?: Maybe<Scalars['Date']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  ExpiryDate?: Maybe<Scalars['Date']['output']>;
  Fields?: Maybe<Array<Maybe<Icmp_Field>>>;
  FolderGuids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Id?: Maybe<Scalars['String']['output']>;
  Labels?: Maybe<Array<Maybe<cmp_AssetLabel>>>;
  LibraryPath?: Maybe<Scalars['String']['output']>;
  MimeType?: Maybe<Scalars['String']['output']>;
  ParentFolderGuid?: Maybe<Scalars['String']['output']>;
  Renditions?: Maybe<Array<Maybe<cmp_RenditionProperty>>>;
  Tags?: Maybe<Array<Maybe<cmp_Tag>>>;
  Title?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type cmp_PublicVideoAssetIdArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type cmp_PublicVideoAsset_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type cmp_PublicVideoAsset_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type cmp_PublicVideoAssetAutocomplete = {
  __typename?: 'cmp_PublicVideoAssetAutocomplete';
  AltText?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Description?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Fields?: Maybe<Icmp_FieldAutocomplete>;
  FolderGuids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Labels?: Maybe<cmp_AssetLabelAutocomplete>;
  LibraryPath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MimeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentFolderGuid?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Renditions?: Maybe<cmp_RenditionPropertyAutocomplete>;
  Tags?: Maybe<cmp_TagAutocomplete>;
  Title?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type cmp_PublicVideoAssetAutocompleteAltTextArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_PublicVideoAssetAutocompleteDescriptionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_PublicVideoAssetAutocompleteFolderGuidsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_PublicVideoAssetAutocompleteLibraryPathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_PublicVideoAssetAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_PublicVideoAssetAutocompleteParentFolderGuidArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_PublicVideoAssetAutocompleteTitleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_PublicVideoAssetAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type cmp_PublicVideoAssetFacet = {
  __typename?: 'cmp_PublicVideoAssetFacet';
  AltText?: Maybe<Array<Maybe<StringFacet>>>;
  DateCreated?: Maybe<Array<Maybe<DateFacet>>>;
  DateModified?: Maybe<Array<Maybe<DateFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  ExpiryDate?: Maybe<Array<Maybe<DateFacet>>>;
  Fields?: Maybe<Icmp_FieldFacet>;
  FolderGuids?: Maybe<Array<Maybe<StringFacet>>>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Labels?: Maybe<cmp_AssetLabelFacet>;
  LibraryPath?: Maybe<Array<Maybe<StringFacet>>>;
  MimeType?: Maybe<Array<Maybe<StringFacet>>>;
  ParentFolderGuid?: Maybe<Array<Maybe<StringFacet>>>;
  Renditions?: Maybe<cmp_RenditionPropertyFacet>;
  Tags?: Maybe<cmp_TagFacet>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type cmp_PublicVideoAssetFacetAltTextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_PublicVideoAssetFacetDateCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type cmp_PublicVideoAssetFacetDateModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type cmp_PublicVideoAssetFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_PublicVideoAssetFacetExpiryDateArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type cmp_PublicVideoAssetFacetFolderGuidsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_PublicVideoAssetFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_PublicVideoAssetFacetLibraryPathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_PublicVideoAssetFacetMimeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_PublicVideoAssetFacetParentFolderGuidArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_PublicVideoAssetFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_PublicVideoAssetFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type cmp_PublicVideoAssetOrderByInput = {
  AltText?: InputMaybe<OrderBy>;
  DateCreated?: InputMaybe<OrderBy>;
  DateModified?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  ExpiryDate?: InputMaybe<OrderBy>;
  Fields?: InputMaybe<Icmp_FieldOrderByInput>;
  FolderGuids?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Labels?: InputMaybe<cmp_AssetLabelOrderByInput>;
  LibraryPath?: InputMaybe<OrderBy>;
  MimeType?: InputMaybe<OrderBy>;
  ParentFolderGuid?: InputMaybe<OrderBy>;
  Renditions?: InputMaybe<cmp_RenditionPropertyOrderByInput>;
  Tags?: InputMaybe<cmp_TagOrderByInput>;
  Title?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type cmp_PublicVideoAssetOutput = {
  __typename?: 'cmp_PublicVideoAssetOutput';
  autocomplete?: Maybe<cmp_PublicVideoAssetAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<cmp_PublicVideoAssetFacet>;
  item?: Maybe<cmp_PublicVideoAsset>;
  items?: Maybe<Array<Maybe<cmp_PublicVideoAsset>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type cmp_PublicVideoAssetOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type cmp_PublicVideoAssetWhereInput = {
  AltText?: InputMaybe<StringFilterInput>;
  DateCreated?: InputMaybe<DateFilterInput>;
  DateModified?: InputMaybe<DateFilterInput>;
  Description?: InputMaybe<StringFilterInput>;
  ExpiryDate?: InputMaybe<DateFilterInput>;
  Fields?: InputMaybe<Icmp_FieldWhereInput>;
  FolderGuids?: InputMaybe<StringFilterInput>;
  Id?: InputMaybe<SearchableStringFilterInput>;
  Labels?: InputMaybe<cmp_AssetLabelWhereInput>;
  LibraryPath?: InputMaybe<StringFilterInput>;
  MimeType?: InputMaybe<StringFilterInput>;
  ParentFolderGuid?: InputMaybe<StringFilterInput>;
  Renditions?: InputMaybe<cmp_RenditionPropertyWhereInput>;
  Tags?: InputMaybe<cmp_TagWhereInput>;
  Title?: InputMaybe<StringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<cmp_PublicVideoAssetWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<cmp_PublicVideoAssetWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<cmp_PublicVideoAssetWhereInput>>>;
};

export type cmp_RadioField = IData & Icmp_Field & {
  __typename?: 'cmp_RadioField';
  Choices?: Maybe<Array<Maybe<cmp_FieldChoiceProperty>>>;
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type cmp_RadioField_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type cmp_RadioField_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type cmp_RadioFieldAutocomplete = {
  __typename?: 'cmp_RadioFieldAutocomplete';
  Choices?: Maybe<cmp_FieldChoicePropertyAutocomplete>;
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type cmp_RadioFieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_RadioFieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_RadioFieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_RadioFieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type cmp_RadioFieldFacet = {
  __typename?: 'cmp_RadioFieldFacet';
  Choices?: Maybe<cmp_FieldChoicePropertyFacet>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
};


export type cmp_RadioFieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_RadioFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_RadioFieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_RadioFieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type cmp_RadioFieldOrderByInput = {
  Choices?: InputMaybe<cmp_FieldChoicePropertyOrderByInput>;
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type cmp_RadioFieldOutput = {
  __typename?: 'cmp_RadioFieldOutput';
  autocomplete?: Maybe<cmp_RadioFieldAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<cmp_RadioFieldFacet>;
  item?: Maybe<cmp_RadioField>;
  items?: Maybe<Array<Maybe<cmp_RadioField>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type cmp_RadioFieldOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type cmp_RadioFieldWhereInput = {
  Choices?: InputMaybe<cmp_FieldChoicePropertyWhereInput>;
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<cmp_RadioFieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<cmp_RadioFieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<cmp_RadioFieldWhereInput>>>;
};

export type cmp_RenditionProperty = {
  __typename?: 'cmp_RenditionProperty';
  Height?: Maybe<Scalars['Int']['output']>;
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  Width?: Maybe<Scalars['Int']['output']>;
};


export type cmp_RenditionPropertyIdArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type cmp_RenditionPropertyAutocomplete = {
  __typename?: 'cmp_RenditionPropertyAutocomplete';
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type cmp_RenditionPropertyAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_RenditionPropertyAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type cmp_RenditionPropertyFacet = {
  __typename?: 'cmp_RenditionPropertyFacet';
  Height?: Maybe<Array<Maybe<NumberFacet>>>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  Width?: Maybe<Array<Maybe<NumberFacet>>>;
};


export type cmp_RenditionPropertyFacetHeightArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type cmp_RenditionPropertyFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_RenditionPropertyFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_RenditionPropertyFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_RenditionPropertyFacetWidthArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type cmp_RenditionPropertyOrderByInput = {
  Height?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  Width?: InputMaybe<OrderBy>;
};

export type cmp_RenditionPropertyWhereInput = {
  Height?: InputMaybe<IntFilterInput>;
  Id?: InputMaybe<SearchableStringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  Width?: InputMaybe<IntFilterInput>;
};

export type cmp_RichTextField = IData & Icmp_Field & {
  __typename?: 'cmp_RichTextField';
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};


export type cmp_RichTextField_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type cmp_RichTextField_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};


export type cmp_RichTextFieldnameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type cmp_RichTextFieldAutocomplete = {
  __typename?: 'cmp_RichTextFieldAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type cmp_RichTextFieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_RichTextFieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_RichTextFieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_RichTextFieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type cmp_RichTextFieldFacet = {
  __typename?: 'cmp_RichTextFieldFacet';
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
  name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type cmp_RichTextFieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_RichTextFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_RichTextFieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_RichTextFieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_RichTextFieldFacetnameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type cmp_RichTextFieldOrderByInput = {
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<OrderBy>;
};

export type cmp_RichTextFieldOutput = {
  __typename?: 'cmp_RichTextFieldOutput';
  autocomplete?: Maybe<cmp_RichTextFieldAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<cmp_RichTextFieldFacet>;
  item?: Maybe<cmp_RichTextField>;
  items?: Maybe<Array<Maybe<cmp_RichTextField>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type cmp_RichTextFieldOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type cmp_RichTextFieldWhereInput = {
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<cmp_RichTextFieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<cmp_RichTextFieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<cmp_RichTextFieldWhereInput>>>;
  name?: InputMaybe<SearchableStringFilterInput>;
};

export type cmp_StructuredContentAsset = IData & Icmp_Asset & {
  __typename?: 'cmp_StructuredContentAsset';
  DateCreated?: Maybe<Scalars['Date']['output']>;
  DateModified?: Maybe<Scalars['Date']['output']>;
  ExpiryDate?: Maybe<Scalars['Date']['output']>;
  Fields?: Maybe<Array<Maybe<Icmp_Field>>>;
  FolderGuids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Id?: Maybe<Scalars['String']['output']>;
  Labels?: Maybe<Array<Maybe<cmp_AssetLabel>>>;
  LibraryPath?: Maybe<Scalars['String']['output']>;
  MimeType?: Maybe<Scalars['String']['output']>;
  ParentFolderGuid?: Maybe<Scalars['String']['output']>;
  Tags?: Maybe<Array<Maybe<cmp_Tag>>>;
  Title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};


export type cmp_StructuredContentAssetIdArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type cmp_StructuredContentAsset_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type cmp_StructuredContentAsset_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};


export type cmp_StructuredContentAssetnameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type cmp_StructuredContentAssetAutocomplete = {
  __typename?: 'cmp_StructuredContentAssetAutocomplete';
  Fields?: Maybe<Icmp_FieldAutocomplete>;
  FolderGuids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Labels?: Maybe<cmp_AssetLabelAutocomplete>;
  LibraryPath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MimeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentFolderGuid?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Tags?: Maybe<cmp_TagAutocomplete>;
  Title?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type cmp_StructuredContentAssetAutocompleteFolderGuidsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_StructuredContentAssetAutocompleteLibraryPathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_StructuredContentAssetAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_StructuredContentAssetAutocompleteParentFolderGuidArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_StructuredContentAssetAutocompleteTitleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type cmp_StructuredContentAssetFacet = {
  __typename?: 'cmp_StructuredContentAssetFacet';
  DateCreated?: Maybe<Array<Maybe<DateFacet>>>;
  DateModified?: Maybe<Array<Maybe<DateFacet>>>;
  ExpiryDate?: Maybe<Array<Maybe<DateFacet>>>;
  Fields?: Maybe<Icmp_FieldFacet>;
  FolderGuids?: Maybe<Array<Maybe<StringFacet>>>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Labels?: Maybe<cmp_AssetLabelFacet>;
  LibraryPath?: Maybe<Array<Maybe<StringFacet>>>;
  MimeType?: Maybe<Array<Maybe<StringFacet>>>;
  ParentFolderGuid?: Maybe<Array<Maybe<StringFacet>>>;
  Tags?: Maybe<cmp_TagFacet>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
  name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type cmp_StructuredContentAssetFacetDateCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type cmp_StructuredContentAssetFacetDateModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type cmp_StructuredContentAssetFacetExpiryDateArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type cmp_StructuredContentAssetFacetFolderGuidsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_StructuredContentAssetFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_StructuredContentAssetFacetLibraryPathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_StructuredContentAssetFacetMimeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_StructuredContentAssetFacetParentFolderGuidArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_StructuredContentAssetFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_StructuredContentAssetFacetnameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type cmp_StructuredContentAssetOrderByInput = {
  DateCreated?: InputMaybe<OrderBy>;
  DateModified?: InputMaybe<OrderBy>;
  ExpiryDate?: InputMaybe<OrderBy>;
  Fields?: InputMaybe<Icmp_FieldOrderByInput>;
  FolderGuids?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Labels?: InputMaybe<cmp_AssetLabelOrderByInput>;
  LibraryPath?: InputMaybe<OrderBy>;
  MimeType?: InputMaybe<OrderBy>;
  ParentFolderGuid?: InputMaybe<OrderBy>;
  Tags?: InputMaybe<cmp_TagOrderByInput>;
  Title?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<OrderBy>;
};

export type cmp_StructuredContentAssetOutput = {
  __typename?: 'cmp_StructuredContentAssetOutput';
  autocomplete?: Maybe<cmp_StructuredContentAssetAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<cmp_StructuredContentAssetFacet>;
  item?: Maybe<cmp_StructuredContentAsset>;
  items?: Maybe<Array<Maybe<cmp_StructuredContentAsset>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type cmp_StructuredContentAssetOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type cmp_StructuredContentAssetWhereInput = {
  DateCreated?: InputMaybe<DateFilterInput>;
  DateModified?: InputMaybe<DateFilterInput>;
  ExpiryDate?: InputMaybe<DateFilterInput>;
  Fields?: InputMaybe<Icmp_FieldWhereInput>;
  FolderGuids?: InputMaybe<StringFilterInput>;
  Id?: InputMaybe<SearchableStringFilterInput>;
  Labels?: InputMaybe<cmp_AssetLabelWhereInput>;
  LibraryPath?: InputMaybe<StringFilterInput>;
  MimeType?: InputMaybe<StringFilterInput>;
  ParentFolderGuid?: InputMaybe<StringFilterInput>;
  Tags?: InputMaybe<cmp_TagWhereInput>;
  Title?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<cmp_StructuredContentAssetWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<cmp_StructuredContentAssetWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<cmp_StructuredContentAssetWhereInput>>>;
  name?: InputMaybe<SearchableStringFilterInput>;
};

export type cmp_Tag = {
  __typename?: 'cmp_Tag';
  Guid?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
};

export type cmp_TagAutocomplete = {
  __typename?: 'cmp_TagAutocomplete';
  Guid?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type cmp_TagAutocompleteGuidArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_TagAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type cmp_TagFacet = {
  __typename?: 'cmp_TagFacet';
  Guid?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type cmp_TagFacetGuidArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_TagFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type cmp_TagOrderByInput = {
  Guid?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
};

export type cmp_TagWhereInput = {
  Guid?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
};

export type cmp_TextAreaField = IData & Icmp_Field & {
  __typename?: 'cmp_TextAreaField';
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};


export type cmp_TextAreaField_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type cmp_TextAreaField_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};


export type cmp_TextAreaFieldnameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type cmp_TextAreaFieldAutocomplete = {
  __typename?: 'cmp_TextAreaFieldAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type cmp_TextAreaFieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_TextAreaFieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_TextAreaFieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_TextAreaFieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type cmp_TextAreaFieldFacet = {
  __typename?: 'cmp_TextAreaFieldFacet';
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
  name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type cmp_TextAreaFieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_TextAreaFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_TextAreaFieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_TextAreaFieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_TextAreaFieldFacetnameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type cmp_TextAreaFieldOrderByInput = {
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<OrderBy>;
};

export type cmp_TextAreaFieldOutput = {
  __typename?: 'cmp_TextAreaFieldOutput';
  autocomplete?: Maybe<cmp_TextAreaFieldAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<cmp_TextAreaFieldFacet>;
  item?: Maybe<cmp_TextAreaField>;
  items?: Maybe<Array<Maybe<cmp_TextAreaField>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type cmp_TextAreaFieldOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type cmp_TextAreaFieldWhereInput = {
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<cmp_TextAreaFieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<cmp_TextAreaFieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<cmp_TextAreaFieldWhereInput>>>;
  name?: InputMaybe<SearchableStringFilterInput>;
};

export type cmp_TextField = IData & Icmp_Field & {
  __typename?: 'cmp_TextField';
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};


export type cmp_TextField_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type cmp_TextField_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};


export type cmp_TextFieldnameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type cmp_TextFieldAutocomplete = {
  __typename?: 'cmp_TextFieldAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type cmp_TextFieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_TextFieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_TextFieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_TextFieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type cmp_TextFieldFacet = {
  __typename?: 'cmp_TextFieldFacet';
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
  name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type cmp_TextFieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_TextFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_TextFieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_TextFieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_TextFieldFacetnameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type cmp_TextFieldOrderByInput = {
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<OrderBy>;
};

export type cmp_TextFieldOutput = {
  __typename?: 'cmp_TextFieldOutput';
  autocomplete?: Maybe<cmp_TextFieldAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<cmp_TextFieldFacet>;
  item?: Maybe<cmp_TextField>;
  items?: Maybe<Array<Maybe<cmp_TextField>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type cmp_TextFieldOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type cmp_TextFieldWhereInput = {
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<cmp_TextFieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<cmp_TextFieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<cmp_TextFieldWhereInput>>>;
  name?: InputMaybe<SearchableStringFilterInput>;
};

export type cmp_VideoField = IData & Icmp_Field & {
  __typename?: 'cmp_VideoField';
  Id?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};


export type cmp_VideoField_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type cmp_VideoField_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};


export type cmp_VideoFieldnameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type cmp_VideoFieldAutocomplete = {
  __typename?: 'cmp_VideoFieldAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type cmp_VideoFieldAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_VideoFieldAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_VideoFieldAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type cmp_VideoFieldAutocompleteValuesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type cmp_VideoFieldFacet = {
  __typename?: 'cmp_VideoFieldFacet';
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
  Values?: Maybe<Array<Maybe<StringFacet>>>;
  name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type cmp_VideoFieldFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_VideoFieldFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_VideoFieldFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_VideoFieldFacetValuesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type cmp_VideoFieldFacetnameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type cmp_VideoFieldOrderByInput = {
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
  Values?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<OrderBy>;
};

export type cmp_VideoFieldOutput = {
  __typename?: 'cmp_VideoFieldOutput';
  autocomplete?: Maybe<cmp_VideoFieldAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<cmp_VideoFieldFacet>;
  item?: Maybe<cmp_VideoField>;
  items?: Maybe<Array<Maybe<cmp_VideoField>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type cmp_VideoFieldOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type cmp_VideoFieldWhereInput = {
  Id?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  Values?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<cmp_VideoFieldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<cmp_VideoFieldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<cmp_VideoFieldWhereInput>>>;
  name?: InputMaybe<SearchableStringFilterInput>;
};

export enum system_Locales {
  ALL = 'ALL',
  NEUTRAL = 'NEUTRAL'
}

type IContentData_ArticleListElement_Fragment = { __typename?: 'ArticleListElement', _type: 'ArticleListElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ArticleListElement_Fragment' };

type IContentData_BlankExperience_Fragment = { __typename?: 'BlankExperience', _type: 'BlankExperience', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_BlankExperience_Fragment' };

type IContentData_BlankSection_Fragment = { __typename?: 'BlankSection', _type: 'BlankSection', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_BlankSection_Fragment' };

type IContentData_BlogPostPage_Fragment = { __typename?: 'BlogPostPage', _type: 'BlogPostPage', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_BlogPostPage_Fragment' };

type IContentData_BlogSectionExperience_Fragment = { __typename?: 'BlogSectionExperience', _type: 'BlogSectionExperience', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_BlogSectionExperience_Fragment' };

type IContentData_ButtonBlock_Fragment = { __typename?: 'ButtonBlock', _type: 'ButtonBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ButtonBlock_Fragment' };

type IContentData_CTAElement_Fragment = { __typename?: 'CTAElement', _type: 'CTAElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_CTAElement_Fragment' };

type IContentData_CarouselBlock_Fragment = { __typename?: 'CarouselBlock', _type: 'CarouselBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_CarouselBlock_Fragment' };

type IContentData_ContentRecsElement_Fragment = { __typename?: 'ContentRecsElement', _type: 'ContentRecsElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ContentRecsElement_Fragment' };

type IContentData_ContinueReadingComponent_Fragment = { __typename?: 'ContinueReadingComponent', _type: 'ContinueReadingComponent', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ContinueReadingComponent_Fragment' };

type IContentData_GenericMedia_Fragment = { __typename?: 'GenericMedia', _type: 'GenericMedia', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_GenericMedia_Fragment' };

type IContentData_HeadingElement_Fragment = { __typename?: 'HeadingElement', _type: 'HeadingElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_HeadingElement_Fragment' };

type IContentData_HeroBlock_Fragment = { __typename?: 'HeroBlock', _type: 'HeroBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_HeroBlock_Fragment' };

type IContentData_ImageElement_Fragment = { __typename?: 'ImageElement', _type: 'ImageElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ImageElement_Fragment' };

type IContentData_ImageMedia_Fragment = { __typename?: 'ImageMedia', _type: 'ImageMedia', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ImageMedia_Fragment' };

type IContentData_LandingPage_Fragment = { __typename?: 'LandingPage', _type: 'LandingPage', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_LandingPage_Fragment' };

type IContentData_LayoutSettingsBlock_Fragment = { __typename?: 'LayoutSettingsBlock', _type: 'LayoutSettingsBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_LayoutSettingsBlock_Fragment' };

type IContentData_MegaMenuGroupBlock_Fragment = { __typename?: 'MegaMenuGroupBlock', _type: 'MegaMenuGroupBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_MegaMenuGroupBlock_Fragment' };

type IContentData_MenuNavigationBlock_Fragment = { __typename?: 'MenuNavigationBlock', _type: 'MenuNavigationBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_MenuNavigationBlock_Fragment' };

type IContentData_OdpEmbedBlock_Fragment = { __typename?: 'OdpEmbedBlock', _type: 'OdpEmbedBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_OdpEmbedBlock_Fragment' };

type IContentData_PageSeoSettings_Fragment = { __typename?: 'PageSeoSettings', _type: 'PageSeoSettings', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_PageSeoSettings_Fragment' };

type IContentData_ParagraphElement_Fragment = { __typename?: 'ParagraphElement', _type: 'ParagraphElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ParagraphElement_Fragment' };

type IContentData_QuoteBlock_Fragment = { __typename?: 'QuoteBlock', _type: 'QuoteBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_QuoteBlock_Fragment' };

type IContentData_RichTextElement_Fragment = { __typename?: 'RichTextElement', _type: 'RichTextElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_RichTextElement_Fragment' };

type IContentData_SysContentFolder_Fragment = { __typename?: 'SysContentFolder', _type: 'SysContentFolder', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_SysContentFolder_Fragment' };

type IContentData_TestimonialElement_Fragment = { __typename?: 'TestimonialElement', _type: 'TestimonialElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_TestimonialElement_Fragment' };

type IContentData_TextBlock_Fragment = { __typename?: 'TextBlock', _type: 'TextBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_TextBlock_Fragment' };

type IContentData_VideoElement_Fragment = { __typename?: 'VideoElement', _type: 'VideoElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_VideoElement_Fragment' };

type IContentData_VideoMedia_Fragment = { __typename?: 'VideoMedia', _type: 'VideoMedia', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_VideoMedia_Fragment' };

type IContentData__Component_Fragment = { __typename?: '_Component', _type: '_Component', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Component_Fragment' };

type IContentData__Content_Fragment = { __typename?: '_Content', _type: '_Content', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Content_Fragment' };

type IContentData__Experience_Fragment = { __typename?: '_Experience', _type: '_Experience', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Experience_Fragment' };

type IContentData__Folder_Fragment = { __typename?: '_Folder', _type: '_Folder', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Folder_Fragment' };

type IContentData__Image_Fragment = { __typename?: '_Image', _type: '_Image', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Image_Fragment' };

type IContentData__Media_Fragment = { __typename?: '_Media', _type: '_Media', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Media_Fragment' };

type IContentData__Page_Fragment = { __typename?: '_Page', _type: '_Page', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Page_Fragment' };

type IContentData__Section_Fragment = { __typename?: '_Section', _type: '_Section', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Section_Fragment' };

type IContentData__Video_Fragment = { __typename?: '_Video', _type: '_Video', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Video_Fragment' };

export type IContentDataFragment = IContentData_ArticleListElement_Fragment | IContentData_BlankExperience_Fragment | IContentData_BlankSection_Fragment | IContentData_BlogPostPage_Fragment | IContentData_BlogSectionExperience_Fragment | IContentData_ButtonBlock_Fragment | IContentData_CTAElement_Fragment | IContentData_CarouselBlock_Fragment | IContentData_ContentRecsElement_Fragment | IContentData_ContinueReadingComponent_Fragment | IContentData_GenericMedia_Fragment | IContentData_HeadingElement_Fragment | IContentData_HeroBlock_Fragment | IContentData_ImageElement_Fragment | IContentData_ImageMedia_Fragment | IContentData_LandingPage_Fragment | IContentData_LayoutSettingsBlock_Fragment | IContentData_MegaMenuGroupBlock_Fragment | IContentData_MenuNavigationBlock_Fragment | IContentData_OdpEmbedBlock_Fragment | IContentData_PageSeoSettings_Fragment | IContentData_ParagraphElement_Fragment | IContentData_QuoteBlock_Fragment | IContentData_RichTextElement_Fragment | IContentData_SysContentFolder_Fragment | IContentData_TestimonialElement_Fragment | IContentData_TextBlock_Fragment | IContentData_VideoElement_Fragment | IContentData_VideoMedia_Fragment | IContentData__Component_Fragment | IContentData__Content_Fragment | IContentData__Experience_Fragment | IContentData__Folder_Fragment | IContentData__Image_Fragment | IContentData__Media_Fragment | IContentData__Page_Fragment | IContentData__Section_Fragment | IContentData__Video_Fragment;

type IElementData_ArticleListElement_Fragment = { __typename?: 'ArticleListElement', _type: 'ArticleListElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_ArticleListElement_Fragment' };

type IElementData_BlankSection_Fragment = { __typename?: 'BlankSection', _type: 'BlankSection', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_BlankSection_Fragment' };

type IElementData_ButtonBlock_Fragment = { __typename?: 'ButtonBlock', _type: 'ButtonBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_ButtonBlock_Fragment' };

type IElementData_CTAElement_Fragment = { __typename?: 'CTAElement', _type: 'CTAElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_CTAElement_Fragment' };

type IElementData_CarouselBlock_Fragment = { __typename?: 'CarouselBlock', _type: 'CarouselBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_CarouselBlock_Fragment' };

type IElementData_ContentRecsElement_Fragment = { __typename?: 'ContentRecsElement', _type: 'ContentRecsElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_ContentRecsElement_Fragment' };

type IElementData_ContinueReadingComponent_Fragment = { __typename?: 'ContinueReadingComponent', _type: 'ContinueReadingComponent', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_ContinueReadingComponent_Fragment' };

type IElementData_HeadingElement_Fragment = { __typename?: 'HeadingElement', _type: 'HeadingElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_HeadingElement_Fragment' };

type IElementData_HeroBlock_Fragment = { __typename?: 'HeroBlock', _type: 'HeroBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_HeroBlock_Fragment' };

type IElementData_ImageElement_Fragment = { __typename?: 'ImageElement', _type: 'ImageElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_ImageElement_Fragment' };

type IElementData_LayoutSettingsBlock_Fragment = { __typename?: 'LayoutSettingsBlock', _type: 'LayoutSettingsBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_LayoutSettingsBlock_Fragment' };

type IElementData_MegaMenuGroupBlock_Fragment = { __typename?: 'MegaMenuGroupBlock', _type: 'MegaMenuGroupBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_MegaMenuGroupBlock_Fragment' };

type IElementData_MenuNavigationBlock_Fragment = { __typename?: 'MenuNavigationBlock', _type: 'MenuNavigationBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_MenuNavigationBlock_Fragment' };

type IElementData_OdpEmbedBlock_Fragment = { __typename?: 'OdpEmbedBlock', _type: 'OdpEmbedBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_OdpEmbedBlock_Fragment' };

type IElementData_PageSeoSettings_Fragment = { __typename?: 'PageSeoSettings', _type: 'PageSeoSettings', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_PageSeoSettings_Fragment' };

type IElementData_ParagraphElement_Fragment = { __typename?: 'ParagraphElement', _type: 'ParagraphElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_ParagraphElement_Fragment' };

type IElementData_QuoteBlock_Fragment = { __typename?: 'QuoteBlock', _type: 'QuoteBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_QuoteBlock_Fragment' };

type IElementData_RichTextElement_Fragment = { __typename?: 'RichTextElement', _type: 'RichTextElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_RichTextElement_Fragment' };

type IElementData_TestimonialElement_Fragment = { __typename?: 'TestimonialElement', _type: 'TestimonialElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_TestimonialElement_Fragment' };

type IElementData_TextBlock_Fragment = { __typename?: 'TextBlock', _type: 'TextBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_TextBlock_Fragment' };

type IElementData_VideoElement_Fragment = { __typename?: 'VideoElement', _type: 'VideoElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_VideoElement_Fragment' };

type IElementData__Component_Fragment = { __typename?: '_Component', _type: '_Component', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData__Component_Fragment' };

type IElementData__Section_Fragment = { __typename?: '_Section', _type: '_Section', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData__Section_Fragment' };

export type IElementDataFragment = IElementData_ArticleListElement_Fragment | IElementData_BlankSection_Fragment | IElementData_ButtonBlock_Fragment | IElementData_CTAElement_Fragment | IElementData_CarouselBlock_Fragment | IElementData_ContentRecsElement_Fragment | IElementData_ContinueReadingComponent_Fragment | IElementData_HeadingElement_Fragment | IElementData_HeroBlock_Fragment | IElementData_ImageElement_Fragment | IElementData_LayoutSettingsBlock_Fragment | IElementData_MegaMenuGroupBlock_Fragment | IElementData_MenuNavigationBlock_Fragment | IElementData_OdpEmbedBlock_Fragment | IElementData_PageSeoSettings_Fragment | IElementData_ParagraphElement_Fragment | IElementData_QuoteBlock_Fragment | IElementData_RichTextElement_Fragment | IElementData_TestimonialElement_Fragment | IElementData_TextBlock_Fragment | IElementData_VideoElement_Fragment | IElementData__Component_Fragment | IElementData__Section_Fragment;

type ElementData_ArticleListElement_Fragment = (
  { __typename?: 'ArticleListElement' }
  & { ' $fragmentRefs'?: { 'IElementData_ArticleListElement_Fragment': IElementData_ArticleListElement_Fragment } }
) & { ' $fragmentName'?: 'ElementData_ArticleListElement_Fragment' };

type ElementData_BlankSection_Fragment = (
  { __typename?: 'BlankSection' }
  & { ' $fragmentRefs'?: { 'IElementData_BlankSection_Fragment': IElementData_BlankSection_Fragment } }
) & { ' $fragmentName'?: 'ElementData_BlankSection_Fragment' };

type ElementData_ButtonBlock_Fragment = (
  { __typename?: 'ButtonBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_ButtonBlock_Fragment': IElementData_ButtonBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_ButtonBlock_Fragment' };

type ElementData_CTAElement_Fragment = (
  { __typename?: 'CTAElement' }
  & { ' $fragmentRefs'?: { 'IElementData_CTAElement_Fragment': IElementData_CTAElement_Fragment } }
) & { ' $fragmentName'?: 'ElementData_CTAElement_Fragment' };

type ElementData_CarouselBlock_Fragment = (
  { __typename?: 'CarouselBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_CarouselBlock_Fragment': IElementData_CarouselBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_CarouselBlock_Fragment' };

type ElementData_ContentRecsElement_Fragment = (
  { __typename?: 'ContentRecsElement' }
  & { ' $fragmentRefs'?: { 'IElementData_ContentRecsElement_Fragment': IElementData_ContentRecsElement_Fragment } }
) & { ' $fragmentName'?: 'ElementData_ContentRecsElement_Fragment' };

type ElementData_ContinueReadingComponent_Fragment = (
  { __typename?: 'ContinueReadingComponent' }
  & { ' $fragmentRefs'?: { 'IElementData_ContinueReadingComponent_Fragment': IElementData_ContinueReadingComponent_Fragment } }
) & { ' $fragmentName'?: 'ElementData_ContinueReadingComponent_Fragment' };

type ElementData_HeadingElement_Fragment = (
  { __typename?: 'HeadingElement' }
  & { ' $fragmentRefs'?: { 'IElementData_HeadingElement_Fragment': IElementData_HeadingElement_Fragment } }
) & { ' $fragmentName'?: 'ElementData_HeadingElement_Fragment' };

type ElementData_HeroBlock_Fragment = (
  { __typename?: 'HeroBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_HeroBlock_Fragment': IElementData_HeroBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_HeroBlock_Fragment' };

type ElementData_ImageElement_Fragment = (
  { __typename?: 'ImageElement' }
  & { ' $fragmentRefs'?: { 'IElementData_ImageElement_Fragment': IElementData_ImageElement_Fragment } }
) & { ' $fragmentName'?: 'ElementData_ImageElement_Fragment' };

type ElementData_LayoutSettingsBlock_Fragment = (
  { __typename?: 'LayoutSettingsBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_LayoutSettingsBlock_Fragment': IElementData_LayoutSettingsBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_LayoutSettingsBlock_Fragment' };

type ElementData_MegaMenuGroupBlock_Fragment = (
  { __typename?: 'MegaMenuGroupBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_MegaMenuGroupBlock_Fragment': IElementData_MegaMenuGroupBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_MegaMenuGroupBlock_Fragment' };

type ElementData_MenuNavigationBlock_Fragment = (
  { __typename?: 'MenuNavigationBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_MenuNavigationBlock_Fragment': IElementData_MenuNavigationBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_MenuNavigationBlock_Fragment' };

type ElementData_OdpEmbedBlock_Fragment = (
  { __typename?: 'OdpEmbedBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_OdpEmbedBlock_Fragment': IElementData_OdpEmbedBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_OdpEmbedBlock_Fragment' };

type ElementData_PageSeoSettings_Fragment = (
  { __typename?: 'PageSeoSettings' }
  & { ' $fragmentRefs'?: { 'IElementData_PageSeoSettings_Fragment': IElementData_PageSeoSettings_Fragment } }
) & { ' $fragmentName'?: 'ElementData_PageSeoSettings_Fragment' };

type ElementData_ParagraphElement_Fragment = (
  { __typename?: 'ParagraphElement' }
  & { ' $fragmentRefs'?: { 'IElementData_ParagraphElement_Fragment': IElementData_ParagraphElement_Fragment } }
) & { ' $fragmentName'?: 'ElementData_ParagraphElement_Fragment' };

type ElementData_QuoteBlock_Fragment = (
  { __typename?: 'QuoteBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_QuoteBlock_Fragment': IElementData_QuoteBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_QuoteBlock_Fragment' };

type ElementData_RichTextElement_Fragment = (
  { __typename?: 'RichTextElement' }
  & { ' $fragmentRefs'?: { 'IElementData_RichTextElement_Fragment': IElementData_RichTextElement_Fragment } }
) & { ' $fragmentName'?: 'ElementData_RichTextElement_Fragment' };

type ElementData_TestimonialElement_Fragment = (
  { __typename?: 'TestimonialElement' }
  & { ' $fragmentRefs'?: { 'IElementData_TestimonialElement_Fragment': IElementData_TestimonialElement_Fragment } }
) & { ' $fragmentName'?: 'ElementData_TestimonialElement_Fragment' };

type ElementData_TextBlock_Fragment = (
  { __typename?: 'TextBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_TextBlock_Fragment': IElementData_TextBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_TextBlock_Fragment' };

type ElementData_VideoElement_Fragment = (
  { __typename?: 'VideoElement' }
  & { ' $fragmentRefs'?: { 'IElementData_VideoElement_Fragment': IElementData_VideoElement_Fragment } }
) & { ' $fragmentName'?: 'ElementData_VideoElement_Fragment' };

type ElementData__Component_Fragment = (
  { __typename?: '_Component' }
  & { ' $fragmentRefs'?: { 'IElementData__Component_Fragment': IElementData__Component_Fragment } }
) & { ' $fragmentName'?: 'ElementData__Component_Fragment' };

type ElementData__Section_Fragment = (
  { __typename?: '_Section' }
  & { ' $fragmentRefs'?: { 'IElementData__Section_Fragment': IElementData__Section_Fragment } }
) & { ' $fragmentName'?: 'ElementData__Section_Fragment' };

export type ElementDataFragment = ElementData_ArticleListElement_Fragment | ElementData_BlankSection_Fragment | ElementData_ButtonBlock_Fragment | ElementData_CTAElement_Fragment | ElementData_CarouselBlock_Fragment | ElementData_ContentRecsElement_Fragment | ElementData_ContinueReadingComponent_Fragment | ElementData_HeadingElement_Fragment | ElementData_HeroBlock_Fragment | ElementData_ImageElement_Fragment | ElementData_LayoutSettingsBlock_Fragment | ElementData_MegaMenuGroupBlock_Fragment | ElementData_MenuNavigationBlock_Fragment | ElementData_OdpEmbedBlock_Fragment | ElementData_PageSeoSettings_Fragment | ElementData_ParagraphElement_Fragment | ElementData_QuoteBlock_Fragment | ElementData_RichTextElement_Fragment | ElementData_TestimonialElement_Fragment | ElementData_TextBlock_Fragment | ElementData_VideoElement_Fragment | ElementData__Component_Fragment | ElementData__Section_Fragment;

type BlockData_ArticleListElement_Fragment = (
  { __typename?: 'ArticleListElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ArticleListElement_Fragment': IContentData_ArticleListElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ArticleListElement_Fragment' };

type BlockData_BlankSection_Fragment = (
  { __typename?: 'BlankSection' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankSection_Fragment': IContentData_BlankSection_Fragment } }
) & { ' $fragmentName'?: 'BlockData_BlankSection_Fragment' };

type BlockData_ButtonBlock_Fragment = (
  { __typename?: 'ButtonBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ButtonBlock_Fragment' };

type BlockData_CTAElement_Fragment = (
  { __typename?: 'CTAElement' }
  & { ' $fragmentRefs'?: { 'IContentData_CTAElement_Fragment': IContentData_CTAElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_CTAElement_Fragment' };

type BlockData_CarouselBlock_Fragment = (
  { __typename?: 'CarouselBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_CarouselBlock_Fragment': IContentData_CarouselBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_CarouselBlock_Fragment' };

type BlockData_ContentRecsElement_Fragment = (
  { __typename?: 'ContentRecsElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ContentRecsElement_Fragment': IContentData_ContentRecsElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ContentRecsElement_Fragment' };

type BlockData_ContinueReadingComponent_Fragment = (
  { __typename?: 'ContinueReadingComponent' }
  & { ' $fragmentRefs'?: { 'IContentData_ContinueReadingComponent_Fragment': IContentData_ContinueReadingComponent_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ContinueReadingComponent_Fragment' };

type BlockData_HeadingElement_Fragment = (
  { __typename?: 'HeadingElement' }
  & { ' $fragmentRefs'?: { 'IContentData_HeadingElement_Fragment': IContentData_HeadingElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_HeadingElement_Fragment' };

type BlockData_HeroBlock_Fragment = (
  { __typename?: 'HeroBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_HeroBlock_Fragment' };

type BlockData_ImageElement_Fragment = (
  { __typename?: 'ImageElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageElement_Fragment': IContentData_ImageElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ImageElement_Fragment' };

type BlockData_LayoutSettingsBlock_Fragment = (
  { __typename?: 'LayoutSettingsBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_LayoutSettingsBlock_Fragment': IContentData_LayoutSettingsBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_LayoutSettingsBlock_Fragment' };

type BlockData_MegaMenuGroupBlock_Fragment = (
  { __typename?: 'MegaMenuGroupBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_MegaMenuGroupBlock_Fragment': IContentData_MegaMenuGroupBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_MegaMenuGroupBlock_Fragment' };

type BlockData_MenuNavigationBlock_Fragment = (
  { __typename?: 'MenuNavigationBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_MenuNavigationBlock_Fragment': IContentData_MenuNavigationBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_MenuNavigationBlock_Fragment' };

type BlockData_OdpEmbedBlock_Fragment = (
  { __typename?: 'OdpEmbedBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_OdpEmbedBlock_Fragment': IContentData_OdpEmbedBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_OdpEmbedBlock_Fragment' };

type BlockData_PageSeoSettings_Fragment = (
  { __typename?: 'PageSeoSettings' }
  & { ' $fragmentRefs'?: { 'IContentData_PageSeoSettings_Fragment': IContentData_PageSeoSettings_Fragment } }
) & { ' $fragmentName'?: 'BlockData_PageSeoSettings_Fragment' };

type BlockData_ParagraphElement_Fragment = (
  { __typename?: 'ParagraphElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ParagraphElement_Fragment': IContentData_ParagraphElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ParagraphElement_Fragment' };

type BlockData_QuoteBlock_Fragment = (
  { __typename?: 'QuoteBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_QuoteBlock_Fragment': IContentData_QuoteBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_QuoteBlock_Fragment' };

type BlockData_RichTextElement_Fragment = (
  { __typename?: 'RichTextElement' }
  & { ' $fragmentRefs'?: { 'IContentData_RichTextElement_Fragment': IContentData_RichTextElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_RichTextElement_Fragment' };

type BlockData_TestimonialElement_Fragment = (
  { __typename?: 'TestimonialElement' }
  & { ' $fragmentRefs'?: { 'IContentData_TestimonialElement_Fragment': IContentData_TestimonialElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_TestimonialElement_Fragment' };

type BlockData_TextBlock_Fragment = (
  { __typename?: 'TextBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_TextBlock_Fragment': IContentData_TextBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_TextBlock_Fragment' };

type BlockData_VideoElement_Fragment = (
  { __typename?: 'VideoElement' }
  & { ' $fragmentRefs'?: { 'IContentData_VideoElement_Fragment': IContentData_VideoElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_VideoElement_Fragment' };

type BlockData__Component_Fragment = (
  { __typename?: '_Component' }
  & { ' $fragmentRefs'?: { 'IContentData__Component_Fragment': IContentData__Component_Fragment } }
) & { ' $fragmentName'?: 'BlockData__Component_Fragment' };

type BlockData__Section_Fragment = (
  { __typename?: '_Section' }
  & { ' $fragmentRefs'?: { 'IContentData__Section_Fragment': IContentData__Section_Fragment } }
) & { ' $fragmentName'?: 'BlockData__Section_Fragment' };

export type BlockDataFragment = BlockData_ArticleListElement_Fragment | BlockData_BlankSection_Fragment | BlockData_ButtonBlock_Fragment | BlockData_CTAElement_Fragment | BlockData_CarouselBlock_Fragment | BlockData_ContentRecsElement_Fragment | BlockData_ContinueReadingComponent_Fragment | BlockData_HeadingElement_Fragment | BlockData_HeroBlock_Fragment | BlockData_ImageElement_Fragment | BlockData_LayoutSettingsBlock_Fragment | BlockData_MegaMenuGroupBlock_Fragment | BlockData_MenuNavigationBlock_Fragment | BlockData_OdpEmbedBlock_Fragment | BlockData_PageSeoSettings_Fragment | BlockData_ParagraphElement_Fragment | BlockData_QuoteBlock_Fragment | BlockData_RichTextElement_Fragment | BlockData_TestimonialElement_Fragment | BlockData_TextBlock_Fragment | BlockData_VideoElement_Fragment | BlockData__Component_Fragment | BlockData__Section_Fragment;

type PageData_ArticleListElement_Fragment = (
  { __typename?: 'ArticleListElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ArticleListElement_Fragment': IContentData_ArticleListElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_ArticleListElement_Fragment' };

type PageData_BlankExperience_Fragment = (
  { __typename?: 'BlankExperience' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankExperience_Fragment': IContentData_BlankExperience_Fragment } }
) & { ' $fragmentName'?: 'PageData_BlankExperience_Fragment' };

type PageData_BlankSection_Fragment = (
  { __typename?: 'BlankSection' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankSection_Fragment': IContentData_BlankSection_Fragment } }
) & { ' $fragmentName'?: 'PageData_BlankSection_Fragment' };

type PageData_BlogPostPage_Fragment = (
  { __typename?: 'BlogPostPage' }
  & { ' $fragmentRefs'?: { 'IContentData_BlogPostPage_Fragment': IContentData_BlogPostPage_Fragment } }
) & { ' $fragmentName'?: 'PageData_BlogPostPage_Fragment' };

type PageData_BlogSectionExperience_Fragment = (
  { __typename?: 'BlogSectionExperience' }
  & { ' $fragmentRefs'?: { 'IContentData_BlogSectionExperience_Fragment': IContentData_BlogSectionExperience_Fragment } }
) & { ' $fragmentName'?: 'PageData_BlogSectionExperience_Fragment' };

type PageData_ButtonBlock_Fragment = (
  { __typename?: 'ButtonBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_ButtonBlock_Fragment' };

type PageData_CTAElement_Fragment = (
  { __typename?: 'CTAElement' }
  & { ' $fragmentRefs'?: { 'IContentData_CTAElement_Fragment': IContentData_CTAElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_CTAElement_Fragment' };

type PageData_CarouselBlock_Fragment = (
  { __typename?: 'CarouselBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_CarouselBlock_Fragment': IContentData_CarouselBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_CarouselBlock_Fragment' };

type PageData_ContentRecsElement_Fragment = (
  { __typename?: 'ContentRecsElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ContentRecsElement_Fragment': IContentData_ContentRecsElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_ContentRecsElement_Fragment' };

type PageData_ContinueReadingComponent_Fragment = (
  { __typename?: 'ContinueReadingComponent' }
  & { ' $fragmentRefs'?: { 'IContentData_ContinueReadingComponent_Fragment': IContentData_ContinueReadingComponent_Fragment } }
) & { ' $fragmentName'?: 'PageData_ContinueReadingComponent_Fragment' };

type PageData_GenericMedia_Fragment = (
  { __typename?: 'GenericMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_GenericMedia_Fragment': IContentData_GenericMedia_Fragment } }
) & { ' $fragmentName'?: 'PageData_GenericMedia_Fragment' };

type PageData_HeadingElement_Fragment = (
  { __typename?: 'HeadingElement' }
  & { ' $fragmentRefs'?: { 'IContentData_HeadingElement_Fragment': IContentData_HeadingElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_HeadingElement_Fragment' };

type PageData_HeroBlock_Fragment = (
  { __typename?: 'HeroBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_HeroBlock_Fragment' };

type PageData_ImageElement_Fragment = (
  { __typename?: 'ImageElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageElement_Fragment': IContentData_ImageElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_ImageElement_Fragment' };

type PageData_ImageMedia_Fragment = (
  { __typename?: 'ImageMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageMedia_Fragment': IContentData_ImageMedia_Fragment } }
) & { ' $fragmentName'?: 'PageData_ImageMedia_Fragment' };

type PageData_LandingPage_Fragment = (
  { __typename?: 'LandingPage' }
  & { ' $fragmentRefs'?: { 'IContentData_LandingPage_Fragment': IContentData_LandingPage_Fragment } }
) & { ' $fragmentName'?: 'PageData_LandingPage_Fragment' };

type PageData_LayoutSettingsBlock_Fragment = (
  { __typename?: 'LayoutSettingsBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_LayoutSettingsBlock_Fragment': IContentData_LayoutSettingsBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_LayoutSettingsBlock_Fragment' };

type PageData_MegaMenuGroupBlock_Fragment = (
  { __typename?: 'MegaMenuGroupBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_MegaMenuGroupBlock_Fragment': IContentData_MegaMenuGroupBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_MegaMenuGroupBlock_Fragment' };

type PageData_MenuNavigationBlock_Fragment = (
  { __typename?: 'MenuNavigationBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_MenuNavigationBlock_Fragment': IContentData_MenuNavigationBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_MenuNavigationBlock_Fragment' };

type PageData_OdpEmbedBlock_Fragment = (
  { __typename?: 'OdpEmbedBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_OdpEmbedBlock_Fragment': IContentData_OdpEmbedBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_OdpEmbedBlock_Fragment' };

type PageData_PageSeoSettings_Fragment = (
  { __typename?: 'PageSeoSettings' }
  & { ' $fragmentRefs'?: { 'IContentData_PageSeoSettings_Fragment': IContentData_PageSeoSettings_Fragment } }
) & { ' $fragmentName'?: 'PageData_PageSeoSettings_Fragment' };

type PageData_ParagraphElement_Fragment = (
  { __typename?: 'ParagraphElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ParagraphElement_Fragment': IContentData_ParagraphElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_ParagraphElement_Fragment' };

type PageData_QuoteBlock_Fragment = (
  { __typename?: 'QuoteBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_QuoteBlock_Fragment': IContentData_QuoteBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_QuoteBlock_Fragment' };

type PageData_RichTextElement_Fragment = (
  { __typename?: 'RichTextElement' }
  & { ' $fragmentRefs'?: { 'IContentData_RichTextElement_Fragment': IContentData_RichTextElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_RichTextElement_Fragment' };

type PageData_SysContentFolder_Fragment = (
  { __typename?: 'SysContentFolder' }
  & { ' $fragmentRefs'?: { 'IContentData_SysContentFolder_Fragment': IContentData_SysContentFolder_Fragment } }
) & { ' $fragmentName'?: 'PageData_SysContentFolder_Fragment' };

type PageData_TestimonialElement_Fragment = (
  { __typename?: 'TestimonialElement' }
  & { ' $fragmentRefs'?: { 'IContentData_TestimonialElement_Fragment': IContentData_TestimonialElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_TestimonialElement_Fragment' };

type PageData_TextBlock_Fragment = (
  { __typename?: 'TextBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_TextBlock_Fragment': IContentData_TextBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_TextBlock_Fragment' };

type PageData_VideoElement_Fragment = (
  { __typename?: 'VideoElement' }
  & { ' $fragmentRefs'?: { 'IContentData_VideoElement_Fragment': IContentData_VideoElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_VideoElement_Fragment' };

type PageData_VideoMedia_Fragment = (
  { __typename?: 'VideoMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_VideoMedia_Fragment': IContentData_VideoMedia_Fragment } }
) & { ' $fragmentName'?: 'PageData_VideoMedia_Fragment' };

type PageData__Component_Fragment = (
  { __typename?: '_Component' }
  & { ' $fragmentRefs'?: { 'IContentData__Component_Fragment': IContentData__Component_Fragment } }
) & { ' $fragmentName'?: 'PageData__Component_Fragment' };

type PageData__Content_Fragment = (
  { __typename?: '_Content' }
  & { ' $fragmentRefs'?: { 'IContentData__Content_Fragment': IContentData__Content_Fragment } }
) & { ' $fragmentName'?: 'PageData__Content_Fragment' };

type PageData__Experience_Fragment = (
  { __typename?: '_Experience' }
  & { ' $fragmentRefs'?: { 'IContentData__Experience_Fragment': IContentData__Experience_Fragment } }
) & { ' $fragmentName'?: 'PageData__Experience_Fragment' };

type PageData__Folder_Fragment = (
  { __typename?: '_Folder' }
  & { ' $fragmentRefs'?: { 'IContentData__Folder_Fragment': IContentData__Folder_Fragment } }
) & { ' $fragmentName'?: 'PageData__Folder_Fragment' };

type PageData__Image_Fragment = (
  { __typename?: '_Image' }
  & { ' $fragmentRefs'?: { 'IContentData__Image_Fragment': IContentData__Image_Fragment } }
) & { ' $fragmentName'?: 'PageData__Image_Fragment' };

type PageData__Media_Fragment = (
  { __typename?: '_Media' }
  & { ' $fragmentRefs'?: { 'IContentData__Media_Fragment': IContentData__Media_Fragment } }
) & { ' $fragmentName'?: 'PageData__Media_Fragment' };

type PageData__Page_Fragment = (
  { __typename?: '_Page' }
  & { ' $fragmentRefs'?: { 'IContentData__Page_Fragment': IContentData__Page_Fragment } }
) & { ' $fragmentName'?: 'PageData__Page_Fragment' };

type PageData__Section_Fragment = (
  { __typename?: '_Section' }
  & { ' $fragmentRefs'?: { 'IContentData__Section_Fragment': IContentData__Section_Fragment } }
) & { ' $fragmentName'?: 'PageData__Section_Fragment' };

type PageData__Video_Fragment = (
  { __typename?: '_Video' }
  & { ' $fragmentRefs'?: { 'IContentData__Video_Fragment': IContentData__Video_Fragment } }
) & { ' $fragmentName'?: 'PageData__Video_Fragment' };

export type PageDataFragment = PageData_ArticleListElement_Fragment | PageData_BlankExperience_Fragment | PageData_BlankSection_Fragment | PageData_BlogPostPage_Fragment | PageData_BlogSectionExperience_Fragment | PageData_ButtonBlock_Fragment | PageData_CTAElement_Fragment | PageData_CarouselBlock_Fragment | PageData_ContentRecsElement_Fragment | PageData_ContinueReadingComponent_Fragment | PageData_GenericMedia_Fragment | PageData_HeadingElement_Fragment | PageData_HeroBlock_Fragment | PageData_ImageElement_Fragment | PageData_ImageMedia_Fragment | PageData_LandingPage_Fragment | PageData_LayoutSettingsBlock_Fragment | PageData_MegaMenuGroupBlock_Fragment | PageData_MenuNavigationBlock_Fragment | PageData_OdpEmbedBlock_Fragment | PageData_PageSeoSettings_Fragment | PageData_ParagraphElement_Fragment | PageData_QuoteBlock_Fragment | PageData_RichTextElement_Fragment | PageData_SysContentFolder_Fragment | PageData_TestimonialElement_Fragment | PageData_TextBlock_Fragment | PageData_VideoElement_Fragment | PageData_VideoMedia_Fragment | PageData__Component_Fragment | PageData__Content_Fragment | PageData__Experience_Fragment | PageData__Folder_Fragment | PageData__Image_Fragment | PageData__Media_Fragment | PageData__Page_Fragment | PageData__Section_Fragment | PageData__Video_Fragment;

export type LinkDataFragment = { __typename?: 'ContentUrl', base?: string | null, default?: string | null } & { ' $fragmentName'?: 'LinkDataFragment' };

export type ReferenceDataFragment = { __typename?: 'ContentReference', key?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'ReferenceDataFragment' };

type IContentInfo_ContentMetadata_Fragment = { __typename?: 'ContentMetadata', key?: string | null, locale?: string | null, types?: Array<string | null> | null, displayName?: string | null, version?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'IContentInfo_ContentMetadata_Fragment' };

type IContentInfo_InstanceMetadata_Fragment = { __typename?: 'InstanceMetadata', key?: string | null, locale?: string | null, types?: Array<string | null> | null, displayName?: string | null, version?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'IContentInfo_InstanceMetadata_Fragment' };

type IContentInfo_ItemMetadata_Fragment = { __typename?: 'ItemMetadata', key?: string | null, locale?: string | null, types?: Array<string | null> | null, displayName?: string | null, version?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'IContentInfo_ItemMetadata_Fragment' };

type IContentInfo_MediaMetadata_Fragment = { __typename?: 'MediaMetadata', key?: string | null, locale?: string | null, types?: Array<string | null> | null, displayName?: string | null, version?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'IContentInfo_MediaMetadata_Fragment' };

export type IContentInfoFragment = IContentInfo_ContentMetadata_Fragment | IContentInfo_InstanceMetadata_Fragment | IContentInfo_ItemMetadata_Fragment | IContentInfo_MediaMetadata_Fragment;

type IContentListItem_ArticleListElement_Fragment = (
  { __typename?: 'ArticleListElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ArticleListElement_Fragment': IContentData_ArticleListElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ArticleListElement_Fragment' };

type IContentListItem_BlankExperience_Fragment = (
  { __typename?: 'BlankExperience' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankExperience_Fragment': IContentData_BlankExperience_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_BlankExperience_Fragment' };

type IContentListItem_BlankSection_Fragment = (
  { __typename?: 'BlankSection' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankSection_Fragment': IContentData_BlankSection_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_BlankSection_Fragment' };

type IContentListItem_BlogPostPage_Fragment = (
  { __typename?: 'BlogPostPage' }
  & { ' $fragmentRefs'?: { 'IContentData_BlogPostPage_Fragment': IContentData_BlogPostPage_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_BlogPostPage_Fragment' };

type IContentListItem_BlogSectionExperience_Fragment = (
  { __typename?: 'BlogSectionExperience' }
  & { ' $fragmentRefs'?: { 'IContentData_BlogSectionExperience_Fragment': IContentData_BlogSectionExperience_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_BlogSectionExperience_Fragment' };

type IContentListItem_ButtonBlock_Fragment = (
  { __typename?: 'ButtonBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ButtonBlock_Fragment' };

type IContentListItem_CTAElement_Fragment = (
  { __typename?: 'CTAElement' }
  & { ' $fragmentRefs'?: { 'IContentData_CTAElement_Fragment': IContentData_CTAElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_CTAElement_Fragment' };

type IContentListItem_CarouselBlock_Fragment = (
  { __typename?: 'CarouselBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_CarouselBlock_Fragment': IContentData_CarouselBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_CarouselBlock_Fragment' };

type IContentListItem_ContentRecsElement_Fragment = (
  { __typename?: 'ContentRecsElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ContentRecsElement_Fragment': IContentData_ContentRecsElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ContentRecsElement_Fragment' };

type IContentListItem_ContinueReadingComponent_Fragment = (
  { __typename?: 'ContinueReadingComponent' }
  & { ' $fragmentRefs'?: { 'IContentData_ContinueReadingComponent_Fragment': IContentData_ContinueReadingComponent_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ContinueReadingComponent_Fragment' };

type IContentListItem_GenericMedia_Fragment = (
  { __typename?: 'GenericMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_GenericMedia_Fragment': IContentData_GenericMedia_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_GenericMedia_Fragment' };

type IContentListItem_HeadingElement_Fragment = (
  { __typename?: 'HeadingElement' }
  & { ' $fragmentRefs'?: { 'IContentData_HeadingElement_Fragment': IContentData_HeadingElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_HeadingElement_Fragment' };

type IContentListItem_HeroBlock_Fragment = (
  { __typename?: 'HeroBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_HeroBlock_Fragment' };

type IContentListItem_ImageElement_Fragment = (
  { __typename?: 'ImageElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageElement_Fragment': IContentData_ImageElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ImageElement_Fragment' };

type IContentListItem_ImageMedia_Fragment = (
  { __typename?: 'ImageMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageMedia_Fragment': IContentData_ImageMedia_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ImageMedia_Fragment' };

type IContentListItem_LandingPage_Fragment = (
  { __typename?: 'LandingPage' }
  & { ' $fragmentRefs'?: { 'IContentData_LandingPage_Fragment': IContentData_LandingPage_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_LandingPage_Fragment' };

type IContentListItem_LayoutSettingsBlock_Fragment = (
  { __typename?: 'LayoutSettingsBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_LayoutSettingsBlock_Fragment': IContentData_LayoutSettingsBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_LayoutSettingsBlock_Fragment' };

type IContentListItem_MegaMenuGroupBlock_Fragment = (
  { __typename?: 'MegaMenuGroupBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_MegaMenuGroupBlock_Fragment': IContentData_MegaMenuGroupBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_MegaMenuGroupBlock_Fragment' };

type IContentListItem_MenuNavigationBlock_Fragment = (
  { __typename?: 'MenuNavigationBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_MenuNavigationBlock_Fragment': IContentData_MenuNavigationBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_MenuNavigationBlock_Fragment' };

type IContentListItem_OdpEmbedBlock_Fragment = (
  { __typename?: 'OdpEmbedBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_OdpEmbedBlock_Fragment': IContentData_OdpEmbedBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_OdpEmbedBlock_Fragment' };

type IContentListItem_PageSeoSettings_Fragment = (
  { __typename?: 'PageSeoSettings' }
  & { ' $fragmentRefs'?: { 'IContentData_PageSeoSettings_Fragment': IContentData_PageSeoSettings_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_PageSeoSettings_Fragment' };

type IContentListItem_ParagraphElement_Fragment = (
  { __typename?: 'ParagraphElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ParagraphElement_Fragment': IContentData_ParagraphElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ParagraphElement_Fragment' };

type IContentListItem_QuoteBlock_Fragment = (
  { __typename?: 'QuoteBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_QuoteBlock_Fragment': IContentData_QuoteBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_QuoteBlock_Fragment' };

type IContentListItem_RichTextElement_Fragment = (
  { __typename?: 'RichTextElement' }
  & { ' $fragmentRefs'?: { 'IContentData_RichTextElement_Fragment': IContentData_RichTextElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_RichTextElement_Fragment' };

type IContentListItem_SysContentFolder_Fragment = (
  { __typename?: 'SysContentFolder' }
  & { ' $fragmentRefs'?: { 'IContentData_SysContentFolder_Fragment': IContentData_SysContentFolder_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_SysContentFolder_Fragment' };

type IContentListItem_TestimonialElement_Fragment = (
  { __typename?: 'TestimonialElement' }
  & { ' $fragmentRefs'?: { 'IContentData_TestimonialElement_Fragment': IContentData_TestimonialElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_TestimonialElement_Fragment' };

type IContentListItem_TextBlock_Fragment = (
  { __typename?: 'TextBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_TextBlock_Fragment': IContentData_TextBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_TextBlock_Fragment' };

type IContentListItem_VideoElement_Fragment = (
  { __typename?: 'VideoElement' }
  & { ' $fragmentRefs'?: { 'IContentData_VideoElement_Fragment': IContentData_VideoElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_VideoElement_Fragment' };

type IContentListItem_VideoMedia_Fragment = (
  { __typename?: 'VideoMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_VideoMedia_Fragment': IContentData_VideoMedia_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_VideoMedia_Fragment' };

type IContentListItem__Component_Fragment = (
  { __typename?: '_Component' }
  & { ' $fragmentRefs'?: { 'IContentData__Component_Fragment': IContentData__Component_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Component_Fragment' };

type IContentListItem__Content_Fragment = (
  { __typename?: '_Content' }
  & { ' $fragmentRefs'?: { 'IContentData__Content_Fragment': IContentData__Content_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Content_Fragment' };

type IContentListItem__Experience_Fragment = (
  { __typename?: '_Experience' }
  & { ' $fragmentRefs'?: { 'IContentData__Experience_Fragment': IContentData__Experience_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Experience_Fragment' };

type IContentListItem__Folder_Fragment = (
  { __typename?: '_Folder' }
  & { ' $fragmentRefs'?: { 'IContentData__Folder_Fragment': IContentData__Folder_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Folder_Fragment' };

type IContentListItem__Image_Fragment = (
  { __typename?: '_Image' }
  & { ' $fragmentRefs'?: { 'IContentData__Image_Fragment': IContentData__Image_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Image_Fragment' };

type IContentListItem__Media_Fragment = (
  { __typename?: '_Media' }
  & { ' $fragmentRefs'?: { 'IContentData__Media_Fragment': IContentData__Media_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Media_Fragment' };

type IContentListItem__Page_Fragment = (
  { __typename?: '_Page' }
  & { ' $fragmentRefs'?: { 'IContentData__Page_Fragment': IContentData__Page_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Page_Fragment' };

type IContentListItem__Section_Fragment = (
  { __typename?: '_Section' }
  & { ' $fragmentRefs'?: { 'IContentData__Section_Fragment': IContentData__Section_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Section_Fragment' };

type IContentListItem__Video_Fragment = (
  { __typename?: '_Video' }
  & { ' $fragmentRefs'?: { 'IContentData__Video_Fragment': IContentData__Video_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Video_Fragment' };

export type IContentListItemFragment = IContentListItem_ArticleListElement_Fragment | IContentListItem_BlankExperience_Fragment | IContentListItem_BlankSection_Fragment | IContentListItem_BlogPostPage_Fragment | IContentListItem_BlogSectionExperience_Fragment | IContentListItem_ButtonBlock_Fragment | IContentListItem_CTAElement_Fragment | IContentListItem_CarouselBlock_Fragment | IContentListItem_ContentRecsElement_Fragment | IContentListItem_ContinueReadingComponent_Fragment | IContentListItem_GenericMedia_Fragment | IContentListItem_HeadingElement_Fragment | IContentListItem_HeroBlock_Fragment | IContentListItem_ImageElement_Fragment | IContentListItem_ImageMedia_Fragment | IContentListItem_LandingPage_Fragment | IContentListItem_LayoutSettingsBlock_Fragment | IContentListItem_MegaMenuGroupBlock_Fragment | IContentListItem_MenuNavigationBlock_Fragment | IContentListItem_OdpEmbedBlock_Fragment | IContentListItem_PageSeoSettings_Fragment | IContentListItem_ParagraphElement_Fragment | IContentListItem_QuoteBlock_Fragment | IContentListItem_RichTextElement_Fragment | IContentListItem_SysContentFolder_Fragment | IContentListItem_TestimonialElement_Fragment | IContentListItem_TextBlock_Fragment | IContentListItem_VideoElement_Fragment | IContentListItem_VideoMedia_Fragment | IContentListItem__Component_Fragment | IContentListItem__Content_Fragment | IContentListItem__Experience_Fragment | IContentListItem__Folder_Fragment | IContentListItem__Image_Fragment | IContentListItem__Media_Fragment | IContentListItem__Page_Fragment | IContentListItem__Section_Fragment | IContentListItem__Video_Fragment;

type ExperienceData_BlankExperience_Fragment = { __typename?: 'BlankExperience', composition?: (
    { __typename?: 'CompositionStructureNode', nodes?: Array<(
      { __typename?: 'CompositionComponentNode' }
      & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment;'CompositionComponentNodeDataFragment': CompositionComponentNodeDataFragment } }
    ) | (
      { __typename?: 'CompositionNode' }
      & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
    ) | (
      { __typename?: 'CompositionStructureNode', nodes?: Array<(
        { __typename?: 'CompositionComponentNode' }
        & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment } }
      ) | (
        { __typename?: 'CompositionNode' }
        & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
      ) | (
        { __typename?: 'CompositionStructureNode', nodes?: Array<(
          { __typename?: 'CompositionComponentNode' }
          & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment } }
        ) | (
          { __typename?: 'CompositionNode' }
          & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
        ) | (
          { __typename?: 'CompositionStructureNode', nodes?: Array<(
            { __typename?: 'CompositionComponentNode' }
            & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment;'CompositionComponentNodeDataFragment': CompositionComponentNodeDataFragment } }
          ) | (
            { __typename?: 'CompositionNode' }
            & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
          ) | (
            { __typename?: 'CompositionStructureNode' }
            & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
          ) | null> | null }
          & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
        ) | null> | null }
        & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
      ) | null> | null }
      & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
    ) | null> | null }
    & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
  ) | null } & { ' $fragmentName'?: 'ExperienceData_BlankExperience_Fragment' };

type ExperienceData_BlogSectionExperience_Fragment = { __typename?: 'BlogSectionExperience', composition?: (
    { __typename?: 'CompositionStructureNode', nodes?: Array<(
      { __typename?: 'CompositionComponentNode' }
      & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment;'CompositionComponentNodeDataFragment': CompositionComponentNodeDataFragment } }
    ) | (
      { __typename?: 'CompositionNode' }
      & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
    ) | (
      { __typename?: 'CompositionStructureNode', nodes?: Array<(
        { __typename?: 'CompositionComponentNode' }
        & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment } }
      ) | (
        { __typename?: 'CompositionNode' }
        & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
      ) | (
        { __typename?: 'CompositionStructureNode', nodes?: Array<(
          { __typename?: 'CompositionComponentNode' }
          & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment } }
        ) | (
          { __typename?: 'CompositionNode' }
          & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
        ) | (
          { __typename?: 'CompositionStructureNode', nodes?: Array<(
            { __typename?: 'CompositionComponentNode' }
            & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment;'CompositionComponentNodeDataFragment': CompositionComponentNodeDataFragment } }
          ) | (
            { __typename?: 'CompositionNode' }
            & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
          ) | (
            { __typename?: 'CompositionStructureNode' }
            & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
          ) | null> | null }
          & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
        ) | null> | null }
        & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
      ) | null> | null }
      & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
    ) | null> | null }
    & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
  ) | null } & { ' $fragmentName'?: 'ExperienceData_BlogSectionExperience_Fragment' };

type ExperienceData__Experience_Fragment = { __typename?: '_Experience', composition?: (
    { __typename?: 'CompositionStructureNode', nodes?: Array<(
      { __typename?: 'CompositionComponentNode' }
      & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment;'CompositionComponentNodeDataFragment': CompositionComponentNodeDataFragment } }
    ) | (
      { __typename?: 'CompositionNode' }
      & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
    ) | (
      { __typename?: 'CompositionStructureNode', nodes?: Array<(
        { __typename?: 'CompositionComponentNode' }
        & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment } }
      ) | (
        { __typename?: 'CompositionNode' }
        & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
      ) | (
        { __typename?: 'CompositionStructureNode', nodes?: Array<(
          { __typename?: 'CompositionComponentNode' }
          & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment } }
        ) | (
          { __typename?: 'CompositionNode' }
          & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
        ) | (
          { __typename?: 'CompositionStructureNode', nodes?: Array<(
            { __typename?: 'CompositionComponentNode' }
            & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment;'CompositionComponentNodeDataFragment': CompositionComponentNodeDataFragment } }
          ) | (
            { __typename?: 'CompositionNode' }
            & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
          ) | (
            { __typename?: 'CompositionStructureNode' }
            & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
          ) | null> | null }
          & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
        ) | null> | null }
        & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
      ) | null> | null }
      & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
    ) | null> | null }
    & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
  ) | null } & { ' $fragmentName'?: 'ExperienceData__Experience_Fragment' };

export type ExperienceDataFragment = ExperienceData_BlankExperience_Fragment | ExperienceData_BlogSectionExperience_Fragment | ExperienceData__Experience_Fragment;

type CompositionNodeData_CompositionComponentNode_Fragment = { __typename?: 'CompositionComponentNode', type?: string | null, key?: string | null, name?: string | null, layoutType?: string | null, template?: string | null, settings?: Array<{ __typename?: 'CompositionDisplaySetting', key?: string | null, value?: string | null } | null> | null } & { ' $fragmentName'?: 'CompositionNodeData_CompositionComponentNode_Fragment' };

type CompositionNodeData_CompositionNode_Fragment = { __typename?: 'CompositionNode', type?: string | null, key?: string | null, name?: string | null, layoutType?: string | null, template?: string | null, settings?: Array<{ __typename?: 'CompositionDisplaySetting', key?: string | null, value?: string | null } | null> | null } & { ' $fragmentName'?: 'CompositionNodeData_CompositionNode_Fragment' };

type CompositionNodeData_CompositionStructureNode_Fragment = { __typename?: 'CompositionStructureNode', type?: string | null, key?: string | null, name?: string | null, layoutType?: string | null, template?: string | null, settings?: Array<{ __typename?: 'CompositionDisplaySetting', key?: string | null, value?: string | null } | null> | null } & { ' $fragmentName'?: 'CompositionNodeData_CompositionStructureNode_Fragment' };

export type CompositionNodeDataFragment = CompositionNodeData_CompositionComponentNode_Fragment | CompositionNodeData_CompositionNode_Fragment | CompositionNodeData_CompositionStructureNode_Fragment;

export type CompositionComponentNodeDataFragment = { __typename?: 'CompositionComponentNode', component?: (
    { __typename?: 'ArticleListElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ArticleListElement_Fragment': BlockData_ArticleListElement_Fragment;'ElementData_ArticleListElement_Fragment': ElementData_ArticleListElement_Fragment } }
  ) | (
    { __typename?: 'BlankSection' }
    & { ' $fragmentRefs'?: { 'BlockData_BlankSection_Fragment': BlockData_BlankSection_Fragment;'ElementData_BlankSection_Fragment': ElementData_BlankSection_Fragment } }
  ) | (
    { __typename?: 'ButtonBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ButtonBlock_Fragment': BlockData_ButtonBlock_Fragment;'ElementData_ButtonBlock_Fragment': ElementData_ButtonBlock_Fragment } }
  ) | (
    { __typename?: 'CTAElement' }
    & { ' $fragmentRefs'?: { 'BlockData_CTAElement_Fragment': BlockData_CTAElement_Fragment;'ElementData_CTAElement_Fragment': ElementData_CTAElement_Fragment } }
  ) | (
    { __typename?: 'CarouselBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_CarouselBlock_Fragment': BlockData_CarouselBlock_Fragment;'ElementData_CarouselBlock_Fragment': ElementData_CarouselBlock_Fragment } }
  ) | (
    { __typename?: 'ContentRecsElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ContentRecsElement_Fragment': BlockData_ContentRecsElement_Fragment;'ElementData_ContentRecsElement_Fragment': ElementData_ContentRecsElement_Fragment } }
  ) | (
    { __typename?: 'ContinueReadingComponent' }
    & { ' $fragmentRefs'?: { 'BlockData_ContinueReadingComponent_Fragment': BlockData_ContinueReadingComponent_Fragment;'ElementData_ContinueReadingComponent_Fragment': ElementData_ContinueReadingComponent_Fragment } }
  ) | (
    { __typename?: 'HeadingElement' }
    & { ' $fragmentRefs'?: { 'BlockData_HeadingElement_Fragment': BlockData_HeadingElement_Fragment;'ElementData_HeadingElement_Fragment': ElementData_HeadingElement_Fragment } }
  ) | (
    { __typename?: 'HeroBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_HeroBlock_Fragment': BlockData_HeroBlock_Fragment;'ElementData_HeroBlock_Fragment': ElementData_HeroBlock_Fragment } }
  ) | (
    { __typename?: 'ImageElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ImageElement_Fragment': BlockData_ImageElement_Fragment;'ElementData_ImageElement_Fragment': ElementData_ImageElement_Fragment } }
  ) | (
    { __typename?: 'LayoutSettingsBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_LayoutSettingsBlock_Fragment': BlockData_LayoutSettingsBlock_Fragment;'ElementData_LayoutSettingsBlock_Fragment': ElementData_LayoutSettingsBlock_Fragment } }
  ) | (
    { __typename?: 'MegaMenuGroupBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_MegaMenuGroupBlock_Fragment': BlockData_MegaMenuGroupBlock_Fragment;'ElementData_MegaMenuGroupBlock_Fragment': ElementData_MegaMenuGroupBlock_Fragment } }
  ) | (
    { __typename?: 'MenuNavigationBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_MenuNavigationBlock_Fragment': BlockData_MenuNavigationBlock_Fragment;'ElementData_MenuNavigationBlock_Fragment': ElementData_MenuNavigationBlock_Fragment } }
  ) | (
    { __typename?: 'OdpEmbedBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_OdpEmbedBlock_Fragment': BlockData_OdpEmbedBlock_Fragment;'ElementData_OdpEmbedBlock_Fragment': ElementData_OdpEmbedBlock_Fragment } }
  ) | (
    { __typename?: 'PageSeoSettings' }
    & { ' $fragmentRefs'?: { 'BlockData_PageSeoSettings_Fragment': BlockData_PageSeoSettings_Fragment;'ElementData_PageSeoSettings_Fragment': ElementData_PageSeoSettings_Fragment } }
  ) | (
    { __typename?: 'ParagraphElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ParagraphElement_Fragment': BlockData_ParagraphElement_Fragment;'ElementData_ParagraphElement_Fragment': ElementData_ParagraphElement_Fragment } }
  ) | (
    { __typename?: 'QuoteBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_QuoteBlock_Fragment': BlockData_QuoteBlock_Fragment;'ElementData_QuoteBlock_Fragment': ElementData_QuoteBlock_Fragment } }
  ) | (
    { __typename?: 'RichTextElement' }
    & { ' $fragmentRefs'?: { 'BlockData_RichTextElement_Fragment': BlockData_RichTextElement_Fragment;'ElementData_RichTextElement_Fragment': ElementData_RichTextElement_Fragment } }
  ) | (
    { __typename?: 'TestimonialElement' }
    & { ' $fragmentRefs'?: { 'BlockData_TestimonialElement_Fragment': BlockData_TestimonialElement_Fragment;'ElementData_TestimonialElement_Fragment': ElementData_TestimonialElement_Fragment } }
  ) | (
    { __typename?: 'TextBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_TextBlock_Fragment': BlockData_TextBlock_Fragment;'ElementData_TextBlock_Fragment': ElementData_TextBlock_Fragment } }
  ) | (
    { __typename?: 'VideoElement' }
    & { ' $fragmentRefs'?: { 'BlockData_VideoElement_Fragment': BlockData_VideoElement_Fragment;'ElementData_VideoElement_Fragment': ElementData_VideoElement_Fragment } }
  ) | (
    { __typename?: '_Component' }
    & { ' $fragmentRefs'?: { 'BlockData__Component_Fragment': BlockData__Component_Fragment;'ElementData__Component_Fragment': ElementData__Component_Fragment } }
  ) | (
    { __typename?: '_Section' }
    & { ' $fragmentRefs'?: { 'BlockData__Section_Fragment': BlockData__Section_Fragment;'ElementData__Section_Fragment': ElementData__Section_Fragment } }
  ) | null } & { ' $fragmentName'?: 'CompositionComponentNodeDataFragment' };

export type LinkItemDataFragment = { __typename?: 'Link', title?: string | null, text?: string | null, target?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'LinkItemDataFragment' };

export type getContentByIdQueryVariables = Exact<{
  key: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Array<Locales> | Locales>;
  path?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
}>;


export type getContentByIdQuery = { __typename?: 'Query', content?: { __typename?: '_ContentOutput', total?: number | null, items?: (
      { __typename?: 'ArticleListElement' }
      & { ' $fragmentRefs'?: { 'BlockData_ArticleListElement_Fragment': BlockData_ArticleListElement_Fragment;'PageData_ArticleListElement_Fragment': PageData_ArticleListElement_Fragment } }
    ) | (
      { __typename?: 'BlankExperience' }
      & { ' $fragmentRefs'?: { 'PageData_BlankExperience_Fragment': PageData_BlankExperience_Fragment } }
    ) | (
      { __typename?: 'BlankSection' }
      & { ' $fragmentRefs'?: { 'BlockData_BlankSection_Fragment': BlockData_BlankSection_Fragment;'PageData_BlankSection_Fragment': PageData_BlankSection_Fragment } }
    ) | (
      { __typename?: 'BlogPostPage' }
      & { ' $fragmentRefs'?: { 'PageData_BlogPostPage_Fragment': PageData_BlogPostPage_Fragment } }
    ) | (
      { __typename?: 'BlogSectionExperience' }
      & { ' $fragmentRefs'?: { 'PageData_BlogSectionExperience_Fragment': PageData_BlogSectionExperience_Fragment } }
    ) | (
      { __typename?: 'ButtonBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_ButtonBlock_Fragment': BlockData_ButtonBlock_Fragment;'PageData_ButtonBlock_Fragment': PageData_ButtonBlock_Fragment } }
    ) | (
      { __typename?: 'CTAElement' }
      & { ' $fragmentRefs'?: { 'BlockData_CTAElement_Fragment': BlockData_CTAElement_Fragment;'PageData_CTAElement_Fragment': PageData_CTAElement_Fragment } }
    ) | (
      { __typename?: 'CarouselBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_CarouselBlock_Fragment': BlockData_CarouselBlock_Fragment;'PageData_CarouselBlock_Fragment': PageData_CarouselBlock_Fragment } }
    ) | (
      { __typename?: 'ContentRecsElement' }
      & { ' $fragmentRefs'?: { 'BlockData_ContentRecsElement_Fragment': BlockData_ContentRecsElement_Fragment;'PageData_ContentRecsElement_Fragment': PageData_ContentRecsElement_Fragment } }
    ) | (
      { __typename?: 'ContinueReadingComponent' }
      & { ' $fragmentRefs'?: { 'BlockData_ContinueReadingComponent_Fragment': BlockData_ContinueReadingComponent_Fragment;'PageData_ContinueReadingComponent_Fragment': PageData_ContinueReadingComponent_Fragment } }
    ) | (
      { __typename?: 'GenericMedia' }
      & { ' $fragmentRefs'?: { 'PageData_GenericMedia_Fragment': PageData_GenericMedia_Fragment } }
    ) | (
      { __typename?: 'HeadingElement' }
      & { ' $fragmentRefs'?: { 'BlockData_HeadingElement_Fragment': BlockData_HeadingElement_Fragment;'PageData_HeadingElement_Fragment': PageData_HeadingElement_Fragment } }
    ) | (
      { __typename?: 'HeroBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_HeroBlock_Fragment': BlockData_HeroBlock_Fragment;'PageData_HeroBlock_Fragment': PageData_HeroBlock_Fragment } }
    ) | (
      { __typename?: 'ImageElement' }
      & { ' $fragmentRefs'?: { 'BlockData_ImageElement_Fragment': BlockData_ImageElement_Fragment;'PageData_ImageElement_Fragment': PageData_ImageElement_Fragment } }
    ) | (
      { __typename?: 'ImageMedia' }
      & { ' $fragmentRefs'?: { 'PageData_ImageMedia_Fragment': PageData_ImageMedia_Fragment } }
    ) | (
      { __typename?: 'LandingPage' }
      & { ' $fragmentRefs'?: { 'PageData_LandingPage_Fragment': PageData_LandingPage_Fragment } }
    ) | (
      { __typename?: 'LayoutSettingsBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_LayoutSettingsBlock_Fragment': BlockData_LayoutSettingsBlock_Fragment;'PageData_LayoutSettingsBlock_Fragment': PageData_LayoutSettingsBlock_Fragment } }
    ) | (
      { __typename?: 'MegaMenuGroupBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_MegaMenuGroupBlock_Fragment': BlockData_MegaMenuGroupBlock_Fragment;'PageData_MegaMenuGroupBlock_Fragment': PageData_MegaMenuGroupBlock_Fragment } }
    ) | (
      { __typename?: 'MenuNavigationBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_MenuNavigationBlock_Fragment': BlockData_MenuNavigationBlock_Fragment;'PageData_MenuNavigationBlock_Fragment': PageData_MenuNavigationBlock_Fragment } }
    ) | (
      { __typename?: 'OdpEmbedBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_OdpEmbedBlock_Fragment': BlockData_OdpEmbedBlock_Fragment;'PageData_OdpEmbedBlock_Fragment': PageData_OdpEmbedBlock_Fragment } }
    ) | (
      { __typename?: 'PageSeoSettings' }
      & { ' $fragmentRefs'?: { 'BlockData_PageSeoSettings_Fragment': BlockData_PageSeoSettings_Fragment;'PageData_PageSeoSettings_Fragment': PageData_PageSeoSettings_Fragment } }
    ) | (
      { __typename?: 'ParagraphElement' }
      & { ' $fragmentRefs'?: { 'BlockData_ParagraphElement_Fragment': BlockData_ParagraphElement_Fragment;'PageData_ParagraphElement_Fragment': PageData_ParagraphElement_Fragment } }
    ) | (
      { __typename?: 'QuoteBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_QuoteBlock_Fragment': BlockData_QuoteBlock_Fragment;'PageData_QuoteBlock_Fragment': PageData_QuoteBlock_Fragment } }
    ) | (
      { __typename?: 'RichTextElement' }
      & { ' $fragmentRefs'?: { 'BlockData_RichTextElement_Fragment': BlockData_RichTextElement_Fragment;'PageData_RichTextElement_Fragment': PageData_RichTextElement_Fragment } }
    ) | (
      { __typename?: 'SysContentFolder' }
      & { ' $fragmentRefs'?: { 'PageData_SysContentFolder_Fragment': PageData_SysContentFolder_Fragment } }
    ) | (
      { __typename?: 'TestimonialElement' }
      & { ' $fragmentRefs'?: { 'BlockData_TestimonialElement_Fragment': BlockData_TestimonialElement_Fragment;'PageData_TestimonialElement_Fragment': PageData_TestimonialElement_Fragment } }
    ) | (
      { __typename?: 'TextBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_TextBlock_Fragment': BlockData_TextBlock_Fragment;'PageData_TextBlock_Fragment': PageData_TextBlock_Fragment } }
    ) | (
      { __typename?: 'VideoElement' }
      & { ' $fragmentRefs'?: { 'BlockData_VideoElement_Fragment': BlockData_VideoElement_Fragment;'PageData_VideoElement_Fragment': PageData_VideoElement_Fragment } }
    ) | (
      { __typename?: 'VideoMedia' }
      & { ' $fragmentRefs'?: { 'PageData_VideoMedia_Fragment': PageData_VideoMedia_Fragment } }
    ) | (
      { __typename?: '_Component' }
      & { ' $fragmentRefs'?: { 'BlockData__Component_Fragment': BlockData__Component_Fragment;'PageData__Component_Fragment': PageData__Component_Fragment } }
    ) | (
      { __typename?: '_Content' }
      & { ' $fragmentRefs'?: { 'PageData__Content_Fragment': PageData__Content_Fragment } }
    ) | (
      { __typename?: '_Experience' }
      & { ' $fragmentRefs'?: { 'PageData__Experience_Fragment': PageData__Experience_Fragment } }
    ) | (
      { __typename?: '_Folder' }
      & { ' $fragmentRefs'?: { 'PageData__Folder_Fragment': PageData__Folder_Fragment } }
    ) | (
      { __typename?: '_Image' }
      & { ' $fragmentRefs'?: { 'PageData__Image_Fragment': PageData__Image_Fragment } }
    ) | (
      { __typename?: '_Media' }
      & { ' $fragmentRefs'?: { 'PageData__Media_Fragment': PageData__Media_Fragment } }
    ) | (
      { __typename?: '_Page' }
      & { ' $fragmentRefs'?: { 'PageData__Page_Fragment': PageData__Page_Fragment } }
    ) | (
      { __typename?: '_Section' }
      & { ' $fragmentRefs'?: { 'BlockData__Section_Fragment': BlockData__Section_Fragment;'PageData__Section_Fragment': PageData__Section_Fragment } }
    ) | (
      { __typename?: '_Video' }
      & { ' $fragmentRefs'?: { 'PageData__Video_Fragment': PageData__Video_Fragment } }
    ) | null } | null };

export type getContentByPathQueryVariables = Exact<{
  path: Array<Scalars['String']['input']> | Scalars['String']['input'];
  locale?: InputMaybe<Array<Locales> | Locales>;
  siteId?: InputMaybe<Scalars['String']['input']>;
}>;


export type getContentByPathQuery = { __typename?: 'Query', content?: { __typename?: '_ContentOutput', total?: number | null, items?: (
      { __typename?: 'ArticleListElement' }
      & { ' $fragmentRefs'?: { 'IContentData_ArticleListElement_Fragment': IContentData_ArticleListElement_Fragment;'PageData_ArticleListElement_Fragment': PageData_ArticleListElement_Fragment } }
    ) | (
      { __typename?: 'BlankExperience' }
      & { ' $fragmentRefs'?: { 'IContentData_BlankExperience_Fragment': IContentData_BlankExperience_Fragment;'PageData_BlankExperience_Fragment': PageData_BlankExperience_Fragment } }
    ) | (
      { __typename?: 'BlankSection' }
      & { ' $fragmentRefs'?: { 'IContentData_BlankSection_Fragment': IContentData_BlankSection_Fragment;'PageData_BlankSection_Fragment': PageData_BlankSection_Fragment } }
    ) | (
      { __typename?: 'BlogPostPage' }
      & { ' $fragmentRefs'?: { 'IContentData_BlogPostPage_Fragment': IContentData_BlogPostPage_Fragment;'PageData_BlogPostPage_Fragment': PageData_BlogPostPage_Fragment } }
    ) | (
      { __typename?: 'BlogSectionExperience' }
      & { ' $fragmentRefs'?: { 'IContentData_BlogSectionExperience_Fragment': IContentData_BlogSectionExperience_Fragment;'PageData_BlogSectionExperience_Fragment': PageData_BlogSectionExperience_Fragment } }
    ) | (
      { __typename?: 'ButtonBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment;'PageData_ButtonBlock_Fragment': PageData_ButtonBlock_Fragment } }
    ) | (
      { __typename?: 'CTAElement' }
      & { ' $fragmentRefs'?: { 'IContentData_CTAElement_Fragment': IContentData_CTAElement_Fragment;'PageData_CTAElement_Fragment': PageData_CTAElement_Fragment } }
    ) | (
      { __typename?: 'CarouselBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_CarouselBlock_Fragment': IContentData_CarouselBlock_Fragment;'PageData_CarouselBlock_Fragment': PageData_CarouselBlock_Fragment } }
    ) | (
      { __typename?: 'ContentRecsElement' }
      & { ' $fragmentRefs'?: { 'IContentData_ContentRecsElement_Fragment': IContentData_ContentRecsElement_Fragment;'PageData_ContentRecsElement_Fragment': PageData_ContentRecsElement_Fragment } }
    ) | (
      { __typename?: 'ContinueReadingComponent' }
      & { ' $fragmentRefs'?: { 'IContentData_ContinueReadingComponent_Fragment': IContentData_ContinueReadingComponent_Fragment;'PageData_ContinueReadingComponent_Fragment': PageData_ContinueReadingComponent_Fragment } }
    ) | (
      { __typename?: 'GenericMedia' }
      & { ' $fragmentRefs'?: { 'IContentData_GenericMedia_Fragment': IContentData_GenericMedia_Fragment;'PageData_GenericMedia_Fragment': PageData_GenericMedia_Fragment } }
    ) | (
      { __typename?: 'HeadingElement' }
      & { ' $fragmentRefs'?: { 'IContentData_HeadingElement_Fragment': IContentData_HeadingElement_Fragment;'PageData_HeadingElement_Fragment': PageData_HeadingElement_Fragment } }
    ) | (
      { __typename?: 'HeroBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment;'PageData_HeroBlock_Fragment': PageData_HeroBlock_Fragment } }
    ) | (
      { __typename?: 'ImageElement' }
      & { ' $fragmentRefs'?: { 'IContentData_ImageElement_Fragment': IContentData_ImageElement_Fragment;'PageData_ImageElement_Fragment': PageData_ImageElement_Fragment } }
    ) | (
      { __typename?: 'ImageMedia' }
      & { ' $fragmentRefs'?: { 'IContentData_ImageMedia_Fragment': IContentData_ImageMedia_Fragment;'PageData_ImageMedia_Fragment': PageData_ImageMedia_Fragment } }
    ) | (
      { __typename?: 'LandingPage' }
      & { ' $fragmentRefs'?: { 'IContentData_LandingPage_Fragment': IContentData_LandingPage_Fragment;'PageData_LandingPage_Fragment': PageData_LandingPage_Fragment } }
    ) | (
      { __typename?: 'LayoutSettingsBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_LayoutSettingsBlock_Fragment': IContentData_LayoutSettingsBlock_Fragment;'PageData_LayoutSettingsBlock_Fragment': PageData_LayoutSettingsBlock_Fragment } }
    ) | (
      { __typename?: 'MegaMenuGroupBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_MegaMenuGroupBlock_Fragment': IContentData_MegaMenuGroupBlock_Fragment;'PageData_MegaMenuGroupBlock_Fragment': PageData_MegaMenuGroupBlock_Fragment } }
    ) | (
      { __typename?: 'MenuNavigationBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_MenuNavigationBlock_Fragment': IContentData_MenuNavigationBlock_Fragment;'PageData_MenuNavigationBlock_Fragment': PageData_MenuNavigationBlock_Fragment } }
    ) | (
      { __typename?: 'OdpEmbedBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_OdpEmbedBlock_Fragment': IContentData_OdpEmbedBlock_Fragment;'PageData_OdpEmbedBlock_Fragment': PageData_OdpEmbedBlock_Fragment } }
    ) | (
      { __typename?: 'PageSeoSettings' }
      & { ' $fragmentRefs'?: { 'IContentData_PageSeoSettings_Fragment': IContentData_PageSeoSettings_Fragment;'PageData_PageSeoSettings_Fragment': PageData_PageSeoSettings_Fragment } }
    ) | (
      { __typename?: 'ParagraphElement' }
      & { ' $fragmentRefs'?: { 'IContentData_ParagraphElement_Fragment': IContentData_ParagraphElement_Fragment;'PageData_ParagraphElement_Fragment': PageData_ParagraphElement_Fragment } }
    ) | (
      { __typename?: 'QuoteBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_QuoteBlock_Fragment': IContentData_QuoteBlock_Fragment;'PageData_QuoteBlock_Fragment': PageData_QuoteBlock_Fragment } }
    ) | (
      { __typename?: 'RichTextElement' }
      & { ' $fragmentRefs'?: { 'IContentData_RichTextElement_Fragment': IContentData_RichTextElement_Fragment;'PageData_RichTextElement_Fragment': PageData_RichTextElement_Fragment } }
    ) | (
      { __typename?: 'SysContentFolder' }
      & { ' $fragmentRefs'?: { 'IContentData_SysContentFolder_Fragment': IContentData_SysContentFolder_Fragment;'PageData_SysContentFolder_Fragment': PageData_SysContentFolder_Fragment } }
    ) | (
      { __typename?: 'TestimonialElement' }
      & { ' $fragmentRefs'?: { 'IContentData_TestimonialElement_Fragment': IContentData_TestimonialElement_Fragment;'PageData_TestimonialElement_Fragment': PageData_TestimonialElement_Fragment } }
    ) | (
      { __typename?: 'TextBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_TextBlock_Fragment': IContentData_TextBlock_Fragment;'PageData_TextBlock_Fragment': PageData_TextBlock_Fragment } }
    ) | (
      { __typename?: 'VideoElement' }
      & { ' $fragmentRefs'?: { 'IContentData_VideoElement_Fragment': IContentData_VideoElement_Fragment;'PageData_VideoElement_Fragment': PageData_VideoElement_Fragment } }
    ) | (
      { __typename?: 'VideoMedia' }
      & { ' $fragmentRefs'?: { 'IContentData_VideoMedia_Fragment': IContentData_VideoMedia_Fragment;'PageData_VideoMedia_Fragment': PageData_VideoMedia_Fragment } }
    ) | (
      { __typename?: '_Component' }
      & { ' $fragmentRefs'?: { 'IContentData__Component_Fragment': IContentData__Component_Fragment;'PageData__Component_Fragment': PageData__Component_Fragment } }
    ) | (
      { __typename?: '_Content' }
      & { ' $fragmentRefs'?: { 'IContentData__Content_Fragment': IContentData__Content_Fragment;'PageData__Content_Fragment': PageData__Content_Fragment } }
    ) | (
      { __typename?: '_Experience' }
      & { ' $fragmentRefs'?: { 'IContentData__Experience_Fragment': IContentData__Experience_Fragment;'PageData__Experience_Fragment': PageData__Experience_Fragment } }
    ) | (
      { __typename?: '_Folder' }
      & { ' $fragmentRefs'?: { 'IContentData__Folder_Fragment': IContentData__Folder_Fragment;'PageData__Folder_Fragment': PageData__Folder_Fragment } }
    ) | (
      { __typename?: '_Image' }
      & { ' $fragmentRefs'?: { 'IContentData__Image_Fragment': IContentData__Image_Fragment;'PageData__Image_Fragment': PageData__Image_Fragment } }
    ) | (
      { __typename?: '_Media' }
      & { ' $fragmentRefs'?: { 'IContentData__Media_Fragment': IContentData__Media_Fragment;'PageData__Media_Fragment': PageData__Media_Fragment } }
    ) | (
      { __typename?: '_Page' }
      & { ' $fragmentRefs'?: { 'IContentData__Page_Fragment': IContentData__Page_Fragment;'PageData__Page_Fragment': PageData__Page_Fragment } }
    ) | (
      { __typename?: '_Section' }
      & { ' $fragmentRefs'?: { 'IContentData__Section_Fragment': IContentData__Section_Fragment;'PageData__Section_Fragment': PageData__Section_Fragment } }
    ) | (
      { __typename?: '_Video' }
      & { ' $fragmentRefs'?: { 'IContentData__Video_Fragment': IContentData__Video_Fragment;'PageData__Video_Fragment': PageData__Video_Fragment } }
    ) | null } | null };

export type getContentTypeQueryVariables = Exact<{
  key: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Array<Locales> | Locales>;
  path?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
}>;


export type getContentTypeQuery = { __typename?: 'Query', content?: { __typename?: '_ContentOutput', total?: number | null, items?: { __typename?: 'ArticleListElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'BlankExperience', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'BlankSection', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'BlogPostPage', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'BlogSectionExperience', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ButtonBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'CTAElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'CarouselBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ContentRecsElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ContinueReadingComponent', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'GenericMedia', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'HeadingElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'HeroBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ImageElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ImageMedia', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'LandingPage', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'LayoutSettingsBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'MegaMenuGroupBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'MenuNavigationBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'OdpEmbedBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'PageSeoSettings', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ParagraphElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'QuoteBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'RichTextElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'SysContentFolder', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'TestimonialElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'TextBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'VideoElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'VideoMedia', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Component', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Content', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Experience', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Folder', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Image', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Media', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Page', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Section', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Video', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | null } | null };

export const LinkDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<LinkDataFragment, unknown>;
export const IContentInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<IContentInfoFragment, unknown>;
export const IContentDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<IContentDataFragment, unknown>;
export const PageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<PageDataFragment, unknown>;
export const ReferenceDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<ReferenceDataFragment, unknown>;
export const IContentListItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<IContentListItemFragment, unknown>;
export const CompositionNodeDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionNodeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}},{"kind":"Field","alias":{"kind":"Name","value":"layoutType"},"name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","alias":{"kind":"Name","value":"template"},"name":{"kind":"Name","value":"displayTemplateKey"}},{"kind":"Field","alias":{"kind":"Name","value":"settings"},"name":{"kind":"Name","value":"displaySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<CompositionNodeDataFragment, unknown>;
export const BlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<BlockDataFragment, unknown>;
export const IElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<IElementDataFragment, unknown>;
export const ElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<ElementDataFragment, unknown>;
export const CompositionComponentNodeDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionComponentNodeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionComponentNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"component"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ElementData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}}]}}]} as unknown as DocumentNode<CompositionComponentNodeDataFragment, unknown>;
export const ExperienceDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"composition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionComponentNodeData"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionComponentNodeData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionNodeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}},{"kind":"Field","alias":{"kind":"Name","value":"layoutType"},"name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","alias":{"kind":"Name","value":"template"},"name":{"kind":"Name","value":"displayTemplateKey"}},{"kind":"Field","alias":{"kind":"Name","value":"settings"},"name":{"kind":"Name","value":"displaySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionComponentNodeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionComponentNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"component"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ElementData"}}]}}]}}]} as unknown as DocumentNode<ExperienceDataFragment, unknown>;
export const LinkItemDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<LinkItemDataFragment, unknown>;
export const getContentByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContentById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"domain"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"_Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"hierarchical"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"base"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"domain"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}}]} as unknown as DocumentNode<getContentByIdQuery, getContentByIdQueryVariables>;
export const getContentByPathDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContentByPath"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"siteId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"_Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"default"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"base"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"siteId"}}}]}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}}]} as unknown as DocumentNode<getContentByPathQuery, getContentByPathQueryVariables>;
export const getContentTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContentType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"domain"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"_Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"hierarchical"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"base"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"domain"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"}}]}}]}}]}}]}}]} as unknown as DocumentNode<getContentTypeQuery, getContentTypeQueryVariables>;