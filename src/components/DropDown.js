import React from 'react';
import { Dropdown, DropdownToggle,Button ,Table,DropdownMenu, DropdownItem } from 'reactstrap';

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);

    this.calGradePoint = this.calGradePoint.bind(this);
    this.calSGPA = this.calSGPA.bind(this)

   

    //row 1 Subject 1 Credit and Toggle
    this.togglecr1 = this.togglecr1.bind(this);
    this.changeValuecr1 = this.changeValuecr1.bind(this);
    //row 1 Subject 1 Grade and Toggle
    this.togglegr1 = this.togglegr1.bind(this);
    this.changeValuegr1 = this.changeValuegr1.bind(this);


    //row 2 Subject 2 Credit and Toggle
    this.togglecr2 = this.togglecr2.bind(this);
    this.changeValuecr2 = this.changeValuecr2.bind(this);
    //row 2 Subject 2 Grade and Toggle
    this.togglegr2 = this.togglegr2.bind(this);
    this.changeValuegr2 = this.changeValuegr2.bind(this);

    //row 3 Subject 3 Credit and Toggle
    this.togglecr3 = this.togglecr3.bind(this);
    this.changeValuecr3 = this.changeValuecr3.bind(this);
    //row 3 Subject 3 Grade and Toggle
    this.togglegr3 = this.togglegr3.bind(this);
    this.changeValuegr3 = this.changeValuegr3.bind(this);
    
    

    this.state = {
       //dropdown row 1
        dropDownValuecr1: '',
        dropdownOpencr1: false,
      
        dropDownValuegr1: '',
        dropdownOpengr1: false,

        //dropdown row 2
        dropDownValuecr2: '',
        dropdownOpencr2: false,

        dropDownValuegr2: '',
        dropdownOpengr2: false,

        //dropdown row 3
        dropDownValuecr3: '',
        dropdownOpencr3: false,
        
        dropDownValuegr3: '',
        dropdownOpengr3: false,

        gp1Result:'',
        gp2Result:'',
        gp3Result:'',
        ctotal:0,
        gtotal:0,
        fSgpa:0.0
        
    };


  }

  reset = () => 
  {
    this.setState({
      //dropdown row 1
       dropDownValuecr1: '',
       dropdownOpencr1: false,
     
       dropDownValuegr1: '',
       dropdownOpengr1: false,

       //dropdown row 2
       dropDownValuecr2: '',
       dropdownOpencr2: false,

       dropDownValuegr2: '',
       dropdownOpengr2: false,

       //dropdown row 3
       dropDownValuecr3: '',
       dropdownOpencr3: false,
       
       dropDownValuegr3: '',
       dropdownOpengr3: false,

       gp1Result:'',
       gp2Result:'',
       gp3Result:'',
       ctotal:0,
       gtotal:0,
       fSgpa:0.0
       
   });


 
  }
  calSGPA()
  {
    var x = (this.state.gtotal/ this.state.ctotal).toFixed(2)
    this.setState({ fSgpa: x})

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


  togglecr2() {
    this.setState(prevState => ({
        dropdownOpencr2: !prevState.dropdownOpencr2
        
    }));
  }

  togglegr2() {
    this.setState(prevState => ({
        dropdownOpengr2: !prevState.dropdownOpengr2
        
    }));
  }

  togglecr3() {
    this.setState(prevState => ({
        dropdownOpencr3: !prevState.dropdownOpencr3
        
    }));
  }

  togglegr3() {
    this.setState(prevState => ({
        dropdownOpengr3: !prevState.dropdownOpengr3
        
    }));
  }
  
  /*calSGPA(){
   let sgpa;

   sgpa = (parseFloat(this.state.gp1Result) + parseFloat(this.state.gp2Result) + parseFloat(this.state.gp3Result))  / (parseFloat(this.state.dropDownValuecr1) + parseFloat(this.state.dropDownValuecr2) +parseFloat(this.state.dropDownValuecr3))
    alert(sgpa)
  }*/

  calGradePoint(x,y){
    let s
    switch(x) {

      case 'S':
      s= parseInt(y) *  10; 
      break

      case 'A':
      s= parseInt(y) *  9;
      break
  
      case 'B':
      s= parseInt(y) *  8;
      break
  
      case 'C':
      s= parseInt(y) *  7;
      break
      
      case 'D':
      s= parseInt(y) *  5;
      break
  
      default:
      break

     } 
     return s;
       // alert(s)
        //this.setState({ res: s});
    }
  

  changeValuecr1(e) {  
    this.setState({dropDownValuecr1: e.currentTarget.textContent,
     
    })
    let gp1;
    gp1 = this.calGradePoint(this.state.dropDownValuegr1,e.currentTarget.textContent)

    
 
    this.setState({ gp1Result: gp1,
    
      gtotal: gp1


    });
  
    
  }

  changeValuegr1(e) { 
    this.setState({dropDownValuegr1: e.currentTarget.textContent})
    let gp1;
    gp1= this.calGradePoint(e.currentTarget.textContent,this.state.dropDownValuecr1)
    
    this.setState({ gp1Result: gp1,
      ctotal: this.state.dropDownValuecr1,
      gtotal: gp1
    });
    

  }

  changeValuecr2(e) {  
    this.setState({dropDownValuecr2: e.currentTarget.textContent})
    var  gp2;
    gp2 = this.calGradePoint(this.state.dropDownValuegr2,e.currentTarget.textContent)
    
    this.setState({ gp2Result: gp2,

      
      gtotal:this.state.gp1Result + gp2
    });
    
   
   
  }

  changeValuegr2(e) { 
    this.setState({dropDownValuegr2: e.currentTarget.textContent})
    var gp2;
    gp2= this.calGradePoint(e.currentTarget.textContent,this.state.dropDownValuecr2)
   
    this.setState({ gp2Result: gp2,
      ctotal: parseInt(this.state.dropDownValuecr1) + parseInt(this.state.dropDownValuecr2),
      gtotal:this.state.gp1Result + gp2
    });
   
  }

  changeValuecr3(e) {  
    this.setState({dropDownValuecr3: e.currentTarget.textContent})
    let gp3;
    gp3 = this.calGradePoint(this.state.dropDownValuegr3,e.currentTarget.textContent)
    this.setState({ gp3Result: gp3,

      gtotal:this.state.gp1Result + this.state.gp2Result + gp3
    });
  }

  changeValuegr3(e) { 
    this.setState({dropDownValuegr3: e.currentTarget.textContent})
    let gp3;
    gp3= this.calGradePoint(e.currentTarget.textContent,this.state.dropDownValuecr3)
    this.setState({ gp3Result: gp3,
      ctotal: parseInt(this.state.dropDownValuecr1) + parseInt(this.state.dropDownValuecr2) + parseInt(this.state.dropDownValuecr3),
      gtotal: this.state.gp1Result +this.state.gp2Result + gp3
      
    });

    

  }

 
  render() {
    return (
    
 <Table bordered responsive>
        <thead>
          <tr>
            <th>Subject</th>
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
            <Dropdown isOpen={this.state.dropdownOpencr1} toggle={this.togglecr1}> 
                <DropdownToggle caret>
                    {this.state.dropDownValuecr1}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Select Credit</DropdownItem>
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
            <Dropdown isOpen={this.state.dropdownOpengr1} toggle={this.togglegr1}> 
                <DropdownToggle caret>
                    {this.state.dropDownValuegr1}
                </DropdownToggle>
                <DropdownMenu>
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
                {this.state.gp1Result}
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>
                 {/* Credit Row 2 */}
            <Dropdown isOpen={this.state.dropdownOpencr2} toggle={this.togglecr2}> 
                <DropdownToggle caret>
                    {this.state.dropDownValuecr2}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Select Credit</DropdownItem>
                    <DropdownItem onClick={this.changeValuecr2}>5</DropdownItem>
                    <DropdownItem onClick={this.changeValuecr2}>4</DropdownItem>
                    <DropdownItem onClick={this.changeValuecr2}>3</DropdownItem>
                    <DropdownItem onClick={this.changeValuecr2}>2</DropdownItem>
                    <DropdownItem onClick={this.changeValuecr2}>1</DropdownItem>
                </DropdownMenu>
             </Dropdown>

            </td>
            <td>
                 {/* Grade Row 2 */}
            <Dropdown isOpen={this.state.dropdownOpengr2} toggle={this.togglegr2}> 
                <DropdownToggle caret>
                    {this.state.dropDownValuegr2}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Select Grade</DropdownItem>
                    <DropdownItem onClick={this.changeValuegr2}>S</DropdownItem>
                    <DropdownItem onClick={this.changeValuegr2}>A</DropdownItem>
                    <DropdownItem onClick={this.changeValuegr2}>B</DropdownItem>
                    <DropdownItem onClick={this.changeValuegr2}>C</DropdownItem>
                    <DropdownItem onClick={this.changeValuegr2}>D</DropdownItem>
                </DropdownMenu>
             </Dropdown>
            </td>
            <td>
            {this.state.gp2Result}
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>
                 {/* Credit Row 3 */}
            <Dropdown isOpen={this.state.dropdownOpencr3} toggle={this.togglecr3}> 
                <DropdownToggle caret>
                    {this.state.dropDownValuecr3}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Select Credit</DropdownItem>
                    <DropdownItem onClick={this.changeValuecr3}>5</DropdownItem>
                    <DropdownItem onClick={this.changeValuecr3}>4</DropdownItem>
                    <DropdownItem onClick={this.changeValuecr3}>3</DropdownItem>
                    <DropdownItem onClick={this.changeValuecr3}>2</DropdownItem>
                    <DropdownItem onClick={this.changeValuecr3}>1</DropdownItem>
                </DropdownMenu>
             </Dropdown>

            </td>
            <td>
                 {/* Grade Row 3 */}
            <Dropdown isOpen={this.state.dropdownOpengr3} toggle={this.togglegr3}> 
                <DropdownToggle caret>
                    {this.state.dropDownValuegr3}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Select Grade</DropdownItem>
                    <DropdownItem onClick={this.changeValuegr3}>S</DropdownItem>
                    <DropdownItem onClick={this.changeValuegr3}>A</DropdownItem>
                    <DropdownItem onClick={this.changeValuegr3}>B</DropdownItem>
                    <DropdownItem onClick={this.changeValuegr3}>C</DropdownItem>
                    <DropdownItem onClick={this.changeValuegr3}>D</DropdownItem>
                </DropdownMenu>
             </Dropdown>
            </td>
            <td>
            {this.state.gp3Result}
            </td>
          </tr>

          <tr>
            <th scope="row">4</th>
            <td>
            {this.state.ctotal}
              </td>
            <td>SGPA : {this.state.fSgpa}</td>
            <td>
            {this.state.gtotal}
            </td>
          </tr>
        </tbody>
        <br />
      <br />
        <Button  onClick={this.calSGPA} dark>
      Calculate
      </Button >
      <br />
      {"\n"}
      <br />
      
      <Button onClick={this.reset} dark>
      RESET
      </Button >
      </Table>
      
      

      
    );
  }
}
