import dayjs from "dayjs";
import {navIcons, navLinks} from "#constants";

const Navbar = () => {
    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="Logo" />
                <p className="font-bold">Prajwal's Portfolio</p>

                <ul>
                    {navLinks.map(({ id, title }) => (
                        <li key={id}>
                            <p>{title}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
              <ul>
                {navIcons.map(({ id, img }) => (
                  <li key={id}>
                    <img src={img} className="icon-hover" alt={`icon-${id}`} />
                  </li>
                ))}
              </ul>

              <time>{dayjs().format('dddd, DD/MM/YYYY h:mm A')}</time>
            </div>
        </nav>
    )
}
export default Navbar
