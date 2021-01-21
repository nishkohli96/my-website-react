import { useEffect } from 'react';
import Footer from '@Components/Footer';
import nish from '@Images/nish.jpg';

const About = () => {
    useEffect(() => {
        document.title = `About`;
    }, []);

    return (
        <div>
            <div className="content grid grid-cols-1 lg:grid-cols-2 gap-2">
                <div className="mx-auto">
                    <img
                        className="rounded-full w-40 h-40 md:w-60 md:h-60 mx-auto"
                        src={nish}
                        alt="nish"
                    />
                    <div className="mx-auto mt-10">
                        <p className="mb-5 text-lg md:text-xl respdiv lg:max-w-lg lg:leading-relaxed leading-8">
                            <span className="text-red-600 text-3xl">I</span> was
                            born in June 1996 in Ludhiana, Punjab{' '}
                            <span className="text-yellow-300">
                                ( Punjabi in the house !!! )
                            </span>
                            . I also spent some of my childhood in Amritsar, but
                            completed most of my education in Ludhiana itself.
                            Both of my parents are doctors.
                        </p>
                    </div>
                </div>

                <div className="respdiv lg:max-w-lg m-auto">
                    <p className="mb-5 text-lg md:text-xl leading-8 lg:leading-relaxed">
                        I completed my B.Tech in Computer Science from Manipal
                        Institute of Technology in 2018. Worked for 2 years in
                        LTTS, and currently I work with
                        <span className="hreflink">
                            <a
                                href="https://www.storydigital.in/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Story Digital
                            </a>
                        </span>
                        .
                    </p>
                    <p className="mb-3 text-lg md:text-xl leading-8 lg:leading-relaxed">
                        At present, I aspire to continue learning new
                        technologies and improve existing skillset while
                        maintaining a decent work-life balance. I love
                        interacting with people and learn from their knowledge
                        and experiences.
                    </p>
                </div>
            </div>

            <div className="mt-10 md:fixed bottom-0">
                <Footer />
            </div>
        </div>
    );
};

export default About;
