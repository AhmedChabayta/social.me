import { footerList1, footerList2, footerList3 } from "@src/constants";

const SidebarFooter = () => {
  const List = ({ list }: { list: string[] }) => (
    <div className="mt-5 flex flex-wrap gap-2 first:mt-0">
      {list.map((item) => (
        <p
          className="cursor-pointer text-sm text-gray-400 hover:underline"
          key={item}
        >
          {item}
        </p>
      ))}
    </div>
  );

  return (
    <div className="mt-6 hidden xl:block">
      <List list={footerList1} />
      <List list={footerList2} />
      <List list={footerList3} />
      <p className="mt-5 text-sm text-gray-400">2023 Social.me</p>
    </div>
  );
};
export default SidebarFooter;
