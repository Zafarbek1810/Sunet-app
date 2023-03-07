import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import Loading from "../../../Common/ContactModal/FormModal/Loading";
import Container from "../../../Common/Container";
import { StepsWrapper } from "./Steps.style";

const Steps = () => {
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const [captcha, setCaptcha] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function onChangeCaptcha(value) {
    setCaptcha(value);
  }
  return (
    <StepsWrapper>
      <Container>
        <div className="step1" id="step1">
          <div className="top">
            <span>Step 1 </span>
            <h3>Fill out the brief on our website </h3>
          </div>

          <div className="forma">
            <h4 className="title">Contact Us</h4>
            <p className="subtitle">
              Your email address will not be published. Required fields are
              marked *
            </p>

            <form>
              {/* ------- NAME INPUT --------- */}
              <label className="label1">
                <input
                  className="nameInput"
                  type="text"
                  placeholder="Your Name *"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="err-text">This field is required</span>
                )}
              </label>

              {/* ------- Email INPUT --------- */}
              <label className="label1">
                <input
                  className="emailInput"
                  type="email"
                  placeholder="Your Email *"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="err-text">This field is required</span>
                )}
              </label>

              {/* ------- WEBSITE INPUT --------- */}
              <label className="label2">
                <input
                  className="siteInput"
                  type="text"
                  placeholder="Website"
                  {...register("site", { required: true })}
                />
                {errors.site && (
                  <span className="err-text">This field is required</span>
                )}
              </label>

              {/* ------- MESSAGE INPUT --------- */}
              <label className="label2">
                <textarea
                  type="text"
                  placeholder="Message..."
                  className="message"
                  rows={4}
                  {...register("message", { required: false })}
                />
              </label>

              <div className="submit-btn-wrapper">
              <div className="capcha">
                <ReCAPTCHA
                  sitekey="6Lf-K3AkAAAAANU3Y7RHhfZ7fBn6JE4Jy72qbTYE"
                  onChange={onChangeCaptcha}
                />
              </div>
                <button className="my-default-button submit-btn" disabled={!captcha || isLoading}>
                  {isLoading && <Loading />}
                  <span>Send message</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="step2" id="step2">
          <div className="top">
            <span>Step 2 </span>
            <h3>We discuss your offshore resourcing requirements</h3>
          </div>
          <div className="left">
            <p>How do you know if your business is fit to outsource?</p>
            <p>
              Outsourcing is the highest form of delegation of your processes to
              the remote office. Due to the remote work nature of offshoring,
              you need to get fit and ready, so your processes need to be tidied
              up to be able to work with an offshore team.{" "}
            </p>
            <p>So, let`s check:</p>
            <p>Do you possess:</p>
            <ul>
              <li>
                <span>
                  <div className="in"></div>
                </span>
                Access to cloud-based tools and platforms
              </li>
              <li>
                <span>
                  <div className="in"></div>
                </span>
                Your internal processes documented so it is easy to train new
                employees, or could you create some
              </li>
              <li>
                <span>
                  <div className="in"></div>
                </span>
                CRMs and programs that are accessible in a remote work setting
                or a different location, such as Uzbekistan{" "}
              </li>
              <li>
                <span>
                  <div className="in"></div>
                </span>
                Licenses and certifications that allow you to export tasks,
                offshore and online
              </li>
            </ul>
            <p>
              If something above is missing, your business might not be as ready
              for outsourcing as you may have originally thought. But, that
              doesn`t mean outsourcing isn`t the solution for you, it simply
              means that you may need to invest more in getting your business
              offshore fit. We are more than happy to discuss your business
              plans and provide advice on how you can get started.
            </p>
            <p>
              If you answered yes to all of these questions, then offshoring
              could be the solution for you and it`s time to begin discussions
              with one of our business development managers. In these
              discussions, we will ask you about your offshore team, IT, and
              infrastructure requirements as these factors will be crucial to
              getting started.{" "}
            </p>
            <p>Questions covered include:</p>
            <ul>
              <li>
                <span>
                  <div className="in"></div>
                </span>
                Who will your offshore team members report to within your
                onshore team?
              </li>
              <li>
                <span>
                  <div className="in"></div>
                </span>
                How many team members will our offshore staff be collaborating
                with?
              </li>
              <li>
                <span>
                  <div className="in"></div>
                </span>
                What IT programs do you use? (professional software, ERP and
                CRMs, etc.)
              </li>
              <li>
                <span>
                  <div className="in"></div>
                </span>
                How many offshore team members do you need and in what
                functions?
              </li>
              <li>
                <span>
                  <div className="in"></div>
                </span>
                Are you looking to reduce costs, in particular, employment
                costs?
              </li>
              <li>
                <span>
                  <div className="in"></div>
                </span>
                Are you transitioning to a remote workforce?
              </li>
              <li>
                <span>
                  <div className="in"></div>
                </span>
                What are your business goals and objectives for this year?
              </li>
            </ul>
            <p>
              Based on these answers, we can start to customize our offshoring
              solutions to meet the individual needs of your organization.
            </p>
            <p>
              If our offshoring solution is right for you, then we discuss your
              offshore team’s job descriptions.{" "}
            </p>
            <p>
              Covering topics such as daily tasks, KPIs, existing qualifications
              and systems knowledge, years of experience within similar roles,
              and what hours of work they will be required to perform.
            </p>
            <p>
              These components are essential in creating your ideal offshore
              candidate profiles, which then get passed onto our recruitment
              team to understand the costs of setting up your offshore team. We
              will then share a transparent and fully itemized cost proposal
              outlining the costs associated with your offshore team so you can
              then determine if our offshoring solution fits your business
              requirements.
            </p>
          </div>
        </div>

        <div className="step3" id="step3">
          <div className="top">
            <span>Step 3 </span>
            <h3>Recruit people from the existing and potential candidates </h3>
          </div>
          <div className="left">
            <p>
              We value knowledgeable candidates with strong work ethics, so try
              to constantly have pool of resumes and potential candidates ready
              to take up jobs. Once we start discussing our projects with the
              Client, we can always look of who is the best fitting candidate
              from our pool, according to their background, skills, knowledge
              and previous experience with us.
            </p>
          </div>
        </div>

        <div className="step4" id="step4">
          <div className="top">
            <span>Step 4 </span>
            <h3>Arrange interview with the Client</h3>
          </div>
          <div className="left">
            <p>
              The hired worker would be at the Client`s project, so the final
              word in selecting the perfectly fit candidate for the work is
              always the Client`s right. Since our philosophy is to help you
              extend your office to our premises, it`s natural that You yourself
              would select and approve your workers.
            </p>
          </div>
        </div>

        <div className="step5" id="step5">
          <div className="top">
            <span>Step 5 </span>
            <h3>Train and instruct recruited personnel </h3>
          </div>
          <div className="left">
            <p>
              Each business is unique in some features, software they use,
              hierarchy and their protocols. We will train your newly recruited
              personnel, you can observe the training and participate where you
              deem necessary. On this stage we train and instruct to each
              separate position and task, the process is recurred even with
              existing personnell if you have updated your procedures, rules or
              software.
            </p>
          </div>
        </div>

        <div className="step6" id="step6">
          <div className="top">
            <span>Step 6 </span>
            <h3>Hand over the job </h3>
          </div>
          <div className="left">
            <p>
              After throughout testing, we will let you quiz your worker, so you
              can see how fit are they for the task and hand over all the tasks
              one by one, insuring quality does not go down.
            </p>
          </div>
        </div>

        <div className="step7" id="step7">
          <div className="top">
            <span>Step 7 </span>
            <h3>
              Arrange quality control system for the given
              project/assignment/position with the Client{" "}
            </h3>
          </div>
          <div className="left">
            <p>
              We discuss with the Client the pecularities of quality control
              within his/her organization and offer our plan to oversee that the
              quality of the job performed matches the standards in your
              company.
            </p>
          </div>
        </div>

        <div className="step8" id="step8">
          <div className="top">
            <span>Step 8 </span>
            <h3>Deliver periodical quality assurance reports </h3>
          </div>
          <div className="left">
            <p>
              We would periodically report to you on the KPI`s of your worker,
              who is doing back office job for you. Constantly adjusting their
              metrics on deliverying their job properly.
            </p>
            <p>
              We support your offshore management team on an operational level.
              This involves the following:{" "}
            </p>
            <ul>
              <li>
                <span>
                  <div className="in"></div>
                </span>
                IT deployment and support
              </li>
              <li>
                <span>
                  <div className="in"></div>
                </span>
                KPI development and performance management
              </li>
              <li>
                <span>
                  <div className="in"></div>
                </span>
                Ensure staff productivity levels are high through monitoring
                work habits
              </li>
              <li>
                <span>
                  <div className="in"></div>
                </span>
                Employee engagement activities
              </li>
              <li>
                <span>
                  <div className="in"></div>
                </span>
                Proactive advice and best practices on optimizing overall
                performance
              </li>
              <li>
                <span>
                  <div className="in"></div>
                </span>
                Management of Uzbekistan-specific legal and compliance matters
              </li>
              <li>
                <span>
                  <div className="in"></div>
                </span>
                Ongoing recruitment, HR, payroll, facilities management and IT
                support
              </li>
              <li>
                <span>
                  <div className="in"></div>
                </span>
                Expat settlement assistance.
              </li>
            </ul>
            <p>
              While we handle all of this, you retain as much control of quality
              and productivity as you would like. In other words, we take care
              of everything on the ground, enabling you to focus purely on the
              business processes you want to run out of Uzbekistan.{" "}
            </p>
            <p>
              It`s important to note that for your offshore team to work, you
              need to put in the time and effort to train them up and get them
              across all of your systems and processes. What our offshore
              management team does is provide the back-end support to facilitate
              this. If you don`t invest in establishing, developing and
              maintaining your offshore team, then your offshore investments may
              not be as successful as they could be.{" "}
            </p>
            <p>
              Learn more about how you can work with your offshore team to
              achieve your business objectives…
            </p>
          </div>
        </div>
      </Container>
    </StepsWrapper>
  );
};

export default Steps;
