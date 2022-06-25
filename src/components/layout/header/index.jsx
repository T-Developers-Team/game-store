import React, {Fragment } from 'react'
import placeholderImgUrl from '../../../assets/logo-placeholder.png'
import { FaGamepad } from 'react-icons/fa'
import { MdArrowDropDown } from 'react-icons/md'
import { Menu, Transition } from '@headlessui/react';

const HeaderComponent = () => {
  return (
    <header className='bg-zinc-800 text-gray-400 text-xs'>
      <div className="max-w-5xl mx-auto flex">
        <figure className="px-8 py-4">
          <img src={placeholderImgUrl} className="max-h-20"/>
        </figure>
        <div className="grow">
          <section className='flex gap-3 justify-end items-center py-2'>
            <button className="bg-lime-700 text-gray-200 py-1 px-2 hover:text-white flex items-center"><FaGamepad className='text-base' /> <p className='pl-1.5'>Install Launcher</p></button>
            <div className='hover:text-gray-300'>Login</div>
            |
            <Menu as="div" className="relative inline-block text-left">
              {({ open }) => (
                <>
                  <div>
                    <Menu.Button className="hover:text-gray-300 flex items-center">
                      Language
                      <MdArrowDropDown
                        className="text-xl mt-0.5"
                      />
                    </Menu.Button>
                  </div>

                  {/* Items to render when button is clicked */}
                  <Transition
                    as={Fragment}
                    show={open}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="bg-zinc-900 absolute right-0 w-56 mt-2 origin-top-right divide-y divide-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1">
                        <Menu.Item>
                          <p>Spanish</p>
                        </Menu.Item>
                      </div>

                      <div className="px-1 py-1">
                        <Menu.Item>
                        <p>English</p>
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </section>
          <section className='flex gap-3 items-center pt-2'>
            <nav>
              <ul className='flex text-sm uppercase gap-4 font-medium'>
                <li className='hover:text-gray-300'>Store</li>
                <li className='hover:text-gray-300'>Community</li>
                <li className='hover:text-gray-300'>About</li>
                <li className='hover:text-gray-300'>Support</li>
              </ul>
            </nav>
          </section>
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent
