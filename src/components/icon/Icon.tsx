import iconsSprite from '../../assets/images/icons-sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    fill?: string
}

export const Icon: React.FC<IconPropsType> = (props:IconPropsType) => {
    return (
        <svg  xmlns="http://www.w3.org/2000/svg"
        fill={props.fill || "#fdc435"} 
        viewBox={props.viewBox || "0 0 256 256" } 
        width={props.width || "120px"} 
        height={props.height || "120px"} >
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};