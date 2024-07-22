import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
const ContactForm = ({ onSubmit }) => {
  const registerSchema = Yup.object({
    name: Yup.string()
      .required("This field is required")
      .min(3, "Too short")
      .max(50, "Too long"),
    number: Yup.string()
      .required("This field is required")
      .min(3, "Number must be more than 3 numbers!")
      .max(50, "It is to match !"),
  });

  const handleSubmit = (data, actions) => {
    onSubmit(data);
    actions.resetForm();
  };
  const initialValues = {
    name: "",
    number: "",
  };
  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={registerSchema}
      >
        <Form>
          <label>
            <span>Name</span>
            <Field name="name" />
            <ErrorMessage name="name" component="span" />
          </label>
          <label>
            <span>Number</span>
            <Field name="number" />
            <ErrorMessage name="number" component="span" />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
