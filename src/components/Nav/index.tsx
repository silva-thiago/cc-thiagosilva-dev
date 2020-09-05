import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://github.com/silva-thiago', label: 'GitHub', icon: '/img/icons/github.svg', text: 'Logotipo do GitHub' },
  { href: 'https://www.linkedin.com/in/tjlsilva/', label: 'LinkedIn', icon: '/img/icons/linkedin.svg', text: 'Logotipo do LinkedIn' },
]

const Nav: React.FC = () => {
  return (
    <nav>
      <div className={'navbar mx-auto'}>
        <div className={'flex justify-between'}>
          <Link href='/'>
            <span>
              <a className={'text-gray-700 text-xl font-bold uppercase no-underline'}>{`TS {Dev}_`}</a>
            </span>
          </Link>
          <ul className={'flex justify-between space-x-4'}>
            {links.map(({ href, label, icon, text }) => (
              <a href={href} key={`${href}${label}${icon}${text}`} className={'text-base rounded no-underline'} target='_blank' rel='noopener noreferrer'>
                <li className={'btn-indigo'}>
                  {/* {label} */}
                  <img src={icon} alt={text} className={'icon'} />
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
