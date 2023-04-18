import "./Footer.scss"
import { FaGithub, FaLinkedin } from "react-icons/fa"
export const Footer = () => {

    return (
        <footer className="footer">
            <div>
                <p className="copyright">&copy; 2023 | Martial Geeks</p>
                <div className="author-container">
                <p className="author">
                    Desarrollado por Beyker Estrada     |
                </p>
                <ul>
                    <li>
                        <a href="https://github.com/beykerestrada">
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/beykerestrada/">
                            <FaLinkedin />
                        </a>
                    </li>
                </ul>
                </div>
            </div>
        </footer>
    )
}