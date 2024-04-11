import React from 'react';
import styles from './review.module.css'
import {Review} from '@/types';
import xss from "xss";

interface HeaderProps {
    review: Review
}

export default function Review({
    review
                               }: HeaderProps) {
    const sanitizedReviewText = () => ({
        __html: xss(review.text)
    })

    return (
        <div dangerouslySetInnerHTML={sanitizedReviewText()} className={styles.review}/>
    );
}
