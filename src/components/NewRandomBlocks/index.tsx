import * as React from "react";
import { useSelector } from "react-redux";
import { selectBlocks } from "../../store/selectors";

import './style.css';

export const RandomBlocks: React.FC = () => {
    const randomBlocks = useSelector(selectBlocks);

    return (
        <div className="randomContainer">
            {
                randomBlocks.map((block, i) => {
                    return (
                        <div key={i} className="block">
                            {block.value}
                        </div>
                    );
                })
            }
        </div>
    );
}