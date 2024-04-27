
import './App.css'
import Preview from './components/AceternityUI/RadarComponent/Preview.tsx'

import { HeroHighlightDemo } from './components/AceternityUI/heroComponent/heroHeader'
import { StickyScrollRevealDemo } from './components/AceternityUI/sticky-scroll-reveal/section2.tsx'
import Features from './components/reusableComponents/Features.tsx'

import ReactPlayer from 'react-player/lazy'
import { GridBackgroundDemo } from './components/reusableComponents/GridBackGroundDemo.tsx'
import Navbar from './components/reusableComponents/Navbar.tsx'
import { DefaultAccordion } from './components/reusableComponents/DefaultAccordion.tsx';
import { SpotlightPreview } from './components/AceternityUI/Spotlight/SpotlightPreview.tsx';
import Contact from './components/reusableComponents/Contact.tsx';
import Footer from './components/reusableComponents/Footer.tsx';
import { useState } from 'react'




function App() {
  const [playing, setPlaying] = useState(false);
  const playVideo = () => {
    setPlaying(true);
  }
  const thumbnailUrl = "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <>
    <Navbar />


 <HeroHighlightDemo/>
<Features />
 <GridBackgroundDemo />
 <div className='[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] p-12'>
 <span className='inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-4xl font-extrabold text-transparent'>
      Watch the Video to learn more....
    </span>
 <div className="relative mx-auto rounded-lg overflow-hidden h-[300px] md:h-[400px] lg:h-[500px] mt-12 w-3/4 mb-12">
  <ReactPlayer
    url="https://www.youtube.com/watch?v=a_exRMuMCrs"
    light={thumbnailUrl}
    playing={playing} // Control the playback
    controls={true}
    width="100%"
    height="100%"
    className="absolute top-0 left-0"
  />

  {/* Button to play video */}
  {!playing && (
    <button
      type="button"
      aria-label="Play Video"
      className="absolute inset-0 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
      onClick={playVideo} // Trigger playVideo function when clicked
    >
      <svg
        className="w-16 h-16 text-white animate-spin z-50"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Add your play icon SVG here */}
      </svg>
    </button>
  )}
</div>
</div>
<StickyScrollRevealDemo />

    <Preview />
    <DefaultAccordion />
    <SpotlightPreview />
    <Contact />
    <Footer />
    </>
  )
}

export default App
