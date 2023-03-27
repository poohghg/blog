import * as fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'public', 'posts');

export function getPostsData() {
  const postDir = fs.readdirSync(postsDirectory);
  const subJects = postDir.map((dir) => dir);

  const allPosts = subJects.map((dir) => {
    const currDirPath = path.join(postsDirectory, dir);
    const currDir = fs.readdirSync(currDirPath);
    const posts = currDir.map((file) => {
      const fullPath = path.join(currDirPath, file);
      const id = file.replace(/\.md$/, '');
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data: frontmatter } = matter(fileContents);
      // console.log(frontmatter);
      return { id, frontmatter };
    });
    return posts;
  });
  console.log(allPosts.flat());
  // console.log(allPosts);
}
