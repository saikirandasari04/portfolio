'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button>
      <a href='./files/saikiran_dasari_resume.pdf' download style={{ textDecoration: 'none', color: 'inherit' }}>
        Download Resume
      </a>
    </Button>
  );
};

export default DownloadCV;
