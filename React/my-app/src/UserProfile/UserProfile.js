export function UserProfile(){
    const user = {
        firstName:"rohit",
        lastName:"sharma",
        age:40,
        gender:"Male",
        isAdmin:true
    }
    return<div>
        <p>Name:{user.firstName} {user.lastName}</p>
        <p>Age:{user.age}</p>
        <p>Gender:{user.gender}</p>
        {user.isAdmin? <p>I an an Admin</p>:<p>Iam not an Admin</p>}
    </div>
}