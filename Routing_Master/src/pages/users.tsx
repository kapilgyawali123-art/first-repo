import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  id: number;
  Name: {
    FirstName: string;
    SecondName: string;
  };
  ContactNo: {
    MobileNo: string;
    TelNo: string;
    Email: string;
  };
  Address: {
    Country: string;
    State: string;
    Municipality: {
      Type: string;
    };
    Street: string;
    Tole: string;
    HouseNo: string;
  };
  Age: number;
  Role: string;
  Profession: string;
}



function Users() {
  const [users, setUser] = useState<User[]>([]);

  useEffect(() => {
    fetch("/userDetail.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, []); // empty array runs effect only once

  const navigate = useNavigate();
  const handleRedirect = (id: number) => {
    navigate(`/user/${id}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Details</h2>
      <table
        border={1}
        cellPadding={10}
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Mobile No.</th>
            <th>Email</th>
            <th>State</th>
            <th>Municipality</th>
            <th>Street</th>
            <th>Tole</th>
            <th>Age</th>
            <th>Role</th>
            <th>Profession</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td
                onClick={() => handleRedirect(user.id)}
                style={{
                  cursor: "pointer",
                  color: "blue",
                }}
                title={`View ${user.Name.FirstName} ${user.Name.SecondName}'s profile`}
              >
                {user.id}
              </td>
              <td>
                {user.Name.FirstName} {user.Name.SecondName}{" "}
              </td>
              <td>{user.ContactNo.MobileNo}</td>
              <td>{user.ContactNo.Email}</td>
              <td>{user.Address.State}</td>
              <td>{user.Address.Municipality.Type}</td>
              <td>{user.Address.Street}</td>
              <td>{user.Address.Tole}</td>
              <td>{user.Age}</td>
              <td>{user.Role}</td>
              <td>{user.Profession}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
