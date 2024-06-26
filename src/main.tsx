import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path={'/'} element={<App/>}/>
            </Routes>
        </Provider>
    </BrowserRouter>
)
