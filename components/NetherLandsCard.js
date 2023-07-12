import Image from 'next/image'
import Link from 'next/link'

export default function SpainCard({ netherlands }) {
  const { title, slug, thumbnail } = netherlands.fields

  return (
    <div className="card">
      <div className="featured">
        {/* {thumbnail} */}
        <Image 
          src={'https:' + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
          alt={slug}
        />
      </div>
      <div className="content">
        <div className="info">
          <h4>{ title }</h4>
          
        </div>
        <div className="actions">
          {/* <Link href={'/recipes/' + slug}><a>Cook this</a></Link> */}
          <Link href={'cities/'+slug} legacyBehavior><a>Click This</a></Link>
        </div>
      </div>
    </div>
  )
}