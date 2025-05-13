const ProfileCard = props => {
    const {name, age, bio} = props;
    return (
    <div>

     <p>Name: {name} <br />
        Age: {age} <br />
        Bio: {bio} <br />
     </p>
    
    </div>
    )    
}

export default ProfileCard;