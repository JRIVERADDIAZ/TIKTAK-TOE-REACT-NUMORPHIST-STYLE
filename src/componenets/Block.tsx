import React from 'react'
interface BlockProps {
    value?: string | null
    onClick?: () => void;
}
const Block: React.FC<BlockProps> = (props) => {
    return <div>
        <div onClick={props.onClick} className="block">
            <p>
                {props.value}
            </p>
        </div>
    </div >

}

export default Block