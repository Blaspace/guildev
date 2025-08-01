/** @format */

import React, { useRef } from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { VscDebugConsole } from "react-icons/vsc";
import { BsPerson } from "react-icons/bs";
import { CiCloud } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";

function Services() {
  const boxRef0 = useRef();
  const spanRef0 = useRef();
  const boxRef1 = useRef();
  const spanRef1 = useRef();
  const boxRef2 = useRef();
  const spanRef2 = useRef();
  const boxRef3 = useRef();
  const spanRef3 = useRef();
  const boxRef4 = useRef();
  const spanRef4 = useRef();
  const boxRef5 = useRef();
  const spanRef5 = useRef();
  const boxRef6 = useRef();
  const spanRef6 = useRef();

  const services = [
    {
      title: "Web Development:",
      Icon: AiOutlineHtml5,
      about:
        "From simple brochure website to complex e-commerce platforms, we create custom solutions tailored to your unique requirements.",
    },
    {
      title: "Debugging and Troubleshooting:",
      Icon: VscDebugConsole,
      about:
        "Identify and fix bugs and errors in your website or web application to ensure optimal performance.",
    },
    {
      title: "Consulting:",
      Icon: BsPerson,
      about:
        "Develop a comprehensive digital strategy to help you achieve your business goals and get expert guidance on choosing the right technologies and tools to support your business objectives",
    },
    {
      title: "Cloud Services and Hosting Solutions:",
      Icon: CiCloud,
      about:
        "Help clients leverage cloud computing platforms (e.g., AWS, Azure) for hosting, scalability, and data storage needs, or offer managed hosting solutions.",
    },
    {
      title: "E-commerce Solutions:",
      Icon: HiOutlineShoppingBag,
      about:
        "Develop and customize e-commerce websites with features such as product catalogs, shopping carts, secure payment gateways, and inventory management.",
    },
    {
      title: "Website Maintenance and Support:",
      Icon: IoSettingsOutline,
      about:
        "Offer ongoing maintenance and support services, including software updates, security patches, performance monitoring, and troubleshooting.",
    },
  ];

  const handleHover = (span, box) => {
    box.current.style.color = "#f4f4f4";
    box.current.style.background = "#0c0c0c";

    span.current.style.color = "#0c0c0c";
    span.current.style.background = "#f4f4f4";
    span.current.style.boxShadow = "none";
  };

  const handleMoutUp = (span, box) => {
    box.current.style.color = "#0c0c0c";
    box.current.style.background = "#f4f4f4";

    span.current.style.color = "#f4f4f4";
    span.current.style.background = "#0c0c0c";
    span.current.style.boxShadow = "5px 2px 25px #b6b6b6";
  };
  return (
    <div className="services-con">
      <h2>Our Services</h2>
      <h1>
        Hight-impact services
        <br />
        for your business
      </h1>
      <br />
      <div className="services">
        {services.map((value, i) => {
          const { Icon } = value;
          return (
            <div
              ref={
                i === 0
                  ? boxRef0
                  : i === 1
                  ? boxRef1
                  : i === 2
                  ? boxRef2
                  : i === 3
                  ? boxRef3
                  : i === 4
                  ? boxRef4
                  : i === 5
                  ? boxRef5
                  : boxRef6
              }
              onMouseOver={() =>
                handleHover(
                  i === 0
                    ? spanRef0
                    : i === 1
                    ? spanRef1
                    : i === 2
                    ? spanRef2
                    : i === 3
                    ? spanRef3
                    : i === 4
                    ? spanRef4
                    : i === 5
                    ? spanRef5
                    : spanRef6,
                  i === 0
                    ? boxRef0
                    : i === 1
                    ? boxRef1
                    : i === 2
                    ? boxRef2
                    : i === 3
                    ? boxRef3
                    : i === 4
                    ? boxRef4
                    : i === 5
                    ? boxRef5
                    : boxRef6
                )
              }
              onMouseLeave={() =>
                handleMoutUp(
                  i === 0
                    ? spanRef0
                    : i === 1
                    ? spanRef1
                    : i === 2
                    ? spanRef2
                    : i === 3
                    ? spanRef3
                    : i === 4
                    ? spanRef4
                    : i === 5
                    ? spanRef5
                    : spanRef6,
                  i === 0
                    ? boxRef0
                    : i === 1
                    ? boxRef1
                    : i === 2
                    ? boxRef2
                    : i === 3
                    ? boxRef3
                    : i === 4
                    ? boxRef4
                    : i === 5
                    ? boxRef5
                    : boxRef6
                )
              }
            >
              <span
                ref={
                  i === 0
                    ? spanRef0
                    : i === 1
                    ? spanRef1
                    : i === 2
                    ? spanRef2
                    : i === 3
                    ? spanRef3
                    : i === 4
                    ? spanRef4
                    : i === 5
                    ? spanRef5
                    : spanRef6
                }
              >
                <Icon />
              </span>
              <br />
              <section>
                <h4>{value.title}</h4>
                <p>{value.about}</p>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
