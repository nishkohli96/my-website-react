const Contact = () => {
  document.title = 'Contact';

  return (
    <div className="content">
      <div className="text-center">
        <p className="text-xl mb-5 ">Feel free to drop an email on -</p>
        <p className="sub-heading hreflink">
          <a href="mailto:nishkohli96@gmail.com">nishkohli96@gmail.com</a>
        </p>
      </div>
      <div className="text-center mt-10">
        <p className="text-xl mb-10 ">You can also find me at -</p>
      </div>
      <div className="flex flex-row justify-center">
        <div>
          <a
            href="https://www.linkedin.com/in/nishant-kohli-452481109/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/48/000000/linkedin.png"
              className="icon"
              alt="linkedin"
            />
          </a>
        </div>

        <div>
          <a
            href="https://github.com/nishkohli96"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/48/000000/github.png"
              className="icon"
              alt="github"
            />
          </a>
        </div>

        <div>
          <a
            href="https://www.instagram.com/nocturnal_nish/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
              className="icon"
              alt="instagram"
            />
          </a>
        </div>

        <div>
          <a
            href="https://twitter.com/Nishious"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/48/000000/twitter.png"
              className="icon"
              alt="instagram"
            />
          </a>
        </div>
      </div>

      <div className="text-center mt-10">
        <p className="sub-heading hreflink no-underline">
          <a
            href="https://bold.pro/my/nishkohli96"
            target="_blank"
            rel="noreferrer"
          >
            View my Resume
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
