import { apiPost } from "../api/reponse.mjs";
// import { Formik, Form, Field } from "formik";

import { useState } from "react";
import "../css/form.css";

export const Forms = () => {
  
  const [information, setInformation] = useState({name:"", description:""});
  const [file, setFile] = useState(null);


 const handleName = (e) => {
    setInformation({name:e.target.value}); 
  }

  
 const handleDescription = (e) => {
  setInformation({description:e.target.value}); 
}



  const handleFile = (e) => {
    setFile(e.target.files[0])
  }
  


  const handleSubmit =()=>{
    const data = {name:information.name, description:information.description, file:file}
    apiPost(data).then(r => console.log(r));
  }
  

  return (
        
  //   <Formik
  //     initialValues={{
  //       name: " ",
  //       description: " ",
  //       file:[]
  //     }}

  //     onSubmit={async(values) => {  
  //        await new Promise ((r)=> setTimeout(r, 500));
         
  //        const form = new FormData();

         
  //        form.append("name",values.name)
  //        form.append("description",values.description)
  //        form.append("file",values.file)

  //        form.set("file", values.file);
         
  //       apiPost(form).then(r => console.log(r))

  //     }}
  //   >
  
  // {({isSubmitting}) => (
      
      <form className="form" encType="multipart/form-data" onSubmit={handleSubmit}>
        <fieldset className="content-input">
          <input type="text" name = "name" className="nameBook"          value={information.name} required     placeholder="Name of Book"                     onChange={handleName}/>
          <input             name="description"  className="featureBook" value={information.description}   required      placeholder="The feature"            onChange={handleDescription}/> 
          <input type="file" name="file"         className="fileBook"       required      accept=".pdf, .word"  multiple                          onChange={handleFile}/>
        </fieldset> 
        <button type="submit">Save</button>
      </form>
  // )}
  //   </Formik>


    // <form>
    //    <input type="file" onChange={(e) => console.log(e.target.files[0])}/>
    //    <button type="submit">send</button>
    // </form>
 );
};


// Modificar el diseno del formulario para que no se vea tan simple