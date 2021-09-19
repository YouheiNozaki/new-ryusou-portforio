import { Fragment } from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/dist/client/router';
import dayjs from 'dayjs';
import { BiCalendarAlt, BiCalendarCheck } from 'react-icons/bi';
import * as cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/night-owl.css';
import { Layout } from 'components/common/Layout';
import { parseHtml } from 'lib/parseHtml';
import { CustomImage } from 'components/atoms/CustomImage';
import { Blog } from 'types/blogs';
import { fetchBlogs, fetchBlog } from '../../lib/fetchBlogs';
import { BlogPageStyle } from '../../styles/blog.css';

type Props = {
  blog: Blog;
  content: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await fetchBlogs();

  return {
    paths: blogs.contents.map((blog) => ({
      params: {
        id: blog.id,
      },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext<{ id: string }>,
) => {
  const { id } = context.params;
  const blog = await fetchBlog(id);
  const { content } = blog;
  const $ = cheerio.load(content);
  $('pre code').each((_, element) => {
    const result = hljs.highlightAuto($(element).text());
    $(element).html(result.value);
    $(element).addClass('hljs');
  });

  return {
    props: {
      blog,
      content: $.html(),
    },
  };
};

const BlogDetail: React.FC<Props> = ({ blog, content }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading</div>;
  }

  return (
    <Layout>
      <h1 className={BlogPageStyle.blogTitle}>{blog.title}</h1>
      {blog.author.map((author) => (
        <div className={BlogPageStyle.blogImageWrapper}>
          <CustomImage
            baseImageUrl={blog.image.url}
            title={blog.title}
            author={author}
            width={600}
            height={315}
            className={BlogPageStyle.blogImage}
          />
        </div>
      ))}
      <div className={BlogPageStyle.blogDescription}>
        <div className={BlogPageStyle.blogTags}>
          {blog.tags.map((tag) => (
            <Fragment key={tag.slug}>
              <p className={BlogPageStyle.blogTag}>{tag.slug}</p>
            </Fragment>
          ))}
        </div>
        <div className={BlogPageStyle.blogDays}>
          <BiCalendarAlt className={BlogPageStyle.blogDayIcon} />
          <p className={BlogPageStyle.blogDay}>
            {dayjs(blog.createdAt).format('YYYY/MM/DD')}
          </p>
          <BiCalendarCheck className={BlogPageStyle.blogDayIcon} />
          <p className={BlogPageStyle.blogDay}>
            {dayjs(blog.updatedAt).format('YYYY/MM/DD')}
          </p>
        </div>
      </div>
      {/* eslint-disable-next-line react/no-danger */}
      <div>{parseHtml(content)}</div>
    </Layout>
  );
};

export default BlogDetail;
