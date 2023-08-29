import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

const MenuButtons = ({
  showSidebar,
  setShowSidebar,
}: {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <button onClick={() => setShowSidebar((prev: boolean) => !prev)}>
      {showSidebar ? (
        <XMarkIcon className="stroke-white text-3xl" />
      ) : (
        <Bars3Icon className="stroke-white text-3xl" />
      )}
    </button>
  );
};
export default MenuButtons;
