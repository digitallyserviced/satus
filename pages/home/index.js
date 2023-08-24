import { useTinaObjects } from 'hooks/use-tina'
import { Layout } from 'layouts/default'
import { client } from 'tina/__generated__/client'
import { tinaField } from 'tinacms/dist/react'
import s from './home.module.scss'

const pageId = 'home'

export default function Home({ home }) {
  const { sections, global } = useTinaObjects(home, pageId)
  const { hero } = sections
  const { navigation } = global

  return (
    <Layout theme="light" {...navigation}>
      <section className={s.content} data-tina-field={tinaField(hero)}>
        <h1 style={{ opacity: hero.opacity }}> {hero.title}</h1>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const [home] = await Promise.all([
    client.queries[pageId]({
      relativePath: 'home.md',
    }),
  ])

  return {
    props: {
      home,
      id: pageId,
    }, // will be passed to the page component as props
  }
}
