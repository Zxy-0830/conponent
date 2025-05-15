

function Gallery({photos}) {
  return (
   <div className="photos">
          <div className="photo-grid">
            {photos.map(photo => (
              < img key={photo.id} src={photo.img} alt={`Photo ${photo.id}`} />
            ))}
          </div>
    </div>
  )
}

export default Gallery;