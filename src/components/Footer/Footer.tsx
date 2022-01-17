import * as React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

const Footer = (): JSX.Element => (
  <footer className='relative bottom-0 w-full text-center text-gray-700'>
    © {new Date().getFullYear()} By{' '}
    <UnderlineLink href='https://github.com/pawelsarzynski'>
      Pawel Sarzynski
    </UnderlineLink>
  </footer>
);

export default Footer;
