import React from 'react'
import './Home.css'
import Product from '../Product/Product'

const Home = () => {
  return (
    <div className='home'>
        <div className="home__container">
            <img 
                className='home__image'
                src="https://m.media-amazon.com/images/I/81X5TkHygqL._SX3000_.jpg" alt="" 
            />
            <div className="home__row">
              <Product 
                id='1'
                title='Ikigai: The Japanese secret to a long and happy life [Hardcover] García, Héctor and Miralles, Francesc'
                // title = {products[0].title}
                price={299}
                image='https://blog.pathways.in/wp-content/uploads/2022/04/book-review-ikigai-by-hector-garcia-and-francesc-miralles-362x490.png'
                rating={5}
              />
              <Product
                id='2'
                title='HEMBERSTAR Study Table/Bed Table/Foldable and Portable Wooden/Writing Desk for Office/Home/School'
                price={279}
                image='https://m.media-amazon.com/images/I/61WCHSxChaL._SX425_.jpg'
                rating={4}
              />
            </div>
            <div className="home__row">
            <Product
              id='3'
              title='Samsung Galaxy Z Fold3 5G (Phantom Black, 12GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers'
              price={99999}
              image='https://m.media-amazon.com/images/I/71MmJNwZcML._SL1500_.jpg'
              rating={4}
              />
              <Product
                id='4'
                title='Redgear F-15 Wired Optical Gaming Mouse with Running RGB LEDs'
                price={1399}
                image='https://m.media-amazon.com/images/I/510hHEpQJuL._SL1500_.jpg'
                rating={4}
              />
              <Product
                id='5'
                title='Ant Esports H530 Wired Over Ear Headphones with mic (Black, Red)'
                price={999}
                image='https://m.media-amazon.com/images/I/51eOGiQbsgL._SL1080_.jpg'
                rating={4}
              />
            </div>
            <div className="home__row">
              <Product
                id='6'
                title='Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)'
                price={151000}
                image='https://m.media-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg'
                rating={4}
              />
            </div>
        </div>
    </div>
  )
}

export default Home