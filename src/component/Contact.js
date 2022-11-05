import React from 'react';
import TextBox from './widgets/InputBox';
import RichTextArea from './widgets/RichTextarea';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Contact = () => {
  const [form,setForm] = React.useState({
text:"",text2:"",text3:"",text5:""
  })
  const handleChange=(e)=>{
    setForm((fv)=>{
return {
  ...fv,[e.target.name]:e.target.value
}
    })

  }
  const handleChangeWithName = (name,value) =>{
    setForm((fv)=>{
    return {
      ...fv,[name]:value
    }
    });
      }
  
      const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(form);
      }
  console.log(form)
  return (
    <div className='text'>
      <h1 style={{textAlign:'center'}}>Contact Me</h1>
      <p style={{textAlign:'center'}}>Hi there, contact me to ask me about anything you have in mind.</p>
      <div className='sub' style={{width:'100%'}}>
        <TextBox style={{textAlign:'center',margin:'20px',width:'49%', float:'right'}} type="text" name="text" label="First name" value={form.text} handleChange={handleChange} id="first_last" placeholder="Enter your first name"/>{' '}
        <TextBox  style={{textAlign:'center',margin:'20px'}} type="text" name="text2" label="Last name" value={form.text2} handleChange={handleChange} id="last_name" placeholder="Enter your last name"/>
        </div>
        <TextBox style={{textAlign:'center',margin:'20px',position:'relative',left:'30px'}} type="email" name="text3" label="Email" value={form.text3} handleChange={handleChange} id="email" placeholder="youremail@gmail.com"/>
       
   <RichTextArea  style={{textAlign:'center',margin:'20px'}} type="text" name="text5" label="Message" value={form.text5} handleChange={handleChangeWithName} id="message" placeholder="send me a message and I'll reply as soon as possible..."/>
   <div className='check' style={{display:'flex'}}><Checkbox {...label} /> <p>You agree to providing your data to zuri who may contact you</p></div>
<Button onClick={handleSubmit} id="btn_submit" style={{textAlign:'center', width:'100%',height:'40px',marginTop:'10px',marginBottom:'20px'}} variant="contained" >Send Message</Button>



    </div>
  )
}

export default Contact