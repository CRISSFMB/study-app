import { firebaseConfig } from "./firebase-config";
import { initializeApp } from "firebase/app";
import swal from "sweetalert2";

import {
 
  getFirestore,
  doc,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  query,
  collection,
  Query,
  refEqual,
} from "firebase/firestore";
import {
  getAuth,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  onAuthStateChanged,
} from "firebase/auth";

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

//logearse
export const loginLocal = async (valueUser) => {
  const { email, password } = valueUser;
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (err) {
    console.log(err);
    if (err.code == "auth/wrong-password") {
      swal.fire({
        title: "La contraseña es incorrecta",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
        timer: 1500,
      });
    }
    if (err.code == "auth/user-not-found") {
      swal.fire({
        title: "El email no tiene una cuenta creada",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
        timer: 1500,
      });
    }
    if (err.code == "auth/invalid-email")
      swal.fire({
        title: "El email es invalido",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
        timer: 1500,
      });
  }
};

//cerrar sesion
export const signOutUser = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("Sesion cerrada");
    })
    .catch((error) => {
      // An error happened.
    });
};

// User Registration
export const userRegistration = async (valueUser) => {
  const { email, password, fullName, nameUser } = valueUser;
  console.log("valoresUser", valueUser);
  const res = await createUserWithEmailAndPassword(auth, email, password);

  const user = res.user;

  await sendEmailVerification(user, {
    url: "http://localhost:5173",
  });

  swal.fire({
    title: `Se envio un correo de verificacion a ${email}`,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
    icon: "success",
    timer: 2000,
  });

  // localStorage.setItem("userName", user)

  createUserProfile(user, fullName, nameUser);

  return res;
};

// Google Sign-in
const providerGoogle = new GoogleAuthProvider();

export const signInGoogle = () => {
  return signInWithPopup(auth, providerGoogle)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log("credential", credential);
      //token
      const token = credential.accessToken;

      const user = result.user;

      createUserProfile(user, user.displayName);
      // token google
      console.log("TokenGoogle", token);

      return user;
    })
    .catch((error) => {
      console.log(error);
    });
};

//reset passsword
export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email, {
      url: "http://localhost:5173/login",
    });
    alert(`Se envio un correo de recuperacion de contraseña a ${email}`);
  } catch (err) {
    if (err.code == "auth/user-not-found") {
      swal.fire({
        title: "El email no tiene una cuenta creada",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
        timer: 1500,
      });
    }
  }
};

// traer nombre user
export const dataUser = async (user) => {
  const docRef = await doc(db, `users/${auth.currentUser?.uid}`);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else return null;
};

//crear perfil user
export const createUserProfile = async (userAuthenticated, name, nameUser) => {
  const userReference = doc(db, `users/${userAuthenticated.uid}`);
  console.log("photoUser", userAuthenticated.photoURL);
  const result = await getDoc(userReference);

  if (!result.exists()) {
    const { email, photoURL } = userAuthenticated;

    try {
      await setDoc(userReference, {
        photoURL,
        name,
        nameUser: null || nameUser,
        createAt: new Date(),
        email,
      });
    } catch (error) {
      console.log({ error });
    }
  }
  const { photoURL } = userAuthenticated;
  if (result.exists() && !photoURL) {
    try {
      await setDoc(userReference, {
        ...result,
        photoURL,
      });
    } catch (error) {
      console.log({ error });
    }
  }
  // return result
  return userReference;
};

// traer Data Universidades

export const getDataUniversity = async (localidad) => {
  const q = await query(
    collection(db, `universidades/snx0JvxZPqgfLe0xYk8u/${localidad}`)
  );

  const querySnapshot = await getDocs(q);

  const dataUniversity = [];
  querySnapshot.forEach(async (doc) => {
    dataUniversity.push(await doc.data());
  });
  const dataUniversityValues = await dataUniversity;

  return dataUniversityValues[0];
};

//persister auth
// const mapUserFromFirebaseAuth = user => {

//     const { email, name, photoURL } = user;
//     return {
//         name,
//         email,
//         photoURL

//     }
// }

// export const onAuthStateChange = (onChange) => {

//     return onAuthStateChanged(auth, async _user => {
//         const user = await dataUser(_user)
//         const finalyUser = mapUserFromFirebaseAuth(user)
//         onChange(finalyUser)
//     })
// }

// id token de la app (cliente)
// getAuth()
//   .verifyIdToken(idToken)
//   .then((decodedToken) => {
//     const uid = decodedToken.uid;
//     // ...
//   })
//   .catch((error) => {
//   });

// carga de universidades
export const universidades = async (values) => {
  try {
    await addDoc(collection(db, "universidades"), {
      ...values,
      createAt: new Date(),
    });
  } catch (error) {
    console.log(error);
  }
};
//traer universidades
export const getUniversidades = async () => {
  const querySnapshot = await getDocs(collection(db, "universidades"));
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
};
// traer el Array universidad por id
export const getUniversidad = async(uid) => {
  const ids = Object.values(uid);
  // console.log("ids", ids);
 const querySnapshot = ids.map(async (id) => {
    const docRef = await  doc(db, `universidades/${id}`);
    const docSnap = await getDoc(docRef);
    const dataId = docSnap.data();
    // console.log("data.docs", dataId);
    
    return docSnap.data()
  });
  
  const data = await Promise.all(querySnapshot)
  return data
  
};


//carga de carreras en universidades
export const addCarreras = async (values) => {
  const { uid } = values;
  try {
    await addDoc(collection(db, `universidades/${uid}/carreras`), {
      ...values,
      createAt: new Date(),
    });
    console.log("carrera agregada");
  } catch (error) {
    console.log(error);
  }
};

//traer las Carrera
export const getCarreras = async (uid) => {
  const querySnapshot = await getDocs(
    collection(db, `universidades/${uid}/carreras`)
  );
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
};


// //insertar universidades
// export const universidades = async (value) => {
//     const { nombre, ciudad, tipo, descripcion } = value
//     const docRef = doc(db, "universidades", nombre);
//     await setDoc(docRef, {
//         nombre,
//         ciudad,
//         tipo,
//         descripcion
//     });
//     swal.fire({
//         title: "Universidad agregada",
//         showClass: {
//             popup: 'animate__animated animate__fadeInDown'
//         },
//         hideClass: {
//             popup: 'animate__animated animate__fadeOutUp'
//         },
//         icon: 'success',
//         timer: 2000
//     })
// }
