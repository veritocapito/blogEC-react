import { featuredPosts } from "../assets/data"

const Slider = () => {
    return (
        <section className="featured-posts">
            <h1>Novedades Laborales</h1>
            <div className="slider">
                <ul>
                    {
                        featuredPosts.map((post) => {
                            return (
                                <li key={post.id}><img src={post.img} alt={post.name} /><a href={post.href}></a></li>

                            )
                        })
                    }
                </ul>
            </div>
            <div className="nav-posts">
                <a><i className="bi bi-arrow-left"></i></a>
                <a><i className="bi bi-arrow-right"></i></a>
            </div>
        </section>
    )
}

export default Slider
