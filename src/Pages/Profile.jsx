import React from 'react'
import { server } from '../constants/config'
import JoinGroupNotification from '../components/Dialogs/Notification';

const requests = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    name: "John Doe",
    username: "johndoe",
    onAccept: (id) => console.log(`Accepted request from user ID: ${id}`),
    onReject: (id) => console.log(`Rejected request from user ID: ${id}`),
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    name: "Jane Smith",
    username: "janesmith",
    onAccept: (id) => console.log(`Accepted request from user ID: ${id}`),
    onReject: (id) => console.log(`Rejected request from user ID: ${id}`),
  },
];
const Profile = () => {

  return (
    <div >
      {server }
      <JoinGroupNotification requests={requests} />

    </div>
  )
}

export default Profile
