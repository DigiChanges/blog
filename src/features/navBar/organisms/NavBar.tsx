import { Component, Show } from 'solid-js';
import logoNav from '../../../assets/images/logo-nav.png';
import IconBell from '../../../atoms/Icons/Stroke/IconBell';
import IconBurger from '../../../atoms/Icons/Stroke/IconBurger';
import IconCross from '../../../atoms/Icons/Stroke/IconCross';
import Image from '../../../atoms/Image';
import LanguageMenu from '../../language/LanguageMenu';

interface NavbarTemplatePRops {
    email?: string;
    onClick?: ( event: MouseEvent ) => void;
    permissionsList?: string[];
    sideBarIsShown: boolean;
}

const NavBar: Component<NavbarTemplatePRops> = props =>
{
    return (
        <nav class=" shadow-md text-white " >
            <div class="mx-auto px-2 sm:px-6 lg:px-8">
                <div class="dg-full-center-flex h-16">

                    <div class="flex-1 flex items-start justify-start sm:items-stretch sm:justify-start">
                        <a href="/" class="flex-shrink-0 flex items-center cursor-pointer gap-5">
                            <Image src={logoNav} alt="digichanges logo" class="block h-8 w-auto"/>
                            <h2 class="text-gray-400">BLOG</h2>
                        </a>
                    </div>

                    <LanguageMenu />

                    <div class="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button class="p-1 rounded-full text-gray-400 hover:text-white h-8 w-8 hidden md:block lg:block">
                            <span class="sr-only">View notifications</span>
                            <span>
                                <span class="ml-1 animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-600 opacity-75 " />
                                <span class="ml-1 absolute inline-flex rounded-full h-2 w-2 bg-blue-500" />
                                <span class=""><IconBell /></span>
                            </span>
                        </button>
                    </div>

                    <div class="inset-y-0 p-3 right-0 flex items-center md:hidden">
                        <button
                            onClick={props.onClick}
                            type="button"
                            class="items-center justify-center rounded-md text-gray-400 hover:text-white w-6 h-6"
                        >
                            <span class="sr-only">Open Main Menu</span>
                            <Show when={!props.sideBarIsShown} fallback={ <IconCross /> }>
                                <IconBurger/>
                            </Show>
                        </button>
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default NavBar;
