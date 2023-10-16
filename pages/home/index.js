import { SplitText } from 'components/split-text'
import { colors } from 'config/variables'
import gsap from 'gsap'
import { useTinaObjects } from 'hooks/use-tina'
import { Layout } from 'layouts/default'
import { useEffect, useState } from 'react'
import { client } from 'tina/__generated__/client'
import { tinaField } from 'tinacms/dist/react'
import s from './home.module.scss'

const pageId = 'home'

export default function Home({ home }) {
  const { sections, global } = useTinaObjects(home, pageId)
  const { hero } = sections
  const { navigation } = global
  const [titleSplitted, setTitleSplitted] = useState()

  useEffect(() => {
    const words = titleSplitted?.words

    if (!words) return

    words.forEach((word) => {
      word.addEventListener(
        'mouseenter',
        () => {
          gsap.fromTo(
            word,
            {
              color: colors.green,
            },
            {
              color: colors.white,
              duration: 4,
              ease: 'expo.out',
            },
          )
        },
        false,
      )
    })
  }, [titleSplitted])

  return (
    <Layout theme="dark" className={s.home} {...navigation}>
      <section className={s.content} data-tina-field={tinaField(hero)}>
        <h1
          className={s.title}
          style={{ opacity: hero.opacity }}
          data-tina-field={tinaField(hero, 'text')}
        >
          <SplitText
            ref={(node) => {
              if (node) setTitleSplitted(node)
            }}
            type="words"
          >
            {hero.text}
          </SplitText>
        </h1>
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
