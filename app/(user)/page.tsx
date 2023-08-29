import { NoResults, PostCard } from "@src/components";
import { BASE_URL } from "@src/lib";
import { Post } from "@src/types";

const Home = async () => {
  try {
    const fetchPosts = await fetch(`${BASE_URL}/api/post`);
    if (!fetchPosts.ok) {
      throw new Error(`Failed to fetch posts. Status: ${fetchPosts.status}`);
    }

    const allPosts: Post[] = await fetchPosts.json();

    return (
      <div className="mx-auto flex w-full flex-col gap-10 py-20 scrollbar-hide">
        {allPosts.length > 1 ? (
          allPosts.map((post) => <PostCard key={post?._id} post={post} />)
        ) : (
          <NoResults text="No Results Found" />
        )}
      </div>
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
    return <div>Error fetching posts. Please try again later.</div>;
  }
};
export default Home;
