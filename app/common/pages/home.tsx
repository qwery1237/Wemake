import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
  return [
    { title: 'Home | wemake' },
    { name: 'description', content: 'Welcome to wemake' },
  ];
};

export default function HomePage() {
  return (
    <div className='px-20'>
      <div className='grid grid-cols-3 gap-4'>
        <div>
          <h2 className='text-5xl font-bold leading-tight tracking-tight'>
            Today's Products
          </h2>
          <p className='text-xl font-light text-forground'>
            The best products made by our community today
          </p>
        </div>
      </div>
    </div>
  );
}
