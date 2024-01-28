import { StorageListItem } from '../../ui';

export const StorageList = () => {
  return (
    <div className="flex flex-col gap-y-[10px] my-[50px]">
      <p className="text-[28px] font-bold">Hello, Yuri Rebrov ✋</p>
      {/* <p className="text-[18px] italic text-slate-400">
        There's nothing here yet 💤
      </p> */}
      {/* {/* <StorageListItem label="google.com" /> */}
      {/* <StorageListItem label="google.com" /> */}
      <StorageListItem label="youtube.com" url="1" />
    </div>
  );
};
