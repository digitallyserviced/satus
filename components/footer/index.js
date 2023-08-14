import { Link } from '@studio-freight/compono'
import { tinaField } from 'tinacms/dist/react'
import s from './footer.module.scss'

export function Footer({ links, _content_source }) {
  return (
    <footer
      className={s.footer}
      data-tina-field={tinaField({ _content_source })}
    >
      <div className="layout-block">
        <h2>
          {links.map(({ link }) => (
            <Link href={link.url} key={link.text}>
              {link.text}
            </Link>
          ))}
        </h2>
      </div>
    </footer>
  )
}
