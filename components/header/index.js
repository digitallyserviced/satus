import { Link } from '@studio-freight/compono'
import cn from 'clsx'
import { Navigation } from 'components/navigation'
import { useStore } from 'libs/store'
import { forwardRef } from 'react'
import { tinaField } from 'tinacms/dist/react'
import s from './header.module.scss'

export const Header = forwardRef(({ data }, ref) => {
  const { title, links } = data
  const [isNavOpened, setIsNavOpened] = useStore(
    ({ isNavOpened, setIsNavOpened }) => [isNavOpened, setIsNavOpened],
  )

  return (
    <header className={s.header} ref={ref}>
      <Navigation />
      <div
        className={cn('layout-block', s.head)}
        data-tina-field={tinaField(data, 'title')}
      >
        <button
          onClick={() => {
            setIsNavOpened(!isNavOpened)
          }}
        >
          {title}
        </button>
        <div>
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
        </div>
      </div>
    </header>
  )
})

Header.displayName = 'Header'
