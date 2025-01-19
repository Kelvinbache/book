import { Component } from "react";
import "../css/form.css";

export class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <form action="" method="post" className="form">
            <fieldset className="content-input">
                <input type="text" className="nameBook"required placeholder="Name of Book"/>
                <textarea name="" id="" className="featureBook" required placeholder="The feature"></textarea>
                <input type="file" className="fileBook" required accept=".pdf, .word" multiple></input>
            </fieldset>
            <button type="submit"> Save</button>
        </form>
      </>
    );
  }
}
