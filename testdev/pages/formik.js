import { Formik } from 'formik';
function FormikTest() {
  return (
    <>
      <h1>Formik Test</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        // 폼이 submit 됐을때 실행할 함수 설정
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          // 버튼 다시 활성화 하기 ( 버튼 비활성화 기능 사용시 )
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input type='email' name='email' onChange={handleChange} onBlur={handleBlur} value={values.email} />
            {errors.email && touched.email && errors.email}
            <input
              type='password'
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  );
}

export default FormikTest;
