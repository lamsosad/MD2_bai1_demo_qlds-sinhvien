import React, { Component } from 'react';
class Control extends Component {
  constructor(props) {
    super();
    this.state = {
      searchData: ''
    }
  }
  handleSearch = (e) => {
    e.preventDefault();
    //lay du lieu nhap vao o search
    this.props.handleSearchProps(this.state.searchData);
  }

  handleChange = (e) => {

    this.setState({
      searchData: e.target.value
    })

  }
  handleSoft = (e) => {
    let softData = e.target.value;
    let arrSoft = softData.split('-');
    this.props.handleSoft(arrSoft[0], arrSoft[1]);
  }
  handleAdd = () => {
    this.props.addprops(true, "ADD")
  }



  render() {
    return (
      <div className="card-header">
        <div className="row">
          <div className="col-3">
            <button type="button" className="btn btn-primary btn-icon-text" onClick={this.handleAdd}>
              Thêm mới sinh viên
            </button>
          </div>
          <div className="col-6">
            <form className="search-form" action="#">
              <i className="icon-search" />
              <input
                type="search"
                className="form-control"
                placeholder="Search Here"
                title="Search here"
                name='search'
                id='search'
                onChange={this.handleChange}

              />
              <button className="btn btn-primary btn-icon-text" onClick={this.handleSearch}>
                Tìm kiếm
              </button>
            </form>
          </div>
          <div className="col-3 d-flex align-items-center">
            <select className="form-control" onChange={this.handleSoft}>
              <option value="">chon sap xep</option>
              <option value="studentName-ASC">ten a-z</option>
              <option value="studentName-DESC">ten z-a</option>
              <option value="age-ASC">tuoi tang dan</option>
              <option value="age-DESC">tuoi tang dan</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}
export default Control