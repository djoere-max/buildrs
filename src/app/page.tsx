import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { PricingSection } from '@/features/pricing/components/pricing-section';

export default async function HomePage() {
  return (
    <div className='flex flex-col gap-8 lg:gap-32'>
      <HeroSection />
      <ServicesSection />
      <PricingSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className='relative overflow-hidden lg:overflow-visible'>
      <Container className='relative rounded-lg bg-black py-20 lg:py-[140px]'>
        <div className='relative z-10 flex flex-col gap-5 lg:max-w-xl lg:pl-8'>
          <div className='w-fit rounded-full bg-gradient-to-r from-[#616571] via-[#7782A9] to-[#826674] px-4 py-1 '>
            <span className='font-alt text-sm font-semibold text-black mix-blend-soft-light'>
              AI Engineering Studio
            </span>
          </div>
          <h1>Custom AI SaaS & Automatisering Oplossingen</h1>
          <p className='text-lg text-neutral-300 max-w-2xl'>
            Van concept tot productie - wij bouwen jouw volgende AI-powered applicatie. 
            Expertise in machine learning, automation en moderne SaaS architectuur.
          </p>
          <Button asChild variant='sexy'>
            <Link href='/signup'>Start je project</Link>
          </Button>
        </div>
      </Container>
      <Image
        src='/hero-shape.png'
        width={867}
        height={790}
        alt=''
        className='absolute right-0 top-0 rounded-tr-lg'
        priority
        quality={100}
      />
    </section>
  );
}

function ServicesSection() {
  return (
    <section className='py-16'>
      <Container>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold mb-4'>Onze Services</h2>
          <p className='text-lg text-neutral-400 max-w-2xl mx-auto'>
            Van AI-powered automatisering tot complete SaaS oplossingen - wij realiseren jouw digitale visie.
          </p>
        </div>
        
        <div className='grid md:grid-cols-3 gap-8'>
          <div className='bg-black rounded-lg p-8 border border-gray-800'>
            <div className='w-12 h-12 bg-gradient-to-r from-[#616571] to-[#7782A9] rounded-lg mb-6 flex items-center justify-center'>
              <span className='text-2xl'>🤖</span>
            </div>
            <h3 className='text-xl font-semibold mb-4'>AI Automatisering</h3>
            <p className='text-neutral-400 mb-6'>
              Slimme automatisering van bedrijfsprocessen met machine learning en AI-algoritmen.
            </p>
            <ul className='text-sm text-neutral-300 space-y-2'>
              <li>• Process Mining & Optimization</li>
              <li>• Intelligent Document Processing</li>
              <li>• Predictive Analytics</li>
            </ul>
          </div>
          
          <div className='bg-black rounded-lg p-8 border border-gray-800'>
            <div className='w-12 h-12 bg-gradient-to-r from-[#7782A9] to-[#826674] rounded-lg mb-6 flex items-center justify-center'>
              <span className='text-2xl'>⚡</span>
            </div>
            <h3 className='text-xl font-semibold mb-4'>Custom AI SaaS</h3>
            <p className='text-neutral-400 mb-6'>
              Op maat gemaakte SaaS oplossingen met ingebouwde AI functionaliteiten.
            </p>
            <ul className='text-sm text-neutral-300 space-y-2'>
              <li>• Full-stack Development</li>
              <li>• AI Model Integration</li>
              <li>• Scalable Architecture</li>
            </ul>
          </div>
          
          <div className='bg-black rounded-lg p-8 border border-gray-800'>
            <div className='w-12 h-12 bg-gradient-to-r from-[#826674] to-[#616571] rounded-lg mb-6 flex items-center justify-center'>
              <span className='text-2xl'>🚀</span>
            </div>
            <h3 className='text-xl font-semibold mb-4'>AI Consultancy</h3>
            <p className='text-neutral-400 mb-6'>
              Strategisch advies en technische begeleiding voor AI implementatie.
            </p>
            <ul className='text-sm text-neutral-300 space-y-2'>
              <li>• AI Readiness Assessment</li>
              <li>• Technology Strategy</li>
              <li>• Implementation Support</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
