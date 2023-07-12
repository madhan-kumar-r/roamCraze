import { createClient } from "contentful";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "spain",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "spain",
    "fields.slug": params.slug,
  });

  return {
    props: { spain: items[0] },
    revalidate: 1,
  };
};

export default function spainDetails({ spain }) {
  const { title, thumbnail, mainimage, description, imagegallery } =
    spain.fields;
  console.log(description);

  return (
    <div>
      <div className="banner">
        <Image
          src={"https:" + mainimage.fields.file.url}
          width={mainimage.fields.file.details.image.width}
          height={mainimage.fields.file.details.image.height}

        />
        <h2>{title}</h2>
      </div>

      <div className="info">
        {/* <p>Takes about { cookingTime } mins to cook.</p>
        <h3>Ingredients:</h3>

        {ingredients.map(ing => (
          <span key={ing}>{ ing }</span>
        ))} */}
      </div>

      <div className="method">
        <h3>Description:</h3>
        <p>{description}</p>
      </div>

      {/* <div>
      <Image
          src={"https:" + imagegallery.fields.file.url}
          width={imagegallery.fields.file.details.image.width}
          height={imagegallery.fields.file.details.image.height}
          
        />
      </div> */}
    </div>
  );
}
