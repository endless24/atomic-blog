import { Header } from "./component/Header";
import { Main } from "./component/Main";
import { Archive } from "./component/Archive";
import { Footer } from "./component/Footer";
import PostProvider from "./context/PostProvider";
import Button from "./component/Button";

function App() {
  return (
    <PostProvider>
      <Button />

      <Header />
      <Main />
      <Archive />
      <Footer />
    </PostProvider>
  );
}

export default App;
