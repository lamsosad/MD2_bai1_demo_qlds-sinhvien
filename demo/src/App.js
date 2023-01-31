import './App.css';
import Control from './components/Control';
import ListStudent from './components/ListStudent';
import Form from './components/Form';
import { Component } from 'react';
class App extends Component {
  //khoir taoj danh sachs sv
  constructor(props) {
    super();
    this.state = {
      students: [
        { studentId: "SV001", studentName: "Nguyen Van A", age: 10, sex: "true", birthDate: "2020-12-07", birthPlace: "HN", address: "so 1 pham hung" },
        { studentId: "SV002", studentName: "Nguyen Van B", age: 20, sex: "false", birthDate: "1999-07-23", birthPlace: "DN", address: "so 2 pham hung" },
        { studentId: "SV003", studentName: "Nguyen Van C", age: 30, sex: "true", birthDate: "2001-07-20", birthPlace: "HCM", address: "so 3 pham hung" }],
      searchData: '',
      softDir: '',
      softBy: '',
      isToggle: false,
      actionName: "",
      selectedStudent: {},

    }

  }
  handleSearch = (searchData) => {
    this.setState({
      searchData: searchData
    })

  }
  handleSoft = (softDir, softBy) => {
    this.setState({
      softDir: softDir,
      softBy: softBy

    })
  }
  handleAddStudent = (toggle, actionName) => {
    //nhan du lieu khi click button them moi sinh vieen
    //cap nhat state
    this.setState({
      isToggle: toggle,
      actionName: actionName

    })
  }
  handleSubmitAdd = (stNew, toggle) => {
    //thoong tin doi tuong can them moi truyen tu form
    //cap nhat state
    this.setState({
      students: [...this.state.students, stNew],
      isToggle: toggle
    })
  }
  handleUpdateStudent = (selectedStudent, toggle, actionName) => {

    //cap nhat 
    this.setState({
      actionName: actionName,
      isToggle: toggle,
      selectedStudent: selectedStudent

    })
  }
  handleSubmitUpdate = (stUpdate, toggle) => {
    //cap nhat lai thong tin sau khi sua
    let students = [];
    for (let i = 0; i < this.state.students.length; i++) {
      if (this.state.students[i].studentId == stUpdate.studentId) {
        students.push(stUpdate);
      } else {
        students.push(this.state.students[i])
      }
    }
    this.setState({
      isToggle: toggle,
      students: students
    })
  }
  handleShowStudent = (selectedStudent, toggle, actionName) => {
    //cap nhat lai state
    this.setState({
      actionName: actionName,
      isToggle: toggle,
      selectedStudent: selectedStudent
    })

  }
  handleDeleteStudent = (idUser) => {
    // console.log(idUser);
    let arrDelete = this.state.students.filter(item => item.studentId !== idUser)
    this.setState({
      students: arrDelete
    })
  }

  render() {
    //an hiện form
    let elementForm = "";
    if (this.state.isToggle) {
      //hien thi form
      elementForm = <Form actionName={this.state.actionName}
        submitAddProps={this.handleSubmitAdd}
        selectedStudent={this.state.selectedStudent}
        submitUpdateProps={this.handleSubmitUpdate}></Form>
    }

    //loc du lieu
    let students = []
    if (this.state.searchData == '') {
      students = [...this.state.students];
    } else {
      //cos duw lieu search
      this.state.students.forEach(st => {
        if (st.studentName.toLowerCase().includes(this.state.searchData.toLocaleLowerCase())) {
          students.push(st)
        }
      })
    }
    //sap xep du lieu
    if (this.state.softDir != '') {
      if (this.state.softDir == "studentName") {
        //sap xep ten sv
        if (this.state.softBy == "ASC") {
          //ten tang
          students.sort((a, b) => (a.studentName > b.studentName) ? 1 : (a.studentName < b.studentName) ? -1 : 0);
        } else {
          //ten giam
          students.sort((a, b) => (a.studentName > b.studentName) ? -1 : (a.studentName < b.studentName) ? 1 : 0);

        }

      } else {
        //sap xep tuoi sv
        if (this.state.softBy == "ASC") {
          //tuoi tang
          students.sort((a, b) => a.age - b.age);
        } else {
          //tuoi giam
          students.sort((a, b) => b.age - a.age);
        }
      }
    }
    return (
      <div className="App">
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              {/* START CONTROL */}
              <Control handleSearchProps={this.handleSearch} handleSoft={this.handleSoft} addprops={this.handleAddStudent}></Control>
              {/* END CONTROL */}
              {/* START LIST STUDENT */}
              <ListStudent students={students}
                updateProps={this.handleUpdateStudent}
                showProps={this.handleShowStudent}
                deleteProps={this.handleDeleteStudent}
              ></ListStudent>
              {/* END LIST STUDENT */}
            </div>
          </div>
          {/* START FORM SINH VIEN */}
          {elementForm}
          {/* END FORM SINH VIÊN */}
        </div>
      </div>
    );
  }
}

export default App;
