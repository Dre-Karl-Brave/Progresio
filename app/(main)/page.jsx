// don't modify this karl, your page must start with /sign-in
import HeroSection from '../modules/landing-page/Hero'
import Divider from '../modules/landing-page/Divider'
import About from '../modules/landing-page/About'
import AdvertisementText from '../modules/landing-page/AdvertisementText'

export default function Home() {
  return (
    <>
      <HeroSection />
      <Divider />
      <About />
      <AdvertisementText />
    </>
  )
}
