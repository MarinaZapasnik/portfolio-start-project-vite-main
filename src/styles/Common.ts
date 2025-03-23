import { theme } from "./Theme"

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: string
    Fmin?: number
    Fmax?: number
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || "Nunito"};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.headLine};
    line-height: ${lineHeight || "150%"};
    font-size: calc((100vw - 376px)/(1440 - 376) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`