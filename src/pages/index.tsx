import DataGrowth from '@/components/dataGrowth';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className='h-[100vh] w-full'>
      <section className='text-center] flex h-full items-center justify-center'>
        <div className='mr-[88px]'>
          <DataGrowth
            targetVal={100000}
            className='text-[48px] font-[700] leading-[60px]'
            convert
          />
          <Image src='/icon/up-icon.png' width={33} height={54} />
        </div>
        <div>
          <DataGrowth
            targetVal={50}
            className='text-[48px] font-[700] leading-[60px]'
          />
          <span className='text-[32px] font-[700] leading-[40px]'>%</span>
          <Image src='/icon/down-icon.png' width={33} height={54} />
        </div>

        <div className='ml-[88px]'>
          <DataGrowth
            targetVal={99.9}
            decimal={1}
            className='text-[48px] font-[700] leading-[60px]'
          />
          <span className='text-[32px] font-[700] leading-[40px]'>%</span>
          <Image src='/icon/up-icon.png' width={33} height={54} />
        </div>
      </section>
    </main>
  );
}
