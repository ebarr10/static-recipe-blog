import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/utils/getPostMetadata";
import React from "react";
import fs from "fs";
import matter from "gray-matter";

function getPostContent(slug) {
  const folder = "recipes/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = () => {
  const posts = getPostMetadata("recipes");
  return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata({ params, searchParams }) {
  const { slug } = await params;
  const id = slug ? " * " + slug : "";
  return {
    title: `The Cooking Bar ${id.replaceAll("_", " ")}`,
  };
}

export default async function RecipePage(props) {
  const { slug } = await props.params;
  const post = getPostContent(slug);

  return (
    <main>
      <article>
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
}
