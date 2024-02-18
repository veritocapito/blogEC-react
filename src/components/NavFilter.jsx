import TagFilter from "./TagFilter"
import { tagList } from "../assets/data"

const NavFilter = () => {

    return (
        <nav className="tags-filter">
            <ul className="nav-list">
                {
                    tagList.map((tag, id) => (<li key={id}><TagFilter {...tag} /></li>))
                }
            </ul>
            <input type="text" name="search" id="search" placeholder="Buscar" />
        </nav>
    )
}

export default NavFilter
