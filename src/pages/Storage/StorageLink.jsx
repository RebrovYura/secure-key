import React from 'react';
import { StyledButton } from '../../ui';

export const StorageLink = () => {
  return (
    <div className="">
      <div>
        <form className="flex flex-col gap-y-[15px] mt-[50px]">
          <input type="text" className="input" placeholder="Enter url" />
          <input type="text" className="input" placeholder="Username" />
          <input type="password" className="input" placeholder="Password" />
          <div className="flex gap-x-[15px]">
            <StyledButton
              text="Delete"
              styles="btn-solid bg-warning border-warning"
            />
            <StyledButton text="Update" styles="btn-outline" />
          </div>
        </form>
      </div>
    </div>
  );
};
