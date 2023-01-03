import * as yup from "yup";


const schema = yup.object().shape({
    name: yup.string().required("field cannot be empy"),
    email_address: yup.string().email("email must be a valid email").required("field cannot be empy"),
    phone_number: yup.string().required( "field cannot be empty"),
  });
export default schema  