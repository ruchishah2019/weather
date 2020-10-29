import React from "react";

class Search extends React.Component {
  hanldeSubmit = () => {
    const term = this.refs.term.value;
    this.props.handleClick(term);
  };

  render() {
    return (
      <div className="input-group input-group-lg">
        <input
          type="text"
          className="form-control"
          ref="term"
          defaultValue={this.props.term}
          placeholder={this.props.placeholder}
        />
        <div className="input-group-btn" id="basic-addon2">
          <button className="btn btn-primary" onClick={this.hanldeSubmit}>
            Get Data
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
