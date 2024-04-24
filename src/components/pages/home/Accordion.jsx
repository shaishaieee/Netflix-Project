import React from 'react'
import { GoPlus } from 'react-icons/go'

const Accordion = ({item}) => {

    const body = item.answer;

    const [active, setActive] = React.useState(false)

    const handleActive = () => setActive(!active)

  return (
    <div className="accordion bg-stone-800 hover:bg-stone-700 mb-2">

                    <div className='flex justify-between item-center pt-3 px-7  cursor-pointer border-b border-black' onClick={handleActive}>
                        <h4 className='text-xl font-regular question'>{item.question}</h4>
                        <GoPlus className={`text-5xl transition-all ${active ? "rotate-45" : "rotate-0"}`}/>
                    </div>

                    <div className={`${active ? "max-h-[500px]" :"max-h-[0]"} overflow-hidden transition-all h-full px-5 answer`}>
                        <div className='mt-5' dangerouslySetInnerHTML={{__html: body}}>
                        </div>
                    </div>
                </div>
  )
}

export default Accordion
