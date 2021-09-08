import { client } from '@/utils/client'
import type { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from "next/dist/client/router";

// getStaticProps使用するときにctx.query.idは使えないので設定
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return { paths: [], fallback: true }
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const contentId = ctx.query.id
//   if (typeof contentId !== 'string') {
//     throw Error('invalid query')
//   }
//   const data = await client
//     .get({ endpoint: 'news', contentId });
//   return { props: { data } }
// }

// npm run buildで生成
// revalidateは再生成：10秒後に再生成
export const getStaticProps:GetStaticProps  = async (ctx) => {
  const contentId = ctx.params?.id
  if (typeof contentId !== 'string') {
    throw Error('invalid query')
  }
  const data = await client
    .get({ endpoint: 'news', contentId });
  return { props: { data }, revalidate: 1 }
}

export default function Page(props: any) {
  // 1番最初は空が呼ばれる
  const router = useRouter()
  if (router.isFallback) {
    return null
  }
  return (
    <div>
      <div dangerouslySetInnerHTML={{__html: props.data.body }} />
    </div>
  );
}
