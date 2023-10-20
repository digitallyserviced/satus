import { Link } from '@studio-freight/compono'
import cn from 'clsx'
import { tinaField } from 'tinacms/dist/react'
import s from './footer.module.scss'

export function Footer({ data }) {
  if (!data) return null
  const { links } = data

  return (
    <footer className={cn(s.footer, 'layout-block')}>
      {links?.map(({ text, url, _content_source }) => (
        <Link
          href={url}
          target="_blank"
          className="link"
          key={url}
          data-tina-field={tinaField({ _content_source })}
        >
          {text}
        </Link>
      ))}
    </footer>
  )
}
