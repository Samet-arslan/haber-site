// /pages/api/image-proxy.js

export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send("Missing url parameter");
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return res.status(response.status).send("Image fetch error");
    }

    // İçerik tipi (JPEG, PNG vs.) ne ise onu aynen iletmk gerekiyr
    res.setHeader("Content-Type", response.headers.get("Content-Type"));
    const buffer = await response.arrayBuffer();
    res.send(Buffer.from(buffer));
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).send("Internal server error");
  }
}
