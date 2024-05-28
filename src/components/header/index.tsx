import Image from 'next/image'
import Link from 'next/link'

export const SiteHeader = ({}) => {
    return <header className='p-5 flex flex-row'>
        <Link className='block relative min-w-[225px]' title='Moseybank - An Optimizely Demo Company' href="https://www.optimizely.com/get-started">
            <Image src="/moseybank.svg" width={ 200 } height={ 36 } alt="Mosey Bank" className='mr-[25px]'/>
            <div className='absolute top-[28px] left-[65px] nowrap'>An Optimizely demo</div>
        </Link>
        <Link className='block ml-auto' href='https://nextjs.org'>
            <Image src="/next.svg" width={ 150 } height={ 30 } alt="Powered by Next.js" title="Powered by Next.js" />
        </Link>
    </header>
}

export default SiteHeader