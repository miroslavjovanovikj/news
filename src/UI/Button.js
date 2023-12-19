const Button = ({ children, type, className, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={className}
            type={type}>
            {children}
        </button>
    );
};
export default Button;
