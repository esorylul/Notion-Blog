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
    alt: '推  特',
    link: 'https://twitter.com/esorylul',
  },
  {
    Comp: GitHub,
    alt: '仓  库',
    link: 'https://github.com/esorylul',
  },
  {
    Comp: Envelope,
    alt: '邮  箱',
    link: 'mailto:esorylul@outlook.com?subject=LulyRose',
  },
]

export default () => (
  <>
    <Header titlePre="Contact" />
    <div className={sharedStyles.layout}>
      <div className={contactStyles.avatar}>
        <img src="https://shengqiangme.oss-cn-shanghai.aliyuncs.com/imgs/BlogTwo.png" alt="avatar with LulyRose" />
      </div>

      <p className={contactStyles.avatarSome}>我从远处来，带心去远方</p>

      <div className={contactStyles.links}>
        {contacts.map(({ Comp, alt, link }) => {
          return (
            <ExtLink key={link} href={link}>
              {alt}
            </ExtLink>
          )
        })}
      </div>
    </div>
  </>
)
