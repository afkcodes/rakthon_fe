import Content from '../components/Content';
import Navigation from '../components/Navigation';

const Landing = () => {
  return (
    <div className='flex flex-col h-screen px-32'>
      <Navigation />
      <Content />
    </div>
  );
};

export default Landing;
