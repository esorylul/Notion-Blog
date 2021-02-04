import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <div className={sharedStyles.homepage}>
        <img src="https://shengqiangme.oss-cn-shanghai.aliyuncs.com/imgs/BlogOne.png" alt="avatar with LulyRose" height={10} />
        <p>
          许久前，不过一介草民，今得再造，依旧是咸鱼难翻身，青菜不上席，夜来星月相伴，晨起花香鸟鸣，午间灼日当空，日落薄霞披身。如何博得卿芳心，悲哉乎！
        </p>
      </div>
    </div>
  </>
)
