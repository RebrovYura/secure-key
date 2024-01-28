import React, { useEffect } from 'react';
import { StorageList } from '../../modules';
import axios from '../../axios';

export const Storage = () => {
  useEffect(() => {
    axios.get('api/user/storage');
  }, []);

  return (
    <div className="max-w-[720px] w-full">
      <StorageList />
    </div>
  );
};
