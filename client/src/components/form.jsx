import { apiPost } from "../api/reponse.mjs";
import { Formik, Form, Field } from "formik";
import "../css/form.css";

//pass the code a function
export const Forms = () => {
  return (
    <Formik
      initialValues={{
        name: " ",
        description: " ",
      }}

      onSubmit={async(values) => {  
         await new Promise ((r)=> setTimeout(r, 500))
         apiPost(values).then(r => console.log(r))
      }}
    >
  
  {({isSubmitting}) => (
      <Form className="form">
        <fieldset className="content-input">
          <Field type="text" name = "name" id="name" className="nameBook" required placeholder="Name of Book"/>
          <Field name="description" id="description" className="featureBook" required placeholder="The feature" /> 
          {/* <input type="file" className="fileBook" required accept=".pdf, .word" multiple></input> */}
        </fieldset>
        <button type="submit" disabled={isSubmitting}>Save</button>
      </Form>
  )}
    </Formik>
  );
};
