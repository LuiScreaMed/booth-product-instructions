import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from "./styles.module.css";
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

/**
 * 商品说明书内容
 * @param {ProductItemInfo} info
 * @param {ProductShiftColor} shiftColor
 * @returns 
 */
function ProductContent(info, shiftColor) {
    return (
        <div className={styles.productContent}>
            <img src={`/booth-product-instructions/img/products/${info.name}.webp`} className={styles.productImage} />
            <div className={styles.productShift} style={shiftColor && { backgroundColor: shiftColor.avgColor, color: shiftColor.textColor }}>
                <p className={styles.productName}>
                    {info.displayName}
                </p>
                <a href={`https://luistudio.booth.pm/items/${info.booth}`} className={styles.productBoothLink}>
                </a>
            </div>
            <Link to={`/docs/${info.name}`} className={styles.productDocLink}>
            </Link>
        </div>
    );
}

function Loading() {
    return (
        <div className={styles.loading}>
        </div>
    );
}

/**
 * 
 * @param {string} imageUrl 
 * @returns {Promise<ProductShiftColor>}
 */
function getAverageColor(imageUrl) {
    return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.src = imageUrl;

        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // 设置 Canvas 尺寸为 64x64
            canvas.width = 64;
            canvas.height = 64;

            // 将图片缩小为 64x64 并绘制到 Canvas 上
            ctx.drawImage(img, 0, 0, 64, 64);

            // 获取图片的平均颜色
            const imageData = ctx.getImageData(0, 0, 64, 64).data;
            let r = 0, g = 0, b = 0;

            for (let i = 0; i < imageData.length; i += 4) {
                r += imageData[i];
                g += imageData[i + 1];
                b += imageData[i + 2];
            }

            const pixelCount = imageData.length / 4;
            const avgR = Math.round(r / pixelCount);
            const avgG = Math.round(g / pixelCount);
            const avgB = Math.round(b / pixelCount);

            const avgColor = `rgb(${avgR}, ${avgG}, ${avgB})`;
            const luminance = 0.299 * avgR + 0.587 * avgG + 0.114 * avgB;
            const textColor = luminance > 128 ? '#000' : '#fff';

            resolve({ avgColor, textColor });
        };

        img.onerror = () => {
            resolve(undefined);
        };
    });
};

/**
 * 商品说明书项，点击后跳转到说明书文档，点击booth按钮跳转到booth商品页
 * @param {ProductItemInfo} info
 * @returns 
 */
export default function ProductItem(info) {
    const [productShiftColor, setProductShiftColor] = useState(undefined);
    const [isVisible, setIsVisible] = useState(false);

    // 视图判断，用于懒加载
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    // 是否进入视图，如果进入视图，则加载图片，加载完成后显示商品
    useEffect(() => {
        if (inView) {
            getAverageColor(`/booth-product-instructions/img/products/${info.name}.webp`).then(result => {
                setProductShiftColor(result);
                setIsVisible(true);
            });
        }
    }, [inView]);

    return (
        <div ref={ref} className={`${styles.productItem} ${isVisible ? styles.transparentBackground : ''}`}>
            {isVisible && ProductContent(info, productShiftColor)}
        </div>
    );
}