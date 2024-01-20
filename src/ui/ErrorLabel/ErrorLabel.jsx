import React from 'react';

export const ErrorLabel = ({ errorMessage }) => {
  return (
    <div className="absolute text-warning text-[14px]">
      {errorMessage || 'Error!'}
    </div>
  );
};
