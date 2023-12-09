import Image from 'next/image'
import { Container, Logo, NavItem, WavingHand } from '@/components'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="h-screen relative">
      <Container className="flex justify-between pt-7">
        <Logo />
        <ul className="flex gap-x-7">
          <NavItem active>Home</NavItem>
          <NavItem>What I do</NavItem>
          <NavItem>Resume</NavItem>
          <NavItem>Contacts</NavItem>
        </ul>
      </Container>

      <div className="absolute w-full top-[calc(50%-107px)]">
        <Container className="flex justify-center gap-x-16 stretch">
          <Image
            src="/profile-photo.jpg"
            alt="Profile photo"
            className="rounded-full"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAACAAIDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAaEAADAQADAAAAAAAAAAAAAAAAAQIEAxEh/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AK2seaqdVn4m2+23C9AAYn//2Q=="
            width={214}
            height={214}
            priority />
          <div className="w-[1px] bg-gray-300"></div>
          <div className="flex column items-center">
            <div className="text-2xl space-y-1">
              <div className="flex items-center gap-x-3">
                <WavingHand className="text-primary-600" />
                <span>Hello!</span>
              </div>
              <div>
              My name is <span className="font-semibold text-primary-600">Mikayel</span>.
              </div>
              <div>
              I am doing a <span className="font-semibold">front end</span>!
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Image
        className="absolute bottom-7 left-[calc(50%-48px)] cursor-pointer"
        src="/chevron-down.svg"
        alt=":wave"
        width={96}
        height={96} />
      
    </main>
  )
}
