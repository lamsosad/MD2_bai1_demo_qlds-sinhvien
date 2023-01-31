import React, { Component } from 'react';
import Student from './Student';
class ListStudent extends Component {
  handleUpdate = (selectedStudent, toggle, actionName) => {
    //nhan cac thong tin truyen tu student len
    this.props.updateProps(selectedStudent, toggle, actionName);
  }
  handleShow = (selectedStudent, toggle, actionName) => {
    //nhan thong tin tuwf student
    this.props.showProps(selectedStudent, toggle, actionName);
  }
  handleDelete = (idUser) => {
    this.props.deleteProps(idUser)

  }
  render() {
    let { students } = this.props;
    let elementListStudent = students.map((student, index) => {
      return <Student key={student.studentId} stInfo={student} stt={index + 1}
        updateProps={this.handleUpdate}
        showProps={this.handleShow}
        deleteProps={this.handleDelete} />
    })
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {elementListStudent}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default ListStudent