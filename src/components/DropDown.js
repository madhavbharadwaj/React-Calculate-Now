import React from 'react';
import { Dropdown, DropdownToggle,Button ,Table,DropdownMenu, DropdownItem } from 'reactstrap';

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);


    this.handlePrint = this.handlePrint.bind(this);

    this.togglecr1 = this.togglecr1.bind(this);
    this.changeValuecr1 = this.changeValuecr1.bind(this);



    this.togglegr1 = this.togglegr1.bind(this);
    this.changeValuegr1 = this.changeValuegr1.bind(this);


    this.state = {

        dropDownValuecr1: '',
        dropdownOpencr1: false,

        dropDownValuegr1: '',
        dropdownOpengr1: false,

        res:'',
       
    };

  }

  togglecr1() {
    this.setState(prevState => ({
        dropdownOpencr1: !prevState.dropdownOpencr1
        
    }));
  }


  togglegr1() {
    this.setState(prevState => ({
        dropdownOpengr1: !prevState.dropdownOpengr1
        
    }));
  }

  changeValuecr1(e) {  
    this.setState({dropDownValuecr1: e.currentTarget.textContent})
    let s
    switch(this.state.dropDownValuegr1) {
      case 'S':
      s= parseInt(e.currentTarget.textContent) *  10; 
      break
  
      case 'A':
      s= parseInt(e.currentTarget.textContent) *  9;
      break
  
      case 'B':
      s= parseInt(e.currentTarget.textContent) *  8;
      break
  
      case 'C':
      s= parseInt(e.currentTarget.textContent) *  7;
      break
      
      case 'D':
      s= parseInt(e.currentTarget.textContent) *  5;
      break
  
      default:
        return 'Invalid';
  
     } 
     this.setState({ res: s});
  }

  changeValuegr1(e) { 
    let s
    this.setState({dropDownValuegr1: e.currentTarget.textContent})
    switch(e.currentTarget.textContent) {
      case 'S':
      s= parseInt(this.state.dropDownValuecr1) *  10; 
      break
  
      case 'A':
      s= parseInt(this.state.dropDownValuecr1) *  9;
      break
  
      case 'B':
      s= parseInt(this.state.dropDownValuecr1) *  8;
      break
  
      case 'C':
      s= parseInt(this.state.dropDownValuecr1) *  7;
      break
      
      case 'D':
      s= parseInt(this.state.dropDownValuecr1) *  5;
      break
  
      default:
        return 'Invalid';
  
     } 
    this.setState({ res: s});
  }

  handlePrint() {
  
  }

  render() {
    return (
    
 <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Credits</th>
            <th>Grade</th>
            <th>Grade Point</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>
                 {/* Credit Row 1 */}
            <Dropdown isOpen={this.state.dropdownOpencr1} toggle={this.togglecr1} > 
                <DropdownToggle caret>
                    {this.state.dropDownValuecr1}
                </DropdownToggle>
                <DropdownMenu className='dr1'>
                    <DropdownItem header>Select Credits</DropdownItem>
                    <DropdownItem onClick={this.changeValuecr1}>5</DropdownItem>
                    <DropdownItem onClick={this.changeValuecr1}>4</DropdownItem>
                    <DropdownItem onClick={this.changeValuecr1}>3</DropdownItem>
                    <DropdownItem onClick={this.changeValuecr1}>2</DropdownItem>
                    <DropdownItem onClick={this.changeValuecr1}>1</DropdownItem>
                </DropdownMenu>
             </Dropdown>

            </td>
            <td>
                 {/* Grade Row 1 */}
            <Dropdown isOpen={this.state.dropdownOpengr1} toggle={this.togglegr1} > 
                <DropdownToggle caret>
                    {this.state.dropDownValuegr1}
                </DropdownToggle>
                <DropdownMenu className='dr2'>
                    <DropdownItem header>Select Grade</DropdownItem>
                    <DropdownItem onClick={this.changeValuegr1}>S</DropdownItem>
                    <DropdownItem onClick={this.changeValuegr1}>A</DropdownItem>
                    <DropdownItem onClick={this.changeValuegr1}>B</DropdownItem>
                    <DropdownItem onClick={this.changeValuegr1}>C</DropdownItem>
                    <DropdownItem onClick={this.changeValuegr1}>D</DropdownItem>
                </DropdownMenu>
             </Dropdown>
            </td>
            <td>{/*this.state.dropDownValue*/}
              <div>
                {this.state.res}
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Subject 2 Credits </td>
            <td>Subject 2 Grade</td>
            <td>Subject 2 Grade Point</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Subject 3 Credits </td>
            <td>Subject 3 Grade</td>
            <td>Subject 3 Grade Point</td>
          </tr>
        </tbody>
        <Button color="success" onClick={this.handlePrint}>
      Calculate
      </Button >
      </Table>
      
      

      
    );
  }
}
