import { Map, MapMarker } from "react-kakao-maps-sdk"

const KaKaoMap = ({ location = { lat: 0, lng: 0 } }) => {
  return (
    <>
      <Map
        center={location}
        style={{ width: "550px", height: "700px" }}
        level={5}
      >
        <MapMarker position={location} />
      </Map>
    </>
  )
}

export default KaKaoMap
