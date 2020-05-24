import React from 'react'
import '../Style/Components/AmoriosForm.css'
class AmorioForm extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {    
            form:{
                id : '',
                name :  '',
                puesto : '',
                status : '',
          }  ,
    }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
        
      }
      handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
              },
        });
       
      };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewLover(this.state.form)
    console.log('Form was submitted');
    
  };

  render(){
      return(
        <div>
        <h1>New Lover</h1>

        <form >
          <div className="form-group">
            <label>Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="name"             
              value = {this.state.value}
               />
          </div>

          <div className="form-group">
            <label>Puesto</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="puesto"             
              value = {this.state.value}
               />
          </div>

          <div className="form-group">
            <label>Status</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="status"             
              value = {this.state.value}
               />
          </div>

          <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
      )
  }

}
export default AmorioForm