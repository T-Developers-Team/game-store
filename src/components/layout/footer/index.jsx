import React from 'react'
import placeholderImgUrl from '../../../assets/logo-placeholder.png'
import {AiFillFacebook, AiFillTwitterSquare} from 'react-icons/ai'

const FooterComponent = () => {
  return (
    <footer className='bg-zinc-800 text-gray-400 text-sm'>
      <div className='max-w-5xl mx-auto py-10'>
        <hr className='mb-2 mt-1 border-gray-600'/>
        <div className='flex items-center gap-5'>
          <figure className=''>
            <img src={placeholderImgUrl}/>
          </figure>
          <div className=''>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida arcu non urna consequat lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum eros ac eros lobortis convallis. Pellentesque porttitor libero vitae ultricies vulputate. Aliquam hendrerit convallis ultricies. In vehicula volutpat posuere. Nam maximus auctor elit, sit amet ullamcorper nisi imperdiet et.
          </div>
        </div>
        <hr className='my-2 border-gray-600'/>
        <div className='flex gap-2.5 text-gray-600'>
          <a href='#' className='hover:text-gray-300 text-gray-400'>About Us</a> |
          <a href='#' className='hover:text-gray-300 text-gray-400'>Jobs</a> |
          <a href='#' className='hover:text-gray-300 text-gray-400'>Launcher Distribution</a> |
          <a href='#' className='hover:text-gray-300 text-gray-400'>Support</a> |
          <a href='#' className='hover:text-gray-300 text-gray-400 flex items-center'><AiFillFacebook/>Facebook</a> |
          <a href='#' className='hover:text-gray-300 text-gray-400 flex items-center'><AiFillTwitterSquare/>Twitter</a>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent
