// components/Sidebar.tsx

import TopAnimes from './TopAnimes';

const Sidebar = () => {
  return (
    <div className="w-full lg:w-[300px] bg-white border border-gray-300 rounded-lg">
      <TopAnimes />
    </div>
  );
};

export default Sidebar;
