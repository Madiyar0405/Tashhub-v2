export default function Home() {
    return (
      <div className='p-5'>
        <h1 className='text-4xl font-bold text-white'>Companies</h1>
        {/* First cards variant */}
        <div className="flex flex-wrap">
          <article className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 min-w-[350px] mx-auto mt-24'>
            <img
              src='https://www.hatchwise.com/wp-content/uploads/2023/01/pasted-image-0-10.png'
              alt='NASA'
              className='absolute inset-0 h-full w-full object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20'></div>
            <h3 className='z-10 mt-3 text-3xl font-bold text-white'>NASA</h3>
            <div className='z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300'>Space Exploration</div>
          </article>
  
          <article className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 min-w-[350px] mx-auto mt-24'>
            <img
              src='https://pbs.twimg.com/card_img/1886729582201786368/keRYZc0i?format=jpg&name=large'
              alt='SpaceX'
              className='absolute inset-0 h-full w-full object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20'></div>
            <h3 className='z-10 mt-3 text-3xl font-bold text-white'>SpaceX</h3>
            <div className='z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300'>Space Technology</div>
          </article>
  
          <article className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 min-w-[350px] mx-auto mt-24'>
            <img
              src='https://images.unsplash.com/photo-1633419461186-7d40a38105ec'
              alt='Microsoft'
              className='absolute inset-0 h-full w-full object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20'></div>
            <h3 className='z-10 mt-3 text-3xl font-bold text-white'>Microsoft</h3>
            <div className='z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300'>Cloud & Software</div>
          </article>
  
          <article className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 min-w-[350px] mx-auto mt-24'>
            <img
              src='https://images.unsplash.com/photo-1573804633927-bfcbcd909acd'
              alt='Google'
              className='absolute inset-0 h-full w-full object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20'></div>
            <h3 className='z-10 mt-3 text-3xl font-bold text-white'>Google</h3>
            <div className='z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300'>Search & AI</div>
          </article>
  
          <article className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 min-w-[350px] mx-auto mt-24'>
            <img
              src='https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85'
              alt='Netflix'
              className='absolute inset-0 h-full w-full object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20'></div>
            <h3 className='z-10 mt-3 text-3xl font-bold text-white'>Netflix</h3>
            <div className='z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300'>Streaming Entertainment</div>
          </article>
        </div>
  
        {/* Second Card Variants */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <a href='#' className='block'>
            <img
              alt='NASA'
              src='https://www.hatchwise.com/wp-content/uploads/2023/01/pasted-image-0-10.png'
              className='h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72'
            />
            <div className='mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4'>
              <strong className='font-medium'>NASA</strong>
              <p className='mt-0.5 opacity-50 sm:mt-0'>Space Exploration</p>
            </div>
          </a>
  
          <a href='#' className='block'>
            <img
              alt='SpaceX'
              src='https://pbs.twimg.com/card_img/1886729582201786368/keRYZc0i?format=jpg&name=large'
              className='h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72'
            />
            <div className='mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4'>
              <strong className='font-medium'>SpaceX</strong>
              <p className='mt-0.5 opacity-50 sm:mt-0'>Space Technology</p>
            </div>
          </a>
  
          <a href='#' className='block'>
            <img
              alt='Microsoft'
              src='https://images.unsplash.com/photo-1633419461186-7d40a38105ec'
              className='h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72'
            />
            <div className='mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4'>
              <strong className='font-medium'>Microsoft</strong>
              <p className='mt-0.5 opacity-50 sm:mt-0'>Cloud & Software</p>
            </div>
          </a>
  
          <a href='#' className='block'>
            <img
              alt='Google'
              src='https://images.unsplash.com/photo-1573804633927-bfcbcd909acd'
              className='h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72'
            />
            <div className='mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4'>
              <strong className='font-medium'>Google</strong>
              <p className='mt-0.5 opacity-50 sm:mt-0'>Search & AI</p>
            </div>
          </a>
  
          <a href='#' className='block'>
            <img
              alt='Netflix'
              src='https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85'
              className='h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72'
            />
            <div className='mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4'>
              <strong className='font-medium'>Netflix</strong>
              <p className='mt-0.5 opacity-50 sm:mt-0'>Streaming Entertainment</p>
            </div>
          </a>
        </div>
      </div>
    )
  }
  