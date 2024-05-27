import { OptimizelyNextPage } from "@remkoj/optimizely-cms-nextjs";
import { CmsContentArea } from "@remkoj/optimizely-cms-react/rsc";
import { StartPageDataFragmentDoc, type StartPageDataFragment } from '@/gql/graphql';

export const StartPage : OptimizelyNextPage<StartPageDataFragment> = ({ data: { HomePageHeroContentArea = [], HomePageMainContentArea = [] } }) => {
    return <div className="container mx-auto px-4 my-12">
        <h1 className="text-4xl font-bold border-b border-b-black pb-2 mb-4">Start page</h1>
        <CmsContentArea items={ HomePageHeroContentArea } fieldName="HomePageHeroContentArea" />
    </div>
}
StartPage.getDataFragment = () => [ "StartPageData", StartPageDataFragmentDoc ]

export default StartPage