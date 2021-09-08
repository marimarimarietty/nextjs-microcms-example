import { client } from '@/utils/client'
import Link from 'next/link'
import type { GetServerSideProps, GetStaticProps } from 'next'

// サーバーサイドレンダリング
// export const getServerSideProps: GetServerSideProps = async () => {
//   const data = await client
//     .get({ endpoint: 'news', })
//   return { props: { data } }
// }

// 事前生成される時に使用(あまり変わらないやつ)
// revalidateは再生成：10秒後に再生成
export const getStaticProps:GetStaticProps  = async () => {
  const data = await client
    .get({ endpoint: 'news', })
  return { props: { data }, revalidate: 10 };
}

export default function Page(props: any) {
  console.log(props)
  return (
    <div>
    {props.data.contents.map((content: any) => <p　key={content.id}>
      <Link href={`/articles/${content.id}`}>
        <a>{content.title}</a>
      </Link></p>)}
    </div>
  );
}
