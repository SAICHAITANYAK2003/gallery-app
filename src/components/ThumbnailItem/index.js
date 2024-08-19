// Write your code here.
const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumnailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailAltClassName = isActive ? `thumbnail active` : `thumbnail`

  const onClickThumbanil = () => {
    setActiveThumnailId(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button
        type="button"
        className="thubnail-button"
        onClick={onClickThumbanil}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailAltClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
