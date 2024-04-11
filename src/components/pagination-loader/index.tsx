import React from 'react';
import styles from '@/styles/common.module.css'
import Loader from "@/components/loader";
interface PaginationLoaderProps {

}

export default function PaginationLoader({}: PaginationLoaderProps) {
    return (
        <div className={styles.pagination_loader_container}>
            <div className={styles.pagination_loader}>
                <Loader/>
            </div>
        </div>
    );
}
