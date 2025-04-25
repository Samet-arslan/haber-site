import Link from 'next/link';

export default function HaberCard({ haber }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '16px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
    }}>
      <Link href={`/haber/${haber.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <h2>{haber.header}</h2>
        <p>{haber.sub_header}</p>
        {haber.postimage && haber.postimage.length > 0 && (
          <img 
            src={haber.postimage[0].uploaded_image.image} 
            alt={haber.header} 
            style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', marginTop: '10px' }}
          />
        )}
      </Link>
    </div>
  );
}
