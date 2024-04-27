import CardSpotlight from "./CardSpotlight";




export function GridBackgroundDemo() {
  return (
    <div className="h-full w-full bg-black bg-grid-white/[0.2]  relative flex flex-row pb-20">
     
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="pt-36 mx-auto">
                <div className="mx-auto px-6 max-w-6xl text-slate-50">
                    <div className="text-center">
                        <h2 className="text-3xl text-white font-semibold">Quickstart with boilerplates</h2>
                        <p className="mt-6 text-gray-300">Harum quae dolore inventore repudiandae? orrupti aut temporibus ariatur.</p>
                        <p className="mt-6 text-gray-300">Some Nice cards with nice layout and icons can be laid here!.</p>
                    </div>
                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto">
                   <CardSpotlight />
                   <CardSpotlight />
                   <CardSpotlight />
                      
                    </div>
                </div>
            </div>
    </div>
  );
}
