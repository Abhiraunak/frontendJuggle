import { useState } from "react";
import Cards from "../Components/Cards";
import Forms from "../Components/Forms";

function FormHandling() {
  const [users, setUsers] = useState([]);

  const handleFormSubmitData = (data) => {
    setUsers((prevUsers) => [...prevUsers, { ...data, id: Date.now() }]);
  };

  const removeUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div className="w-full h-screen bg-zinc-300 flex items-center justify-center">
      <div className="container mx-auto">
        <Cards users={users} removeUser={removeUser} />
        <Forms handleFormSubmitData={handleFormSubmitData} />
      </div>
    </div>
  );
}

export default FormHandling;
