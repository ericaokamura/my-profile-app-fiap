import Menu from "./menu/Menu";
import Image from 'next/image'
import erica from './foto_erica.jpg';

export default function Home() {

  return (
    <>
      <div style={{ display: "block", justifyContent: "space-between", backgroundColor: "#F6C6CF", width: "100%", height: "100%", border: "8px solid #0F2CA0", marginBottom: "20px" }}>
        <Menu />
        <div style={{ width: "100%", height: "auto", display: "flex", justifyContent: "center" }}>
          <Image
            src={erica}
            width={450}
            height={600}
            alt="Picture of myself"/>
        </div>
      </div>

    </>
  )
}