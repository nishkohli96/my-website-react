import { Helmet } from 'react-helmet';
import Hi from '@Components/Hi';
import Header from '@Components/Header';
import Footer from '@Components/Footer';

const IndexPage = () => {
    return (
        <div className="fullscreen">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>

            <Header />
            <div className="content">
                <Hi />
            </div>
            <div className="lh:fixed md:fixed bottom-0">
                <Footer />
            </div>
        </div>
    );
};

export default IndexPage;
