import Image from 'next/image';
import Clients from './Clients';

const CustomerTestimonials = () => {
  return (
    <section className='w-full h-screen bg-[url("/images/background.png")] bg-no-repeat bg-cover flex flex-col justify-center items-center gap-10'>
      <div className='text-center'>
        <h3 className='text-accent-text text-xl font-medium'>
          Clients&apos; Testimonials
        </h3>
        <h1 className='font-lobster text-6xl'>
          Unforgettable Travel Experiences
        </h1>
      </div>
      <div className='grid grid-cols-3 gap-10'>
        <Clients />
      </div>
    </section>
  );
};

export default CustomerTestimonials;
