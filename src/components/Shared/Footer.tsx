import { FC } from 'react'
import { APP_NAME } from 'src/constants'
import { useAppPersistStore } from 'src/store/app'

const Footer: FC = () => {
  const { staffMode } = useAppPersistStore()

  return (
    <footer
      className={`mt-4 leading-7 text-sm sticky flex flex-wrap px-3 lg:px-0 gap-x-[12px] ${
        staffMode ? 'top-28' : 'top-20'
      }`}
      data-test="footer"
    >
      <span className="font-bold text-gray-500 dark:text-gray-300">
        © {APP_NAME}
      </span>
      {/* <Link href="/about">
        <a href="/about">About</a>
      </Link>
      <Link href="/privacy">
        <a href="/privacy">Privacy</a>
      </Link> */}
      <a
        href="https://discord.gg/tpNgsamF"
        target="_blank"
        rel="noreferrer noopener"
      >
        Discord
      </a>
      {/* <a
        href="https://lenster.xyz/donate"
        target="_blank"
        rel="noreferrer noopener"
      >
        Donate
      </a>
      <a
        href="https://status.lenster.xyz"
        target="_blank"
        rel="noreferrer noopener"
      >
        Status
      </a> */}
      {/* <a
        href="https://vote.lenster.xyz"
        target="_blank"
        rel="noreferrer noopener"
      >
        Vote
      </a>
      <Link href="/thanks">
        <a href="/thanks">Thanks</a>
      </Link> */}
      {/* <a
        href="https://gitlab.com/lenster/lenster"
        target="_blank"
        rel="noreferrer noopener"
      >
        GitLab
      </a> */}
      <a
        className="pr-3 hover:font-bold"
        href={'https://www.lens.com/'}
        target="_blank"
        rel="noreferrer noopener"
      >
        🔯 Powered by Lens protocol.
      </a>
    </footer>
  )
}

export default Footer
