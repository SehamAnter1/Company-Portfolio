import React from "react";

function FAQReusable() {
  return (
    <div className="faq py-5">
      <div className="container pb-5  col-md-10 col-lg-9  mx-auto">
        <h2 className="title py-3">FAQ</h2>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <span className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button px-0 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                How long does it take to get started?
              </button>
            </span>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Our turnaround is lightning-fast. Just one week from signing off
                and we’re there with the kick-off meeting to get it rolling.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <span className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button px-0  collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                What is your typical working process?
              </button>
            </span>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse "
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                It all starts with grabbing a cup of coffee, chilling with
                mates, and some quality time at the PlayStation (just kidding!).
                We always start a project with analysis, learning the
                requirements, and making estimates that will be shared in the
                price proposal. Then it’s off to signing off, kicking off, and
                getting your business to the next level with a pinch of our
                design magic.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <span className="accordion-header" id="flush-heading4">
              <button
                className="accordion-button px-0 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse4"
                aria-expanded="false"
                aria-controls="flush-collapse4"
              >
                Do you work on a fixed-price basis or time and material?
              </button>
            </span>
            <div
              id="flush-collapse4"
              className="accordion-collapse collapse"
              aria-labelledby="flush-heading4"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Flexibility is the key of success in this crazy world, so we try
                to suggest an appropriate solution for each specific case we
                deal with. The more clear and detailed the requirements are, the
                more accurate will our estimates be. This is the closest we get
                to the fixed-price model.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <span className="accordion-header" id="flush-headingOn">
              <button
                className="accordion-button px-0 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOn"
                aria-expanded="false"
                aria-controls="flush-collapseOn"
              >
                How do you usually start new collaborations?
              </button>
            </span>
            <div
              id="flush-collapseOn"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOn"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Each new engagement starts with an introduction call and filling
                out the design/branding brief. If you have a cool project in
                mind, feel free to get in touch at{" "}
                <a href="remilyart@gmail.com">remilyart@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <span className="accordion-header" id="flush-heading1O">
              <button
                className="accordion-button px-0 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse1O"
                aria-expanded="false"
                aria-controls="flush-collapse1O"
              >
                Do you guys work with big companies only? We're an early-stage
                startup.
              </button>
            </span>
            <div
              id="flush-collapse1O"
              className="accordion-collapse collapse"
              aria-labelledby="flush-heading1O"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                We’re all for building a borderless world, so we are open to
                working with any project we come across. By the way, we do
                believe in startups, and one of those we helped develop from
                scratch has been sold to{" "}
                <a href="https://entercom.com/"> https://entercom.com/</a>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <span className="accordion-header" id="flush-heading111">
              <button
                className="accordion-button px-0 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse111"
                aria-expanded="false"
                aria-controls="flush-collapse111"
              >
                How long it will take to get an estimate from you?
              </button>
            </span>
            <div
              id="flush-collapse111"
              className="accordion-collapse collapse"
              aria-labelledby="flush-heading111"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                We hate to keep you waiting. Setting up a team, making
                preliminary research and analysis, and getting back to you with
                the contract will take up to 24 hours from the moment we learn
                what’s needed. Efficiency is one of The Three Gates key values.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <span className="accordion-header" id="flush-heading11">
              <button
                className="accordion-button px-0 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse11"
                aria-expanded="false"
                aria-controls="flush-collapse11"
              >
                Do you have a minimum engagement?
              </button>
            </span>
            <div
              id="flush-collapse11"
              className="accordion-collapse collapse"
              aria-labelledby="flush-heading11"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                We set no entry thresholds for people who want to work with us.
                But we still believe that a product that needs to be designed
                can’t be made within a couple of days. After all, we need some
                time to research, analyze and come up with a strategy. So we’ve
                set a minimum project duration as 30 hours and we’re waiting for
                you!
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <span className="accordion-header" id="flush-heading12">
              <button
                className="accordion-button px-0 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse12"
                aria-expanded="false"
                aria-controls="flush-collapse12"
              >
                What's the average project duration?
              </button>
            </span>
            <div
              id="flush-collapse12"
              className="accordion-collapse collapse"
              aria-labelledby="flush-heading12"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Our team works full-time on every project, so the overall
                duration will highly depend on the initial estimate. On average,
                our projects last from 2 weeks to 5 months.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <span className="accordion-header" id="flush-heading13">
              <button
                className="accordion-button px-0 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse13"
                aria-expanded="false"
                aria-controls="flush-collapse13"
              >
                Can we start the design without wireframes?
              </button>
            </span>
            <div
              id="flush-collapse13"
              className="accordion-collapse collapse"
              aria-labelledby="flush-heading13"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Wireframes help to build UX without distractions. The wireframe
                is an essential part of the design process and we would not
                recommend eliminating it. Having everything polished at the
                wireframing stage, we can avoid many amendments and revisions at
                the design stage, which saves both time and money.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <span className="accordion-header" id="flush-heading113">
              <button
                className="accordion-button px-0 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse113"
                aria-expanded="false"
                aria-controls="flush-collapse113"
              >
                What templates does The Three Gates use to create design?
              </button>
            </span>
            <div
              id="flush-collapse113"
              className="accordion-collapse collapse"
              aria-labelledby="flush-heading113"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to We
                don’t use pre-built templates or kits because there’s just no
                soul in them. We’re committed to building fully customized and
                product-based solutions that will meet the expectations of the
                target users. Each pixel and line is designed with love and
                passion by our creative minds.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <span className="accordion-header" id="flush-heading14">
              <button
                className="accordion-button px-0 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse14"
                aria-expanded="false"
                aria-controls="flush-collapse14"
              >
                Where should I start with my business if have an idea?
              </button>
            </span>
            <div
              id="flush-collapse14"
              className="accordion-collapse collapse"
              aria-labelledby="flush-heading14"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Hey, you’ve come to the right place! Please get in touch and
                we’ll help you with the ideation, design, and development. Full
                cycle on us, no hassle for you. Easy, right?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQReusable;
