import * as React from "react";
import cn from "classnames";

import './style.css';

interface ImageProps {
    placeholderSrc: string,
    src: string,
    classes: string,
    [x:string]: any;
}

export const ProgressiveImage: React.FC<ImageProps> = ({placeholderSrc, src, classes, ...props}) => {
    const [imageSrc, setImageSrc] = React.useState(placeholderSrc);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useMemo(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setImageSrc(src);
        setIsLoading(false);
    }, [src]);

    return (
        <div className="image-wrap">
            <img
                src={imageSrc}
                className={cn(classes, {
                    "image-loading": isLoading,
                    "image-loaded": !isLoading,
                })}
                alt={props.alt || ""}
                {...props}
            />
        </div>
    );
}