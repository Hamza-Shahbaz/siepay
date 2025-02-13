import React from 'react'
import Button from '../../../components/UI/Button'

const HeroTop = () => {
  return (
    <div className="p-4 flex flex-col items-center">
        <div className="text-8xl font-bold w-full flex flex-row">
            <p className="mr-2">
                Easiest Crypto 
            </p>
            <p>
                Recurring,
            </p>
        </div>
        <div className="w-full flex flex-row justify-between items-center">
            <div className="mr-2 flex flex-row gap-4">
                <Button text={"Crypto"} styles={"bg-gray-100 text-blue-500  px-4 py-2 rounded-lg"} />
                <img src="./images/arrow.png" alt="" />
                <Button text={"Crypto"} styles={"bg-blue-500 text-white  px-4 py-2 rounded-lg"} />
            </div>
            <p className="text-8xl font-bold">
                Pay System For All  
            </p>
        </div>
    </div>
  )
}

export default HeroTop