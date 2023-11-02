import Form from "react-bootstrap/Form";
import { useContext, useState } from "react";
import { SearchContext } from "../context/productContext";

function TextControlsExample(props) {
  const[currentval,setCurrentval]= useState('');
  const {searchHandler}=useContext(SearchContext)
  function filter()
  {
    searchHandler(currentval)
  }
  function submit(e)
  {
    e.preventDefault();
  }
  return (
    <>
      <div className="container">
        <Form onSubmit={submit}>
          <Form.Group className="mb-3 d-flex p-3" controlId="exampleForm.ControlInput1">
            <Form.Control
             type="text"
              placeholder="search"
              value={currentval}
              onChange={(e)=> setCurrentval(e.target.value)}
               />
            <button onClick={filter} className="bg-info text-white">search</button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}

export default TextControlsExample;
