import { FrontmatterData, Post } from './../types/post';
import * as fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'public', 'posts');

export function getPostsData() {
  const postDir = fs.readdirSync(postsDirectory);
  const allPosts: Post[] = [];
  // const subJects = postDir.filter((dir) => dir !== '.DS_Store');

  for (const folder of postDir) {
    if (folder === '.DS_Store') continue;
    const currDirPath = path.join(postsDirectory, folder);
    const currDir = fs.readdirSync(currDirPath);
    for (const file of currDir) {
      if (!file.match(/\.md$/)) continue;
      const fullPath = path.join(currDirPath, file);
      const id = file.replace(/\.md$/, '');
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data: frontmatter } = matter(fileContents);

      if (!frontmatter.title || !frontmatter.src) continue;
      const frontmatterData = frontmatter as FrontmatterData;
      allPosts.push({ folder, id, ...frontmatterData });
    }
  }
  console.log(allPosts);
  return allPosts;
}
