import { Link } from '@studio-freight/compono'
import cn from 'clsx'
import { Navigation } from 'components/navigation'
import { useStore } from 'libs/store'
import { forwardRef } from 'react'
import { tinaField } from 'tinacms/dist/react'
import { shallow } from 'zustand/shallow'
import s from './header.module.scss'

export const Header = forwardRef(({ title, links, _content_source }, ref) => {
  const [navIsOpened, setNavIsOpened] = useStore(
    ({ navIsOpened, setNavIsOpened }) => [navIsOpened, setNavIsOpened],
    shallow,
  )

  return (
    <header
      className={s.header}
      ref={ref}
      data-tina-field={tinaField({ _content_source })}
    >
      <Navigation />
      <div className={cn('layout-block', s.head)}>
        <button
          onClick={() => {
            setNavIsOpened(!navIsOpened)
          }}
        >
          {title}
        </button>
        <div>
          {links.map(({ link }) => (
            <Link href={link.url} key={link.text}>
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
})

Header.displayName = 'Header'
