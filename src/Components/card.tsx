function Card({ user, removeUser }) {
    return (
      <div className="w-52 bg-zinc-200 rounded-lg flex flex-col items-center p-2">
        <div className="image w-16 h-16 bg-zinc-400 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={user.image}
            alt={user.name}
          />
        </div>
        <h1 className="text-center text-xl font-semibold mt-1">{user.name}</h1>
        <h4 className="opacity-40 text-xs font-semibold">{user.email}</h4>
        <p className="text-center text-sm font-semibold leading-1 tracking-tight mt-2">
          {user.description || "No description available."}
        </p>
        <button
          className="mt-2 w-full px-3 py-1 rounded-lg bg-red-600 text-white font-semibold"
          onClick={() => removeUser(user.id)}
        >
          Remove
        </button>
      </div>
    );
  }
  
  export default Card;
  