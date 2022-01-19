import React from 'react';

type ButtonProps = {
  key: number;
  value: number | string;
  label: string;
  onClick: ({
    label,
    value,
  }: {
    label: string;
    value: number | string;
  }) => void;
  alternative?: boolean;
  wide?: boolean;
};

export const ButtonView: React.FC<ButtonProps> = ({
  label,
  value,
  wide,
  onClick,
  alternative,
}) => {
  return (
    <div
      className="flex-1 px-2 py-2 justify-center flex text-white text-2xl font-semibold"
      onClick={() => onClick({ label, value })}
    >
      <div
        className={`w-full rounded-full h-20 flex items-center bg-black justify-center shadow-lg border-2 border-yellow-700 hover:border-2 hover:border-gray-500 focus:outline-none ${
          alternative ? 'bg-orange-500' : ''}
          ${wide ? 'wide' : ''
        }`}
      >
        {label}
      </div>
    </div>
  );
};
