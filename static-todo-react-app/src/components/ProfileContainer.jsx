import ProfileCard from "./ProfileCard";

const ProfileContainer = () => {
    let profiles = [
        {name: "Alex", age: 25, bio: "A software engineer who loves hiking."},
        {name: "Taylor", age: 30, bio: "A designer passionate about photography."},
        {name: "Cher", age: 78, bio: "A sassy musician and lover of things that sparkle!"}
    ];

    return <ul>
    {profiles.map(profile => <li key={profile.name}><ProfileCard name = {profile.name} age = {profile.age} bio = {profile.bio} /></li>)}
    </ul>    
};

export default ProfileContainer;