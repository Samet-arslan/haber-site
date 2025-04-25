const API_URL = 'https://testapi.advertpark.com/api';
const API_TOKEN = '3f109c788a185190a48276a718682ce328c9b4eb43c24f2525f8b86625b57700';

const headers = {
  'Authorization': `Token ${API_TOKEN}`,
  'Content-Type': 'application/json',
};
export async function getLatestHaberler() {
    const res = await fetch(`${API_URL}/postbasic/`, {
      headers: headers,
    });
    return res.json();
  }
  
  export async function getHaberBySlug(slug) {
    const res = await fetch(`${API_URL}/postbasic/${slug}`, {
      headers: headers,
    });
    if (!res.ok) return null;
    return res.json();
  }
  
  export async function getAllHaberler() {
    const res = await fetch(`${API_URL}/postbasic/`, {
      headers: headers,
    });
    return res.json();
  }