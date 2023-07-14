import { NextPage } from "next"
import styled from "@emotion/styled"
import useWatchLocation from "../hooks/useWatchLocation"
import KaKaoMap from "../components/mapMarker/KaKaoMap"
import { useEffect, useState } from "react"
import { useGetWeather } from "../apis/weather"
import { isNullishCoalesce } from "typescript"

export interface Type {
  x: number
  y: number
}

const Main: NextPage = () => {
  const [fetching, setFetching] = useState<boolean>(false)
  const [data, setData] = useState<Type>({
    x: 0,
    y: 0,
  })

  const { location, cancelWatchLocation, error } = useWatchLocation()
  const { data: weather, refetch } = useGetWeather(fetching, data)

  useEffect(() => {
    if (location?.x && location.y) {
      if (data.x != location?.x && data.y != location?.y) {
        setData({
          x: location.x,
          y: location.y,
        })
        setFetching(true)
        refetch()
      } else {
        setFetching(false)
      }
    }
  }, [data.x, data.y, location, weather])

  return (
    <>
      <div>
        <header></header>
        <section>
          <KaKaoMap location={location} />
          {weather?.body?.items?.item?.map(e => (
            <div key={e.category}>{e.obsrValue}</div>
          ))}
        </section>
        <footer></footer>
      </div>
    </>
  )
}

export default Main
