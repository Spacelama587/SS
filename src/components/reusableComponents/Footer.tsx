import React from 'react'

function Footer() {
  return (

 
 <footer>
                <div className="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
                  <div className="w-full xl:grid xl:grid-cols-3 xl:gap-8">
                    <div>
                      <p className="text-2xl font-bold uppercase">windstatic</p>
                      <p className="mt-2 text-sm font-medium text-gray-500 lg:ml-ato">
                        A set of <em className="text-accent-600"></em> elements, templates &amp;
                        layouts
                        <span className="lg:block"> made with Tailwind CSS and Alpine.js</span>
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 mt-12 text-sm font-medium text-gray-500 lg:grid-cols-3 lg:mt-0 xl:col-span-2">
                      <div>
                        <h3 className="text-base text-black">Information</h3>
                        <ul role="list" className="mt-4 space-y-2">
                          <li>
                            <a href="#_" className="hover:text-black">
                              License
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-base text-black">Socials</h3>
                        <ul role="list" className="mt-4 space-y-2">
                          <li>
                            <a href="https://twitter.com/lexingtonthemes" className="hover:text-black">
                              @lexingtonthemes
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/Mike_Andreuzza" className="hover:text-black">
                              @Mike_Andreuzza
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-12 md:mt-0">
                        <h3 className="text-base text-black">Premium Themes</h3>
                        <ul role="list" className="mt-4 space-y-2">
                          <li>
                            <a href="https://lexingtonthemes.com/" className="hover:text-black">
                              Lexington Themes
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col pt-12 mt-12 border-t md:flex-row md:items-center md:justify-between">
                    <span className="text-sm font-medium text-gray-500 text-balance">
                      Beautifully designed HTML, Astro.js and Tailwind themes! Save months of
                      time and build your startup landing page in minutes.
                    </span>
                    <form className="w-full max-w-sm ml-auto">
                      <div className="flex flex-col w-full gap-2 lg:flex-row">
                        <label htmlFor="email-address" className="sr-only">Email address</label>
                        <input name="email" id="email-address" type="email" autoComplete="email" placeholder="Enter your email" aria-describedby="emailHelp" required="" className="block w-full h-12 px-4 py-2 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 text-accent-500 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"/>
                        <span id="emailHelp" className="sr-only">Please enter your email address to subscribe.</span>
                        <button type="submit" aria-label="Primary action" className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 md:w-auto rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black">
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </footer>
            

  )
}

export default Footer