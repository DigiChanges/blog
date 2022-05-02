import { Component } from 'solid-js';
import Title from '../atoms/Title';
import ButtonIcon from '../molecules/ButtonIcon';

interface TitleWithButtonProps
{
    title?: string | HTMLElement | ( string | HTMLElement )[];
    icon: any;
    labelButtonName?: string | HTMLElement | ( string | HTMLElement )[];
    class: string;
    path: string;
    buttonAction?: any;
}

const TitleWithButton: Component<TitleWithButtonProps> = ( props ) =>
    <section class="flex flex-row justify-between mb-2">
        <Title class={props.class} titleType="h4">
            {props.title}
        </Title>
        <ButtonIcon
            icon={props.icon}
            labelName={props.labelButtonName as string}
            path={props.path}
        />
    </section>;

export default TitleWithButton;
