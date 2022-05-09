import TestRenderer from "react-test-renderer";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store/store";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should always match this snapshot", () => {
      const appComponent = TestRenderer.create(
        <Provider store={store}>
          <App />
        </Provider>
      );
      expect(appComponent).toMatchSnapshot();
    });
  });
});
