
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
     
      await axios.post('/logout', {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      
      
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
      
    } catch (error) {
      console.log("Erreur lors du logout", error);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    }
  };

  return (
    <button   className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out"
    onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;