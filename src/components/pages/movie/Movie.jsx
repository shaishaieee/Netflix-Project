import React from 'react'
import { baseImgUrl } from '../../helpers/functions-general'
import { Link } from 'react-router-dom'
import { FaCaretDown, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiBell, FiInfo, FiPlay, FiSearch } from 'react-icons/fi';
import SliderBasic from './SliderBasic';
import ModalMovieInfo from './ModalMovieInfo';
import { movies } from './data';
import SliderTopBasic from './SliderTopBasic';
import ModalSearch from './ModalSearch';


const Movie = () => {
    const [showMovieInfo, setMovieInfo] = React.useState(false)
    const [movieData, setMovieData] = React.useState([])
    const [search, setSearch] = React.useState(false)


    const handleShowSearh = () => setSearch(true)



  return (
    <>
    <div className='bg-[#141414] text-white'>
    <div className={`banner bg-[url('../../img/movie/banner-movie.jpg')] h-[90vh] bg-cover relative isolate`}>

        <div className="backdrop bg-black/50 absolute top-0 left-0 h-full w-full -z-10"></div>

        <div className="header py-4 px-2 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.2)]">
            <div className="flex justify-between items-center">
                <div className='flex items-center gap-10'>
                    <img src={`${baseImgUrl}/logo.png`} alt="" className="w-[148px] h-[40px] object-cover"/>
                   
                        <ul className='flex items-center gap-5 text-white'>
                            <li><Link to="#">Home</Link></li>
                            <li><Link to="#">TV Shows</Link></li>
                            <li><Link to="#">Movies</Link></li>
                            <li><Link to="#">New & Popular</Link></li>
                            <li><Link to="#">My List</Link></li>
                            <li><Link to="#">Browse by Language</Link></li>
                        </ul>

                </div>

                <div>
                    <ul className='flex items-center gap-5 text-white'>
                        <li><button onClick={handleShowSearh}><FiSearch  className='text-xl'/></button></li>
                        <li><button><FiBell className='text-xl' /></button></li>
                        <li className='flex items-center gap-3'><button><img src="https://via.placeholder.com/50x50" alt="" /></button>
                        <FaCaretDown />
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="absolute left-[10%] bottom-[30%] text-white">
            <h1 className='text-[70px] font-bold'>Attack on Titan</h1>
            <ul className='flex gap-5'>
                <li><button className='px-6 py-1.5 rounded-md bg-white text-stone-800 font-bold flex items-center gap-2'><FiPlay />Trailer</button></li>
                <li><button className='px-6 py-1.5 rounded-md bg-stone-600 text-white border-stone-600 flex items-center gap-2'> <FiInfo />More Info</button></li>
            </ul>
        </div>
    </div>

    <div className='slider-wrapper px-10 py-20 overflow-hidden'>
        <SliderBasic setMovieInfo={setMovieInfo} movies={movies} setMovieData={setMovieData} grouping="trending" sliderHeader="Trending Movies"/>
        <SliderBasic setMovieInfo={setMovieInfo} movies={movies} setMovieData={setMovieData} grouping="asian" sliderHeader="Asian Movies"/>
        <SliderTopBasic setMovieInfo={setMovieInfo} movies={movies} setMovieData={setMovieData}  grouping="top" sliderHeader="Top 10 TV Shows in the Phillipines Today" />

    </div>
    </div>

    {showMovieInfo && <ModalMovieInfo setMovieInfo={setMovieInfo} movieData={movieData}/>}
    {search && <ModalSearch setSearch={setSearch}/>}


    <footer className='bg-[#141414] grid grid-cols-4 items-center px-10 py-10'>
        <div>
        <ul className='flex items-center gap-5 text-xl text-white/50 mb-3'>
            <li><Link to="#"><FaFacebookF /></Link></li>
            <li><Link to="#"><FaInstagram /></Link></li>
            <li><Link to="#"><FaTwitter /></Link></li>
            <li><Link to="#"><FaYoutube /></Link></li>
        </ul>

        <ul className='space-y-4 text-white/50 text-xs'>
            <li><Link to="#">Audio Description</Link></li>
            <li><Link to="#">Investor Relations</Link></li>
            <li><Link to="#">Legal Notices</Link></li>
            <li><button className='border border-white/50 p-1.5'>Service Code</button></li>
            <li><p>&copy; 1997-2024 Netflix, Inc.</p></li>
        </ul>
        </div>

        <ul  className='space-y-4 text-white/50 text-xs'>
            <li><Link to="#">Help Center</Link></li>
            <li><Link to="#">Jobs</Link></li>
            <li><Link to="#">Cookie Preferemces</Link></li>
        </ul>

        <ul  className='space-y-4 text-white/50 text-xs'>
            <li><Link to="#">Gift Cards</Link></li>
            <li><Link to="#">Terms of Use</Link></li>
            <li><Link to="#">Corporate Information</Link></li>
        </ul>

        <ul  className='space-y-4 text-white/50 text-xs'>
            <li><Link to="#">Media Center</Link></li>
            <li><Link to="#">Privacy</Link></li>
            <li><Link to="#">Contact Us</Link></li>
        </ul>

    </footer>
    </>
  )
}

export default Movie
