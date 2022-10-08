import { FC } from 'react';
type Props = {isLoading: boolean};

const Loader: FC<Props> = ({isLoading}) => {
    return (
        <div className={`preloader ${isLoading ? 'show' : ''}`}>
            <div className="preloader__row">
                <div className="preloader__item"></div>
                <div className="preloader__item"></div>
            </div>
        </div>
    );
}

export default Loader;