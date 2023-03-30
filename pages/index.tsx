import Head from 'next/head';
import { Inter } from 'next/font/google';
import { getPostsData } from '@/lib/getPostsData';
import { Post } from '@/types/post';
import styled from 'styled-components';

const inter = Inter({ subsets: ['latin'] });

interface Props {
  posts: Post[];
}

export default function Home({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Layout>
        <div>test</div>
      </Layout>
    </>
  );
}

export function getStaticProps() {
  const posts = getPostsData();
  return {
    props: { posts },
  };
}

const Layout = styled.main`
  height: 100%;
`;
