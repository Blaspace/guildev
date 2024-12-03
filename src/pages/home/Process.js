/** @format */

import React from "react";
import { TfiLightBulb } from "react-icons/tfi";
import { VscSettings } from "react-icons/vsc";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { IoReloadCircleOutline } from "react-icons/io5";

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
              <TfiLightBulb size={20} />
            </span>
            <p>
              <b>Problem Identification</b>
            </p>
          </section>
          <p>Identify and define the problem or opportunity for improvement.</p>
        </div>
        <div>
          <section>
            <span>
              <IoReloadCircleOutline size={20} />
            </span>
            <p>
              <b>Analyzing Solutions</b>
            </p>
          </section>
          <p>
            Research and evaluate potential solutions to the identified problem.
          </p>
        </div>
        <div>
          <section>
            <span>
              <VscSettings size={20} />
            </span>
            <p>
              <b>Design and Development</b>
            </p>
          </section>
          <p>
            Create a detailed design and develop a solution based on the chosen
            approach.
          </p>
        </div>
        <div>
          <section>
            <span>
              <IoCheckmarkDoneCircleOutline size={30} />
            </span>
            <p>
              <b>Implementation and Testing</b>
            </p>
          </section>
          <p>
            Implement the solution and test it to ensure it meets the required
            standards and resolves the initial problem.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Process;
