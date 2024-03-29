import axios from "axios";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Loading from "../../../../Common/ContactModal/FormModal/Loading";
import Container from "../../../../Common/Container";
import { FormModalWrapper } from "./Form.style";

const Form = () => {
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

  const onSubmit = async (values) => {
    
    setIsLoading(true);
    await axios
      .post(`http://localhost:8009/api/contactEmail`, values, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        toast.success("Muvaffaqiyatli yuborildi");
        reset();
      })
      .catch((err) => {
        toast.error("Xatolik");
        console.log(err);
      });
    setIsLoading(false);
  };

  return (
    <FormModalWrapper>
      <Container>
        <div className="top">
          <h5>APPLY NOW</h5>
          <h4 className="title">Leave Your CV</h4>
          <p className="subtitle">
            Leave your resume if you are interested in a vacancy. We will
            definitely contact you.
          </p>
        </div>
        <div className="forma">
          <form onSubmit={handleSubmit(onSubmit)}>
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
                type="number"
                placeholder="Your Phone"
                {...register("phoneNumber", { required: true })}
              />
              {errors.phoneNumber && (
                <span className="err-text">This field is required</span>
              )}
            </label>

            {/* ------- MESSAGE INPUT --------- */}
            <label className="label2">
              <textarea
                type="text"
                placeholder="Tell about your skills..."
                className="message"
                rows={4}
                {...register("message", { required: false })}
              />
            </label>
            <label className="label2">
              <h3>Upload Your Resume Here</h3>
              <input
                className="siteInput"
                type="file"
                {...register("file", { required: false })}
              />
            </label>

            <div className="submit-btn-wrapper">
              <div className="capcha">
                <ReCAPTCHA
                  sitekey="6Lf-K3AkAAAAANU3Y7RHhfZ7fBn6JE4Jy72qbTYE"
                  onChange={onChangeCaptcha}
                />
              </div>
              <button
                disabled={!captcha || isLoading}
                className="my-default-button submit-btn"
              >
                {isLoading && <Loading />}
                <span>Submit</span>
              </button>
            </div>
          </form>
        </div>
      </Container>
    </FormModalWrapper>
  );
};

export default Form;
