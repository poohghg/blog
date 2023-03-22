import { getSubJect } from '@/lib/getSubJect';

interface Props {
  subJect: string;
}

export default function subJect({ subJect }: Props) {
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
    (subJect) => subJect.params.subJect === params.subJect
  );

  if (!subJect) return { notFound: true };
  return {
    props: {
      subJect: params.subJect,
    },
  };
}
