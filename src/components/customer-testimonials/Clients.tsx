import CustomerReview from './CustomerReview';

import { Customer } from '@/utils/types/types';

import customers from '../../data/clients/clients.json';

const Clients = async () => {
  return (
    <>
      {customers.map((customer: Customer, index: number) => (
        <CustomerReview
          key={customer.id}
          customer={{
            id: customer.id,
            name: customer.name,
            occupation: customer.occupation,
            photo_url: customer.photo_url,
            review: customer.review,
            rating: customer.rating,
          }}
          styles={{
            backgroundColor:
              index === 1 ? 'bg-accent-foreground' : 'bg-primary-foreground',
            textColor:
              index === 1 ? 'text-primary-text' : 'text-secondary-text',
          }}
        />
      ))}
    </>
  );
};

export default Clients;
