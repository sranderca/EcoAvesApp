import { View, Text, Image } from 'react-native'
import React from 'react'
import { FIREBASE_STORE } from '../../firebaseConfig'
import { FIREBASE_APP } from '../../firebaseConfig';
import { getDoc, doc, collection, getDocs } from "firebase/firestore";

const Aves = () => {
  // const fetchData = async () => {
  //   const docRef = doc(FIREBASE_STORE, 'Aves', 'ALC42');
  //   const docSnap = await getDoc(docRef);
  // }
  
  // Interface for user data (replace with your actual structure)
interface User {
  name: string;
  familia: string;
  // Add other fields as needed
}

async function getAllUsers(): Promise<User[]> {
  try {
    const usersCollection = collection(FIREBASE_STORE, "Aves"); // Replace `db` with your instance
    const querySnapshot = await getDocs(usersCollection);

    // Extract user data using type assertion (if the data structure matches the interface)
    const users: User[] = querySnapshot.docs.map((doc) => doc.data().nombre as User);

    // Alternatively, handle potential type mismatches using conditional casting:
    // const users: User[] = querySnapshot.docs.map((doc) => {
    //   const data = doc.data() as unknown;
    //   if (data) {
    //     return {
    //       name: data.nombre as string, // Cast individual fields if necessary
    //       familia: data.familia as string,
    //       // Add more field castings as needed
    //     };
    //   } else {
    //     // Handle missing data scenario (e.g., log warning or return an empty object)
    //     console.warn("Missing user data for document:", doc.id);
    //     return {} as User;
    //   }
    // });

    return users; // Return the array of users
  } catch (error) {
    console.error("Error fetching users:", error);
    return []; // Return an empty array in case of error
  }
}

// Call the function and handle the result appropriately
getAllUsers().then((users) => {
  console.log(users); // Array of User objects with specific fields
});
  
  // Call the function
  getAllUsers();
  const docRef = doc(FIREBASE_STORE, 'Aves', 'ALC42');
  const docSnap = getDoc(docRef);
  //console.log(holita);
  return (
    <View>
      <Text>hola</Text>
    </View>
  )
}

export default Aves