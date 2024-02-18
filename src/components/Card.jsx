import Tag from "./Tag"

const Card = ({ imgId, className="card", tags, title, date, description, authorImg, authorName, readingTime  }) => {
    return (
        <div className={className}>
            <figure>
                <img src={`src/img/posts/${imgId}`} alt="Imagen ilustrativa" loading="lazy" />
            </figure>
            <section>
                <header>
                    <div className="tags">
                        {tags?.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
                    </div>
                </header>
                <h2 className="title"><a href="./src/post.html">{title}</a></h2>
                <time className="" dateTime={date}>{date}</time>
                <p>{description}</p>
                <footer>
                    <div className="author">
                        <img src={`src/img/avatars/${authorImg}`} alt="Avatar del Autor" />
                        <span>{authorName}</span>
                    </div>
                    <span className="reading-time">{readingTime}</span>
                </footer>
            </section>
        </div>
    )
}

export default Card
