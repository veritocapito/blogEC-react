const Tag = ({children, link = "#", tagClass = "tag"}) => {
  return (
    <span className={tagClass}><a href={link}>{children}</a></span>
  )
}

export default Tag