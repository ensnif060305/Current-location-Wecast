import { useEffect } from "react"
import { Map, MapMarker } from "react-kakao-maps-sdk"

declare global {
  interface Window {
    kakao: any
  }
}

const KaKaoMap = ({ location = {} }) => {
  return (
    // <div>
    //   <div id="map" style={{ width: "500px", height: "400px" }}></div>
    // </div>
    <>
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }} // 지도의 중심 좌표
        style={{ width: "800px", height: "600px" }} // 지도 크기
        level={3}
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}> </MapMarker>
      </Map>
    </>
  )
}

export default KaKaoMap
