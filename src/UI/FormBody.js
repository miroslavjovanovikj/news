import Input from "./Input";
import Button from "./Button";
const FormBody = ({ data }) => {
    const formData = data.map((input) => (
        <Input
            name={input.name}
            elementType={input.elementType}
            onChange={input.onChange}
        />
    ));
    return (
        <div>
            {formData}

        </div>
    );
};
export default FormBody;
