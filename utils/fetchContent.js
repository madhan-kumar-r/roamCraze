const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_KEY


// https://www.electronjs.org/apps/graphiql
export async function fetchContent(query) {
    
  try {
    const res = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${space}/environments/master`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ query }),
      },
    );
    const { data } = await res.json();
    
   
    return data.aboutCollection;
  } catch (error) {
    console.error(`There was a problem retrieving entries with the query ${query}`);
  }
}

export default fetchContent;