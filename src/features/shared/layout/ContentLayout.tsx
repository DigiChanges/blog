// import GeneralLoader from '../../atoms/GeneralLoader';
// import GeneralToast from '../../atoms/GeneralToast';
import { Component } from 'solid-js';

const ContentLayout: Component = ( props ) =>
{
    // const { isLoading, notification } = useSelector( ( state : any ) => state.General );

    return (
        <div class="text-gray-700 body-font bg-gray-900 h-screen flex justify-center items-center">
            {/* {isLoading && (*/ }
            {/*    <GeneralLoader*/}
            {/*        cssScreenContainer='fixed w-screen h-screen bg-black bg-opacity-75 top-0 bottom-0 right-0 left-0 z-50 flex justify-center items-center'*/}
            {/*        cssSpinnerContainer='pt-10 pb-10 pl-12 pr-12'*/}
            {/*        cssSpinner='text-center pt-4 text-white text-xl'/>*/}
            {/* )}*/ }
            {/* {notification && (*/}
            {/*    <GeneralToast*/}
            {/*        type={notification.type}*/}
            {/*        msg={notification.message}/>*/}
            {/* )} */}
            {props.children}
        </div>
    );
};

export default ContentLayout;
