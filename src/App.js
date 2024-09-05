import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import { type } from "@testing-library/user-event/dist/type";

const initialState = {
  questions: [],
  //loading, error, ready, active, finished
  status: "loading",
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready"
      };
      case "dataFailed":
        return{
          ...state,
          status: "error"
        }
      default:
        throw new Error("Action unknown")
  }
}

export default function App() {
  const [state, disPatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => disPatch({ type: "dataReceived", payload: data }))
      .catch((err) => disPatch({type:"dataFailed"}));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main className="main">
        <p>1/15</p>
        <p>Questions</p>
      </Main>
    </div>
  );
}
