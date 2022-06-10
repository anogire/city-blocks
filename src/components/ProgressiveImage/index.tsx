import * as React from "react";
import './style.css';

interface ImageProps {
    placeholderSrc: string,
    src: string,
    className: string,
    [x:string]: any;
}

export const ProgressiveImage: React.FC<ImageProps> = ({placeholderSrc, src, className, ...props}) => {
    const [imageSrc, setImageSrc] = React.useState(placeholderSrc);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setImageSrc(src);
        setIsLoading(false);
    }, [src]);

    return (
        <div className="image-wrap">
            <img 
                src={imageSrc}
                alt={props.alt || ""}
                className={`${className}${isLoading ? " image-loading" : " image-loaded"}`}
                {...props}
            />
        </div>
    );
}