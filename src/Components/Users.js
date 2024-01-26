import React, { useEffect, useState } from 'react'
import StickyHeadTable from './Table';
import getUser from '../Apis/api';
 function Users () {

const [users,setUsers]=useState('');
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getUser();
          setUsers(response.data);
          //console.log(response.data) // Assuming the user data is in the 'data' property of the response
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  
      fetchData();
      
    }, [users]);
   // console.log(users);
    return (
      <div>
        <StickyHeadTable data={users} />
      </div>
    )
  }

  export default Users;