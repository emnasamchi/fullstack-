import { testAdminRoute } from "../../services";
function Admin() {

  return (
    <div>
      <button onClick={testAdminRoute}>admin action</button>
    </div>
  );
}

export default Admin