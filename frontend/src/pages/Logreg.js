import React, { useState, useEffect } from 'react';
import SuccessModal from "../components/RegisterModal";
import '../styles/logreg.scss';

function LoginForm({ switchToSignUp }) {

  const handleSignIn = async (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    window.location.href = 'https://xientia23-api.onrender.com/auth/google'
    sessionStorage.setItem('isLoggedIn', true)
  };

  return (
    <div className="card login">
      <h2><i className="fas fa-key"></i> Sign In</h2>
      <form onSubmit={handleSignIn}>
        <button className="btn btn-primary btn-g" type="submit">Sign in with Google</button>
      </form>
      <p className="link-login">
        Haven't registered your team yet?
        <span className="switchText" onClick={switchToSignUp}>Register Team!</span>
      </p>
    </div>
  );
}

function SignupForm({ switchToLogin }) {

  const [teamName, setTeamName] = useState('')
  const [numberMembers, setNumberMembers] = useState(1)
  
  const [memberList, setMemberList] = useState([{
    name: '',
    regno: '',
    emailId: '',
  }])

  const [showModal, setShow] = useState(false);
    const closeHandler = () => {
      setShow(false);
    }

  const handleNumberMemberChange = (e) => {
    const maxMembers = 4
    const minMembers = 1
    const currentMembers = parseInt(e.target.value, 10)
    console.log(currentMembers)
    
    if(currentMembers > maxMembers)
      setNumberMembers(maxMembers)
    else if(currentMembers < minMembers)
      setNumberMembers(minMembers)
    else
      setNumberMembers(currentMembers)

    let newMemberList = []

    for(let i=0;i<currentMembers;i++)
      newMemberList.push({
        name: '',
        regno: '',
        emailId: '',
      })
    
    setMemberList(newMemberList)
  }

  const handleMemberChange = (e, index, field) => {
    const updatedMembers = [...memberList]
    updatedMembers[index][field] = e.target.value

    setMemberList(updatedMembers)
  }

  const handleSignUp = (e) => {
    e.preventDefault();

    const formData = {
      formTeamName: teamName,
      formNumberMembers: numberMembers,
      formMembers: memberList,
    }

    console.log('Form data: ', formData)

    sendToBackend(formData)

    setTeamName('')
    setNumberMembers(1)
    setMemberList([{
      name: '',
      regno: '',
      emailId: '',
    }])
  }

  const sendToBackend = async (data) => {
    const requestBody = {
      query: `
        mutation AddTeam($teamName: String!, $teamSize: Int!, $members: [ParticipantInput!]!) {
          addTeam(name: $teamName, size: $teamSize, members: $members) {
            id
            name
            size
          }
        }
      `,
      variables: {
        teamName: data.formTeamName, // Replace with your desired value
        teamSize: data.formNumberMembers, // Replace with your desired value
        members: data.formMembers, // Replace with your desired member data
      }
    };
    

    try {
      await fetch("https://xientia23-api.onrender.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      })
        .then((response) => response.json())
        .then((data) => {
          setShow(true);
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card signup">
      <div className='form-scroll'>
      <h2 className='mb-4'><i className="fas fa-user"></i>Register Team</h2>
      
      <form onSubmit={handleSignUp}>
        
        <div className="form-group">
          <label htmlFor="teamName">Team Name:</label>
          <input
            className="input"
            name="teamName"
            type="text"
            placeholder="Enter team name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="numberMembers">Number of Team Members:</label>
          <input
            className="input"
            name="numberMembers"
            type="number"
            placeholder="Enter number of team members"
            value={numberMembers}
            onChange={handleNumberMemberChange}
          />
        </div>
        <div className='member-container'>
          <div className='member-scroll'>
          {
          memberList.map((member, index) => (
            <div className="form-group mb-4" key={index}>
            <label htmlFor={`name${index}`}>{`Member #${index+1} Name:`}</label>
              <input
                className="input mb-2"
                name={`name${index}`}
                type="text"
                placeholder="Enter member name"
                value={member.name}
                onChange={(e) => handleMemberChange(e, index, 'name')}
              />
              <label htmlFor={`regno${index}`}>{`Member #${index+1} Reg.No:`}</label>
              <input
                className="input mb-2"
                name={`regno${index}`}
                type="text"
                placeholder="Enter member regno"
                value={member.regno}
                onChange={(e) => handleMemberChange(e, index, 'regno')}
              />
              <label htmlFor={`email${index}`}>{`Member #${index+1} email-id:`}</label>
              <input
                className="input mb-2"
                name={`email${index}`}
                type="email"
                placeholder="Enter member email-id"
                value={member.emailId}
                onChange={(e) => handleMemberChange(e, index, 'emailId')}
              />
            </div>
          ))
        }
          </div>
        </div>
        <button className="button11" type="submit">Register</button>

      </form>
      {showModal && <SuccessModal show={showModal} closeHandler={closeHandler}/> }
      </div>
      <div className='overflow-visible mt-2'>
      <p className="link-signUp">
        Already registered?
        <span className="switchText" onClick={switchToLogin}> Sign in!</span>
      </p>
      </div>
    </div>
  );
}

function LoggedIn({ switchToSignUp }) {
  
  const handleClick = (e) => {
    console.log('Clicked')
    switchToSignUp()
  }
  
  return (
    <div className="text-center">
      <h2>You are logged in!</h2>
      <p className="link-login mt-10">
        Haven't registered your team yet?
        <span className="switchText" onClick={handleClick}>Register Team!</span>
      </p>
    </div>
  );
}

function Logreg() {
  const [showLogin, setShowLogin] = useState(true);
  const [isKeySet, setIsKeySet] = useState(false)
  
  useEffect(() => {
    if(!sessionStorage.getItem('isLoggedIn'))
    {
      sessionStorage.setItem('isLoggedIn', false)
      setIsKeySet(true)
    }
  }, [isKeySet])

  const switchToSignUp = () => {
    setShowLogin(false);
  };

  const switchToLogin = () => {
    setShowLogin(true);
  };

  return (
    <div className='body'>
      {
        sessionStorage.getItem('isLoggedIn') === "true" ?
        (showLogin ? <LoggedIn switchToSignUp={switchToSignUp}/> : <SignupForm switchToLogin={switchToLogin} />) : (showLogin ? (
          <LoginForm switchToSignUp={switchToSignUp}/>
        ) : (
          <SignupForm switchToLogin={switchToLogin} />
        ))
      }
    </div>
  );
}

export default Logreg;
