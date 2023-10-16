import Menu from "./shared/Menu";

export default function Home() {

  return (
    <>
    <div style={{display: "flex", justifyContent: "space-between", backgroundColor: "#F6C6CF", width: "auto", height: "fit-content", border: "8px solid #0F2CA0", marginBottom: "20px" }}>
      <div style={{ width: "50%", height: "auto", marginLeft: "100px" }}>
        <Menu/>
      </div>
    </div>
    
    </>
  )
}