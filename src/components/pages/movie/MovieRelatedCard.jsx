import React from 'react'
import { FaPlay, FaPlusCircle } from 'react-icons/fa'
import { baseImgUrl } from '../../helpers/functions-general'

const MovieRelatedCard = ({movie}) => {
  return (
    <>
        <div className='card group'>
            <div className='relative'>
                <span className='absolute top-2 right-2 text-xs'>{movie.duration}</span>
                <button className=' group-hover:opacity-100 transition-opacity-all opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer'><FaPlay className='text-3xl'/></button>
            <img src={`${baseImgUrl}/movie/${movie.image}`} alt="" className='w-full h-[150px] object-cover opacity-80'/>
            </div>

            <div className='car__info'>
                <div className='flex justify-between items-center mb-5'>
                <ul className='flex items-center gap-2'>
                    <li><span className='p-0.5 border border-white text-sm'>{movie.rating}</span></li>
                    <li><span className='p-0.5 border border-white text-[10px]'>HD</span></li>
                    <li className='text-xs'>{movie.year}</li>
                </ul>

                <button><FaPlusCircle/></button>
            </div>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius illum exercitationem vitae! Ut expedita iusto ipsum maiores earum amet sint facilis laboriosam.</p>
            </div>
        </div>
    </>
  )
}

export default MovieRelatedCard
