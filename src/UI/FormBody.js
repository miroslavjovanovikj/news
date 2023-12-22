import Input from "./Input";
const FormBody = ({ data }) => {
    const formData = data.map((input) => (
       <div >
             <Input
            {...input}
            inputMargin='m-5'
        />
       </div>
    ));
    return  formData
   
   
};
export default FormBody;
