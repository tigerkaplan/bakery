import React from 'react'
import Button from '../Layouts/Button'

const Home = () => {
    return (
        <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5  bg-[url('../../public/images/bg.jpg')] bg-cover bg-no-repeat">

            <div className='w-full lg:w-2/3 space-y-5'>
                <h1 className='text-backgroundColor font-semibold text-6xl'>Elevate Your Inner Foodie with Every Bite</h1>
                <p className='text-backgroundColor'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt soluta, molestias temporibus fuga eveniet ea porro quisquam at eaque cumque earum debitis, perferendis dolore expedita.</p>
                <div className='lg:pl-44  '>
                    <Button className="" title="See Menu"/>
                </div>
            </div>
        </div>
    )
}

export default Home
