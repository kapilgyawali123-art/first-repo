import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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

function ProfilePage() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("No user id provided");
      setLoading(false);
      return;
    }
    setLoading(true);
    fetch("/userDetail.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch");
        return response.json();
      })
      .then((data: User[]) => {
        const foundUser = data.find((u) => u.id === Number(id));
        if (!foundUser) {
          setError("User not found");
          setUser(null);
        } else {
          setUser(foundUser);
          setError(null);
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading user data...</p>;
  if (error) return <p>{error}</p>;
  if (!user) return <p>User not found</p>;

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h2>
          {user.Name.FirstName} {user.Name.SecondName}'s Profile
        </h2>
        <ul>
          <li>Mobile: {user.ContactNo.MobileNo}</li>
          <li>Tel: {user.ContactNo.TelNo}</li>
          <li>Email: {user.ContactNo.Email}</li>
          <li>Country: {user.Address.Country}</li>
          <li>State: {user.Address.State}</li>
          <li>Municipality: {user.Address.Municipality.Type}</li>
          <li>Street: {user.Address.Street}</li>
          <li>Tole: {user.Address.Tole}</li>
          <li>House No: {user.Address.HouseNo}</li>
          <li>Age: {user.Age}</li>
          <li>Role: {user.Role}</li>
          <li>Profession: {user.Profession}</li>
        </ul>
      </div>
    </>
  );
}

export default ProfilePage;
