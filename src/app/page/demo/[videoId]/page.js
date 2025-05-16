'use client';

import { useParams } from 'next/navigation';
import DemoViewer from '@/app/components/DemoViewer';
import Footer from '@/app/components/Footer';
import Menu from '@/app/components/Menu';

export default function DemoPage() {
  const { videoId } = useParams(); 

  return (
    <main>
      <Menu />
      <DemoViewer videoId={videoId} />
      <Footer />
    </main>
  );
}