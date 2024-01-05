"use client"

import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import {
    IoIosSearch,
    IoMdMic,
    IoMdHome,
    IoIosMusicalNote,
} from "react-icons/io";
import { PiDotsThreeVertical } from "react-icons/pi";
import {
    FaRegUserCircle,
    FaYoutube,
    FaPlusCircle,
    FaRegLightbulb,
    FaRegFlag,
    FaPhotoVideo,
    FaPodcast,
    FaFire,
    FaShoppingBag,
    FaNewspaper,
    FaRegQuestionCircle,
    FaExclamationCircle,
} from "react-icons/fa";
import {
    MdOutlinePermMedia,
    MdMovie,
    MdLiveTv,
    MdGames,
    MdOutlineSportsFootball,
} from "react-icons/md";
import Video from "@/components/video";
import Short from "@/components/short";
import { useState } from "react";

function randomImage() {
    const randomNumber: number = Math.floor(Math.random() * 300);
    const imageLink = `https://picsum.photos/id/${randomNumber}/300.webp`;
    return imageLink;
}

export default function Youtube() {
    const [menu, setMenu] = useState(false);
  
    return (
        <div className="flex">
            <header className="flex fixed top-0 z-10 w-full bg-zinc-950 p-4 justify-between h-16">
                <div className="flex gap-4 items-center">
                    <button onClick={ () => setMenu(!menu)} className="hover:bg-zinc-700 sm:hidden rounded-full p-2 transition-colors">
                        <RxHamburgerMenu size="25" color="#fff" />
                    </button>
                    <Image
                        src={"/images/youtube-logo.png"}
                        width={100}
                        height={25}
                        alt="Youtube Logo"
                        className="sm:ml-3"
                    />
                </div>
                <div className="flex items-center text-white sm:gap-4 flex-1 flex-row-reverse sm:flex-[0] sm:flex-row">
                    <div className="flex items-center ">
                        <input
                            type="text"
                            className="p-2 lg:w-[30rem] sm:block hidden w-36 rounded-bl-full rounded-tl-full focus:outline-blue-500 focus:bg-[url('/images/search-icon.svg')] bg-no-repeat bg-[0.6rem] focus:pl-8 pl-6 border bg-zinc-900 border-zinc-700"
                            placeholder="Pesquisar"
                        />
                        <button className="sm:bg-zinc-900 sm:border-zinc-700 p-2 px-4 sm:rounded-bl-none sm:rounded-tl-none rounded-full rounded-br-full rounded-tr-full sm:border ">
                            <IoIosSearch size={24} />
                        </button>
                    </div>
                    <button className="sm:bg-zinc-700 rounded-full p-2 hover:bg-zinc-600 transition-colors sm:block hidden">
                        <IoMdMic size={24} />
                    </button>
                </div>
                <div className="flex gap-4 items-center ">
                    <button className="sm:block hidden">
                        <PiDotsThreeVertical size={24} color="#fff" />
                    </button>
                    <button className="text-blue-500 flex gap-2 p-2 border border-zinc-700 items-center rounded-full hover:bg-blue-950">
                        <FaRegUserCircle size={18} />
                        <p className="sm:block hidden">Fazer Login</p>
                    </button>
                </div>
            </header>
            <nav className={`${menu ? "sm:!left-0 !-left-64":"sm:!left-0 !left-0"} z-10 w-64 h-[calc(100svh-4rem)] fixed sm:left-0 -left-64 top-16 bg-zinc-950 transition-all overflow-scroll flex flex-col text-white items-center gap-3 overflow-x-hidden`}>
                <div className="flex flex-col w-56 items-center text-sm">
                    <button className="p-2 pl-4  flex  items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                        <IoMdHome size={25} />
                        <p>Início</p>
                    </button>
                    <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                        <FaPhotoVideo size={25} />
                        <p>Shorts</p>
                    </button>
                    <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                        <MdOutlinePermMedia size={25} />
                        <p>Inscrições</p>
                    </button>
                </div>
                <hr className="w-full border-zinc-700" />
                <div className="flex flex-col w-56 items-center text-sm">
                    <button className="p-2 pl-4  flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                        <IoMdHome size={25} />
                        <p>Início</p>
                    </button>
                    <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                        <FaPhotoVideo size={25} />
                        <p>Shorts</p>
                    </button>
                </div>
                <hr className="w-full border-zinc-700" />
                <div className="flex flex-col py-4 px-6 items-start text-sm gap-4">
                    <p>
                        Faça login para curtir vídeos, comentar e se inscrever.
                    </p>
                    <button className="text-blue-500 flex gap-2 p-2 border border-zinc-700 items-center rounded-full hover:bg-blue-950">
                        <FaRegUserCircle size={18} />
                        <p>Fazer Login</p>
                    </button>
                </div>
                <hr className="w-full border-zinc-700" />
                <div className="flex flex-col w-56 items-center text-sm">
                    <h3 className="text-left w-full text-lg p-4">Explorar</h3>
                    <button className="p-2 pl-4  flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                        <FaFire size={25} />
                        <p>Em alta</p>
                    </button>
                    <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                        <FaShoppingBag size={25} />
                        <p>Shopping</p>
                    </button>
                    <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                        <IoIosMusicalNote size={25} />
                        <p>Música</p>
                    </button>
                    <button className="p-2 pl-4  flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                        <MdMovie size={25} />
                        <p>Filmes</p>
                    </button>
                    <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                        <MdLiveTv size={25} />
                        <p>Ao vivo</p>
                    </button>
                    <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                        <MdGames size={25} />
                        <p>Jogos</p>
                    </button>
                    <button className="p-2 pl-4  flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                        <FaNewspaper size={25} />
                        <p>Notícias</p>
                    </button>
                    <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                        <MdOutlineSportsFootball size={25} />
                        <p>Esportes</p>
                    </button>
                    <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                        <FaRegLightbulb size={25} />
                        <p>Aprender</p>
                    </button>
                    <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                        <FaPodcast size={25} />
                        <p>Podcasts</p>
                    </button>
                </div>
                <hr className="w-full border-zinc-700" />
                <div className="flex flex-col w-56 items-center text-sm">
                    <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                        <FaPlusCircle size={25} />
                        <p>Procurar Canais</p>
                    </button>
                </div>
                <hr className="w-full border-zinc-700" />
                <div className="flex flex-col w-56 items-center text-sm">
                    <h3 className="text-left w-full text-lg p-4">
                        Mais do YouTube
                    </h3>
                    <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                        <FaYoutube color="red" size={25} />
                        <p>YouTube Studio</p>
                    </button>
                    <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                        <FaYoutube color="red" size={25} />
                        <p>YouTube Music</p>
                    </button>
                    <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                        <FaYoutube color="red" size={25} />
                        <p>YouTube Kids</p>
                    </button>
                </div>
                <hr className="w-full border-zinc-700" />
                <div className="flex flex-col w-56 items-center text-sm">
                    <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                        <MdOutlinePermMedia size={25} />
                        <p>Configurações</p>
                    </button>
                    <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                        <FaRegFlag size={25} />
                        <p>Histórico de denúncia</p>
                    </button>
                    <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                        <FaRegQuestionCircle size={25} />
                        <p>Ajuda</p>
                    </button>
                    <button className="p-2 pl-4 flex items-center gap-6 focus:bg-zinc-700 rounded-lg w-full text-left">
                        <FaExclamationCircle size={25} />
                        <p>Enviar feedback</p>
                    </button>
                </div>
                <hr className="w-full border-zinc-700" />
                <div className="flex flex-col w-56 items-start gap-6 px-4 py-2 text-xs text-zinc-400">
                    <div className="flex flex-col gap-2 ">
                        <a href="" className="hover:text-white">
                            Sobre
                        </a>
                        <a href="" className="hover:text-white">
                            Imprensa
                        </a>
                        <a href="" className="hover:text-white">
                            Direitos autorais
                        </a>
                        <a href="" className="hover:text-white">
                            Entre em contato
                        </a>
                        <a href="" className="hover:text-white">
                            Criadores de conteúdo
                        </a>
                        <a href="" className="hover:text-white">
                            Publicidade
                        </a>
                        <a href="" className="hover:text-white">
                            Desenvolvedores
                        </a>
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <a href="" className="hover:text-white">
                            Termos Privacidade
                        </a>
                        <a href="" className="hover:text-white">
                            Política e segurança
                        </a>
                        <a href="" className="hover:text-white">
                            Como funciona o YouTube
                        </a>
                        <a href="" className="hover:text-white">
                            Testar os novos recursos
                        </a>
                    </div>
                    <p>© 2024</p>
                </div>
            </nav>
            <main className={`${menu ? "sm:brightness-100 brightness-100":"sm:brightness-100 brightness-50"} sm:w-[calc(100%-16rem)] transition-all w-full top-16 sm:left-64 absolute bg-zinc-950`}>
                <div className="p-4 grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-3">
                    <Video thumbnail={randomImage()} profile={randomImage()} />
                    <Video thumbnail={randomImage()} profile={randomImage()} />
                    <Video thumbnail={randomImage()} profile={randomImage()} />
                    <Video thumbnail={randomImage()} profile={randomImage()} />
                    <Video thumbnail={randomImage()} profile={randomImage()} />
                    <Video thumbnail={randomImage()} profile={randomImage()} />
                    <Video thumbnail={randomImage()} profile={randomImage()} />
                    <Video thumbnail={randomImage()} profile={randomImage()} />
                </div>
                <div className="p-4 text-white flex flex-col gap-4">
                    <div className="flex gap-4">
                        <FaPhotoVideo color="red" size={25} />

                        <h4>Shorts</h4>
                    </div>
                    <div className=" grid xl:grid-cols-8 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3">
                        <Short image={randomImage()} />
                        <Short image={randomImage()} />
                        <Short image={randomImage()} />
                        <Short image={randomImage()} />
                        <Short image={randomImage()} />
                        <Short image={randomImage()} />
                        <Short image={randomImage()} />
                        <Short image={randomImage()} />
                    </div>
                </div>
                <div className="p-4 grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-3">
                    <Video thumbnail={randomImage()} profile={randomImage()} />
                    <Video thumbnail={randomImage()} profile={randomImage()} />
                    <Video thumbnail={randomImage()} profile={randomImage()} />
                    <Video thumbnail={randomImage()} profile={randomImage()} />
                    <Video thumbnail={randomImage()} profile={randomImage()} />
                    <Video thumbnail={randomImage()} profile={randomImage()} />
                    <Video thumbnail={randomImage()} profile={randomImage()} />
                    <Video thumbnail={randomImage()} profile={randomImage()} />
                </div>
                <div className="p-4 grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-3">
                    <Video thumbnail={randomImage()} profile={randomImage()} />
                    <Video thumbnail={randomImage()} profile={randomImage()} />
                    <Video thumbnail={randomImage()} profile={randomImage()} />
                    <Video thumbnail={randomImage()} profile={randomImage()} />
                    <Video thumbnail={randomImage()} profile={randomImage()} />
                    <Video thumbnail={randomImage()} profile={randomImage()} />
                    <Video thumbnail={randomImage()} profile={randomImage()} />
                    <Video thumbnail={randomImage()} profile={randomImage()} />
                </div>
            </main>
        </div>
    );
}
