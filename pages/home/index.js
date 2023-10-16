import { SplitText } from 'components/split-text'
import { colors } from 'config/variables'
import gsap from 'gsap'
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

  console.log(hero)

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
      <section className={s.content} data-tina-field={tinaField(home)}>
        <h1 className={s.title}>
          <SplitText
            ref={(node) => {
              if (node) setTitleSplitted(node)
            }}
            type="words"
          >
            Inceptum pulchrum, iterum incipiamus amici, Res novas aggrediamur,
            virtute superbi. Aurora nova luce, spes nobis enitescat, Sicut sol
            oriens, ex tenebris emergat. Ingenium nostrum flamma lucida flagret,
            Consilium firmum, studium nos agitet. Labor et laboris fructus nobis
            faveant, Perseverantia vincat, ita crescamus ameant. Principium est
            fundamentum, quod nobis est datum, Inceptum pulchrum, munus magnum,
            probatum. Manus ad aratrum, cor ad caelum dirigamus, Opus magnum
            faciamus, vitam renovemus. Spes in pectore, etiam si nox obscurat,
            Perseverando vincemus, quodcunque laborat. Inceptum pulchrum,
            studium nostrum lucidum, Fama et gloria nobis, sic sit perpetuum.
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
