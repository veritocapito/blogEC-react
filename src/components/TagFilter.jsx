
const TagFilter = ({ href = "#", isSelected , name}) => {
  return (
    <a
      href={href}
      className={`tag-name ${isSelected ? 'tag-selected' : ''}`}
    >{name}</a>
  )
}

export default TagFilter