import Image from 'next/image';
import Clients from './Clients';

const CustomerTestimonials = () => {
  return (
    <section className='w-full min-h-screen bg-[url("/images/background.png")] bg-no-repeat bg-cover flex flex-col justify-end items-center gap-36 p-32'>
      <div className='flex flex-col gap-4 text-center'>
        <h3 className='text-accent-text text-xl font-medium'>
          Clients&apos; Testimonials
        </h3>
        <h1 className='font-lobster text-6xl'>
          Unforgettable Travel Experiences
        </h1>
      </div>
      <div className='grid grid-cols-3 gap-x-5 gap-y-28'>
        <Clients />
      </div>
    </section>
  );
};

export default CustomerTestimonials;
