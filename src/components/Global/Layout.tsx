import { FC, ReactNode, useState, useEffect } from 'react';

import Loader from './Loader';
import SideBar from './SideBar';

type Props = {children: ReactNode}

const Layout: FC<Props> = ({children}) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    return (
        <main className="main" id="main">
            <Loader isLoading={isLoading} />
            {children}
            <SideBar />
        </main>
    );
}

export default Layout;