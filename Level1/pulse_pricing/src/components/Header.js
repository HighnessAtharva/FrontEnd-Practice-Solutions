import Logo from "../images/pulse-logo.svg";
import Menu from "../images/icon-menu.svg";
import { useState } from "react";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const ToggleNav = () => setOpenMenu(!openMenu);

    return (
        <header>
            <a href="https://pulseapp.com/" className="logo--link"><img src={Logo} alt="Go to homepage"/></a>
            <button aria-label={!openMenu ? "Open menu" : "Close menu"} aria-expanded={!openMenu ? "false" : "true"} aria-haspopup="true" className="header--mobile--menu--toggle" onClick={ToggleNav}>
                <img src={Menu} alt=""/>
            </button>
            <nav className="header--nav" aria-label="Header">
                <ul role="menubar" className={`header--nav--ul ${!openMenu ? "" : "show"}`}>
                    <li role="none"><a role="menuitem" href="https://pulseapp.com/features" className="header--nav--ul--link link--one">Features</a></li>
                    <li role="none"><a role="menuitem" href="https://pulseapp.com/customer-stories" className="header--nav--ul--link link--two">Customer Stories</a></li>
                    <li role="none"><a role="menuitem"href="https://pulseapp.com/pricing" className="header--nav--ul--link link--three">Pricing</a></li>
                    <li role="none"><a role="menuitem" href="https://pulseapp.com/blog" className="header--nav--ul--link link--four">Blog</a></li>
                    <li role="none" className="invisible--li"><a role="menuitem" href="https://pulseapp.com/contact" className="header--nav--ul--link link--five header--nav--ul--invisible">Contact</a></li>
                    <li role="none" className="invisible--li"><a role="menuitem" href="https://help.pulseapp.com" className="header--nav--ul--link link--six header--nav--ul--invisible">Support</a></li>
                    <li role="none" className="header--nav--ul--li--sign-up"><a role="menuitem" href="https://signup.pulseapp.com/plus" className="header--nav--ul--sign-up">Sign Up</a></li>

                </ul>
            </nav>
        </header>
    )
}

export default Header;