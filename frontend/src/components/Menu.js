import React, { useEffect } from "react";
import '../styles/Menu.scss';

const Menu = props => {
    const toggleMenu = () => {
        const burgerMenu = document.querySelector(".menu-icon");
        if (!burgerMenu) {
            console.log("Menu icon element not found.");
            return;
        }

        const src = burgerMenu.getAttribute('src');
        const iconName = src === '../shared/monkey_meme.png'
            ? '../shared/monkey_meme.png'
            : '../shared/monkey_meme.png';

        burgerMenu.setAttribute('src', iconName);

        const navigation = document.querySelector('.navigation');
        navigation.classList.toggle('navigation--mobile');
    };

    useEffect(() => {
        const burgerMenu = document.querySelector(".menu-icon");
        burgerMenu.addEventListener('click', toggleMenu);
        
        return () => {
            burgerMenu.removeEventListener('click', toggleMenu);
        };
    }, []);

    return (
        <>
        <div className="menu__bar">
            <div className="menu__left">
                <img
                    className="logo"
                    src="../shared/monkey_meme.png"
                    alt="Logo"
                />
            </div>
            <img
                    className="menu-icon"
                    src="../shared/monkey_meme.png"
                    title='Burger Menu'
                    alt='Burger Menu'
                    onClick={toggleMenu(this)}
            />
            <div className="menu__right">
                <ul className="navigation">
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/rules">Rules</a></li>
                    <li><a href="/speakers">Speakers</a></li>
                    <li><a href="/sponsors">Sponsors</a></li>
                    <li><a href="/submit">Submit</a></li>
                    <li><a href="/login">Register/Login</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Menu;