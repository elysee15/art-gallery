import Image from "next/image";
import Link from "next/link";
import women from "../public/women.jpg";
import artist from "../public/artist.jpg";
import titan from "../public/titan.jpg";

const NAV_ITEMS = [
  {
    label: "The feminine ernergy",
    href: "/the-feminine-ernergy",
    imgUrl: women,
    description: "MDCXLII",
  },
  {
    label: "The artiste in studio",
    href: "/the-artist-in-studio",
    imgUrl: artist,
    description: "MDCXLXVI",
  },
  {
    label: "Titan as warrior monk",
    href: "/titan-as-warrior-monk",
    imgUrl: titan,
    description: "MCXVLL",
  },
  {
    label: "Coming to a new life",
    href: "/coming-to-a-new-life",
    imgUrl: women,
    description: "MDCLX",
  },
];

export default function Home() {
  return (
    <div className="font-sans">
      <header className="flex items-center z-1 justify-between font-medium text-sm fixed top-4 px-4 left-0 right-0 gap-8 mix-blend-difference text-white">
        <h1>LOGO</h1>
        <div className="mix-blend-exclusion">ART GALLERY</div>
        <div>MENU</div>
      </header>
      <main className="w-full">
        <nav className="h-full min-w-screen flex flex-col min-h-screen">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-x-[0.5px] divide-black/25 h-full grow">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.href} className="h-full bg-red-600/10 flex">
                <Link
                  href={item.href}
                  className="uppercase flex flex-col gap-[20vh] relative group overflow-hidden"
                >
                  <Image
                    src={item.imgUrl}
                    alt={item.label}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-full object-cover scale-125 group-hover:scale-100 transition-transform duration-500"
                  />
                  <span className="absolute bg-black/25 inset-0"></span>
                  <span className="absolute inset-0 bg-[#dfdbd5] transition-transform duration-400 ease-[cubic-bezier(.075,0.82,0.165,1)] group-hover:-translate-y-full"></span>
                  <div className="z-2 h-[50vh]  flex flex-col justify-between my-auto">
                    <div className="px-6 group-hover:text-white transition-colors duration-300">
                      <span className="text-[2.4vw] font-mitera text-balance leading-normal">
                        {item.label}
                      </span>
                      <p className="uppercase font-neue-montreal">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-[4vw] text-destructive font-mitera z-1 px-6">
                      {index + 1}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </div>
  );
}
