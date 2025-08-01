/** @format */

import React from "react";
import { TfiLightBulb } from "react-icons/tfi";
import { RiCodeView } from "react-icons/ri";
import { IoRocketOutline } from "react-icons/io5";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";

function Process() {
  return (
    <div className="process-con">
      <h2>Process</h2>
      <h1>
        Process that moves
        <br /> things forward
      </h1>
      <br />
      <br />
      <div className="process">
        <div>
          <section>
            <span>
              <CiCalendarDate size={30} />
            </span>
            <p>
              <b>Discovery Call</b>
            </p>
          </section>
          <br />
          <p>
            We start with a friendly chat to understand your business, goals,
            and ideas. This helps us know where you are and where you want to
            go.
          </p>
        </div>
        <div>
          <section>
            <span>
              < IoIosCheckmarkCircleOutline size={30} />
            </span>
            <p>
              <b>Client Onboarding</b>
            </p>
          </section>
          <br />
          <p>
            Once we’re a good fit, we send over a simple onboarding form,
            contract, and project timeline. You’ll get a clear roadmap of what
            to expect.
          </p>
        </div>
        <div>
          <section>
            <span>
              <RiCodeView size={30} />
            </span>
            <p>
              <b>Research & Development</b>
            </p>
          </section>
          <br />
          <p>
            We dive into your industry, explore what your competitors are doing,
            and start crafting a design and development plan that suits your
            brand.
          </p>
        </div>
        <div>
          <section>
            <span>
              <IoRocketOutline size={30} />
            </span>
            <p>
              <b>Launch & Support</b>
            </p>
          </section>
          <br />
          <p>
            We go live with your site or app — fully optimized, responsive, and
            fast. After launch, we stick around to make sure everything runs
            smoothly and you feel confident moving forward.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Process;
