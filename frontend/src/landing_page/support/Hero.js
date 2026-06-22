import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">

      {/* Top Section */}
      <div className="p-3">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>

      {/* Main Content */}
      <div className="row p-3 mb-5">

        {/* Left Side */}
        <div className="col-6 p-5">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input
            type="text"
            placeholder="Eg. how do I activate F&O"
            style={{ width: "500px" }}
          />
          <br />
          <br />

          <a href="">Track account opening</a>
          <br />

          <a href="">Track segment activation</a>
          <br />

          <a href="">Intraday margins</a>
          <br />

          <a href="">Kite user manual</a>
        </div>

        {/* Right Side */}
        <div className="col-6 p-5">
          <h1 className="fs-3">Featured</h1>

          <ol>
            <li>
              <a href="">
                Current Takeovers and Delisting - January 2024
              </a>
            </li>

            <li>
              <a href="">
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>

      </div>

    </section>
  );
}

export default Hero;