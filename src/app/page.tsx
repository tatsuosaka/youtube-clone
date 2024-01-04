import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch, IoMdMic, IoMdHome  } from "react-icons/io";
import { PiDotsThreeVertical } from "react-icons/pi";
import { FaRegUserCircle, FaPhotoVideo  } from "react-icons/fa";
import { MdOutlinePermMedia } from "react-icons/md";
import Video from "@/components/video";
import Short from "@/components/short";

export default function youtube(){
  return(
    <div className="flex">
        <header className="flex fixed top-0 z-10 w-full bg-zinc-900 p-4 justify-between h-16">
          <div className="flex gap-4 items-center">
            <button className="hover:bg-zinc-700 rounded-full p-2 transition-colors"><RxHamburgerMenu size="25" color="#fff"/></button>
            <Image src={"/images/youtube-logo.png"} width={100} height={25} alt="Youtube Logo"/>
          </div>
          <div className="flex items-center text-white gap-4">
            <div className="flex items-center ">
              <input type="text" className="p-2 w-80 rounded-bl-full rounded-tl-full focus:outline-blue-500 focus:bg-[url('/images/search-icon.svg')] bg-no-repeat bg-[0.6rem] focus:pl-8 pl-6 border bg-zinc-900 border-zinc-700" placeholder="Pesquisar"/>
              <button className="bg-zinc-900 border-zinc-700 p-2 px-4 rounded-br-full rounded-tr-full border ">
                <IoIosSearch size={24}/>
              </button>
            </div>
            <button className="bg-zinc-700 rounded-full p-2 hover:bg-zinc-600 transition-colors">
              <IoMdMic size={24} />
            </button>
          </div>
          <div className="flex gap-4 items-center">
            <button >
              <PiDotsThreeVertical size={24} color="#fff"/>
            </button>
            <button className="text-blue-500 flex gap-2 p-2 border border-zinc-700 items-center rounded-full hover:bg-blue-950">
              <FaRegUserCircle size={18} />
              <p>Fazer Login</p>
            </button>
          </div>
        </header>
          <nav className=" z-10 w-64 h-[calc(100svh-4rem)] fixed left-0 top-16 bg-zinc-900 overflow-scroll flex flex-col text-white items-center gap-3 overflow-x-hidden">
            <div className="flex flex-col w-56 items-center text-sm">
              <button className="p-2 pl-4  flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                <IoMdHome size={25}/>
                <p>Início</p>
              </button>
              <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                <FaPhotoVideo size={25} />
                <p>Shorts</p>
              </button>
              <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                <MdOutlinePermMedia size={25}/>
                <p>Inscrições</p>
              </button>
            </div>
            <hr className="w-full border-zinc-700" />
            <div className="flex flex-col w-56 items-center text-sm">
              <button className="p-2 pl-4  flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                <IoMdHome size={25}/>
                <p>Início</p>
              </button>
              <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                <FaPhotoVideo size={25} />
                <p>Shorts</p>
              </button>
            </div>
            <hr className="w-full border-zinc-700"  />
            <div className="flex flex-col py-4 px-6 items-start text-sm gap-4">
              <p>Faça login para curtir vídeos, comentar e se inscrever.</p>
              <button className="text-blue-500 flex gap-2 p-2 border border-zinc-700 items-center rounded-full hover:bg-blue-950">
                <FaRegUserCircle size={18} />
                <p>Fazer Login</p>
              </button>
            </div>
            <hr className="w-full border-zinc-700"  />
            <div className="flex flex-col w-56 items-center text-sm">
              <h3 className="text-left w-full text-lg p-4">Explorar</h3>
              <button className="p-2 pl-4  flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                <IoMdHome size={25}/>
                <p>Início</p>
              </button>
              <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                <FaPhotoVideo size={25} />
                <p>Shorts</p>
              </button>
              <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                <MdOutlinePermMedia size={25}/>
                <p>Inscrições</p>
              </button>
              <button className="p-2 pl-4  flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                <IoMdHome size={25}/>
                <p>Início</p>
              </button>
              <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                <FaPhotoVideo size={25} />
                <p>Shorts</p>
              </button>
              <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                <MdOutlinePermMedia size={25}/>
                <p>Inscrições</p>
              </button>
              <button className="p-2 pl-4  flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                <IoMdHome size={25}/>
                <p>Início</p>
              </button>
              <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                <FaPhotoVideo size={25} />
                <p>Shorts</p>
              </button>
              <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                <MdOutlinePermMedia size={25}/>
                <p>Inscrições</p>
              </button>
            </div>
            <hr className="w-full border-zinc-700"  />
            <div className="flex flex-col w-56 items-center text-sm">
              <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                <MdOutlinePermMedia size={25}/>
                <p>Inscrições</p>
              </button>
            </div>
            <hr className="w-full border-zinc-700"  />
            <div className="flex flex-col w-56 items-center text-sm">
              <h3 className="text-left w-full text-lg p-4">Mais do YouTube</h3>
              <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                <MdOutlinePermMedia size={25}/>
                <p>Inscrições</p>
              </button>
              <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                <MdOutlinePermMedia size={25}/>
                <p>Inscrições</p>
              </button>
              <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                <MdOutlinePermMedia size={25}/>
                <p>Inscrições</p>
              </button>
            </div>
            <hr className="w-full border-zinc-700"  />
            <div className="flex flex-col w-56 items-center text-sm">
              <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                <MdOutlinePermMedia size={25}/>
                <p>Inscrições</p>
              </button>
              <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                <MdOutlinePermMedia size={25}/>
                <p>Inscrições</p>
              </button>
              <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                <MdOutlinePermMedia size={25}/>
                <p>Inscrições</p>
              </button>
              <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                <MdOutlinePermMedia size={25}/>
                <p>Inscrições</p>
              </button>
            </div>
            <hr className="w-full border-zinc-700"  />
            <div className="flex flex-col w-56 items-start gap-6 px-4 py-2 text-xs text-zinc-400">
              <div  className="flex flex-col gap-2 ">
                <a href="" className="hover:text-white">Sobre</a>
                <a href="" className="hover:text-white">Imprensa</a>
                <a href="" className="hover:text-white">Direitos autorais</a>
                <a href="" className="hover:text-white">Entre em contato</a>
                <a href="" className="hover:text-white">Criadores de conteúdo</a>
                <a href="" className="hover:text-white">Publicidade</a>
                <a href="" className="hover:text-white">Desenvolvedores</a>
              </div>
              <div  className="flex flex-col gap-2 ">
                <a href="" className="hover:text-white">Termos Privacidade</a>
                <a href="" className="hover:text-white">Política e segurança</a>
                <a href="" className="hover:text-white">Como funciona o YouTube</a>
                <a href="" className="hover:text-white">Testar os novos recursos</a>
              </div>
              <p>© 2024</p>
            </div>
          </nav>
          <main className="w-[calc(100%-16rem)] top-16 left-64 absolute bg-zinc-900">
            <div className="p-4 grid grid-cols-4 gap-3">
              <Video />
              <Video />
              <Video />
              <Video />
              <Video />
              <Video />
              <Video />
              <Video />
            </div>
            <div className="p-4 grid grid-cols-7 gap-3">
              <Short />
            </div>
          </main>
    </div>
  )
}