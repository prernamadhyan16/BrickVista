import React from 'react'
import { FaHeart } from 'react-icons/fa6'
import { MdOutlineBed, MdOutlineBathtub, MdOutlineGarage } from 'react-icons/md'
import { CgRuler } from 'react-icons/cg'


const Item =({property})=>{
    return (
        <div className='rounded-lg overflow-hidden bg-white ring-1 ring-slate-900/50'>
            <div className='relative'>
                <img src={property.image} alt={property.title} className='h-[13rem] w-full aspect-square object-cover'/>
                <div className='absolute top-4 right-6 text-white text-lg'><FaHeart></FaHeart></div>
            </div>
            {/* INFO */}
            <div className='m-3'>
                <div className='flexBetween'>
                    <h5 className='bold-16 my-1 text-secondary'>{property.city}</h5>
                    <h4 className='h4'>{property.price}.00</h4>
                </div>
                <h4 className='medium-18 line-clamp-1'>{property.title}</h4>
                <div className='flex gap-x-2 py-2'>
                    <div className='flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]'>
                        <MdOutlineBed/> {property.facilities.bedrooms}
                    </div>
                    <div className='flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]'>
                        <MdOutlineBathtub/> {property.facilities.bathrooms}
                    </div>
                    <div className='flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]'>
                        <MdOutlineGarage/> {property.facilities.parkings} 
                    </div>
                    <div className='flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]'>
                        <CgRuler/> 400
                    </div>
                    <p>{property.discription}</p>
                </div>
            </div>
        </div>
    )
}

export default Item