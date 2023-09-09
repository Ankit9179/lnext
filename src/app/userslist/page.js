const Userlist = async () => {
  const res = await fetch("https://dummyjson.com/users"); //use need to convert data in json
  const data = await res.json();
  // console.log(data);
  return data.users;
};

export default async function page() {
  const users = await Userlist();
  // console.log(users);
  return (
    <div>
      <p className="text-3xl">user list</p>
      {users.map((item) => {
        return (
          <div>
            <h1>name :{item.firstName}</h1>
          </div>
        );
      })}
    </div>
  );
}
