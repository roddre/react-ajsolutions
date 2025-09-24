import { useState } from "react";
import { notification } from "antd";
import emailjs from '@emailjs/browser';

interface IValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: IValues = {
  name: "",
  email: "",
  message: "",
};

export const useForm = (validate: { (values: IValues): IValues }) => {
  const [formState, setFormState] = useState<{
    values: IValues;
    errors: IValues;
  }>({
    values: { ...initialValues },
    errors: { ...initialValues },
  });


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = formState.values;
    const errors = validate(values);

    setFormState((prevState) => ({
      ...prevState,
      errors,
    }));

    // If any errors, don't proceed
    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) return;

    try {
      const valueForm = {
        name: values.name,
        email: values.email,
        message: values.message,
      };

      emailjs.init("0LSTKvIpPtUPszRog");

      await emailjs.send("service_lz2iaf2", "template_6s7f7ek", valueForm);

      notification.success({
        message: "Success",
        description: "Your message has been sent!",
      });

      // Reset form after successful submission
      setFormState({
        values: { ...initialValues },
        errors: { ...initialValues },
      });
    } catch (error) {
      console.error(error);
      notification.error({
        message: "Error",
        description:
            "There was an error sending your message, please try again later.",
      });
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values: formState.values,
    errors: formState.errors,
  };
};
