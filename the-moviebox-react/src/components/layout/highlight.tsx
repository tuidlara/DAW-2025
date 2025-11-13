import React from 'react';

export const Highlight: React.FC = () => {
    const highlightBgUrl = "url('/img/etT14XfDEqhQZdD47ywpyihXPyW.jpg')";
    const overlayGradient = `linear-gradient(to right, rgba(17, 17, 17, 1) calc((50vw - 70px) - 340px), 
        rgba(17, 17, 17, 0.7) 50%, rgba(17, 17, 17, 0.7) 100%)`;
    return (<section className="flex relative w-full text-white min-h-[380px]"
            style={{ 
                backgroundImage: highlightBgUrl,
                backgroundPosition: 'left calc((50vw - 170px) - 340px) top',
                backgroundSize: 'cover',
            }}>
            <div className="absolute inset-0 z-10" 
                style={{ backgroundImage: overlayGradient }}
            ></div>
            <div className="max-w-7xl mx-auto flex gap-8 p-8 z-20 w-full items-start pt-24 pb-8"> 
                <img className="rounded-lg shadow-2xl shrink-0 hidden md:block" 
                    src="/img/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg" 
                    alt="Capa filme"
                    style={{ width: '340px', height: 'auto' }} 
                />

                <div className="flex flex-col grow">
                    <h2 className="text-4xl font-normal mb-4"> Como Treinar seu Dragão </h2>
                    <div className="text-xs flex flex-wrap items-center gap-2 mb-6">
                        <span className="bg-white/20 bg-opacity-20 px-3 py-1 rounded-full whitespace-nowrap">
                            Fantasia</span>
                        <span className="bg-white/20 bg-opacity-20 px-3 py-1 rounded-full whitespace-nowrap">
                            Família</span>
                        <span className="bg-white/20 bg-opacity-20 px-3 py-1 rounded-full whitespace-nowrap">
                            Ação & Aventura</span>
                        <span className="ml-2 text-gray-400">2h 5m</span>  
                    </div>
                    <div className="flex flex-col gap-2"> 
                        <h4 className="text-2xl font-normal pb-2">Sinopse</h4>
                        <p className="text-sm text-gray-400 max-w-2xl">
                            Em um mundo onde dragões e humanos coexistem, um jovem viking chamado Soluço se 
                            torna amigo de um dragão ferido chamado Banguela. Juntos, eles desafiam as 
                            tradições de suas tribos e descobrem que dragões não são os monstros que todos 
                            acreditavam ser.
                        </p>
                    </div>
                    <div className="flex gap-4 mt-8">                        
                        <button className="bg-[#e50914] text-white border-none px-6 py-3 rounded font-bold 
                            transition duration-300 cursor-pointer hover:bg-[#b8070f] text-sm md:text-base">
                            Assistir
                        </button>
                        
                        <button className="bg-white/20 bg-opacity-20 text-white border border-white/20 
                            border-opacity-30 px-6 py-3 rounded transition duration-300 cursor-pointer 
                            hover:bg-opacity-30 text-sm md:text-base">
                            Detalhes
                        </button>
                        
                        <button className="bg-white/20 bg-opacity-20 text-white border border-white/20 
                            border-opacity-30 px-6 py-3 rounded transition duration-300 cursor-pointer 
                            hover:bg-opacity-30 text-sm md:text-base">
                            + Adicionar à Lista
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Highlight;