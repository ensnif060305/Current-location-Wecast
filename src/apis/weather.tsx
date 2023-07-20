import axios from "axios"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { Response } from "./type"

const BaseURL =  process.env.NEXT_PUBLIC_WEATHER_API_BASE_URL
const ServiceKey = process.env.NEXT_PUBLIC_WEATHER_API_SERVICE_KEY

export const useGetWeather = (boo: boolean, data: { x: number; y: number }) => {
  const queryClient = useQueryClient()
  const fetch = async (): Promise<Response> =>
    await axios.get(`${BaseURL}/getVilageFcst`, {
      params: {
        serviceKey: ServiceKey,
        pageNo: "1",
        numOfRows: "1000",
        dataType: "JSON",
        base_date: "20230710",
        base_time: "0830",
        nx: data.x,
        ny: data.y,
      },
    })

  return useQuery(["short term weather", data.x, data.y], () => fetch(), {
    enabled: boo,
    onSuccess: () => {
      queryClient.invalidateQueries(["short term weather"])
    },
  })
}
