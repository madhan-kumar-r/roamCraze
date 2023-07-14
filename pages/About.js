import { createClient } from "contentful"
import AboutPage from "@/components/AboutPage"

// import AboutImageSlider from "@/components/AboutImageSlider"

export async function getStaticProps() {

    // The createClient function makes a connection to the ContentfulCMS
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
  
    const res = await client.getEntries({ content_type: "about" })
  
    return {
      props: {
        details: res.items,
      }
    }
  }

  export default function About({ details }) {
  
    return (
      <div className="about-list">
        {/* <AboutImageSlider/> */}
        {details.map(detail => (
          <AboutPage key={detail.sys.id} detail={detail} />
        ))}
        <style jsx>{`
          .recipe-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px 60px;
          }
        `}</style>
       
      </div>
    )
  }