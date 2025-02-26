'use client'

import { ScrollText } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  return (
    <div className='p-5'>
      <div className='flex items-center justify-center min-h-[200px]'>
        <h1 className='text-4xl font-bold text-white'>
          Hello Madiarus! <span className='inline-block'>👋</span>
        </h1>
      </div>

      <EventCardList />      

    </div>
  )
}



// Mock data for the components
const mockData = [
  { id: 1, title: 'NASA Space Apps Challenge', imageSrc: 'https://lablab.ai/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Flablab-static-eu%2Fimages%2Fevents%2Fcm6ifrxgc000535720vhskc3x%2Fcm6ifrxgc000535720vhskc3x_imageLink_zpbrq0ogw.jpg&w=1920&q=75', avatarSrc: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg', tags: ['Frontend', 'Backend'], duration: '150 teams' },
  { id: 2, title: 'SpaceX Hyperloop Pod Competition', imageSrc: 'https://console.algora.io/prettier/bg.png', avatarSrc: 'https://images.prismic.io/sacra/dbc560bf-42bb-46f9-b3b3-0af6bd29d624_spaceX-Logo-tagline-slogan-motto-mission-vision-founder-owner.jpeg?auto=compress,format', tags: ['ML Engineer', 'Backend'], duration: '120 teams' },
  { id: 3, title: 'Microsoft Imagine Cup', imageSrc: 'https://ph-files.imgix.net/ea6034d7-7052-4628-a68f-0f6dd8e1cd89.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fm=pjpg&w=1100&h=578&fit=max&frame=1&dpr=3', avatarSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', tags: ['Frontend', 'Backend'], duration: '200 teams' },
  { id: 4, title: 'Google Code Jam', imageSrc: 'https://lablab.ai/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Flablab-static-eu%2Fimages%2Fevents%2Fcm69dj4ya000d357oi9a3hgks%2Fcm69dj4ya000d357oi9a3hgks_thumbnailLink_fz6ak0kbt.jpg&w=1920&q=75', avatarSrc: 'https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png', tags: ['ML Engineer', 'Backend'], duration: '180 teams' },
  { id: 5, title: 'NASA Hackathon', imageSrc: 'https://lablab.ai/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Flablab-static-eu%2Fimages%2Fevents%2Fcm3j29bp4000c357syh9kanc3%2Fcm3j29bp4000c357syh9kanc3_thumbnailLink_vh39fy0yjb.jpg&w=3840&q=75', avatarSrc: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg', tags: ['Frontend', 'Backend'], duration: '160 teams' },
  { id: 6, title: 'SpaceX Mars Colony Design', imageSrc: 'https://assets.bell-sw.com/www.bell-sw.com/static/5aff71176545ed5e849d37b47e6a1fe7/73020/documenting-rest-api-with-swagger-in-spring-boot-3.webp', avatarSrc: 'https://images.prismic.io/sacra/dbc560bf-42bb-46f9-b3b3-0af6bd29d624_spaceX-Logo-tagline-slogan-motto-mission-vision-founder-owner.jpeg?auto=compress,format', tags: ['ML Engineer', 'Backend'], duration: '140 teams' },
  { id: 7, title: 'Microsoft AI for Good Challenge', imageSrc: 'https://example.com/microsoft_event2.jpg', avatarSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', tags: ['Frontend', 'Backend'], duration: '190 teams' },
  { id: 8, title: 'Google Kick Start', imageSrc: 'https://example.com/google_event2.jpg', avatarSrc: 'https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png', tags: ['ML Engineer', 'Backend'], duration: '170 teams' },
  { id: 9, title: 'NASA Lunar Lander Challenge', imageSrc: 'https://example.com/nasa_event3.jpg', avatarSrc: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg', tags: ['Frontend', 'Backend'], duration: '130 teams' },
  { id: 10, title: 'SpaceX Starship Design Competition', imageSrc: 'https://example.com/spacex_event3.jpg', avatarSrc: 'https://images.prismic.io/sacra/dbc560bf-42bb-46f9-b3b3-0af6bd29d624_spaceX-Logo-tagline-slogan-motto-mission-vision-founder-owner.jpeg?auto=compress,format', tags: ['ML Engineer', 'Backend'], duration: '110 teams' },
];


function EventCardList() {
  const router = useRouter();

  // const onEventClick = (id) => {
  //   router.push(`/events/${id}`);
  // };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {mockData.map((event) => (
        <div
          key={event.id}
          className="rounded-2xl bg-black flex flex-col min-h-36 w-full p-1 pb-2"
        >
          <div className="relative min-h-48 w-full">
            <Image src={event.imageSrc} className="rounded-t-xl" fill alt="event image" />
          </div>
          <div className="flex flex-col text-lg font-semibold mt-3 p-2">
            <div className="flex items-center mb-2">
              <Image src={event.avatarSrc} className="rounded-full" width={40} height={40} alt="club avatar" />
              <h2 className="ml-2">{event.title}</h2>
            </div>
            <div className="flex gap-2 items-center text-[#8291a6] mt-2 font-semibold text-sm">
              <ScrollText size={15} />
              <p>{event.tags.join(', ')}</p>
              <div className="size-1 bg-[#8291a6] rounded-full relative top-[0.1rem]" />
              <p>{event.duration}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}