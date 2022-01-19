import { useState } from 'react';
import { ButtonView } from './button';

const initialState = { value: '', display: '' };

export const Calculator = () => {
  const [expression, setExpression] = useState(initialState);
  const [previosExpression, setPreviousExpression] = useState('');
  const [error, setError] = useState<string | null>(null);
  const addExpression = ({
    label,
    value,
  }: {
    label: string;
    value: string;
  }) => {
    setExpression((prev) => ({
      display: prev.display.concat(label),
      value: prev.value.concat(value),
    }));
  };
  const resetExpression = () => {
    setExpression(initialState);
    setPreviousExpression('');
  };
  const delExpression = () => {
    setPreviousExpression('');
    setExpression((prev) => ({
      display: prev.display.slice(0, -1),
      value: prev.value.slice(0, -1),
    }));
  };
  const submitInput = () => {
    setPreviousExpression(expression.value);
    setExpression((prev) => {
      try {
        setError(null);
        const submit = String(eval(prev.value) || '');

        return {
          value: submit,
          display: submit,
          // Can be separated for more readability
          // display: submit.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        };
      } catch {
        setError('Invalid Expression');
        return prev;
      }
    });
  };
  const handleChange = (e) => {
    const value = e.target.value.replace(/\n/g, '');
    setExpression({
      value: value,
      display: value,
    });
  };

  const KEYS = [
    { label: '7', value: 7, onClick: addExpression },
    { label: '8', value: 8, onClick: addExpression },
    { label: '9', value: 9, onClick: addExpression },
    { label: 'del', onClick: delExpression, alternative: true },
    { label: '4', value: 4, onClick: addExpression },
    { label: '5', value: 5, onClick: addExpression },
    { label: '6', value: 6, onClick: addExpression },
    { label: '+', value: '+', onClick: addExpression, alternative: true },
    { label: '1', value: 1, onClick: addExpression },
    { label: '2', value: 2, onClick: addExpression },
    { label: '3', value: 3, onClick: addExpression },
    { label: '-', value: '-', onClick: addExpression, alternative: true },
    { label: '.', value: '.', onClick: addExpression },
    { label: '0', value: 0, onClick: addExpression },
    { label: '/', value: '/', onClick: addExpression, alternative: true },
    { label: 'x', value: '*', onClick: addExpression, alternative: true },
    {
      label: 'Reset',
      onClick: resetExpression,
      alternative: true,
      wide: true,
    },
    { label: '=', onClick: submitInput, alternative: true, wide: true },
  ];

  return (
    <div className="mx-auto overflow-hidden mt-10 shadow-lg mb-2 bg-black border rounded-lg md:w-3/6 sm:w-4/6">
      <div className="">
        <div className="p-5 text-white text-center text-3xl bg-black">
          <span>Calculator</span>
          {error && <div className={'text-red italic'}>{error}</div>}
        </div>

        <div className="p-5 text-white text-right text-3xl bg-black">
          {previosExpression && `${previosExpression} =`}
          <textarea
            value={expression.display}
            rows={1}
            onChange={handleChange}
            className="bg-black text-orange-500 font-bold text-5xl resize-none overflow-hidden text-right w-full"
          />
        </div>
        <div className="grid pt-6 col-gap-3 row-gap-4 rounded-lg grid-cols-4">
          {KEYS.slice(0, -2).map((key, i) => (
            <ButtonView {...key} key={i} />
          ))}
        </div>
        <div className="flex">
          {KEYS.slice(-2).map((key, i) => (
            <div className="w-full">
              <ButtonView {...key} key={i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
