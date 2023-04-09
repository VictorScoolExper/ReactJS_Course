import { Outlet, useNavigation } from "react-router-dom";

import MainNavigation from '../components/MainNavigation';

function RootLayout(){
    // const navigation = useNavigation();

    return(
        <>
            <MainNavigation />
            <main>
                {/* notifies user content is loading */}
                {/* {navigation.state === 'loading' && <p>Loading..</p>} */}
                <Outlet/>
            </main>
        </>
    )
}

export default RootLayout;