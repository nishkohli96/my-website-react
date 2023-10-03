import Hi from '@Components/Hi';

const IndexPage = () => {
  document.title = 'Home';

  return (
    <div className="content">
      <Hi />
    </div>
  );
};

export default IndexPage;
