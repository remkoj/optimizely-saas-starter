import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { HomePageHeroBlockDataFragmentDoc, type HomePageHeroBlockDataFragment } from "@/gql/graphql"
import Collapsable from "./Collapsable";

export const HomePageHeroBlock : CmsComponent<HomePageHeroBlockDataFragment> = ({data: { HomeHeroBlockHeading = "", HomeHeroBlockSubHeading = "" }, inEditMode, contentLink }) => {
    return <div className="bg-sky-500 text-white rounded-xl p-2">
        <div className="text-6xl text-center w-full font-bold py-8">{ HomeHeroBlockHeading }</div>
        <div className="text-2xl font-bold text-center w-full py-4">{ HomeHeroBlockSubHeading }</div>
        <Collapsable title={"Homepage Hero Block ID: " + contentLink.key ?? "inline"}>
            <pre className="border border-slate-900 rounded-xl p-2 bg-slate-200 text-slate-900">{ JSON.stringify(contentLink, undefined, 2) }</pre>
        </Collapsable>
    </div>
}
HomePageHeroBlock.getDataFragment = () => ['HomePageHeroBlockData', HomePageHeroBlockDataFragmentDoc]

export default HomePageHeroBlock