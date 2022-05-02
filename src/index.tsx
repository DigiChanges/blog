import { Router } from 'solid-app-router';
import { MountableElement, render } from 'solid-js/web';
import App from './App';

render( () => (
    <Router>
        <App />
    </Router>
), document.getElementById( 'root' ) as MountableElement
);
