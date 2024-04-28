import React from 'react'
import Slider from 'react-slick';
import { baseImgUrl } from '../../helpers/functions-general';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

const SliderTopBasic = ({setMovieInfo, setMovieData, movies, grouping, sliderHeader}) => {
    const handleShowMovieInfo = (movie) => {
        setMovieInfo(true);
        setMovieData(movie);
      }
    
      function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
            className={className}
            // style={{ ...style, display: "flex", background: "green"}}
            onClick={onClick}>
            <PiCaretRightBold />
        </div>
        );
      }
      
      function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                // style={{ ...style, display: "flex", background: "green"}}
                onClick={onClick}>
                <PiCaretLeftBold />
            </div>
        );
      }
    
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: true,
            arrows: true,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>,
          };

          const getGroupings = movies.filter((movie)=> movie.grouping === grouping)
    
      return (
        <>
        <div className='relative'>
        <h3 className='text-3xl mb-5 font-bold'>{sliderHeader}</h3>
        <Slider {...settings}>
    
          {getGroupings.map((movie, key) => (
             <div key={key}>
             <button className=' relative flex' onClick={() =>handleShowMovieInfo(movie)}>
                <img src={`${baseImgUrl}/movie/${movie.number}`} alt=""  className='w-[170px] h-[250px] bg-cover'/>
                <img src={`${baseImgUrl}/movie/${movie.image}`} alt="" className='w-[170px] h-[250px] bg-cover absolute top-0 left-[9rem]' />
             </button>
           </div>
    
          ))}
    
         
    
        </Slider>
        </div>
        </>
      );
}

export default SliderTopBasic
