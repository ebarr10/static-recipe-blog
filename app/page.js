import PostCard from "@/components/post-card";
import getPostMetadata from "@/utils/getPostMetadata";

export default function Home() {
  const postsMetadata = getPostMetadata("recipes");
  return (
    <main>
      <div className="postsContainer">
        {postsMetadata.map((post, postIndex) => (
          <PostCard key={postIndex} post={post} />
        ))}
      </div>
    </main>
  );
}
