// import React from "react";

// const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
//   <div className="form-check">
//     <label>
//       <input
//         type="checkbox"
//         name={label}
//         checked={isSelected}
//         onChange={onCheckboxChange}
//         className="form-check-input"
//       />
//       {label}
//     </label>
//   </div>

// state = {
//   form: {
//     companyType: '',
//     services: [],
//     name: '',
//     surname: '',
//     email: '',
//     concepts: [],
//     technologies: [],
//   },
// };

// public handleChange = (event: any) => {
//   const { name } = event.target;
//   const checkedArr = [];
//   let value;
//   if (event.target.type !== 'checkbox') {
//     value = event.target.value;
//   } else {
//     const checkeds = document.getElementsByTagName('input');
//     for (let i = 0; i < checkeds.length; i++) {
//       if (checkeds[i].checked) {
//         checkedArr.push(checkeds[i].value);
//       }
//     }
//     value = checkedArr;
//   }

//   const { form } = this.state;
//   form[name] = value;

//   this.setState({ form });
// };

// );

// export default Checkbox;
