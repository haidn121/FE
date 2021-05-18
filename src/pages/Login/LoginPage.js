import React from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import * as Yup from "yup";

import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { FastField, Form, Formik } from "formik";
import InputField from "../../components/InputField";

import imgBackgound from "../../assets/image/conference-room.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${imgBackgound})`,
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    maxWidth: "100%",
    height: "100vh",
    position: "relative",
  },
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "50px",
    maxWidth: "444px",
    transform:"translate(-50%, -50%)",
    backgroundColor:"rgba(0, 0, 0, 0.6)"
  },
  typography: {
    color: "#fff",
    fontWeight: "700",
    fontSize: "38px"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  forgotPassword: {
    textAlign: "end",
    paddingTop: "30px"
  }
}));

export default function SignIn() {
  const classes = useStyles();

  const initialValue = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("This mail field is required!")
      .email("This field is email"),
    password: Yup.string().required("This password field is required!"),
  });

  const responseGoogle = (response) => {
    // history.push("/");
  };

  return (
    <Container component="main" className={classes.container}>
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" classes={{root: classes.typography
        }}>
          Sign in
        </Typography>
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log("submit: ", values)}
        >
          {(formikProps) => {
            return (
              <Form className={classes.form}>
                <FastField
                  name="email"
                  component={InputField}
                  variant="outlined"
                  margin="normal"
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                />
                <FastField
                  name="password"
                  component={InputField}
                  variant="outlined"
                  margin="normal"
                  id="password"
                  label="password"
                  autoComplete="current-password"
                  type="Password"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <GoogleLogin
                  clientId="755262927113-7gj0jhann30k2uhofpm91mgqbffl8n75.apps.googleusercontent.com"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                  render={(renderProps) => (
                    <Button
                      fullWidth
                      variant="outlined"
                      color="primary"
                      className={classes.submit}
                      disabled={renderProps.disabled}
                      onClick={renderProps.onClick}
                    >
                      Sign in with google
                    </Button>
                  )}
                />
                <Grid container>
                  <Grid item xs className={classes.forgotPassword}>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Container>
  );
}
