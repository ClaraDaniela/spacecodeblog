import { format } from 'date-fns';
import { GetStaticPaths, GetStaticProps } from 'next';

import { Content } from '../../content/Content';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { getAllPosts, getPostBySlug } from '../../utils/Content';
import { markdownToHtml } from '../../utils/Markdown';
import dynamic from 'next/dynamic';


type IPostUrl = { slug: string };

type IPostProps = {
  title: string;
  description: string;
  date: string;
  modified_date: string;
  image: string;
  content: string;
};

const OrbitScene = dynamic(() => import('../../extras/OrbitScene'), {
  ssr: false,
});
const DisplayPost = (props: IPostProps) => (
  <Main
    meta={
      <Meta
        title={props.title}
        description={props.description}
        post={{
          image: props.image,
          date: props.date,
          modified_date: props.modified_date,
        }}

      />
    }
  >
    {/* Contenedor del post */}
    <div className="bg-gradient-to-br from-[#0a0f1f] via-[#0f172a] to-[#020617] p-8 rounded-2xl shadow-lg text-gray-200">

      {/* Imagen destacada */}
      {props.image && (
        <img
          src={props.image}
          alt={props.title}
          className="rounded-xl w-full mb-6 border border-white/10 shadow-sm"
        />
      )}

      {/* Título del post (solo aquí) */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-center mb-4">
        {props.title}
      </h1>

      {/* Fecha */}
      <div className="text-center text-gray-400 mb-8">
        Publicado: {format(new Date(props.date), 'LLLL d, yyyy')}
      </div>

      {/* Descripción */}
      <p className="text-lg text-gray-300 mb-6 text-center">{props.description}</p>

      {/* Contenido */}
      <Content>
        <div
          className="prose prose-invert max-w-none text-gray-200"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />

        {props.title === "Simulando órbitas en 3D con JavaScript" && (
          <div className="my-10 bg-black/60 backdrop-blur-md rounded-xl p-4 border border-white/10">
            <OrbitScene />
          </div>
        )}
      </Content>

      {/* Footer del post */}
      <div className="border-t border-white/10 mt-10 pt-6 text-gray-400 text-sm text-center">
        Última modificación: {format(new Date(props.modified_date), 'LLLL d, yyyy')}
      </div>
    </div>
  </Main>
);

export const getStaticPaths: GetStaticPaths<IPostUrl> = async () => {
  const posts = getAllPosts(['slug']);
  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IPostProps, IPostUrl> = async ({ params }) => {
  const post = getPostBySlug(params!.slug, [
    'title',
    'description',
    'date',
    'modified_date',
    'image',
    'content',
    'slug',
  ]);
  const content = await markdownToHtml(post.content || '');
  return {
    props: {
      title: post.title,
      description: post.description,
      date: post.date,
      modified_date: post.modified_date,
      image: post.image,
      content,
    },
  };
};

export default DisplayPost;