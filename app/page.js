import Featured from '@/components/home/Featured'
import GoodDesing from '@/components/home/GoodDesing'
import Hero from '@/components/home/Hero'
import RetailShop from '@/components/home/RetailShop'

export default function Home() {
  return (
    <main>
      <Hero />
      <GoodDesing />
      <RetailShop />
      <Featured />
    </main>
  )
}
