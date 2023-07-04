import { useRef, useState, useEffect } from "react"

interface ILocation {
  lat: number
  lng: number
}

const useWatchLocation = (option = {}) => {
  const [location, setLocation] = useState<ILocation>()
  const [error, setError] = useState<string>("")
  const locationWatchId = useRef<number | undefined>()

  const handleSuccess = (pos: GeolocationPosition) => {
    const { latitude, longitude } = pos.coords
    setLocation({
      lat: latitude,
      lng: longitude,
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

    locationWatchId.current = geolocation.watchPosition(
      handleSuccess,
      handleError,
      option,
    )

    return cancelWatchLocation
  }, [option])

  return { location, cancelWatchLocation, error }
}

export default useWatchLocation
