import * as fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'public', 'posts');

export function getSubJect() {
  const postDir = fs.readdirSync(postsDirectory);
  const subJects = postDir.map((dir) => ({ params: { subJect: dir } }));

  return subJects;
}
