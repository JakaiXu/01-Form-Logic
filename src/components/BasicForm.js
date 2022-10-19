import useInput from "../hooks/use-input";
import classes from "./BasicForm.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: enteredFirstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: enteredLastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: enteredAgeValue,
    isValid: ageIsValid,
    hasError: ageHasError,
    valueChangeHandler: ageChangeHandler,
    inputBlurHandler: ageBlurHandler,
    reset: resetAge,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid && ageIsValid) {
    formIsValid = true;
  }
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if(!formIsValid){
      return
    }
    resetFirstName();
    resetLastName();
    resetEmail();
    resetAge();
    console.log(
      enteredFirstNameValue,
      enteredLastNameValue,
      enteredEmailValue,
      enteredAgeValue
    );
  };
  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  const ageClasses = ageHasError ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstNameValue}
          />
        </div>
        {firstNameHasError && (
          <p className={classes.invalidp}>First Name must not be empty!</p>
        )}
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastNameValue}
          />
        </div>
        {lastNameHasError && (
          <p className={classes.invalidp}>Last Name must not be empty!</p>
        )}
      </div>
      <div className="control-group">
        <div className={emailClasses}>
          <label htmlFor="name">Email-Address</label>
          <input
            type="text"
            id="name"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmailValue}
          />
        </div>
        {emailHasError && (
          <p className={classes.invalidp}>Email must includes '@' !</p>
        )}
        <div className={ageClasses}>
          <label htmlFor="name">Age</label>
          <input
            type="number"
            id="name"
            onChange={ageChangeHandler}
            onBlur={ageBlurHandler}
            value={enteredAgeValue}
          />
        </div>
        {ageHasError && (
          <p className={classes.invalidp}>Age must be a number!</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
