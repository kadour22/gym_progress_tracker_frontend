import React,{useState,useEffect} from 'react'
import { UserAPI } from '../../api/api';
const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await UserAPI.user_data();
        setUserData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Failed to fetch user data', error);
      }
    };

    fetchUserData();
  }, []);


  return (
    <div>Profile</div>
  )
}

export default Profile