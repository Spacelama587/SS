import { CodesandboxLogo } from "@phosphor-icons/react"


function Features() {
  return (
    <div>
        
        <section>
            
                <div className="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
                  <div className="p-2 border bg-gray-50 rounded-3xl">
                    <div className="p-10 bg-white border shadow-lg md:p-20 rounded-3xl">
                      <span className="text-sm font-semibold text-gray-500 uppercase array"><CodesandboxLogo size={32} />Structural Studios</span>
                      <p className="mt-8 text-3xl font-semibold tracking-tighter text-black text-pretty">
                      Gain lifetime access to our comprehensive structural engineering toolkit for a one-time fee of $199. Experience perpetual ownership, including all future innovations, updates, and dedicated support. Utilize our cutting-edge platform across unlimited projects.
                      </p>
                      <p className="mt-4 text-base text-gray-500">What Logos or icons can be added here?</p>
                      <div className="flex flex-col items-center gap-2 mx-auto mt-8 md:flex-row">
                        <button className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 md:w-auto rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black" aria-label="Primary action">
                          Primary button
                        </button>
                        <button className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 bg-gray-100 md:w-auto rounded-xl hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" aria-label="Secondary action">
                          Secondary button
                        </button>
                      </div>
                      <div className="mt-12">
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
                          <div className="flex justify-center col-span-1">
                            <img className="max-h-12" src="/images/logos/1.svg" alt="logo"/>
                          </div>
                          <div className="flex justify-center col-span-1">
                            <img className="max-h-12" src="/images/logos/2.svg" alt="logo"/>
                          </div>
                          <div className="flex justify-center col-span-1">
                            <img className="max-h-12" src="/images/logos/3.svg" alt="logo"/>
                          </div>
                          <div className="flex justify-center col-span-1">
                            <img className="max-h-12" src="/images/logos/4.svg" alt="logo"/>
                          </div>
                          <div className="flex justify-center col-span-1">
                            <img className="max-h-12" src="/images/logos/5.svg" alt="logo"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            
    </div>
  )
}

export default Features