import { useEffect } from 'react';
import Hi from '@Components/Hi';
import Footer from '@Components/Footer';

const IndexPage = () => {
    useEffect(() => {
        document.title = `Home`;
    }, []);

    return (
        <div>
            <div className="content">
                <Hi />
            </div>
            <div className="mobile:fixed md:fixed bottom-0">
                <Footer />
            </div>
        </div>
    );
};

export default IndexPage;
