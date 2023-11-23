import Image from 'next/image';

import { Customer } from '@/utils/types/types';
import Balancer from 'react-wrap-balancer';
import { Star } from 'lucide-react';

type CustomerReviewCardStyles = {
  backgroundColor: string;
  textColor: string;
};

const CustomerReview = ({
  customer,
  styles,
}: {
  customer: Customer;
  styles: CustomerReviewCardStyles;
}) => {
  return (
    <div
      className={`${styles.backgroundColor} ${styles.textColor} relative max-w-[536px] h-[465px] text-center rounded-3xl flex flex-col justify-end items-center gap-5 p-16 duration-300 hover:-translate-y-10 `}
    >
      <div className='absolute w-[144px] h-[144px] top-[-72px]'>
        <Image
          src={customer.photo_url}
          alt={customer.name}
          layout='fill'
          objectFit='cover'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <p className='text-xl font-extralight'>
          <Balancer>&quot; {customer.review} &quot;</Balancer>
        </p>
        <h3 className='text-2xl font-medium'>{customer.name}</h3>
        <h4 className='text-lg tracking-tighter font-extralight'>
          {customer.occupation}
        </h4>
      </div>
      <div className='flex items-center gap-1'>
        {[...Array(customer.rating)].map((_, index) => (
          <Star key={index} fill='#FFCB21' color='#FFCB21' size={35} />
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
