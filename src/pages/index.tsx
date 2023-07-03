import { NextPage } from "next"
import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import useWatchLocation from "@/hooks/useWatchLocation"
import KaKaoMap from "@/components/mapMarker/mapMarker"

const Main: NextPage = () => {
  const { location, cancelWatchLocation, error } = useWatchLocation()

  return (
    <>
      <div>
        <header></header>
        <section>
          <div>{location?.latitude}</div>
          <div>{location?.longitude}</div>
          <KaKaoMap />
        </section>
        <footer></footer>
      </div>
    </>
  )
}

export default Main
