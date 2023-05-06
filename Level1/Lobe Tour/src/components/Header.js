import { useState } from "react";
import Logo from "../images/Lobe_logo.png";
import Open from "../images/Hamburger.svg";
import Close from "../images/Close.svg";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const ToggleNav = () => setOpenMenu(!openMenu);

    return (
        <header className="header">
            <a href="https://www.lobe.ai/"><img src={Logo} alt="Lobe homepage" className="header--logo"/></a>
            <button aria-label={!openMenu ? "Open menu" : "Close menu"} aria-expanded={!openMenu ? "false" : "true"} aria-haspopup="true" className="header--menu--button" onClick={ToggleNav}>
                <img src={!openMenu ? Open : Close} alt=""/>
            </button>
            <nav className="header--nav" aria-label="Header">
                <ul role="menubar" className={`header--nav--ul ${!openMenu ? "" : "show"}`}>
                    <li role="none" className="header--nav--ul--li--link1"><a href="https://www.lobe.ai/">Overview</a></li>
                    <li role="none"><a role="menuitem" href="https://www.lobe.ai/examples">Examples</a></li>
                    <li role="none"><a role="menuitem" href="https://www.lobe.ai/tour" className="header--nav--ul--tour--link">Tour</a></li>
                    <li role="none"><a role="menuitem" href="https://www.lobe.ai/blog">Blog</a></li>
                    <li role="none"><a role="menuitem" href="https://www.lobe.ai/docs/welcome/welcome">Help</a></li>
                    <li role="none" className="header--nav--ul--li--download"><button className="header--nav--ul--download--link">Download</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;