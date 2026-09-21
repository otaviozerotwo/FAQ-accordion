import iconPlus from '/assets/images/icon-plus.svg';
import iconMinus from '/assets/images/icon-minus.svg';

const AccordionItem = ({ id, title, content, isOpen, onToggle }) => {
  return (
    <div className='border-b-2 border-b-purple-100 last:border-b-0'>
      <button
        onClick={onToggle}
        className='w-full py-6 flex justify-between items-center gap-4 cursor-pointer'
        aria-controls={`faq-content-${id}`}
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        <span
          className='text-base/tight font-semibold text-start shrink hover:text-purple-700'
        >
          {title}
        </span>

        <img
          className='h-8 w-8' src={!isOpen ? iconPlus : iconMinus} alt=""
          aria-hidden='true'
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div id={`faq-content-${id}`} className='overflow-hidden'>
          <p className='pb-4 text-purple-600'>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;