import { useRef, useState, useEffect } from "react"
import { dfs_xy_conv } from "../utils/latToGrid"

interface ILocation {
  lat: number
  lng: number
  x: number
  y: number
}

const useWatchLocation = (option = {}) => {
  const [location, setLocation] = useState<ILocation>()
  const [error, setError] = useState<string>("")
  const locationWatchId = useRef<number | undefined>()

  const handleSuccess = (pos: GeolocationPosition) => {
    const { latitude, longitude } = pos.coords
    const { lat, lng, x, y } = dfs_xy_conv("toXY", latitude, longitude)
    setLocation({
      lat: lat,
      lng: lng,
      x: x,
      y: y,
    })
  }

  const handleError = (err: GeolocationPositionError) => {
    setError(err.message)
  }

  const cancelWatchLocation = () => {
    const { geolocation } = navigator

    if (locationWatchId.current && geolocation) {
      geolocation.clearWatch(locationWatchId.current)
    }
  }

  useEffect(() => {
    const { geolocation } = navigator

    if (!geolocation) {
      setError("Geolocation is not working")
      return
    }

    locationWatchId.current = geolocation.watchPosition(handleSuccess, handleError, option)

    return cancelWatchLocation
  }, [option])

  return { location, cancelWatchLocation, error }
}

export default useWatchLocation
