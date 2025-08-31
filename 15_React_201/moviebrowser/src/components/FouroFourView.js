import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="Hmm... This page doesn't exist" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead my-5">
              This page either never existed or was removed. Sorry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
