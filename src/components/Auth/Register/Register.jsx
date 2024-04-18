// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../../../store/slices/userSlice'; // Подставьте правильный путь к вашему slice

// import styles from './register.module.scss';
// import { Personal } from '../../Global/Images';
// import { Button, ButtonGroup } from 'react-bootstrap';
// import Navigation from '../../Navigation/Navigation';

// const Register = () => {
//   const dispatch = useDispatch();
//   const [userType, setUserType] = useState('right_owner');
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     name: '',
//     name_object: '',
//     iin: '',
//     bin: '',
//     iban: '',
//   });
//   const [agreed, setAgreed] = useState(false);

//   const handleUserTypeChange = (type) => {
//     setUserType(type);
//     // Reset form data when user type changes
//     setFormData({
//       username: '',
//       email: '',
//       password: '',
//       name: '',
//       name_object: '',
//       iin: '',
//       bin: '',
//       iban: '',
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleAgreementChange = () => {
//     setAgreed(!agreed);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const apiEndpoint = 'http://127.0.0.1:8000/api/authorization/signup/';
//     const requestData = {
//       username: formData.username,
//       password: formData.password,
//       email: formData.email,
//       user_type: userType === 'right_owner' ? 'Owner' : 'Customer',
//     };
  
//     if (userType === 'right_owner') {
//       requestData.name = formData.name;
//       requestData.iin = formData.iin;
//     } else {
//       requestData.name_object = formData.name_object;
//       requestData.bin = formData.bin;
//     }
  
//     try {
//       const response = await fetch(apiEndpoint, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'X-CSRFToken': 'your-csrf-token',
//         },
//         body: JSON.stringify(requestData),
//       });
  
//       if (response.ok) {
//         const responseData = await response.json();
//         dispatch(setUser({ email: formData.email, token: responseData.token, id: responseData.id }));
//         console.log('Registration successful!');
//       } else {
//         const errorData = await response.json();
//         console.error('Registration failed:', errorData);
//       }
//     } catch (error) {
//       console.error('Error during registration:', error);
//     }
//   };
  
  

//   return (
//     <div className={styles.register}>
//       <Navigation title={"Регистрация"}/>
//       <div className={styles.register__inner}>
//         <div className={styles.register__header}>
//           <img className={styles.register__img} src={Personal.profile} alt="Registration" />
//           <ButtonGroup className={styles.usertype}>
//             <Button onClick={() => handleUserTypeChange('right_owner')} className={`${styles.userButton} ${userType === 'right_owner' ? styles.active : ''}`}>Правообладатель</Button>
//             <Button onClick={() => handleUserTypeChange('user')} className={`${styles.userButton} ${userType === 'user' ? styles.active : ''}`}>Пользователь</Button>
//           </ButtonGroup>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="  ">
//             <div className={styles.input__form}>
//               <div className={styles.input__items}>
//                 <input
//                   type="text"
//                   name="username"
//                   className={styles.register__username}
//                   placeholder={userType === 'right_owner' ? 'Логин' : 'Название пользователя'}
//                   value={formData.username}
//                   required
//                   onChange={handleInputChange}
//                 />
//                 <input
//                   type="text"
//                   name={userType === 'right_owner' ? 'name' : 'name_object'}
//                   className={styles.register__fullname}
//                   placeholder={userType === 'right_owner' ? 'ФИО' : 'Название ИП/TOO'}
//                   value={userType === 'right_owner' ? formData.name : formData.name_object}
//                   required
//                   onChange={handleInputChange}
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={formData.email}
//                   required
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className={styles.input__items}>
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   value={formData.password}
//                   required
//                   onChange={handleInputChange}
//                 />
//                 {userType === 'right_owner' && (
//                   <input
//                     type="text"
//                     name="iin"
//                     className={styles.register__fullname}
//                     placeholder="ИИН"
//                     value={formData.iin}
//                     required
//                     onChange={handleInputChange}
//                   />
//                 )}
//                 {userType === 'user' && (
//                   <input
//                     type="text"
//                     name="bin"
//                     className={styles.register__fullname}
//                     placeholder="БИН"
//                     value={formData.bin}
//                     required
//                     onChange={handleInputChange}
//                   />
//                 )}
//                 <input
//                   type="text"
//                   name="iban"
//                   className={styles.register__iban}
//                   placeholder="Номер счета"
//                   value={formData.iban}
//                   required
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </div> {/* input__form */}
//           </div>
//           <div className="agreement">
//             <input
//               style={{ width: '40px', height: '40px' }}
//               type="checkbox"
//               id="agreement"
//               checked={agreed}
//               onChange={handleAgreementChange}
//             />
//             <label htmlFor="agreement">Я согласен на обработку персональных данных </label>
//           </div>
//           <button className={styles.register__agree} type="submit">Зарегистрироваться</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;
