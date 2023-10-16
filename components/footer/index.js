import { Link } from '@studio-freight/compono'
import cn from 'clsx'
import { tinaField } from 'tinacms/dist/react'
import s from './footer.module.scss'

export function Footer({ data }) {
  const { links } = data

  return (
    <footer className={cn(s.footer, 'layout-block')}>
      {links.map(({ link, _content_source }) => (
        <Link
          href={link?.url}
          target="_blank"
          className="link"
          key={link?.url}
          data-tina-field={tinaField({ _content_source })}
        >
          {link?.text}
        </Link>
      ))}
    </footer>
  )
}
