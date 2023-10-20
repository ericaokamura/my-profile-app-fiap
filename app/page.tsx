import Menu from "./menu/Menu";
import Image from 'next/image'
import erica from './foto_erica.jpg';

export default function Home() {

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#F6C6CF", width: "auto", height: "fit-content", border: "8px solid #0F2CA0", marginBottom: "20px" }}>
        <div style={{ width: "50%", height: "fit-content", marginLeft: "100px", display: "flex" }}>
          <Menu />
          <Image
            src={erica}
            width={450}
            height={600}
            alt="Picture of dumbo"
          />
        </div>
      </div>

    </>
  )
}