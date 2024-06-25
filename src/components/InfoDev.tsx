export default function InfoDev() {
    return (
        <footer className="w-full bg-primary text-white p-2">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <ul className="flex gap-4">
                        <li>
                            <a
                                href="https://www.linkedin.com/in/juancruzgimenez/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary hover:text-third"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/Jcgimenez"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary hover:text-third"
                            >
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="text-center md:text-right">
                    <p>&copy; {new Date().getFullYear()} Juan Cruz Gimenez. Todos los derechos reservados.</p>
                    <p>
                        Hecho con <span className="text-secondary">❤</span> en Argentina.
                    </p>
                </div>
            </div>
        </footer>
    );
}
