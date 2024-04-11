import React from 'react';
import loader_styles from './loader.module.css'
interface LoaderProps {

}

export default function Loader({}: LoaderProps) {
    return (
        <div className={loader_styles.loader}></div>
    );
}
