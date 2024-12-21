import Card from "./card";

function Cards({ users, removeUser }) {
  if (!users || users.length === 0) {
    return <p className="text-gray-500 text-center">No users available.</p>;
  }

  return (
    <div className="w-full max-h-96 p-4 flex justify-center gap-1 overflow-auto">
      {users.map((user, index) => (
        <Card user={user} key={user.id || index} removeUser={removeUser} />
      ))}
    </div>
  );
}

export default Cards;
