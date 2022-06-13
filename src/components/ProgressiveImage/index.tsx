import * as React from "react";
import './style.css';

const classNames = require('classnames');

interface ImageProps {
    placeholderSrc: string,
    src: string,
    className: string,
    [x:string]: any;
}

export const ProgressiveImage: React.FC<ImageProps> = ({placeholderSrc, src, className, ...props}) => {
    const [imageSrc, setImageSrc] = React.useState(placeholderSrc);
    const [isLoading, setIsLoading] = React.useState(true);
    const imageClasses = classNames(className, isLoading && "image-loading", !isLoading && "image-loaded");

    React.useMemo(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setImageSrc(src);
        setIsLoading(false);
    }, [src]);

    return (
        <div className="image-wrap">
            <img src={imageSrc} className={imageClasses} alt={props.alt || ""} {...props} />
        </div>
    );
}