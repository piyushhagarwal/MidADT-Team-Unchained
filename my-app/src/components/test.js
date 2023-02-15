import React, { useState } from "react";

export default function Test() {
  const [productId, setProductId] = useState("");
  const [receiverId, setreceiverId] = useState("");
  const [submit, setSubmit] = useState(false);

  const tablearray = [
    {
      step: 1,
      owner: "38r89ur8f",
      date: "12-2-2023",
      nextReciever: "98heh8fh",
    },
    {
      step: 2,
      owner: "38r89ur8f",
      date: "12-2-2023",
      nextReciever: "98heh8fh",
    },
    {
      step: 3,
      owner: "38r89ur8f",
      date: "12-2-2023",
      nextReciever: "98heh8fh",
    },
  ];

  const handleProductsId = (event) => {
    setProductId(event.target.value);
  };

  const handleRecieversId = (event) => {
    setreceiverId(event.target.value);
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <a class="navbar-brand mx-3" href="/">
          Test Supply chain
        </a>

        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <button
            class="btn btn-outline-success mx-5 my-sm-0 my-lg-0 ms-auto px-5"
            type="submit"
          >
            Connect Wallet
          </button>
        </div>
      </nav>

      <div class=" row input-group  mx-5 my-5">
        <div class="col input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Product Id
          </span>
        </div>
        <input
          value={productId}
          onChange={handleProductsId}
          type="text"
          class="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
        <div class="col input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Receivers Id
          </span>
        </div>
        <input
          value={receiverId}
          onChange={handleRecieversId}
          type="text"
          class="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
        <div class="col">
          <button type="button" class="btn btn-outline-dark">
            Submit
          </button>
        </div>
      </div>
      <table class="table table-striped table-dark container">
        <thead>
          <tr>
            <th scope="col">Sr No.</th>
            <th scope="col">Owner</th>
            <th scope="col">Date</th>
            <th scope="col">Next Reciever</th>
          </tr>
        </thead>

        <tbody>
          {tablearray.map((entry) => {
            return (
              <tr>
                <th scope="row">{entry.step}</th>
                <td>{entry.owner}</td>
                <td>{entry.date}</td>
                <td>{entry.nextReciever}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
