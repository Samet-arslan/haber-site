import https from 'https'; // ssl ignoring

const API_URL = 'https://testapi.advertpark.com/api';
const API_TOKEN = '3f109c788a185190a48276a718682ce328c9b4eb43c24f2525f8b86625b57700';

const headers = {
  'Authorization': `Token ${API_TOKEN}`,
  'Content-Type': 'application/json',
};

//  SSL doğrulamasını bypass eden agent
const agent = new https.Agent({ rejectUnauthorized: false });

export async function getLatestHaberler() {
  try {
    const res = await fetch(`${API_URL}/postbasic/`, {
      headers: headers,
      agent: agent, // for SSL issueee
    });

    if (!res.ok) {
      console.error("API Response Not OK:", res.status);
      throw new Error(`API error ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Fetch error in getLatestHaberler:", error);
    return { results: [] }; // fallback empty array
  }
}

export async function getHaberBySlug(slug) {
  try {
    const res = await fetch(`${API_URL}/postbasic/${slug}`, {
      headers: headers,
      agent: agent, // for SSL issuee
    });

    if (!res.ok) {
      console.error("API Response Not OK:", res.status);
      return null;
    }

    return res.json();
  } catch (error) {
    console.error("Fetch error in getHaberBySlug:", error);
    return null;
  }
}

export async function getAllHaberler() {
  try {
    const res = await fetch(`${API_URL}/postbasic/`, {
      headers: headers,
      agent: agent, // for SSL issue
    });

    if (!res.ok) {
      console.error("API Response Not OK:", res.status);
      throw new Error(`API error ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Fetch error in getAllHaberler:", error);
    return { results: [] };
  }
}
