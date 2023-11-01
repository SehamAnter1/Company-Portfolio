import React from "react";
import reactlogo from "./../../assets/images/react-logo.png";
function WorkingProcesses() {
  return (
    <div className="working-processes py-5">
      <div className="container d-flex justify-content-center text-center py-5">
        <ul className="col-10 col-md-7 col-lg-5 col-xl-4  col-xxl-3 d-grid gap-4">
          <li>
            <img src={reactlogo} alt="react logo" />
          </li>
          <li>
            <div class="card border-0">
              <div class="card-body">
                <h2 className="title first">Immersion</h2>
                <p class="card-text description">
                  Going deep into client’s business to understand its core
                  sense, goals and challenges to build partnership.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="card">
              <div class="card-body">
                <h2 className="title  second">Ideation</h2>
                <p class="card-text description">
                  Creating first concepts of a future product and shaping up the
                  direction.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="card">
              <div class="card-body">
                <h2 className="title third">Wireframing</h2>
                <p class="card-text description">
                  Building the foundation, structure and core elements of a
                  digital product.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="card">
              <div class="card-body">
                <h2 className="title fourth">Visual Design</h2>
                <p class="card-text description">
                  Adding colors, illustrations and shapes to create visual
                  language that resonates with customers.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="card">
              <div class="card-body">
                <h2 className="title fifth">Handoff & Support</h2>
                <p class="card-text description">
                  Sending all finalised deliverables and providing further
                  support.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WorkingProcesses;
