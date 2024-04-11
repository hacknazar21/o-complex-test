import React from 'react';
import styles from './header.module.css'

interface HeaderProps {

}

export default function Header({}: HeaderProps) {
    return (
        <div className={styles.header}>
            <h1 className={styles.header__text}>Тестовое задание</h1>
        </div>
    );
}
