"use client"

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useCallback, useState } from "react"
// import { google } from "google-maps"

const containerStyle = {
  width: "100%",
  height: "400px",
}

const center = {
  lat: 23.72,
  lng: 90.39,
}

// Mock data for riders
const riders = [
  { id: 1, lat: 23.76, lng: 90.39, name: "John Smith" },
  { id: 2, lat: 23.72, lng: 90.40, name: "Sarah Johnson" },
  { id: 3, lat: 23.72, lng: 90.41, name: "Mike Davis" },
  { id: 4, lat: 23.73, lng: 90.39, name: "Emily Chen" },
  { id: 5, lat: 23.72, lng: 90.39, name: "David Wilson" },
]

export function RiderLiveLocation() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!, // Placeholder for API key
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map: any) {
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">Live Rider Locations</CardTitle>
        <CardDescription className="text-[#6A7282]">Real-time tracking of all active riders</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg overflow-hidden border">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={14}
              onLoad={onLoad}
              onUnmount={onUnmount}
              options={{
                styles: [
                  {
                    featureType: "all",
                    elementType: "geometry",
                    stylers: [{ color: "#f5f5f5" }],
                  },
                  // ... you can add more styles to match the grayscale look in image
                ],
                disableDefaultUI: true,
                zoomControl: true,
              }}
            >
              {riders.map((rider) => (
                <Marker
                  key={rider.id}
                  position={{ lat: rider.lat, lng: rider.lng }}
                  icon={{
                    url: "/rider_icon.png",
                    scaledSize: new google.maps.Size(30, 30),
                  }}
                  title={rider.name}
                />
              ))}
            </GoogleMap>
          ) : (
            <div className="h-[400px] w-full bg-muted animate-pulse flex items-center justify-center">
              Loading Map...
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
