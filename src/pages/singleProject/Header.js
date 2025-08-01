function Header({ project }) {
  const handleVisit = () => {
    window.open(project[0]?.url, "_blank");
  };
  return (
    <div className="about-header-con">
      <section className="about-header">
        <div className="about-header-text">
          <h1>{project[0]?.name}</h1>
          <br />
          <p>{project[0]?.description}</p>
          <br />
          <button
            className="btn"
            onClick={handleVisit}
          >
            Live demo
          </button>
        </div>
        <div className="abouts-img">
          <img
            src={project[0]?.img}
            alt="about"
            data-aos="fade-up"
            data-aos-duration="600"
            style={{ borderRadius: "10px" }}
          />
        </div>
        <img
          src={require("../../public/Rectangle 40.png")}
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 5,
            objectFit: "cover",
          }}
        />
      </section>
    </div>
  );
}

export default Header;
