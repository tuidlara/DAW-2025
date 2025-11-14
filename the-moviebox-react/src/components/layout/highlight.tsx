import React, { useEffect, useState } from 'react';
import { useMovies } from '../../cases/movies/hooks/use-hook';
import { MovieGenres } from '../movie-genres';

export const Highlight: React.FC = () => {

    const { selectedMovie } =  useMovies();
    const [isloading, setIsloading] = useState<boolean>(true);
    useEffect(() => {
        setIsloading(!selectedMovie);
    }, [selectedMovie]);

    const overlayGradient = `linear-gradient(to right, rgba(17, 17, 17, 1) calc((50vw - 70px) - 340px), 
        rgba(17, 17, 17, 0.7) 50%, rgba(17, 17, 17, 0.7) 100%)`;
    return (
        isloading ? (
            <div className="flex justify-center items-center">
                <p className='text-2xl text-center text-white'>Carregando</p>
            </div>
        ) : (
        <section className="flex relative w-full text-white min-h-[380px]"
            style={{ 
                backgroundImage: `url(${selectedMovie.highlight})`,
                backgroundPosition: 'left calc((50vw - 170px) - 340px) top',
                backgroundSize: 'cover',
            }}>
            <div className="absolute inset-0 z-10" 
                style={{ backgroundImage: overlayGradient }}
            ></div>
            <div className="max-w-screen-xl mx-auto flex gap-8 p-8 z-20 w-full items-start pt-24 pb-8"> 
                <img className="rounded-lg shadow-2xl flex-shrink-0 hidden md:block" 
                    src={selectedMovie.image}
                    alt="Capa filme"
                    style={{ width: '340px', height: 'auto' }} 
                />

                <div className="flex flex-col flex-grow">
                    <h2 className="text-4xl font-normal mb-4"> {selectedMovie.title} 

                    </h2>
                    <MovieGenres movie={selectedMovie} >
                       <span className='pl-4 text-gray-300'
                        >{selectedMovie.duration.replace(':', 'h ')+' m'}</span> 
                       
                    </MovieGenres>
                    <div className="flex flex-col gap-2"> 
                        <h4 className="text-2xl font-normal pb-2">Sinopse</h4>
                        <p className="text-sm text-gray-400 max-w-2xl">
                            {selectedMovie.sinopse}
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
        )
    );
};

export default Highlight;