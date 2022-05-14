import { Image } from '../types/map';
export interface ImageButtonTabProps {
    img: Image;
    title?: string;
    onClickButton: any;
}
declare const ImageButtonTab: ({ img, title, onClickButton }: ImageButtonTabProps) => JSX.Element;
export default ImageButtonTab;
