import React, { Fragment } from 'react';

const FormMessage = (props) => {

  const { error, success } = props;

  const errorMessage = error ? <div className="form-error">{error}</div> : null;
  const successMessage = success ? <div className="form-success">{success}</div> : null;
  return (
    <Fragment>
      {errorMessage}
      {successMessage}
    </Fragment>
  )
}

export default FormMessage;