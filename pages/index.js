import { getLatestHaberler } from '@/lib/api';
import HaberCard from '@/components/HaberCard';
import Head from 'next/head';

export async function getServerSideProps() {
  const response = await getLatestHaberler();
  return { 
    props: { 
      haberler: response.results || [],
    } 
  };
}

export default function Home({ haberler }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return (
    <>
      <Head>
        <title>Haber Sitesi | Güncel Haberler</title>
        <meta name="description" content="Kıbrıs ve dünyadan son dakika güncel haberler burada!" />
        <meta property="og:title" content="Haber Sitesi | Güncel Haberler" />
        <meta property="og:description" content="Kıbrıs ve dünyadan son dakika güncel haberler burada!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:image" content="https://seninsiten.com/default-og-image.jpg" />
      </Head>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h1>Son Haberler</h1>

        {haberler.length > 0 ? (
          haberler.map((haber) => (
            <HaberCard key={haber.id} haber={haber} />
          ))
        ) : (
          <p>Haber bulunamadı.</p>
        )}
      </div>
    </>
  );
}
