import { useUserStore } from "@src/store/useUserStore";
import Image from "next/image";
import Link from "next/link";

// Type '{ _id: string; userName: string; image: { _type: "image"; asset: { _ref: string; _type: "reference"; url: string; }; }; }' is missing the following properties from type '{ _id: string; userName: string; firstName: string; lastName: string; image: { _type: "image"; asset: { _ref: string; _type: "reference"; url: string; }; }; }': firstName, lastNamets(2739)

interface IProps {
  timeSince: string;
  caption: string;
  postedBy: {
    _id: string;
    userName: string;
    firstName: string;
    lastName: string;
    image: {
      _type: "image";
      asset: {
        _ref: string;
        _type: string;
        url: string;
      };
    };
  };
}

const PostAuthor = (props: IProps) => {
  const { postedBy, timeSince, caption } = props;
  const { setUserID } = useUserStore();

  return (
    <div className="flex h-full items-center rounded p-2 font-semibold">
      <Link
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-200 md:h-16 md:w-16"
        href="/"
      >
        {postedBy?.image?.asset?.url && (
          <Image
            alt="profile image"
            src={postedBy.image.asset.url}
            width={80}
            height={80}
            className="object-contain"
          />
        )}
      </Link>

      <div className="ml-4 flex flex-col items-start">
        <div className="flex items-center space-x-6">
          <Link
            href={`#${postedBy.userName || postedBy._id}`}
            onClick={() => setUserID(postedBy._id)}
          >
            <h3 className="text-sm font-bold capitalize">
              {postedBy.userName || postedBy.firstName}
            </h3>
          </Link>

          <p className="text-xs text-gray-400">posted {timeSince} ago</p>
          <p className="text-sm">#food</p>
        </div>
        <h2 className="text-sm font-normal">
          Exploring the intersections of art and philosophy on a rainy
          afternoon. 🎨📚 #ArtAndThoughts #RainyDayReflections
        </h2>
      </div>
    </div>
  );
};
export default PostAuthor;
{
  /* <h2 className="text-sm font-bold">
  Exploring the intersections of art and philosophy on a rainy afternoon. 🎨📚
  #ArtAndThoughts #RainyDayReflections
</h2>; */
}
