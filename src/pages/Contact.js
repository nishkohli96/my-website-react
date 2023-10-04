const Contact = () => {
  document.title = 'Contact';
  /**
   *  Typeform embed script tag needs to be placed
   *  in the body of public/index.html and would
   *  run on https only.
   */
  return (
    <div className="content">
      <div className="flex justify-center">
        <div
          data-tf-widget="O8UkJDcm"
          data-tf-opacity="100"
          data-tf-iframe-props="title=My Website Typeform"
          data-tf-transitive-search-params
          data-tf-medium="snippet"
          className="typeform"
        ></div>
      </div>
    </div>
  );
};

export default Contact;
