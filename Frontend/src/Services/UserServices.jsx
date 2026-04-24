import axios from 'axios';

export const SignupUser = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/signup",
      data
    );

    return response;

  } catch (error) {
    console.log(error);
    throw error;
  }
};


export const CheckLogin = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/login",
      data
    );

    return response;

  } catch (error) {
    console.log(error);
    throw error;
  }
};