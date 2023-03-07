import React, { useState, useEffect } from "react";
import { FormModalWrapper } from "./FormModal.style";
import { useForm, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input"; 
import MyLink from "../../../Common/MyLink";
import { Checkbox, Input, message } from "antd";
import Loading from "./Loading";
import { useContextSelector } from "use-context-selector";
import { ModalContext } from "../../../../Context/ModalContext/Context";
// import ReCAPTCHA from "react-google-recaptcha";

const FormModal = () => {
 
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const setIsModalVisible = useContextSelector(
    ModalContext,
    (state) => state[1],
  );

  const onSubmit = async (values) => {
    console.log("yuborildi");
    // const servicesText = Object.keys(values)
    //   .filter((key) => key.includes("services"))
    //   .reduce((str, curKey) => {
    //     str += `  ${curKey.split("-").slice(1).join(" ")}: ${
    //       values[curKey] ? values[curKey] : false
    //     }\n`;
    //     return str;
    //   }, `Services: \n`);
    // const phoneAndMessage = `Phone Number: ${values.phoneNumber}\nHow can we help: ${values.message}`;
    // const text = servicesText + "\n" + phoneAndMessage;

    // const body = JSON.stringify({
    //   yourName: values.name,
    //   email: values.email,
    //   text,
    // });
    // console.log(body);
    // setIsLoading(text);
    // fetch("https://everbestlab.com/api/send", {
    //   method: "POST",
    //   body,
    //   headers: {
    //     ["Content-Type"]: "application/json",
    //   },
    // })
    //   .then((res) => {
    //     reset();
    //     message.success("Success!");
    //     setIsModalVisible(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     message.error("Failed while sending email :(");
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  };

  return (
    <FormModalWrapper>
      <div className="form-wrapper">
        {/* //* -------------- LEFT SIDE --------------  */}
        <div className="left-side">
          <h3>Get a quote</h3>
          <p>
            We love to hear from you. Our friendly team is always here to chat.
          </p>
          <div className="mail">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z" />
              </svg>
            </div>
            <div className="text">
              <div className="link1">
                <MyLink className="link" to="mailto:support@sunet.uz">
                support@sunet.uz
                </MyLink>
              </div>
            </div>
          </div>
          <div className="location">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" />
              </svg>
            </div>
            <div className="text">
              <div className="link2">
                <MyLink  className="link" to="/#">
                75 Mustaqillik St , Tashkent , Uzbekistan
                </MyLink>
              </div>
            </div>
          </div>
          <div className="phone">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" />
              </svg>
            </div>
            <div className="text">
              <div className="link1">
                <MyLink className="link" to="tel:+99878-140-11-49">
                +99878 140 11 49
                </MyLink>
              </div>
            </div>
          </div>
        </div>
        {/* //* -------------- RIGHT SIDE --------------  */}
        <div className="right-side">
          <h3 className="title">Level Up Your Company</h3>
          <p className="subtitle">
            You can reach us anytime via{" "}
            <a href="mailto:support@sunet.uz">support@sunet.uz</a>
          </p>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="top">
            {/* ------- NAME INPUT --------- */}
              <label className="label">
                <span className="label-text">Name</span>
                <svg
                  className="iconUser"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" />
                </svg>
                <input
                  className="nameInput"
                  type="text"
                  placeholder="Your Name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="err-text">This field is required</span>
                )}
              </label>
              {/* ------- Phone INPUT --------- */}
              <label className="label">
                <span className="label-text">Phone</span>
                <Controller
                  control={control}
                  name="phoneNumber"
                  rules={{
                    validate: (value) => isValidPhoneNumber(value),
                  }}
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <PhoneInput
                      className="phoneInput"
                      international
                      defaultCountry="US"
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      inputRef={ref}
                    />
                  )}
                />
                {errors.phoneNumber && (
                  <span className="err-text">This field is required</span>
                )}
              </label>
            </div>

            {/* ------- EMAIL INPUT --------- */}
            <label htmlFor="" className="label">
              <span className="label-text">Email</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z" />
              </svg>
              <input
                type="email"
                className="email"
                placeholder="you@company.com"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="err-text">This field is required</span>
              )}
            </label>

            {/* ------- MESSAGE INPUT --------- */}
            <label htmlFor="" className="label">
              <span className="label-text">How can we help?</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z" />
              </svg>
              <textarea
                type="text"
                placeholder="Tell us a little about the project..."
                className="message"
                rows={4}
                {...register("message", { required: false })}
              />
            </label>

            {/* <h5 className="ser">Services</h5>
            <div className="services">
              <div className="left">
                <CustomCheckbox
                  name={"services-IT-consultancy"}
                  text="IT consultancy"
                  control={control}
                />
                <CustomCheckbox
                  name={"services-Web-development"}
                  text="Web development"
                  control={control}
                />
                <CustomCheckbox
                  name={"services-Custom-Software-development"}
                  text="Custom Software development"
                  control={control}
                />
              </div>
              <div className="right">
                <CustomCheckbox
                  name={"services-Mobile-Application-development"}
                  text="Mobile Application development"
                  control={control}
                />
                <CustomCheckbox
                  name={"services-UX/UI"}
                  text="UX/UI"
                  control={control}
                />
                <CustomCheckbox
                  name={"services-Other"}
                  text="Other"
                  control={control}
                />
              </div>
            </div> */}

            <div className="submit-btn-wrapper">
              <button className="my-default-button submit-btn">
                {isLoading && <Loading />}
                <span>Send Message</span>
              </button>
            </div>

            
          </form>
        </div>
      </div>
    </FormModalWrapper>
  );
};

export default FormModal;

function CustomCheckbox({ name, text, value: checkboxValue, control }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur, ref } }) => (
        <Checkbox
          onBlur={onBlur}
          onChange={onChange}
          checked={value}
          inputRef={ref}
        >
          {text}
        </Checkbox>
      )}
    />
  );
}
