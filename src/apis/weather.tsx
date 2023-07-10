import axios from "axios"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect, useState } from "react"

const ServiceKey = process.env.NEXT_PUBLIC_WEATHER_API_SERVICE_KEY

export const useGetWeather = (x = 0, y = 0) => {
  const queryClient = useQueryClient()
  const fetch = async (): Promise<Response> =>
    (
      await axios.get(
        "http://apis.data.go.kr/13ㅈ60000/VilageFcstInfoService_2.0/getUltraSrtNcst",
        {
          params: {
            serviceKey: ServiceKey,
            pageNo: "1",
            numOfRows: "1000",
            dataType: "JSON",
            base_date: "20230707",
            base_time: "0600",
            nx: x,
            ny: y,
          },
        },
      )
    ).data

  return useQuery(["short term weather"], () => fetch(), {
    onSuccess: () => {
      queryClient.invalidateQueries(["short term weather"])
    },
  })
}
