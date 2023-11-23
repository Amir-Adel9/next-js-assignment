import { Customer } from '@/utils/types/types';

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
    <div className={`${styles.backgroundColor} ${styles.textColor}`}>
      <div key={customer.id}>{customer.name}</div>
    </div>
  );
};

export default CustomerReview;
