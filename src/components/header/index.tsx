import Image from 'next/image'

export const SiteHeader = ({}) => {
    return <header className='p-5 flex flex-row'>
        <div className='relative min-w-[225px]' title='Moseybank - An Optimizely Demo Company'>
            <Image src="/moseybank.svg" width={ 200 } height={ 36 } alt="Mosey Bank" className='mr-[25px]'/>
            <div className='absolute top-[28px] left-[65px] nowrap'>An Optimizely demo</div>
        </div>
        <Image className='ml-auto' src="/next.svg" width={ 150 } height={ 30 } alt="Powered by Next.js" title="Powered by Next.js" />
    </header>
}

export default SiteHeader