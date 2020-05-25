import React from 'react'
import '../Style/Components/GuerrerosForm.css'
class GuerrerosForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          form: {
            id: "",
            name: "",
            especialidad : "",
            cargo :"", 
            personasAsesinadas : "",
            interes: "",
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
        this.props.addNewGuerrero(this.state.form);
        console.log("Form was submitted");
      };
    
    render(){
        return(
            <React.Fragment>
                 <div>
        <h1>New Warrior </h1>

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
            <label>Skill</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="especialidad"
              value={this.state.value}
            />
          </div>

          <div className="form-group">
            <label>Appointment </label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="cargo"
              value={this.state.value}
            />
          </div>
            
          <div className="form-group">
            <label>People Murdered</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="personaAsesinada"
              value={this.state.value}
            />
          </div>
          
          <div className="form-group">
            <label>Interes</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="interes"
              value={this.state.value}
            />
          </div>
          <button
            type="submit"
            onClick={this.handleSubmit}
            className="btn btn-primary"
            id = "btn"
          >
            Save
          </button>
        </form>
      </div>
            </React.Fragment>
        )
    }        
}
export default GuerrerosForm