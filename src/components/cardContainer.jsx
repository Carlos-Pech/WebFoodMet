import React from 'react'
import Card from './Card'

const cardContainer = () => {
  return (
    <div>
        <main className="lg:pl-34 lg:pr-98 pb-20">
        <div lassName="md:p-8 p-4">
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Card */}
            <Card 
            img={imagen1} 
            name={text}
            price={ola}
            inventory={lala}
            />  
            {/* Card */}
            <Card
              img="comida.png"
              name="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default cardContainer