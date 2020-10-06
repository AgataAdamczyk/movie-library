import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import styles from './Header.module.scss';
import logoImage from '../../assets/images/logo.svg';
import Button from '../Button/Button';

const Header = ({ openModalFn }) => (
    <header className={styles.wrapper}>
        <img className={styles.logo} src={logoImage} alt="MoviesLibrary logo"/>
        <HeaderNavigation/>
        <Button onClick={openModalFn} secondary>Add +</Button>
    </header>

);

export default Header;