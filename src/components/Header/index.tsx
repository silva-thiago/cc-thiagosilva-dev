import React from 'react'

const links = [
  { href: 'https://t.me/silvathiago', label: 't.me/silvathiago' },
]

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <header>
        <div className={'container mx-auto'}>
          <div className={'hero text-center'}>
            <h1 className={'title'}>Hi, I am learning fullstack development!</h1>
            <div className={'bg-indigo-700 rounded-full flex inline-flex p-4'} role='alert'>
              <span className={'font-semibold text-base text-indigo-100'}>I design and code beautifully simple things</span>
            </div>
            <div className={'flex justify-center'}>
              <div className={'bg-transparent rounded-lg lg:flex py-6'}>
                <img className={'h-16 lg:h-24 w-16 lg:w-24 rounded-full mx-auto lg:mx-0 lg:mr-4'} src='/img/avatar.jpg' alt='Profile picture' />
                <div className={'text-base lg:text-left'}>
                  <h2 className={'lg:text-left lg:pt-1'}>Thiago Silva</h2>
                  <div className={'text-gray-600'}>Software Engineering Student</div>
                  <div className={'text-gray-600'}>thiago.silva@imd.ufrn.br</div>
                  <div>
                    {links.map(({ href, label }) => (
                      <div key={`${href}${label}`}>
                        <a href={href} className={'text-indigo-700 hover:text-indigo-800'} target='_blank' rel='noopener noreferrer'>
                          {label}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
