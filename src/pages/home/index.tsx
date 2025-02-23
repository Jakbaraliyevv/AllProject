import AboutComponents from "../../components/about";
import BookCard from "../../components/bookCard";
import Programming from "../../components/programming";
import Showcase from "../../components/showcase";
function Home() {
  return (
    <div>
      <Showcase />
      <AboutComponents />
      <Programming />
      <BookCard />
    </div>
  );
}

export default Home;
