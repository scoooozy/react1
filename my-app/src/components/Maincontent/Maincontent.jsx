import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Maincontent.css";
import ventura from "../images/ventura.jpg";
import gameChangers from "../images/gameChangers.jpg";

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
    // else {
    //   reveals[i].classList.remove("active");
    // }
  }
}

window.addEventListener("scroll", reveal);

function ContainerFluid() {
  return (
    <Container className="container">
      <section className="teamhistory reveal">
        <main>
          <article>
            <Row>
              <h2 className="H2" id="history">
                Team History
              </h2>

              <div className="hl"></div>

              <div className="col1">
                <h2 className="vheading " id="history">
                  Team History
                </h2>
                <div className="vl"></div>
                <p className="text">
                  Our team competes in the FIRST robotics competition as Team
                  1515. Team 1515 was founded in the fall of 2004 under the
                  leadership of Former Principal of Beverly Hills High School
                  Dr. Dan Stepenosky, member of the School Board Dr. Myra
                  Demeter, Beverly Hills High School Chemistry Teacher Charles
                  Lee, and parent Eileen Kahn. Under their leadership, Team 1515
                  grew to become a well-known team. Our team continued to
                  flourish with the help of parent Eileen Kahn, who became a
                  credentialed teacher to keep the program in existence. Thanks
                  to the strong leadership and dedication of our teacher, John
                  Castle, our team is moving full S.T.E.A.M ahead. With new
                  student leadership, more efficient subdivisions, and fresh
                  thinking, MorTorq is reaching for the stars. Currently, we
                  have 42 students enrolled, along with many other affiliated
                  with our robotics business team. In 2019, we had the honor to
                  be awarded the prestigious Chairman's Award and traveled to
                  the FRC International Competition with our registration fee
                  sponsored by NASA. The 2022-2023 FIRST season will be our
                  team???s ninteenth year competing.
                </p>
              </div>
            </Row>
          </article>
        </main>
      </section>
      <h1 className="robotheading reveal">Our Robots</h1>
      <section className="robot-section reveal">
        <div className="hlr reveal"></div>
        <div className="card-container reveal">
          <div class="card reveal">
            <div class="card-content">
              <h2 class="card-title">Rapid React </h2>
              <h4>2022</h4>
              <p class="card-body">
                In the 2022 season, our team participated in the LA and Ventura
                regionals and won up to quarter finals in both tournaments. We
                were twice awarded the FRC Imagery Award for outstanding
                attractiveness in our engineering and visual aesthetic of both
                our robot and team appearance.
                <br></br>
                <br></br>
                <br></br>
                <br />
              </p>
            </div>
          </div>
          <div class="card reveal">
            <div class="card-content">
              <h2 class="card-title">Infinite Recharge</h2>
              <h4>2020</h4>
              <p class="card-body">
                Our 2020 robot had a revolver type magazine, a feature that
                allowed us to carry five balls at a time. The robot could intake
                balls, place them into the magazine, and then used a solenoid to
                direct the ball into the two wheel shooter. It also had a
                climber mechanism that utilized a hook. The swerve drivetrain
                allowed us to move rapidly and avoid obstacles on the field.
              </p>
            </div>
          </div>
          <div class="card reveal">
            <div class="card-content">
              <h2 class="card-title">Destination Deepspace </h2>
              <h4>2019</h4>
              <p class="card-body">
                In 2019, our team competed at the Ventura Regional, the LA
                Regional, and won the Chairmans Award.
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br />
                {/* I'M SO SORRY FOR DOING THIS PLS DONT JUDGE ME IT WAS THE EASIEST SOLUTION*/}
              </p>
            </div>
          </div>
        </div>
      </section>
      <h1 className="robotheading reveal">Previous Competitions</h1>
      <div className="hl reveal"></div>
      <section className="previous-comp reveal">
        <div className="info-card reveal">
          <img src={ventura} alt="" className="info-image" />
          <div className="content">
            <h2 className="heading">FRC-Rapid React</h2>
            <h3 className="subheading">2022</h3>
            <p className="text">
              In the 2022 season, our team participated in the LA and Ventura
              regionals and won up to quarter finals in both tournaments. Our
              team was also twice awarded imagery award.
            </p>
          </div>
        </div>
        <div className="info-card reveal">
          <img src={gameChangers} alt="" className="info-image" />
          <div className="content">
            <h2 className="heading">FRC-Game Changers</h2>
            <h3 className="subheading">2021</h3>
            <p className="text">
              For the 2021 season, our team competed in the three at home
              challenges offered by FIRST: Infinite Recharge at Home, Game
              Design Challenge, and Innovation Challenge.{" "}
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default ContainerFluid;
