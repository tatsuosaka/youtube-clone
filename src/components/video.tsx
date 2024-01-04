export default function Video(){
    return(
        <div className="text-white">
            <img className="bg-zinc-600 hover:rounded-none transition-all rounded-xl w-full aspect-video object-cover cursor-pointer" src="https://upload.wikimedia.org/wikipedia/pt/8/8d/Jailson_Mendes.jpg" alt="" />
            <div className="flex gap-2 align-top mt-2">
                <img src="https://pm1.aminoapps.com/6696/1d698f258919a1c4ab583b9cdff232ab8bcbee09_00.jpg" className=" mt-1 rounded-full object-cover transition-all bg-zinc-600 w-6 h-6" alt="" />
                <div>
                    <h4>Lorem ipsum dolor sit.</h4>
                    <h5 className="text-zinc-500 text-sm">Lorem.</h5>
                    <h5 className="text-zinc-500 text-sm">50 mil visualizações</h5>
                </div>
            
            </div>
        </div>
    )
}