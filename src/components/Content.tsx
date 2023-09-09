import jp from '../assets/jp.svg';
import mic from '../assets/mic.png';
import play from '../assets/play.svg';
import player from '../assets/player.svg';
import DrawerForm from './DrawerForm';

const Content = () => {
  return (
    <section className='flex mt-4  pt-12'>
      <div className='flex flex-1 flex-col items-center justify-start gap-4 '>
        <div className='self-start'>
          <p className='font-bold text-5xl leading-snug '>
            Unlock the World of Voices: Your Podcast{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 '>
              Any Language
            </span>
          </p>
        </div>
        <div className='w-[400px] self-start'>
          <p className='text-xs '>
            Experience the future of podcasting with our AI-powered platform!
            Listen to our content in your preferred language, breaking down
            language barriers and connecting diverse audiences worldwide.
          </p>
        </div>
        <div className='self-start mt-4'>
          <DrawerForm />
        </div>
      </div>
      <div className='flex flex-1 justify-start rounded-lg h-full ml-12 relative'>
        <div className='w-full'>
          <img src={mic} className='h-[95%]' />
        </div>
        <img
          src={play}
          className='absolute h-12 w-12 right-56 bottom-80 animate-[levitate_14s_ease_infinite_1s]'
        />
        <img src={jp} className=' absolute h-16 w-16 left-10 top-12 ' />
        <img src={player} className=' absolute right-0 bottom-44' />
      </div>
    </section>
  );
};

export default Content;
