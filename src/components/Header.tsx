import Image from 'next/image';
import { HeaderSocialLinks } from '@/types/types';
import { links } from '@/data/header.data';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="mx-auto w-full space-y-5 overflow-hidden rounded-xl bg-white shadow print:rounded-none print:border-b-2 print:shadow-none lg:max-w-5xl">
      <div className="relative h-16 overflow-visible bg-fixed print:bg-local md:h-20">
        <div className="translate-1/2 print:space-between absolute -bottom-10 z-10 flex w-full items-end px-8 print:justify-between">
          <Image
            src="/images/profile-photo.png"
            alt="Vaibhav Matere"
            className="cursor-pointer rounded-full bg-pink-200 shadow-md"
            width={80}
            height={80}
          />
        </div>
      </div>
      <div className="flex flex-col p-6 pt-8 print:p-8 print:pb-4">
        <div className="flex flex-col items-start justify-between md:mb-4 xl:flex-row xl:items-center">
          <div className="whitespace-nowrap1">
            <h1 className="text-2xl font-bold print:text-lg">Vaibhav Matere</h1>
            <div className="text-md mb-3 text-gray-950 print:mb-3 print:text-sm xl:mb-0">
              FullStack Web Developer | MERN
            </div>
          </div>
          <div className="flex flex-col items-end justify-between">
            <nav className="flex flex-col flex-wrap print:flex-row md:flex-row">
              {links.map((link) => {
                return (
                  <LinkTag
                    link={link}
                    key={link.href}
                  />
                );
              })}
            </nav>
          </div>
        </div>

        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <a
            className="group flex max-w-xs rounded-lg bg-violet-500 font-semibold text-white transition-transform hover:scale-x-105 print:hidden"
            href="/#!"
            download
          >
            <button className="w-full rounded-l-lg px-4 py-2">
              Download Resume
            </button>
            <button className="rounded-r-lg bg-violet-600 px-4 py-2">
              <ArrowDownTrayIcon className="w-5" />
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}

const LinkTag = ({ link }: { link: HeaderSocialLinks }) => {
  return (
    <a
      className={`mb-1 flex cursor-pointer items-center text-sm text-gray-500 print:mb-1 print:mr-4 print:text-xs md:mr-4 xl:ml-4 xl:mr-0 ${
        !link.display ? 'hidden' : 'flex'
      } ${!link.print ? 'print:hidden' : 'print:flex'}`}
      title={link.tooltip}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="mr-2 text-gray-600 print:mr-1">{link.icon}</span>
      <span className="text-gray-600 print:hidden">{link.displayText}</span>
      <span className="hidden text-gray-600 print:inline">
        {link.printText}
      </span>
    </a>
  );
};
