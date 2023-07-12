import React, {useEffect} from 'react'
import './main.css'
import './main.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiClipboardCheck } from 'react-icons/hi'
import img1 from '../../Assets/images/img1.jpg'
import img2 from '../../Assets/images/img2.jpg'
import img3 from '../../Assets/images/img3.jpg'
import img4 from '../../Assets/images/img4.jpg'
import img5 from '../../Assets/images/img5.jpg'
import img6 from '../../Assets/images/img6.jpg'
import img7 from '../../Assets/images/img7.jpg'
import img8 from '../../Assets/images/img8.jpg'
import img9 from '../../Assets/images/img9.jpg'


const Data = [
  {
    id: 1,
    imgSrc: img1,
    desTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fess: '§700',
    description: 'The epitome of romance, Bora Bora is one of the best travell estinations in the world. This place is known for its luxurious stas and adventurous activities.'

  },

  {
    id:2,
    imgSrc: img2,
    desTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fess: '§600',
    description: 'Huyana Picchu is a montain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from Sun Gate is simply spectacular.'

  },

  {
    id:3,
    imgSrc: img3,
    desTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fess: '§700',
    description: 'One of the most remarkable Australian natural gifts is h Grea Barrier Reef. The hallmark of this place is .Always interesting o be in this place'

  },

  {
    id:4,
    imgSrc: img4,
    desTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fess: '§800',
    description: 'According to the World Tourism Ranking, 45Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activiies '

  },

  {
    id:5,
    imgSrc: img5,
    desTitle: 'Guanajuato',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fess: '§1100',
    description: 'A city in central Mexico, Guaunajuato is known for its history of silver mining and colonial archetecture. The houses in the city are very attractively painted with the most bright colors available. Always welcome.'

  },
  {
    id:6,
    imgSrc: img6,
    desTitle: 'Cinque Terre ',
    location: 'New Zealand',
    grade: '840',
    description: 'The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if ou are a foodie and love seafood, ou will be exhilarated with the choice ou are about to get here. Happy exploring great food!'

  },

  {
    id:7,
    imgSrc: img7,
    desTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fess: '§790',
    description: 'Angkot wat represents the entire range of kimer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurious activities'

  },

  {
    id:8,
    imgSrc: img8,
    desTitle: 'Taj Mahal',
    location: 'India ',
    grade: 'CULTURAL RELAX',
    fess: '§900',
    description: 'An immense mausoleum of white marble, built-in Arga by Mughal emperoor Shah Jahan in memory of his wife Mumtaz, the monument is breathakingly beautiful. This place is known for its luxurious stapographie stays and adventurous activiies'

  },

  {
    id:9,
    imgSrc: img9,
    desTitle: 'Bali Island',
    location: 'Indenosia',
    grade: 'CULTURAL RELAX',
    fess: '§500',
    description: 'Bali is an Indenosia Island and one of the best holiday destinations in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches.'
  },
]
const Main = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
   }, {})
  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3  data-aos="fade-right" className='title'>Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({ id, imgSrc, desTitle, location, grade, fess, description }) => {
            return (
              <div key={id}
              data-aos="fade-up"
              className="singleDestination">
                <div className='imageDiv'>
                  <img src={imgSrc} alt={desTitle} />
                </div>


                <div className="cardInfo">
                  <h4 className="desTitle">
                    {desTitle}</h4>
                  <span className='continent flex'>
                    <HiOutlineLocationMarker className='icon' />
                    <span className='name'>{location}</span>
                  </span>
                  <div className='fess flex'>
                    <div className='grade'>
                      <span>{grade}<small>+1</small></span>
                    </div>
                  </div>
                  <div className='price'>
                    <h5>{fess}</h5>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className='btn flex'>
                    DETAILS <HiClipboardCheck className='icon' />
                  </button>

                </div>

              </div>
            )
          })



        }
      </div>
    </section>
  )
}

export default Main
