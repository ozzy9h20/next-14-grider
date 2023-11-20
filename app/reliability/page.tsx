import Hero from '@/components/hero'
import reliabilityImg from '@/public/images/reliability.jpg'

export default function RealibilityPage() {
  return (
    <Hero
      imgData={reliabilityImg}
      imgAlt="welding"
      title="Super high reliability hosting."
    />
  )
}
