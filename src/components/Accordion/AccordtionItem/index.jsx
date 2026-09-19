import iconPlus from '/assets/images/icon-plus.svg';
import iconMinus from '/assets/images/icon-minus.svg';

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className='border-b-2 border-b-purple-100 last:border-b-0'>
      <div className='w-full py-6 flex justify-between items-center gap-4'>
        <span className='text-base/tight font-semibold text-start shrink'>{title}</span>
        <button onClick={onToggle} className='h-8 w-8 shrink-0 cursor-pointer'>
          <img className='h-8 w-8' src={!isOpen ? iconPlus : iconMinus} alt="" />
        </button>
      </div>
      {isOpen && (
        <div>
          <p className='pb-4 text-purple-600'>{content}</p>
        </div>
      )}
    </div>
  );
}

export default AccordionItem;