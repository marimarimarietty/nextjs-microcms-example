import { client } from '@/utils/client'
import styles from '../styles/Home.module.css'

export const getServerSideProps = async () => {
  const data = await client
    .get({ endpoint: 'news', })
  return { props: { data } }
}

export default function Page(props: any) {
  console.log(props)
  return <div className={styles.container}>
    {props.data.contents.map((content: any) => <p　key={content.id}>{content.title}</p>)}
    </div>;
}
