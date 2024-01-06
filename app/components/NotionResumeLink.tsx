import Link from 'next/link'
import Image from 'next/image'

export const NotionResumeLink = () => {
  return (
    <Link
      href="https://mikpetr.notion.site/Mikayel-Petrosyan-f61a2099e41a4ea4b69f6cf7b6d208f4"
      target="_blank"
      className="flex gap-x-1 text-xl"
    >
      <Image
        src="/notion.svg"
        alt="Notion"
        width="22"
        height="22"
        priority />
      <span>My Resume</span>
    </Link>
  )
}