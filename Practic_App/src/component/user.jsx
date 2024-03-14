import React, { useReducer, useState } from 'react';

const initialState = {
  name: '',
  gender: 'Male',
  role: 'FrontEnd Developer',
  status: 'Unmarried',
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const UserForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    dispatch({ type: 'UPDATE_FIELD', field: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, state]);
    dispatch({ type: 'RESET' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={state.name} onChange={handleChange} placeholder="Name" />
        <select name="gender" value={state.gender} onChange={handleChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Prefer Not to Say">Prefer Not to Say</option>
        </select>
        <select name="role" value={state.role} onChange={handleChange}>
          <option value="FrontEnd Developer">FrontEnd Developer</option>
          <option value="BackEnd Developer">BackEnd Developer</option>
          <option value="FullStack Developer">FullStack Developer</option>
        </select>
        <select name="status" value={state.status} onChange={handleChange}>
          <option value="Married">Married</option>
          <option value="Unmarried">Unmarried</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {submittedData.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.gender}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserForm;
