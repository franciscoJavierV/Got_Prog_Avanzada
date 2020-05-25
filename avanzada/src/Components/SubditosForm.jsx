import React from 'react'
import '../Style/Components/SubditosForm.css'
class SubditosForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          form: {
            id: "",
            name: "",
            hijos : "",
            nombre_hijos :"", 
            problema : "",
            status: "",
          },
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange = (e) => {
        this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
          },
        });
      };
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNewSubdito(this.state.form);
        console.log("Form was submitted");
      };
    
    render(){
        return(
            <React.Fragment>
                 <div>
        <h1>New Vassal </h1>

        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="name"
              value={this.state.value}
            />
          </div>

          <div className="form-group">
            <label>Sons</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="hijos"
              value={this.state.value}
            />
          </div>

          <div className="form-group">
            <label>Sons Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="nombre_hijos"
              value={this.state.value}
            />
          </div>
            
          <div className="form-group">
            <label>Status</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="status"
              value={this.state.value}
            />
          </div>
          
          <div className="form-group">
            <label>Problem</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="problema"
              value={this.state.value}
            />
          </div>
          <button
            type="submit"
            onClick={this.handleSubmit}
            className="btn btn-primary"
            id ="btn"
          >
            Save
          </button>
        </form>
      </div>
            </React.Fragment>
        )
    }        
}
export default SubditosForm