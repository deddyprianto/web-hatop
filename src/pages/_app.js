import "styles/globals.css";
import "styles/customAnimation.css";
import { StateProvider } from "StateProvide/StateProvider";
import { reducer, initialState } from "Reducer/reducer";
import Parent from "components/ParentComponent/Parent";

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider reduce={reducer} initial={initialState}>
      <Parent>
        <Component {...pageProps} />
      </Parent>
    </StateProvider>
  );
}

export default MyApp;
