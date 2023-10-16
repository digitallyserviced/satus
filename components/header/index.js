import { Link } from '@studio-freight/compono'
import cn from 'clsx'
import { Navigation } from 'components/navigation'
import { useStore } from 'libs/store'
import { forwardRef } from 'react'
import { tinaField } from 'tinacms/dist/react'
import s from './header.module.scss'

export const Header = forwardRef(({ title, links, _content_source }, ref) => {
  const [isNavOpened, setIsNavOpened] = useStore(
    ({ isNavOpened, setIsNavOpened }) => [isNavOpened, setIsNavOpened],
  )

  console.log(links)

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
            setIsNavOpened(!isNavOpened)
          }}
        >
          {title}
        </button>
        <div>
          <Link href="/_debug/orchestra" target="_blank" className="link">
            debug
          </Link>
        </div>
      </div>
    </header>
  )
})

Header.displayName = 'Header'
