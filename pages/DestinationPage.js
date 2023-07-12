import { createClient } from "contentful"
import MainCard from "@/components/MainCard"

export async function getStaticProps() {
  
      const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
  
    const res = await client.getEntries({ content_type: "greece"})
   
    return {
      props: {
        cities: res.items,
      }
    }
  }

export default function DestinationPage({cities}){
    
    return(
        <div>
          {cities.map(city => (
            <MainCard key={city.sys.id} city={city}/>
          ))}
        </div>
    )
}