import React from "react";

const Room = () => {
  return (
    <div className="m-3">
      <form className="form-control ">
        <label htmlFor="" className="form-label">
          Enter chat Room name
        </label>
        <input type="text" className="form-control" />
        <button className="btn btn-success mt-1">Submit</button>
      </form>
    </div>
  );
};

export default Room;
