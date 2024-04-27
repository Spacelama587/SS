import { Radar } from "./Radar";

import { IconContainer } from "./IconContainer";
import { VectorThree } from "@phosphor-icons/react";

function Preview() {
  return (
  <>
    <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
                  <div className="text-center">
                    <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl">
                      Meet Our Team
                      <span className="block text-gray-600">Diverse. Skilled. United.</span>
                    </h1>
                    <p className="mt-4 text-base font-medium text-gray-500">
                      A group of passionate individuals working together to innovate and excel
                      in our industry.
                    </p>
                  </div>
                  </div>


    <div className="relative flex h-96 w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
<div className="mx-auto w-full max-w-3xl">
  <div className="flex w-full  items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
    <IconContainer text="Web Development" delay={0.2} />
    <IconContainer
      delay={0.4}
      text="Mobile apps"
      icon={<VectorThree className=" h-8 w-8 size={32} />  text-slate-600" />}
    />
    <IconContainer
      text="Designing"
      delay={0.3}
      icon={<VectorThree className=" h-8 w-8 text-slate-600" />}
    />
  </div>
</div>
<div className="mx-auto w-full max-w-md">
  <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
    <IconContainer
      text="Maintenence"
      delay={0.5}
      icon={<VectorThree className=" h-8 w-8 text-slate-600" />}
    />
    <IconContainer
      text="Server management"
      icon={
        <VectorThree className=" h-8 w-8 text-slate-600" />
      }
      delay={0.8}
    />
  </div>
</div>
<div className="mx-auto w-full max-w-3xl">
  <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
    <IconContainer
      delay={0.6}
      text="GitHub Integration"
      icon={<VectorThree className=" h-8 w-8 text-slate-600" />}
    />
    <IconContainer
      delay={0.7}
      text="CMS Integration"
      icon={<VectorThree className=" h-8 w-8 text-slate-600" />}
    />
  </div>
</div>

<Radar className="absolute -bottom-12" />
<div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
</div>
</>
  )
}

export default Preview