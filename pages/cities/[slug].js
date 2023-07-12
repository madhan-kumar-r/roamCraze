import { createClient } from "contentful";
import Image from "next/image";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })
  
  export const getStaticPaths = async () => {
    const res = await client.getEntries({ 
      content_type: "greece" 
    })
  
    const paths = res.items.map(item => {
      return {
        params: { slug: item.fields.slug }
      }
    })
    return {
        paths,
        fallback: false
      }
    }
    
    export const getStaticProps = async ({ params }) => {
      const { items } = await client.getEntries({
        content_type: 'greece',
        'fields.slug': params.slug
      })
    
      return {
        props: { city: items[0] }
      }
    
    }

    export default function TouristPlaces({city}){
        const{title,mainimage,description} = city.fields
       
          
          return(
            <>
             <div>
        <Image 
          src={'https:' + mainimage.fields.file.url}
          width={mainimage.fields.file.details.image.width}
          height={mainimage.fields.file.details.image.height}
        />
        <h2>{ title }</h2>
        <p>{description}</p>
       
      </div>
            </>
        )
    }
    
  