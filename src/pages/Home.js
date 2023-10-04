import InstagramPostEmbed from '@Components/InstagramPostEmbed';
import InstagramPosts from '@Constants/InstagramPosts';

const IndexPage = () => {
  document.title = 'Home';

  return (
    <div className="content">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="col-span-1 mx-auto my-auto sm:text-center">
          <div className="text-2xl font-bold md:text-5xl my-5">
            Hi There&nbsp;
            <span role="img" aria-label="hi">
              👋
            </span>
          </div>
          <div className="sub-heading font-semibold my-5  md:mt-10">
            Nice to meet you.
          </div>
          <div className="text-lg lg:text-xl lg:leading-relaxed leading-8 sm:px-12">
            Myself Nishant. I am a Self-taught&nbsp;
            <span role="img" aria-label="graduate">
              👨‍🎓
            </span>
            &nbsp;FullStack Developer with{' '}
            <span className="text-red-400">5 years of experience</span>.
            <div className="hreflink no-underline">
              <a
                href="https://bold.pro/my/nishkohli96"
                target="_blank"
                rel="noreferrer"
              >
                You can view my Resume here.
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto col-span-1 md:pt-10 respdiv">
          <p className="text-lg lg:text-xl lg:leading-relaxed mt-5 leading-8">
            My core skillset includes React and NodeJS along with relevant
            experience in Express, Fastify, MongoDB, PostgreSQL etc. I love
            playing around with new libraries and frameworks.
          </p>
          <p className="text-lg lg:text-xl lg:leading-relaxed mt-5 leading-8">
            Besides that, I love travelling &nbsp;
            <span role="img" aria-label="travel">
              ✈
            </span>
            , watching movies &nbsp;
            <span role="img" aria-label="tv">
              📺
            </span>
            , listening music &nbsp;
            <span role="img" aria-label="music">
              🎸
            </span>
            , playing video games &nbsp;
            <span role="img" aria-label="games">
              🎮
            </span>
            , hanging out with friends &nbsp;
            <span role="img" aria-label="friends">
              👨‍👦‍👦
            </span>
            &nbsp; and much more...
          </p>
        </div>
      </div>
      <div className="text-center my-10 px-4 md:px-20">
        <div className="bg-gray-600 rounded-lg p-4">
          <span className="text-yellow-400 text-3xl">
            " I've travelled extensively across India from the mountains{' '}
            <span role="img" aria-label="mountains">
              ⛰️
            </span>{' '}
            of Ladakh and the valleys of Kashmir{' '}
            <span role="img" aria-label="flowers">
              🌼
            </span>{' '}
            , to the beaches{' '}
            <span role="img" aria-label="mountains">
              🏖️
            </span>{' '}
            of Rameswaram and Kanyakumari{' '}
            <span role="img" aria-label="palm tree">
              🌴
            </span>{' '}
            "
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:px-5 md:grid-cols-2 gap-10">
        {InstagramPosts.map((post, idx) => (
          <div className="flex justify-center" key={idx}>
            <InstagramPostEmbed postLink={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
