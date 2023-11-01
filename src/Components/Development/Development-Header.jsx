import devheader from './../../assets/images/Development/headerbg.png'
import develop from "./../../assets/images/Development/develop.png";
import rec1 from "./../../assets/images/Development/Rectangle2.png";
import rec2 from "./../../assets/images/Development/techfirst.png";
import web from "./../../assets/images/Development/web.png";
function DevelopmentHeader() {

  return (
    <div className="development-header bg-black " id='overview'>
      <div className="container pt-5">
        <div className="col-12 col-md-8 col-lg-8 mx-auto d-flex justify-content-center align-items-center text-center flex-column">
          <h2 className="title text-capitalize text-white fs-1 ">
            <strong>Development</strong>
          </h2>
          <p className="description text-white">
            {" "}
            Making your product come alive
          </p>
        </div>
        <div className="development-header col-md-9 col-lg-8 mx-auto d-flex">
          <img src={devheader} className="w-100 mx-auto d-flex" alt="" />
        </div>
      </div>
      <div className="container ">
        <div className="col-12 col-md-8 col-lg-8 mx-auto d-flex justify-content-center align-items-center text-center flex-column">
          <h2 className="title text-capitalize text-white fs-1 ">
            Unleashing Your Potential
          </h2>
        </div>
        <div className="col-12 col-md-8 col-lg-8 mx-auto d-flex justify-content-center align-items-center text-center flex-column">
          <p className="description col-lg-9 ">
            {" "}
            Okay, so your digital product is designed. What’s next? Next comes
            development. We know this is where things can go awry if it’s not
            done the right way. Not that it ever happens to us, mind you. We
            don’t compromise, bringing it all together in a simple solution.
          </p>
        </div>
        <div
          className="development-header col-11  col-sm-8 col-md-6 col-lg-4 mx-auto pt-5   position-relative"
          id="technology"
        >
          <img src={develop} className="w-100 mx-auto d-flex" alt="" />
          <h2 className="absolute-title text-white position-absolute">
            Develop
          </h2>
        </div>
        <p className="description col-12 col-sm-10 col-md-7 col-lg-6 py-5 mx-auto text-center">
          {" "}
          We’ve had years of experience and developed dozens of projects. So we
          know what to do to achieve results that will make our clients proud.
        </p>

        <div className="development-header d-grid d-sm-flex py-5 recs col-12 col-md-10 col-lg-8 gap-5 mx-auto pt-5   position-relative">
          <div className="first">
            <img src={rec2} className="w-100 mx-auto d-flex" alt="" />
          </div>
          <div className="last">
            <div className="content">
              <h2 className="title">Technology Stack</h2>
              <p className="description">
                Building and transforming digital products with a range of
                technologies.
              </p>
              <span className="readmore">Read more</span>
            </div>
          </div>
        </div>
        <div className="web py-5 mt-5 d-grid justify-content-center text-center align-items-center mx-auto">
          <h2 className="title1">Frontend</h2>
          <h2 className="title2">Backend</h2>
          <p className="description  col-10 col-sm-9 col-lg-7  col-xl-6 col-xxl-5  mx-auto">
            We assign equal importance to both frontend and backend. We have
            found this to be the best way to avoid any unnecessary surprises.
            This approach guarantees success across all platforms.
          </p>
          <img src={web} className="img mx-auto" alt="web" />
        </div>
      </div>
    </div>
  );
}

export default DevelopmentHeader;
