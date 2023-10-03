const Hi = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 pb-5">
      <div className="col-span-1 mx-auto my-auto">
        <p className="text-2xl font-bold md:text-5xl my-5">
          Hi There&nbsp;
          <span role="img" aria-label="hi">
            👋
          </span>
        </p>
        <p className="sub-heading font-semibold my-5  md:mt-10">
          Nice to meet you.
        </p>
      </div>
      <div className="mx-auto col-span-1 md:pt-10 respdiv">
        <p className="text-lg lg:text-xl lg:leading-relaxed leading-8">
          Myself Nishant. I am a Self-taught&nbsp;
          <span role="img" aria-label="graduate">
            👨‍🎓
          </span>
          &nbsp;FullStack Developer with two years of experience.
        </p>
        <p className="text-lg lg:text-xl lg:leading-relaxed mt-5 leading-8">
          My core skillset includes ReactJS and React-Native along with relevant
          experience in NodeJS, Express, Fastify, MongoDB etc. I love playing
          around with new libraries and frameworks.
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
          , listening music &#127925;, playing video games &nbsp;
          <span role="img" aria-label="games">
            🎮
          </span>
          , hanging out with friends &nbsp;
          <span role="img" aria-label="friends">
            👨‍👦‍👦
          </span>
          &nbsp; and all that good stuff...
        </p>
      </div>
    </div>
  );
};

export default Hi;
