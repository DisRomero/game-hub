import React from 'react'
import useAlbums from '../hooks/useAlbums'

const AlbumList = () => {
    const {albums} = useAlbums();
  return (
    <>
    <ul>
        {albums.map(album => 
        <li key={album.albumId}> {album.albumId}</li>)}
    </ul>
    </>
  )
}

export default AlbumList