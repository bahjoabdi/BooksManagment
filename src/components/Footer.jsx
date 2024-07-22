import React from 'react'

function Footer() {
  return (
    <section class="py-10 bg-blue-900 sm:pt-16 lg:pt-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-12">
            <div>
                <img class="w-auto h-7" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo-alt.svg" alt="" />

                <ul class="mt-8 space-y-4">
                    <li>
                        <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> About </a>
                    </li>

                    <li>
                        <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Features </a>
                    </li>

                    <li>
                        <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Works </a>
                    </li>

                    <li>
                        <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Career </a>
                    </li>
                </ul>
            </div>
            </div>
            </section>

  )
}
export default Footer