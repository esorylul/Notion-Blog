import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/esorylul',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/esorylul',
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:esorylul@outlook.com?subject=LulyRose',
  },
]

export default () => (
  <>
    <Header titlePre="Contact" />
    <div className={sharedStyles.layout}>
      <div className={contactStyles.avatar}>
        <img src="/avatar.jpg" alt="avatar with LulyRose" height={60} />
      </div>

      <h1 style={{ marginTop: 0 }}>LulyRose</h1>

      <div className={contactStyles.links}>
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={32} />
            </ExtLink>
          )
        })}
      </div>
    </div>
  </>
)
