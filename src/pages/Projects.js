import { useEffect } from 'react';
import Footer from '@Components/Footer';
import ProjectItem from '@Components/ProjectItem';
import { ProjectsList } from '@Constants/ProjectsList';

const Projects = () => {
    useEffect(() => {
        document.title = `Projects`;
    }, []);

    return (
        <div>
            <div className="content">
                <div className="text-center">
                    <p className="sub-heading mb-5 text-red-400">
                        Glad to share some of my works with you...
                    </p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
                    {ProjectsList.map((proj) => (
                        <div className="col-span-1 m-auto" key={proj.name}>
                            <ProjectItem project={proj} />
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-lg md:text-xl text-yellow-400 mt-5">
                        There&apos;s always something interesting brewing in my
                        &nbsp;
                        <span className="hreflink">
                            <a
                                href="https://github.com/nishkohli96"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Github
                            </a>
                        </span>
                    </p>
                </div>
            </div>
            <div className="mt-10 md:fixed bottom-0">
                <Footer />
            </div>
        </div>
    );
};

export default Projects;
