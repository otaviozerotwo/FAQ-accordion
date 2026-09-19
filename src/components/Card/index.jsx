import iconStar from '/assets/images/icon-star.svg';
import Accordion from '../Accordion';

const Card = () => (
  <div className='flex flex-col bg-white h-fit px-6 pt-6 pb-0 m-6 rounded-lg max-w-lg'>
    <div className='flex gap-6 items-center mb-2'>
      <img className='h-6' src={iconStar} alt="" />
      <h1 className='text-3xl font-bold'>FAQs</h1>
    </div>

    <Accordion />

  </div>
);

export default Card;