import { NextPage } from "next"
import styled from "@emotion/styled"
import useWatchLocation from "@/hooks/useWatchLocation"
import KaKaoMap from "../components/mapMarker/KaKaoMap"
import axios from "axios"
import { useEffect } from "react"

const Main: NextPage = () => {
  const { location, cancelWatchLocation, error } = useWatchLocation()
  
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
