import { NextPage } from "next"
import styled from "@emotion/styled"
import useWatchLocation from "../hooks/useWatchLocation"
import KaKaoMap from "../components/mapMarker/KaKaoMap"
import { useEffect } from "react"
import { useGetWeather } from "../apis/weather"

const Main: NextPage = () => {
  const { location, cancelWatchLocation, error } = useWatchLocation()
  const { data: weather, refetch } = useGetWeather(location?.x, location?.y)

  useEffect(() => {
    if (location?.x && location?.y) {
      refetch()
    }
  }, [location])

  return (
    <>
      <div>
        <header></header>
        <section>
          <KaKaoMap location={location} />
        </section>
        <footer></footer>
      </div>
    </>
  )
}

export default Main
