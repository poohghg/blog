import { getPostsData } from '@/lib/getPostsData';
import { getSubJect } from '@/lib/getSubJect';
import { Post } from '@/types/post';

interface Props {
  subJect: string;
  posts: Post[];
}

export default function SubJect({ subJect, posts }: Props) {
  return (
    <div>
      <h1>{subJect}</h1>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getSubJect();

  return { paths, fallback: true };
}

export function getStaticProps({ params }: { params: { subJect: string } }) {
  const subJects = getSubJect();
  const subJect = subJects.find(
    (_subJect) => _subJect.params.subJect === params.subJect
  );
  if (!subJect) return { notFound: true };

  const allPosts = getPostsData();
  const posts = allPosts.filter(({ folder }) => folder === params.subJect);

  return {
    props: {
      subJect: params.subJect,
      posts,
    },
  };
}
