import Link from "next/link";
import Image from "next/image";

export default function MainCard({ city }) {
  const { title, slug, thumbnail } = city.fields;
  return (
    <div>
      <div>
        {/* thumbnail-image */}
        <Image
          src={"https:" + thumbnail.fields.file.url}
          alt={slug}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <div>
        {/* title */}
        <h2>{title}</h2>
      </div>
      <Link href={"cities/" + slug}>
      <div>
        <button>Read More..</button>
      </div>
      </Link>
    </div>
  );
}
