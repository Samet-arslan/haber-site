import { getHaberBySlug } from "@/lib/api";
import Head from "next/head";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const haber = await getHaberBySlug(id);

  if (!haber) {
    return { notFound: true };
  }

  return { props: { haber } };
}

export default function HaberDetay({ haber }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return (
    <>
      <Head>
        <title>{haber.header} | Haber Sitesi</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={haber.header} />
        <meta name="twitter:description" content={haber.sub_header || ""} />
        <meta
          name="twitter:image"
          content={`${baseUrl}/api/image-proxy?url=${encodeURIComponent(
            haber.postimage[0]?.uploaded_image?.image
          )}`}
        />

        <meta name="description" content={haber.sub_header || ""} />
        <meta property="og:title" content={haber.header} />
        <meta property="og:description" content={haber.sub_header || ""} />

        {haber.postimage && haber.postimage.length > 0 && (
          <>
            <meta
              property="og:image"
              content={`${baseUrl}/api/image-proxy?url=${encodeURIComponent(
                haber.postimage[0].uploaded_image.image
              )}`}
            />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
          </>
        )}

        <meta property="og:url" content={`${baseUrl}/haber/${haber.id}`} />
        <meta property="og:type" content="article" />
      </Head>

      <article style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h1>{haber.header}</h1>
        <p>{haber.sub_header}</p>

        {haber.postimage && haber.postimage.length > 0 && (
          <img
            src={haber.postimage[0].uploaded_image.image}
            alt={haber.header}
            style={{
              width: "100%",
              maxHeight: "400px",
              objectFit: "cover",
              margin: "20px 0",
            }}
          />
        )}

        {/* Share Buttons */}
        <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
          {/* Facebook Share */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              haberUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#1877f2",
              color: "#fff",
              borderRadius: "5px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Facebook&apos;ta Paylaş
          </a>

          {/* Twitter Share */}
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              haberUrl
            )}&text=${encodeURIComponent(haber.header)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#1DA1F2",
              color: "#fff",
              borderRadius: "5px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Twitter&apos;da Paylaş
          </a>
        </div>
      </article>
    </>
  );
}
