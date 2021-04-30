import React from "react";
import { Formik, Field, Form } from "formik";

export default function Formak() {
  return (
    <div>
      <Formik
        initialValues={{ mojeIme: "", mojePrezime: "" }}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form>
            <Field name="mojeIme" type="input" />
            <Field name="mojePrezime" type="input" />

            <button type="submit"> submit</button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
}
