import axios from "axios";
import React, { Fragment } from "react";
import { Controller, useForm } from "react-hook-form";

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    (async () => {
      try {
        const login_user = await axios.post("http://localhost:5000/api/login");
        console.log("Response Data", login_user.data);
      } catch (err) {
        console.error("Error Registering User!", err);
      }
    })();
  };

  return (
    <Fragment>
      <h1>Login to Access</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field }) => <input {...field} />}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label>Email</label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => <input {...field} />}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label>Phone</label>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/i,
                message: "Invalid phone number",
              },
            }}
            render={({ field }) => <input {...field} />}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
};

export default Login;
