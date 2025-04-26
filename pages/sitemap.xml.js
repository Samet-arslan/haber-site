import { getAllHaberler } from "@/lib/api";

export async function getServerSideProps({ res }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  let haberler = [];
  try {
    const response = await getAllHaberler();
    haberler = response.results || [];
  } catch (error) {
    console.error("Sitemap API fetch error:", error);
  }

  const staticUrls = [
    `<url><loc>${baseUrl}/</loc><priority>1.0</priority></url>`,
  ];

  const haberUrls = haberler.map((haber) => {
    return `<url><loc>${baseUrl}/haber/${haber.id}</loc><priority>0.8</priority></url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls.join("\n")}
${haberUrls.join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function Sitemap() {
  return null;
}
