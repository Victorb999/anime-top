"use client"

import { useState, useLayoutEffect } from "react"

export const AnimeTrailer = ({ trailer }: { trailer: string }) => {
  const [sizeVideo, setSizeVideo] = useState({
    width: 0,
    height: 0,
  })

  useLayoutEffect(() => {
    const handleResize = () => {
      const width =
        window.innerWidth > 600
          ? window.innerWidth * 0.3
          : window.innerWidth - 50
      const height =
        window.innerWidth > 600 ? 315 : (window.innerWidth - 20) * (9 / 16)
      setSizeVideo({ width, height })
    }

    handleResize() // Set initial size

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <iframe
      width={sizeVideo.width}
      height={sizeVideo.height}
      src={`${trailer}&output=embed`}
      data-ruffle-polyfilled="true"
    ></iframe>
  )
}
