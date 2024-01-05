import Link from 'next/link'
import Image from 'next/image'

export const NotionResumeLink = () => {
  return (
    <Link
      href="https://mikpetr.notion.site/Mikayel-Petrosyan-f61a2099e41a4ea4b69f6cf7b6d208f4"
      className="flex gap-x-1"
    >
      <Image
        src="/notion.svg"
        alt="Notion"
        width="18"
        height="18"
        priority />
      <span>My Resume</span>
    </Link>
  )
}