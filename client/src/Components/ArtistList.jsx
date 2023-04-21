import React, { useState, useEffect } from 'react'
import ArtistList from './ArtistList'

function ArtistList() {
  const [artists, setArtists] = useState([])

  useEffect(() => {
    const fetchArtists = async () => {
      const response = await fetch('http://localhost:3001/artists')
      const data = await response.json();
      setArtists(data)
    }
    fetchArtists()
  }, [])

  return (
    <div>
      {artists.map(artist => (
        <ArtistCard
          key={artist.id}
          name={artist.name}
          age={artist.age}
          image={artist.image_url}
        />
      ))}
    </div>
  )
}

export default ArtistList