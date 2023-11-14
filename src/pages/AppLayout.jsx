import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import {app} from './AppLayout.module.css'

function AppLayout() {
    return (
        <div className={app}>
            <Sidebar />
            <Map />
        </div>
    )
}

export default AppLayout
