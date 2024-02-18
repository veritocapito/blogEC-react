

const NewsForm = () => {
    return (
        <aside>
            <form id="subcribirse">
                <h2 className="form-title">¿Queres recibir novedades por email? Suscribite!</h2>
                <label htmlFor="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required />

                <label htmlFor="telefono">Telefono Móvil:</label>
                <input type="tel" id="telefono" name="telefono" required />

                <label htmlFor="comoNosConociste">¿Cómo nos conociste?</label>
                <select id="comoNosConociste" name="comoNosConociste" required>
                    <option value="">Elegí una opción...</option>
                    <option value="redesSociales">C.P.C.E.C.A.B.A.</option>
                    <option value="colega">Recomendación de un Colega</option>
                    <option value="google">Búsqueda en Google</option>
                    <option value="instagram">Publicidad en Instagram</option>
                </select>

                <label className="confirmaSubscripcion">
                    <input type="checkbox" name="confirmaSubscripcion" required />
                    Si, acepto recibir novedades por email de Estudio Capobianco.
                </label>
                <input type="submit" value="Suscribirse" />
            </form>
        </aside>
    )
}

export default NewsForm
