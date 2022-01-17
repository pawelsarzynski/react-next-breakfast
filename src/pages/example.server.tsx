import * as React from 'react';

import Button from '@/components/buttons/Button.server';
import Footer from '@/components/Footer/Footer.client';
import Layout from '@/components/layout/Layout';

export default function Example() {
  return (
    <Layout>
      <main>
        <section className='flex flex-col justify-center items-center h-screen bg-white'>
          I am server component
          <Button className='mt-6'>xd</Button>
          <Footer />
        </section>
      </main>
    </Layout>
  );
}
