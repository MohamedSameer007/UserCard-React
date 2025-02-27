import './App.css'
const userData = [
    {
        name:"Maradona",
        city:"Argentina",
        description:"front-end developer",
        skills:["UI / UX", "front-end developer", "HTML", "CSS", "Javascript", "React JS", "Node"],
        online:false,
        profile:"/Maradona.avif "
    },
    {
        name:"Lamine Yamal",
        city:"Spanish",
        description:"front-end developer",
        skills:["UI / UX", "front-end developer", "HTML", "CSS", "Javascript", "React JS", "Node"],
        online:true,
        profile:"/lamine yamal.jpg"
    },
    {
        name:"Lamine Yamal",
        city:"Spanish",
        description:"front-end developer",
        skills:["UI / UX", "front-end developer", "HTML", "CSS", "Javascript", "React JS", "Node"],
        online:false,
        profile:"/lamine yamal.jpg"
    },
    {
        name:"Lamine Yamal",
        city:"Spanish",
        description:"front-end developer",
        skills:["UI / UX", "front-end developer", "HTML", "CSS", "Javascript", "React JS", "Node"],
        online:false,
        profile:"/lamine yamal.jpg"
    },
    {
        name:"Lamine Yamal",
        city:"Spanish",
        description:"front-end developer",
        skills:["UI / UX", "front-end developer", "HTML", "CSS", "Javascript", "React JS", "Node"],
        online:false,
        profile:"/lamine yamal.jpg"
    }
    ,
    {
        name:"Sergio Ramos",
        city:"Spanish",
        description:"front-end developer",
        skills:["UI / UX", "front-end developer", "HTML", "CSS", "Javascript", "React JS", "Node"],
        online:false,
        profile:"/Sergio Ramos.avif"
    },
    {
        name:"Ronaldinho",
        city:"Brazil",
        description:"front-end developer",
        skills:["UI / UX", "front-end developer", "HTML", "CSS", "Javascript", "React JS", "Node"],
        online:true,
        profile:"/Ronaldinho.jpg"
    },
    {
        name:"Lamine Yamal",
        city:"Spanish",
        description:"front-end developer",
        skills:["UI / UX", "front-end developer", "HTML", "CSS", "Javascript", "React JS", "Node"],
        online:true,
        profile:"/lamine yamal.jpg"
    },
    {
        name:"Lamine Yamal",
        city:"Spanish",
        description:"front-end developer",
        skills:["UI / UX", "front-end developer", "HTML", "CSS", "Javascript", "React JS", "Node"],
        online:false,
        profile:"/lamine yamal.jpg"
    },
    {
        name:"Lamine Yamal",
        city:"Spanish",
        description:"front-end developer",
        skills:["UI / UX", "front-end developer", "HTML", "CSS", "Javascript", "React JS", "Node"],
        online:false,
        profile:"/lamine yamal.jpg"
    },
    {
        name:"Lamine Yamal",
        city:"Spanish",
        description:"front-end developer",
        skills:["UI / UX", "front-end developer", "HTML", "CSS", "Javascript", "React JS", "Node"],
        online:false,
        profile:"/lamine yamal.jpg"
    }
    ,
    {
        name:"Sergio Ramos",
        city:"Spanish",
        description:"front-end developer",
        skills:["UI / UX", "front-end developer", "HTML", "CSS", "Javascript", "React JS", "Node"],
        online:false,
        profile:"/Sergio Ramos.avif"
    },
    {
        name:"Ronaldinho",
        city:"Brazil",
        description:"front-end developer",
        skills:["UI / UX", "front-end developer", "HTML", "CSS", "Javascript", "React JS", "Node"],
        online:true,
        profile:"/Ronaldinho.jpg"
    }
]
function User(props){
    return (
        <div className="card-container">
            <span className={props.online ? "pro online" : "pro offline"}>{props.online ? "ONLINE" : "OFFLINE"}</span>
            <img src={props.profile} className="img" />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.description}</p>
            <div className="buttons">
                <button className="primary">Message</button>
                <button className="primary outline">Following</button>
            </div>
            <div className="skills">
                <h6>Skills</h6>
                <ul>
                    {props.skills.map((skill, index) => (<li key={index}>{skill}</li>))}
                </ul>
            </div>
        </div>
    )
}

function App() {
  return (
    <>
    {userData.map((user, index) => (
        <User key={index}
        name={user.name}
        city={user.city}
        description={user.description}
        online={user.online}
        profile={user.profile}
        skills={user.skills}
        />
    ))}
    </>
  )
}


{/* <User name="Maradona" city="Argentina" description="front-end developer" skills={["UI / UX", "front-end developer", "HTML", "CSS", "Javascript", "React JS", "Node"]} online={true} profile="Maradona.avif" /> */}

export default App
