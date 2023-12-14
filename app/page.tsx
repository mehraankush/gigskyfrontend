import { LandingNavbar } from '@/components/LandingNavbar'
import { LandingHero } from '@/components/LandingHero'

const LandingPage = () =>{

  return (
     <div className='h-full bg-gray-900'>
       <LandingNavbar/>
       <LandingHero/>
      </div>
  )
}

export  default LandingPage;