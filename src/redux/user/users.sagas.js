import { takeLatest, put, call, all } from "redux-saga/effects";
import {
  signInWithGoogleProvider,
  createUserDocument,
  isUserLoggedIn,
  auth,
} from "../../firebase/";
import UserActionTypes from "./user.types.js";
import {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
} from "./user.actions.js";

const signInUser = function* (user) {
  const userRef = yield call(createUserDocument, { user });
  const userSnapshot = yield userRef.get();
  yield put(
    signInSuccess({
      id: userSnapshot.id,
      displayName: userSnapshot.data().displayName,
    })
  );
};

// SAGA WORKERS
const signInWithGoogle = function* () {
  try {
    const { user } = yield call(signInWithGoogleProvider);
    yield signInUser(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
};

const signInWithEmail = function* ({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield signInUser(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
};

const signUpStart = function* ({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield call(createUserDocument, { user, displayName });
    yield put(signUpSuccess(user));
  } catch (error) {
    yield put(signUpFailure(error));
  }
};

const signInAfterSignUpSuccess = function* ({ payload }) {
  // Payload is user object.
  yield signInUser(payload);
};

const checkIsUserLoggedIn = function* () {
  try {
    const user = yield call(isUserLoggedIn);
    yield signInUser(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
};

// SAGA INTERCEPTOR
const onSignInWithGoogle = function* () {
  yield takeLatest(UserActionTypes.SIGN_IN_WITH_GOOGLE, signInWithGoogle);
};

const onSignInWithEmail = function* () {
  yield takeLatest(UserActionTypes.SIGN_IN_WITH_EMAIL, signInWithEmail);
};

const onSignUpStart = function* () {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUpStart);
};

const onSignUpSuccess = function* () {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUpSuccess);
};

const onIsUserLoggedIn = function* () {
  yield takeLatest(UserActionTypes.IS_USER_LOGGED_IN, checkIsUserLoggedIn);
};

// USERS SAGAS ROOT
export const userSagas = function* () {
  yield all([
    call(onSignInWithGoogle),
    call(onSignInWithEmail),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onIsUserLoggedIn),
  ]);
};
