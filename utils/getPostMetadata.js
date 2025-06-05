import fs from "fs";
import matter from "gray-matter";

export default function getPostMetadata(basepath) {
  const folder = basepath + "/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((f) => f.endsWith("md"));

  // get the file data
  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`${basepath}/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      prep_time: matterResult.data.prep_time,
      cook_time: matterResult.data.cook_time,
      bio: matterResult.data.description,
      slug: filename.replace(".md", ""),
    };
  });
  return posts;
}
