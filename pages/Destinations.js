import Link from "next/link"

export default function Destinations(){
    return(
        <>
        <Link href="/DestinationPage">
        <div className="greece">
            <img src="cas1.jpg" alt="greece"/>
            <h2>Greece</h2>
        </div>
        </Link>
        <div className="iceland">
            <img src="cas2.jpg" alt="iceland"/>
            <h2>Ice Land</h2>
        </div>
        <div className="netherlands">
            <img src="cas3.jpg" alt="netherland"/>
            <h2>Netherlands</h2>
        </div>
        </>
    )
}