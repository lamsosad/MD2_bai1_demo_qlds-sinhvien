import React, { Component } from 'react';
class Student extends Component {
  handleUpdate = (stUpdate) => {
    this.props.updateProps(stUpdate, true, "UPDATE")
  }
  handleShow = (stShow) => {
    this.props.showProps(stShow, true, "")
  }
  handleDelete = (idUser)=>{
    this.props.deleteProps(idUser)
  }

  render() {
    let { stInfo, stt } = this.props;

    return (<tr>
      <td>{stt}</td>
      <td>{stInfo.studentId}</td>
      <td>{stInfo.studentName}</td>
      <td>{stInfo.age}</td>
      <td>{stInfo.sex == "true" ? "Nam" : "Nữ"}</td>
      <td>
        <div className="template-demo">
          <button
            type="button"
            className="btn btn-danger btn-icon-text"
            onClick={() => this.handleShow(stInfo)}
          >
            Xem
          </button>
          <button
            type="button"
            className="btn btn-warning btn-icon-text"
            onClick={() => this.handleUpdate(stInfo)}
          >
            Sửa
          </button>
          <button
            type="button"
            className="btn btn-success btn-icon-text"
            onClick={()=>this.handleDelete(stInfo.studentId)}
          >
            Xóa
          </button>
        </div>
      </td>
    </tr>)
  }
}
export default Student