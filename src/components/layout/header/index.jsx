import React, {Fragment, useState } from 'react'
import placeholderImgUrl from '../../../assets/logo-placeholder.png'
import { FaGamepad } from 'react-icons/fa'
import { MdArrowDropDown } from 'react-icons/md'
import { Menu, Transition } from '@headlessui/react';

const HeaderComponent = () => {
  const [openMenuTrigger, setOpenMenuTrigger] = useState(false)

  return (
    <header className='bg-zinc-800 text-gray-400 text-xs'>
      <div className="max-w-5xl mx-auto flex ">
        <figure className="md:pl-0 pr-8 py-4 pl-8">
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
                  <Menu.Button as="div" className="hover:text-gray-300 flex items-center ">
                    Language
                    <MdArrowDropDown
                      className="text-xl mt-0.5"
                    />
                  </Menu.Button>

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
                    <Menu.Items className="bg-zinc-900 absolute right-0 origin-top-right divide-y divide-gray-300 rounded drop-shadow-md w-20 mt-1 focus:outline-0">
                      <div className="p-1.5 hover:bg-zinc-800">
                        <Menu.Item>
                          <p>Spanish</p>
                        </Menu.Item>
                      </div>

                      <div className="p-1.5 hover:bg-zinc-800">
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
                <Menu as="li" className="relative inline-block text-left" onMouseLeave={() => setOpenMenuTrigger(false)}>
                  {({ open }) => (<>
                      <Menu.Button as="div" className="hover:text-gray-300" onMouseEnter={() => setOpenMenuTrigger(true)}>
                        Store
                      </Menu.Button>

                      {/* Items to render when button is clicked */}
                      <Transition
                        as={Fragment}
                        show={openMenuTrigger}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="bg-zinc-900 absolute left-0 origin-top-left rounded drop-shadow-md w-24 text-xs focus:outline-0 font-normal tracking-wide">
                          <div className="px-2 py-1.5 hover:bg-zinc-800">
                            <Menu.Item>
                              <p>Home</p>
                            </Menu.Item>
                          </div>

                          <div className="px-2 py-1.5 hover:bg-zinc-800">
                            <Menu.Item>
                              <p>Wishlist</p>
                            </Menu.Item>
                          </div>

                          <div className="px-2 py-1.5 hover:bg-zinc-800">
                            <Menu.Item>
                              <p>News</p>
                            </Menu.Item>
                          </div>

                          <div className="px-2 py-1.5 hover:bg-zinc-800">
                            <Menu.Item>
                              <p>Stats</p>
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
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
