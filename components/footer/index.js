import { Link } from '@studio-freight/compono'
import cn from 'clsx'
import { tinaField } from 'tinacms/dist/react'
import s from './footer.module.scss'

export function Footer({ links, _content_source }) {
  console.log(links)

  return (
    <footer
      className={cn(s.footer, 'layout-block')}
      data-tina-field={tinaField({ _content_source })}
    >
      <Link href="mailto:contact@studiofreight.com" className="link">
        mail
      </Link>
      <Link href="/contact" className="link">
        contact
      </Link>
      <Link href="https://twitter.com/studiofreight" className="link">
        twitter
      </Link>
    </footer>
  )
}
