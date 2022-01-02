import { Fragment, useEffect, useMemo } from 'react';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { useInView } from 'react-intersection-observer';
import ReactLoading from 'react-loading';
import { Layout } from 'components/common/Layout';
import { BlogCard } from 'components/common/ui/BlogCard';
import { HeadTemplate } from '../../components/common/Head';
import { useGetBlogs } from '../../hooks/useGetBlogs';
import { fetchBlogs } from '../../lib/fetchBlogs';
import { BlogsPageStyle } from '../../styles/blogs.css';

export default function Home(): JSX.Element {
  const { data, isLoading, hasNextPage, fetchNextPage } = useGetBlogs();

  const [ref, inView] = useInView({
    rootMargin: '-20px',
  });

  useEffect(() => {
    if (inView) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  const blogs = useMemo(
    () => data && data.pages.flatMap(({ contents }) => contents),
    [data],
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <Layout>
      <HeadTemplate
        pagetitle="BLOG"
        pagedescription="りゅーそうBLOG一覧"
        pagepath="blogs"
        keyword="BLOG"
      />
      <section>
        {blogs.map((content) => (
          <Fragment key={content.id}>
            <article>
              <BlogCard content={content} />
            </article>
          </Fragment>
        ))}
      </section>
      {hasNextPage && (
        <div ref={ref} className={BlogsPageStyle.more}>
          <ReactLoading type="spin" width={40} height={40} color="#009688" />
        </div>
      )}
    </Layout>
  );
}

const queryClient = new QueryClient();

export async function getServerSideProps() {
  await queryClient.prefetchInfiniteQuery('blogs', fetchBlogs, {
    staleTime: Infinity,
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
