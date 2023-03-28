import { getPostsData } from '@/lib/getPostsData';
import { Post } from '@/types/post';
import { useRouter } from 'next/router';

interface Props {
  subJect: string;
  id: string;
  // posts: Post[];
}

export default function PostPage({ subJect, id }: Props) {
  const router = useRouter();
  console.log(router.query);
  console.log(subJect, id);
  return (
    <div>
      <h1>{subJect}</h1>
      <h2>dasdasdasd</h2>
    </div>
  );
}

export async function getStaticPaths() {
  const allPosts = getPostsData();
  // const paths = getSubJect();
  const paths = allPosts.map(({ folder, id }) => ({
    params: {
      subJect: folder,
      id,
    },
  }));
  console.log('paths', paths);
  return { paths, fallback: true };
}

export function getStaticProps({
  params,
}: {
  params: { subJect: string; id: string };
}) {
  console.log('params', params);
  return {
    props: { ...params },
  };
}
